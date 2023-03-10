import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /product-categories/{id}
 * operationId: "GetProductCategoriesCategory"
 * summary: "Get a Product Category"
 * description: "Retrieves a Product Category."
 * x-authenticated: false
 * parameters:
 *   - (path) id=* {string} The ID of the Product Category
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in each product category.
 *   - (query) fields {string} (Comma separated) Which fields should be retrieved in each product category.
 * x-codegen:
 *   method: retrieve
 *   queryParams: StoreGetProductCategoryParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.productCategories.retrieve(product_category_id)
 *         .then(({ product_category }) => {
 *           console.log(product_category.id);
 *         });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/product-categories/{id}' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product Category
 * responses:
 *  "200":
 *    description: OK
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreGetProductCategoriesCategoryRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class StoreGetProductCategoryParams extends FindParams {
}
