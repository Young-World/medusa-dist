/**
 * @oas [post] /returns
 * operationId: "PostReturns"
 * summary: "Create Return"
 * description: "Creates a Return for an Order."
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostReturnsReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.returns.create({
 *         order_id,
 *         items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then((data) => {
 *         console.log(data.return.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/returns' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "order_id": "asfasf",
 *           "items": [
 *             {
 *               "item_id": "assfasf",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * tags:
 *   - Return
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreReturnsRes"
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
declare class ReturnShipping {
    option_id: string;
}
declare class Item {
    item_id: string;
    quantity: number;
    reason_id?: string;
    note?: string;
}
/**
 * @schema StorePostReturnsReq
 * type: object
 * required:
 *   - order_id
 *   - items
 * properties:
 *   order_id:
 *     type: string
 *     description: The ID of the Order to create the Return from.
 *   items:
 *     description: "The items to include in the Return."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item from the Order.
 *           type: string
 *         quantity:
 *           description: The quantity to return.
 *           type: integer
 *         reason_id:
 *           description: The ID of the return reason.
 *           type: string
 *         note:
 *           description: A note to add to the item returned.
 *           type: string
 *   return_shipping:
 *     description: If the Return is to be handled by the store operator the Customer can choose a Return Shipping Method. Alternatvely the Customer can handle the Return themselves.
 *     type: object
 *     required:
 *       - option_id
 *     properties:
 *       option_id:
 *         type: string
 *         description: The ID of the Shipping Option to create the Shipping Method from.
 */
export declare class StorePostReturnsReq {
    order_id: string;
    items: Item[];
    return_shipping?: ReturnShipping;
}
