import { Currency } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCurrenciesListRes
 * type: object
 * properties:
 *   currencies:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Currency"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of items skipped before these items
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export declare type AdminCurrenciesListRes = PaginatedResponse & {
    currencies: Currency[];
};
/**
 * @schema AdminCurrenciesRes
 * type: object
 * properties:
 *   currency:
 *       $ref: "#/components/schemas/Currency"
 */
export declare type AdminCurrenciesRes = {
    currency: Currency;
};
export * from "./list-currencies";
export * from "./update-currency";
