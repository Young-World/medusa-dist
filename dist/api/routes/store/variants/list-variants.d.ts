import { NumericalComparisonOperator } from "../../../../types/common";
import { PriceSelectionParams } from "../../../../types/price-selection";
/**
 * @oas [get] /variants
 * operationId: GetVariants
 * summary: Get Product Variants
 * description: "Retrieves a list of Product Variants"
 * parameters:
 *   - (query) ids {string} A comma separated list of Product Variant ids to filter by.
 *   - (query) sales_channel_id {string} A sales channel id for result configuration.
 *   - (query) expand {string} A comma separated list of Product Variant relations to load.
 *   - (query) offset=0 {number} How many product variants to skip in the result.
 *   - (query) limit=100 {number} Maximum number of Product Variants to return.
 *   - (query) cart_id {string} The id of the Cart to set prices based on.
 *   - (query) region_id {string} The id of the Region to set prices based on.
 *   - (query) currency_code {string} The currency code to use for price selection.
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
 *   queryParams: StoreGetVariantsParams
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/variants'
 * tags:
 *   - Product Variant
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreVariantsListRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
export declare class StoreGetVariantsParams extends PriceSelectionParams {
    limit?: number;
    offset?: number;
    expand?: string;
    ids?: string;
    sales_channel_id?: string;
    id?: string | string[];
    title?: string | string[];
    inventory_quantity?: number | NumericalComparisonOperator;
}
