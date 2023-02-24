/**
 * @oas [post] /notes
 * operationId: "PostNotes"
 * summary: "Creates a Note"
 * description: "Creates a Note which can be associated with any resource as required."
 * x-authenticated: true
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        required:
 *          - resource_id
 *          - resource_type
 *          - value
 *        properties:
 *          resource_id:
 *            type: string
 *            description: The ID of the resource which the Note relates to.
 *          resource_type:
 *            type: string
 *            description: The type of resource which the Note relates to.
 *          value:
 *            type: string
 *            description: The content of the Note to create.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.notes.create({
 *         resource_id,
 *         resource_type: 'order',
 *         value: 'We delivered this order'
 *       })
 *       .then(({ note }) => {
 *         console.log(note.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/notes' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "resource_id": "{resource_id}",
 *           "resource_type": "order",
 *           "value": "We delivered this order"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Note
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             note:
 *               $ref: "#/components/schemas/note"
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
 *
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
export declare class AdminPostNotesReq {
    resource_id: string;
    resource_type: string;
    value: string;
}
