/**
 * @oas [post] /return-reasons/{id}
 * operationId: "PostReturnReasonsReason"
 * summary: "Update a Return Reason"
 * description: "Updates a Return Reason"
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Return Reason.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         properties:
 *           label:
 *             description: "The label to display to the Customer."
 *             type: string
 *           value:
 *             description: "The value that the Return Reason will be identified by. Must be unique."
 *             type: string
 *           description:
 *             description: "An optional description to for the Reason."
 *             type: string
 *           metadata:
 *             description: An optional set of key-value pairs with additional information.
 *             type: object
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.returnReasons.update(return_reason_id, {
 *         label: 'Damaged'
 *       })
 *       .then(({ return_reason }) => {
 *         console.log(return_reason.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/return-reasons/{id}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "label": "Damaged"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Return Reason
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             return_reason:
 *               $ref: "#/components/schemas/return_reason"
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
export declare class AdminPostReturnReasonsReasonReq {
    label?: string;
    value?: string;
    description?: string;
    metadata?: Record<string, unknown>;
}