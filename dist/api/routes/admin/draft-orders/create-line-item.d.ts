/**
 * @oas [post] /draft-orders/{id}/line-items
 * operationId: "PostDraftOrdersDraftOrderLineItems"
 * summary: "Create a Line Item"
 * description: "Creates a Line Item for the Draft Order"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Draft Order.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersDraftOrderLineItemsReq"
 * x-codegen:
 *   method: addLineItem
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.addLineItem(draft_order_id, {
 *         quantity: 1
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/draft-orders/{id}/line-items' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "quantity": 1
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Draft Order
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
 * @schema AdminPostDraftOrdersDraftOrderLineItemsReq
 * type: object
 * required:
 *   - quantity
 * properties:
 *   variant_id:
 *     description: The ID of the Product Variant to generate the Line Item from.
 *     type: string
 *   unit_price:
 *     description: The potential custom price of the item.
 *     type: integer
 *   title:
 *     description: The potential custom title of the item.
 *     type: string
 *     default: "Custom item"
 *   quantity:
 *     description: The quantity of the Line Item.
 *     type: integer
 *   metadata:
 *     description: The optional key-value map with additional details about the Line Item.
 *     type: object
 */
export declare class AdminPostDraftOrdersDraftOrderLineItemsReq {
    title?: string;
    unit_price?: number;
    variant_id?: string;
    quantity: number;
    metadata?: Record<string, unknown>;
}
