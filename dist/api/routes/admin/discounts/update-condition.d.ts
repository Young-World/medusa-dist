import { Request, Response } from "express";
import { AdminUpsertConditionsReq } from "../../../../types/discount";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /discounts/{discount_id}/conditions/{condition_id}
 * operationId: "PostDiscountsDiscountConditionsCondition"
 * summary: "Update a Condition"
 * description: "Updates a DiscountCondition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the Product.
 *   - (path) condition_id=* {string} The ID of the DiscountCondition.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in each item of the result.
 *   - (query) fields {string} (Comma separated) Which fields should be included in each item of the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDiscountsDiscountConditionsCondition"
 * x-codegen:
 *   method: updateCondition
 *   queryParams: AdminPostDiscountsDiscountConditionsConditionParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.updateCondition(discount_id, condition_id, {
 *         products: [
 *           product_id
 *         ]
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/discounts/{id}/conditions/{condition}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "products": [
 *              "prod_01G1G5V2MBA328390B5AXJ610F"
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Discount
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
/**
 * @schema AdminPostDiscountsDiscountConditionsCondition
 * type: object
 * properties:
 *   products:
 *      type: array
 *      description: list of product IDs if the condition is applied on products.
 *      items:
 *        type: string
 *   product_types:
 *      type: array
 *      description: list of product type IDs if the condition is applied on product types.
 *      items:
 *        type: string
 *   product_collections:
 *      type: array
 *      description: list of product collection IDs if the condition is applied on product collections.
 *      items:
 *        type: string
 *   product_tags:
 *      type: array
 *      description: list of product tag IDs if the condition is applied on product tags.
 *      items:
 *        type: string
 *   customer_groups:
 *      type: array
 *      description: list of customer group IDs if the condition is applied on customer groups.
 *      items:
 *        type: string
 */
export declare class AdminPostDiscountsDiscountConditionsCondition extends AdminUpsertConditionsReq {
}
export declare class AdminPostDiscountsDiscountConditionsConditionParams extends FindParams {
}
