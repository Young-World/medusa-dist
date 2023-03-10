import { AddressPayload } from "../../../../types/common";
/**
 * @oas [post] /draft-orders
 * operationId: "PostDraftOrders"
 * summary: "Create a Draft Order"
 * description: "Creates a Draft Order"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.create({
 *         email: 'user@example.com',
 *         region_id,
 *         items: [
 *           {
 *             quantity: 1
 *           }
 *         ],
 *         shipping_methods: [
 *           {
 *             option_id
 *           }
 *         ],
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/draft-orders' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "region_id": "{region_id}"
 *           "items": [
 *              {
 *                "quantity": 1
 *              }
 *           ],
 *           "shipping_methods": [
 *              {
 *                "option_id": "{option_id}"
 *              }
 *           ]
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
 * @schema AdminPostDraftOrdersReq
 * type: object
 * required:
 *   - email
 *   - region_id
 *   - shipping_methods
 * properties:
 *   status:
 *     description: "The status of the draft order"
 *     type: string
 *     enum: [open, completed]
 *   email:
 *     description: "The email of the customer of the draft order"
 *     type: string
 *     format: email
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *       - type: string
 *   shipping_address:
 *     description: "The Address to be used for shipping."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *       - type: string
 *   items:
 *     description: The Line Items that have been received.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - quantity
 *       properties:
 *         variant_id:
 *           description: The ID of the Product Variant to generate the Line Item from.
 *           type: string
 *         unit_price:
 *           description: The potential custom price of the item.
 *           type: integer
 *         title:
 *           description: The potential custom title of the item.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item.
 *           type: integer
 *         metadata:
 *           description: The optional key-value map with additional details about the Line Item.
 *           type: object
 *   region_id:
 *     description: The ID of the region for the draft order
 *     type: string
 *   discounts:
 *     description: The discounts to add on the draft order
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: The code of the discount to apply
 *           type: string
 *   customer_id:
 *     description: The ID of the customer to add on the draft order
 *     type: string
 *   no_notification_order:
 *     description: An optional flag passed to the resulting order to determine use of notifications.
 *     type: boolean
 *   shipping_methods:
 *     description: The shipping methods for the draft order
 *     type: array
 *     items:
 *       type: object
 *       required:
 *          - option_id
 *       properties:
 *         option_id:
 *           description: The ID of the shipping option in use
 *           type: string
 *         data:
 *           description: The optional additional data needed for the shipping method
 *           type: object
 *         price:
 *           description: The potential custom price of the shipping
 *           type: integer
 *   metadata:
 *     description: The optional key-value map with additional details about the Draft Order.
 *     type: object
 */
export declare class AdminPostDraftOrdersReq {
    status?: string;
    email: string;
    billing_address?: AddressPayload | string;
    shipping_address?: AddressPayload | string;
    items?: Item[];
    region_id: string;
    discounts?: Discount[];
    customer_id?: string;
    no_notification_order?: boolean;
    shipping_methods: ShippingMethod[];
    metadata?: Record<string, unknown>;
}
declare class ShippingMethod {
    option_id: string;
    data?: Record<string, unknown>;
    price?: number;
}
declare class Discount {
    code: string;
}
declare class Item {
    title?: string;
    unit_price?: number;
    variant_id?: string;
    quantity: number;
    metadata?: Record<string, unknown>;
}
