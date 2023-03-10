/**
 * @oas [post] /orders/batch/customer/token
 * operationId: "PostOrdersCustomerOrderClaim"
 * summary: "Claim an Order"
 * description: "Sends an email to emails registered to orders provided with link to transfer order ownership"
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerOrderClaimReq"
 * x-codegen:
 *   method: requestCustomerOrders
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.orders.claimOrders({
 *         display_ids,
 *       })
 *       .then(() => {
 *         // successful
 *       })
 *       .catch(() => {
 *         // an error occurred
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/batch/customer/token' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "display_ids": ["id"],
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Invite
 * responses:
 *   200:
 *     description: OK
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
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
/**
 * @schema StorePostCustomersCustomerOrderClaimReq
 * type: object
 * required:
 *   - order_ids
 * properties:
 *   order_ids:
 *     description: "The ids of the orders to claim"
 *     type: array
 *     items:
 *      type: string
 */
export declare class StorePostCustomersCustomerOrderClaimReq {
    order_ids: string[];
}
