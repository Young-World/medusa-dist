import { NumericalComparisonOperator } from "../../../../types/common";
import { AdminPriceSelectionParams } from "../../../../types/price-selection";
/**
 * @oas [get] /variants
 * operationId: "GetVariants"
 * summary: "List Product Variants"
 * description: "Retrieves a list of Product Variants"
 * x-authenticated: true
 * parameters:
 *   - (query) id {string} A Product Variant id to filter by.
 *   - (query) ids {string} A comma separated list of Product Variant ids to filter by.
 *   - (query) expand {string} A comma separated list of Product Variant relations to load.
 *   - (query) fields {string} A comma separated list of Product Variant fields to include.
 *   - (query) offset=0 {number} How many product variants to skip in the result.
 *   - (query) limit=100 {number} Maximum number of Product Variants to return.
 *   - (query) cart_id {string} The id of the cart to use for price selection.
 *   - (query) region_id {string} The id of the region to use for price selection.
 *   - (query) currency_code {string} The currency code to use for price selection.
 *   - (query) customer_id {string} The id of the customer to use for price selection.
 *   - in: query
 *     name: title
 *     style: form
 *     explode: false
 *     description: product variant title to search for.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: a single title to search by
 *         - type: array
 *           description: multiple titles to search by
 *           items:
 *             type: string
 *   - in: query
 *     name: inventory_quantity
 *     description: Filter by available inventory quantity
 *     schema:
 *       oneOf:
 *         - type: number
 *           description: a specific number to search by.
 *         - type: object
 *           description: search using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: filter by inventory quantity greater than or equal to this number
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetVariantsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.variants.list()
 *       .then(({ variants, limit, offset, count }) => {
 *         console.log(variants.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/variants' \
 *       --header 'Authorization: Bearer {api_token}'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product Variant
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminVariantsListRes"
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
export declare class AdminGetVariantsParams extends AdminPriceSelectionParams {
    q?: string;
    limit?: number;
    offset?: number;
    expand?: string;
    fields?: string;
    id?: string | string[];
    title?: string | string[];
    inventory_quantity?: number | NumericalComparisonOperator;
}
