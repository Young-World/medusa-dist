import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /orders/{id}/claims/{claim_id}/fulfillments
 * operationId: "PostOrdersOrderClaimsClaimFulfillments"
 * summary: "Create Claim Fulfillment"
 * description: "Creates a Fulfillment for a Claim."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Order.
 *   - (path) claim_id=* {string} The ID of the Claim.
 *   - (query) expand {string} Comma separated list of relations to include in the result.
 *   - (query) fields {string} Comma separated list of fields to include in the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostOrdersOrderClaimsClaimFulfillmentsReq"
 * x-codegen:
 *   method: fulfillClaim
 *   params: AdminPostOrdersOrderClaimsClaimFulfillmentsReq
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.orders.fulfillClaim(order_id, claim_id)
 *       .then(({ order }) => {
 *         console.log(order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/orders/{id}/claims/{claim_id}/fulfillments' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Fulfillment
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
 * @schema AdminPostOrdersOrderClaimsClaimFulfillmentsReq
 * type: object
 * properties:
 *   metadata:
 *     description: An optional set of key-value pairs to hold additional information.
 *     type: object
 *   no_notification:
 *     description: If set to true no notification will be send related to this Claim.
 *     type: boolean
 */
export declare class AdminPostOrdersOrderClaimsClaimFulfillmentsReq {
    metadata?: Record<string, unknown>;
    no_notification?: boolean;
}
export declare class AdminPostOrdersOrderClaimsClaimFulfillmentsParams extends FindParams {
}
