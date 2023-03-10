import { Request, Response } from "express";
import { FindParams } from "../../../../types/common";
/**
 * @oas [get] /stock-locations/{id}
 * operationId: "GetStockLocationsStockLocation"
 * summary: "Get a Stock Location"
 * description: "Retrieves the Stock Location."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Stock Location.
 *   - (query) expand {string} Comma separated list of relations to include in the results.
 *   - (query) fields {string} Comma separated list of fields to include in the results.
 * x-codegen:
 *   method: retrieve
 *   queryParams: AdminGetStockLocationsLocationParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.stockLocations.retrieve(stock_location_id)
 *       .then(({ stock_location }) => {
 *         console.log(stock_location.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/stock-locations/{id}' \
 *       --header 'Authorization: Bearer {api_token}' \
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Stock Location
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminStockLocationsRes"
 */
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class AdminGetStockLocationsLocationParams extends FindParams {
}
