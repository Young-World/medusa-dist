import { ClaimReason } from "../../../../models";
import { ClaimTypeValue } from "../../../../types/claim";
import { AddressPayload, FindParams } from "../../../../types/common";
/**
 * @oas [post] /order/{id}/claims
 * operationId: "PostOrdersOrderClaims"
 * summary: "Create a Claim"
 * description: "Creates a Claim."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma separated list of relations to include in the result.
 *   - (query) fields {string} Comma separated list of fields to include in the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderClaimsReq"
 * x-codegen:
 *   method: createClaim
 *   params: AdminPostOrdersOrderClaimsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createClaim(order_id, {
 *         type: 'refund',
 *         claim_items: [
 *           {
 *             item_id,
 *             quantity: 1
 *           }
 *         ]
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/orders/{id}/claims' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "type": "refund",
 *           "claim_items": [
 *             {
 *               "item_id": "asdsd",
 *               "quantity": 1
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Claim
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminOrdersRes"
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
 * @schema AdminPostOrdersOrderClaimsReq
 * type: object
 * required:
 *   - type
 *   - claim_items
 * properties:
 *   type:
 *     description: "The type of the Claim. This will determine how the Claim is treated: `replace` Claims will result in a Fulfillment with new items being created, while a `refund` Claim will refund the amount paid for the claimed items."
 *     type: string
 *     enum:
 *       - replace
 *       - refund
 *   claim_items:
 *     description: The Claim Items that the Claim will consist of.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - item_id
 *         - quantity
 *       properties:
 *         item_id:
 *           description: The ID of the Line Item that will be claimed.
 *           type: string
 *         quantity:
 *           description: The number of items that will be returned
 *           type: integer
 *         note:
 *           description: Short text describing the Claim Item in further detail.
 *           type: string
 *         reason:
 *           description: The reason for the Claim
 *           type: string
 *           enum:
 *             - missing_item
 *             - wrong_item
 *             - production_failure
 *             - other
 *         tags:
 *           description: A list o tags to add to the Claim Item
 *           type: array
 *           items:
 *             type: string
 *         images:
 *           description: A list of image URL's that will be associated with the Claim
 *           items:
 *             type: string
 *   return_shipping:
 *      description: Optional details for the Return Shipping Method, if the items are to be sent back.
 *      type: object
 *      properties:
 *        option_id:
 *          type: string
 *          description: The ID of the Shipping Option to create the Shipping Method from.
 *        price:
 *          type: integer
 *          description: The price to charge for the Shipping Method.
 *   additional_items:
 *      description: The new items to send to the Customer when the Claim type is Replace.
 *      type: array
 *      items:
 *        type: object
 *        required:
 *          - variant_id
 *          - quantity
 *        properties:
 *          variant_id:
 *            description: The ID of the Product Variant to ship.
 *            type: string
 *          quantity:
 *            description: The quantity of the Product Variant to ship.
 *            type: integer
 *   shipping_methods:
 *      description: The Shipping Methods to send the additional Line Items with.
 *      type: array
 *      items:
 *         type: object
 *         properties:
 *           id:
 *             description: The ID of an existing Shipping Method
 *             type: string
 *           option_id:
 *             description: The ID of the Shipping Option to create a Shipping Method from
 *             type: string
 *           price:
 *             description: The price to charge for the Shipping Method
 *             type: integer
 *           data:
 *             description: An optional set of key-value pairs to hold additional information.
 *             type: object
 *   shipping_address:
 *      type: object
 *      description: "An optional shipping address to send the claim to. Defaults to the parent order's shipping address"
 *      $ref: "#/components/schemas/Address"
 *   refund_amount:
 *      description: The amount to refund the Customer when the Claim type is `refund`.
 *      type: integer
 *   no_notification:
 *      description: If set to true no notification will be send related to this Claim.
 *      type: boolean
 *   metadata:
 *      description: An optional set of key-value pairs to hold additional information.
 *      type: object
 */
export declare class AdminPostOrdersOrderClaimsReq {
    type: ClaimTypeValue;
    claim_items: Item[];
    return_shipping?: ReturnShipping;
    additional_items?: AdditionalItem[];
    shipping_methods?: ShippingMethod[];
    refund_amount?: number;
    shipping_address?: AddressPayload;
    no_notification?: boolean;
    metadata?: Record<string, unknown>;
}
declare class ReturnShipping {
    option_id?: string;
    price?: number;
}
declare class ShippingMethod {
    id?: string;
    option_id?: string;
    price?: number;
    data?: Record<string, unknown>;
}
declare class Item {
    item_id: string;
    quantity: number;
    note?: string;
    reason?: ClaimReason;
    tags?: string[];
    images?: string[];
}
declare class AdditionalItem {
    variant_id: string;
    quantity: number;
}
export declare class AdminPostOrdersOrderClaimsParams extends FindParams {
}
