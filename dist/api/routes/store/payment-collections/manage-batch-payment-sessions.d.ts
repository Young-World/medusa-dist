/**
 * @oas [post] /payment-collections/{id}/sessions/batch
 * operationId: "PostPaymentCollectionsPaymentCollectionSessionsBatch"
 * summary: "Manage Payment Sessions"
 * description: "Manages Multiple Payment Sessions from Payment Collections."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the Payment Collections.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostPaymentCollectionsBatchSessionsReq"
 * x-codegen:
 *   method: managePaymentSessionsBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *
 *       // Total amount = 10000
 *
 *       // Adding two new sessions
 *       medusa.paymentCollections.managePaymentSessionsBatch(payment_id, [
 *         {
 *           provider_id: "stripe",
 *           amount: 5000,
 *         },
 *         {
 *           provider_id: "manual",
 *           amount: 5000,
 *         },
 *       ])
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       });
 *
 *       // Updating one session and removing the other
 *       medusa.paymentCollections.managePaymentSessionsBatch(payment_id, [
 *         {
 *           provider_id: "stripe",
 *           amount: 10000,
 *           session_id: "ps_123456"
 *         },
 *       ])
 *       .then(({ payment_collection }) => {
 *         console.log(payment_collection.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/payment-collections/{id}/sessions/batch'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - PaymentCollection
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StorePaymentCollectionsRes"
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
export declare class StorePostPaymentCollectionsSessionsReq {
    provider_id: string;
    amount: number;
    session_id?: string;
}
/**
 * @schema StorePostPaymentCollectionsBatchSessionsReq
 * type: object
 * required:
 *   - sessions
 * properties:
 *   sessions:
 *     description: "An array of payment sessions related to the Payment Collection. If the session_id is not provided, existing sessions not present will be deleted and the provided ones will be created."
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - provider_id
 *         - amount
 *       properties:
 *         provider_id:
 *           type: string
 *           description: The ID of the Payment Provider.
 *         amount:
 *           type: integer
 *           description: "The amount ."
 *         session_id:
 *           type: string
 *           description: "The ID of the Payment Session to be updated."
 */
export declare class StorePostPaymentCollectionsBatchSessionsReq {
    sessions: StorePostPaymentCollectionsSessionsReq[];
}
