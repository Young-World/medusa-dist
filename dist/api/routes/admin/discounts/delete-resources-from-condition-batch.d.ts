import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [delete] /discounts/{discount_id}/conditions/{condition_id}/batch
 * operationId: "DeleteDiscountsDiscountConditionsConditionBatch"
 * summary: "Delete Batch Resources"
 * description: "Delete a batch of resources from a discount condition."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the Product.
 *   - (path) condition_id=* {string} The ID of the condition on which to add the item.
 *   - (query) expand {string} (Comma separated) Which relations should be expanded in each discount of the result.
 *   - (query) fields {string} (Comma separated) Which fields should be included in each discount of the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminDeleteDiscountsDiscountConditionsConditionBatchReq"
 * x-codegen:
 *   method: deleteConditionResourceBatch
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.deleteConditionResourceBatch(discount_id, condition_id, {
 *         resources: [{ id: item_id }]
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request DELETE 'https://medusa-url.com/admin/discounts/{id}/conditions/{condition_id}/batch' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "resources": [{ "id": "item_id" }]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Discount Condition
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDiscountsRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminDeleteDiscountsDiscountConditionsConditionBatchParams extends FindParams {
}
/**
 * @schema AdminDeleteDiscountsDiscountConditionsConditionBatchReq
 * type: object
 * required:
 *   - resources
 * properties:
 *   resources:
 *     description: The resources to be deleted from the discount condition
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - id
 *       properties:
 *         id:
 *           description: The id of the item
 *           type: string
 */
export declare class AdminDeleteDiscountsDiscountConditionsConditionBatchReq {
    resources: {
        id: string;
    }[];
}
