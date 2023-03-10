import { Request, Response } from "express";
import { StringComparisonOperator, NumericalComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /inventory-items
 * operationId: "GetInventoryItems"
 * summary: "List inventory items."
 * description: "Lists inventory items."
 * x-authenticated: true
 * parameters:
 *   - (query) offset=0 {integer} How many inventory items to skip in the result.
 *   - (query) limit=20 {integer} Limit the number of inventory items returned.
 *   - (query) expand {string} Comma separated list of relations to include in the results.
 *   - (query) fields {string} Comma separated list of fields to include in the results.
 *   - (query) q {string} Query used for searching product inventory items and their properties.
 *   - in: query
 *     name: location_id
 *     style: form
 *     explode: false
 *     description: Locations ids to search for.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) id {string} id to search for.
 *   - (query) sku {string} sku to search for.
 *   - (query) origin_country {string} origin_country to search for.
 *   - (query) mid_code {string} mid_code to search for.
 *   - (query) material {string} material to search for.
 *   - (query) hs_code {string} hs_code to search for.
 *   - (query) weight {string} weight to search for.
 *   - (query) length {string} length to search for.
 *   - (query) height {string} height to search for.
 *   - (query) width {string} width to search for.
 *   - (query) requires_shipping {string} requires_shipping to search for.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.inventoryItems.list()
 *       .then(({ inventory_items }) => {
 *         console.log(inventory_items.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/admin/inventory-items' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Inventory Items
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminInventoryItemsListWithVariantsAndLocationLevelsRes"
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
declare const AdminGetInventoryItemsParams_base: import("../../../..").ClassConstructor<import("../../../../types/common").FindParams & import("../../../../types/common").FindPaginationParams>;
export declare class AdminGetInventoryItemsParams extends AdminGetInventoryItemsParams_base {
    id?: string | string[];
    q?: string;
    location_id?: string | string[];
    sku?: string | string[];
    origin_country?: string | string[];
    mid_code?: string | string[];
    material?: string | string[];
    hs_code?: string | string[] | StringComparisonOperator;
    weight?: number | NumericalComparisonOperator;
    length?: number | NumericalComparisonOperator;
    height?: number | NumericalComparisonOperator;
    width?: number | NumericalComparisonOperator;
    requires_shipping?: boolean;
}
