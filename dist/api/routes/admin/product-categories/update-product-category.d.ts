import { Request, Response } from "express";
import { AdminProductCategoriesReqBase } from "../../../../types/product-category";
import { FindParams } from "../../../../types/common";
/**
 * @oas [post] /product-categories/{id}
 * operationId: "PostProductCategoriesCategory"
 * summary: "Update a Product Category"
 * description: "Updates a Product Category."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product Category.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in each product category.
 *   - (query) fields {string} (Comma separated) Which fields should be retrieved in each product category.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductCategoriesCategoryReq"
 * x-codegen:
 *   method: update
 *   queryParams: AdminPostProductCategoriesCategoryParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.productCategories.update(product_category_id, {
 *         name: "Skinny Jeans"
 *       })
 *       .then(({ product_category }) => {
 *         console.log(product_category.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/product-categories/{id}' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "name": "Skinny Jeans"
 *       }'
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
 *          $ref: "#/components/schemas/AdminProductCategoriesCategoryRes"
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
/**
 * @schema AdminPostProductCategoriesCategoryReq
 * type: object
 * properties:
 *   name:
 *     type: string
 *     description:  The name to identify the Product Category by.
 *   handle:
 *     type: string
 *     description:  A handle to be used in slugs.
 *   is_internal:
 *     type: boolean
 *     description: A flag to make product category an internal category for admins
 *   is_active:
 *     type: boolean
 *     description: A flag to make product category visible/hidden in the store front
 *   parent_category_id:
 *     type: string
 *     description: The ID of the parent product category
 */
export declare class AdminPostProductCategoriesCategoryReq extends AdminProductCategoriesReqBase {
    name?: string;
}
export declare class AdminPostProductCategoriesCategoryParams extends FindParams {
}
