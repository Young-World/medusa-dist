import { Currency } from "../../../../models";
import { FindPaginationParams } from "../../../../types/common";
import { ExtendedRequest } from "../../../../types/global";
/**
 * @oas [get] /currencies
 * operationId: "GetCurrencies"
 * summary: "List Currency"
 * description: "Retrieves a list of Currency"
 * x-authenticated: true
 * parameters:
 *   - (query) code {string} Code of the currency to search for.
 *   - (query) includes_tax {boolean} Search for tax inclusive currencies.
 *   - (query) order {string} order to retrieve products in.
 *   - (query) offset=0 {number} How many products to skip in the result.
 *   - (query) limit=20 {number} Limit the number of products returned.
 * x-codegen:
 *   method: list
 *   queryParams: AdminGetCurrenciesParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.currencies.list()
 *       .then(({ currencies, count, offset, limit }) => {
 *         console.log(currencies.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/currencies' \
 *       --header 'Authorization: Bearer {api_token}'
 * tags:
 *   - Currency
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminCurrenciesListRes"
 */
declare const _default: (req: ExtendedRequest<Currency>, res: any) => Promise<void>;
export default _default;
export declare class AdminGetCurrenciesParams extends FindPaginationParams {
    code?: string;
    includes_tax?: boolean;
    order?: string;
}
