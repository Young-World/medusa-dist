import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /orders/{id}/shipment
 * operationId: "PostOrdersOrderShipment"
 * summary: "Create a Shipment"
 * description: "Registers a Fulfillment as shipped."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (query) expand {string} Comma separated list of relations to include in the result.
 *   - (query) fields {string} Comma separated list of fields to include in the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderShipmentReq"
 * x-codegen:
 *   method: createShipment
 *   params: AdminPostOrdersOrderShipmentParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.createShipment(order_id, {
 *         fulfillment_id
 *       })
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/orders/{id}/shipment' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "fulfillment_id": "{fulfillment_id}"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Order
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
 * @schema AdminPostOrdersOrderShipmentReq
 * type: object
 * required:
 *   - fulfillment_id
 * properties:
 *   fulfillment_id:
 *     description: The ID of the Fulfillment.
 *     type: string
 *   tracking_numbers:
 *     description: The tracking numbers for the shipment.
 *     type: array
 *     items:
 *       type: string
 *   no_notification:
 *     description: If set to true no notification will be send related to this Shipment.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderShipmentReq {
    fulfillment_id: string;
    tracking_numbers?: string[];
    no_notification?: boolean;
}
export declare class AdminPostOrdersOrderShipmentParams extends FindParams {
}
