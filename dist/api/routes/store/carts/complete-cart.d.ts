/**
 * @oas [post] /carts/{id}/complete
 * summary: "Complete a Cart"
 * operationId: "PostCartsCartComplete"
 * description: "Completes a cart. The following steps will be performed. Payment
 *   authorization is attempted and if more work is required, we simply return
 *   the cart for further updates. If payment is authorized and order is not yet
 *   created, we make sure to do so. The completion of a cart can be performed
 *   idempotently with a provided header `Idempotency-Key`. If not provided, we
 *   will generate one for the request."
 * parameters:
 *   - (path) id=* {String} The Cart id.
 * x-codegen:
 *   method: complete
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.complete(cart_id)
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/carts/{id}/complete'
 * tags:
 *   - Cart
 * responses:
 *   200:
 *     description: "If a cart was successfully authorized, but requires further
 *       action from the user the response body will contain the cart with an
 *       updated payment session. If the Cart was successfully completed the
 *       response body will contain the newly created Order."
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCompleteCartRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
