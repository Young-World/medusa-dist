import { TaxRate } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminTaxRatesRelations: never[];
export declare const defaultAdminTaxRatesFields: (keyof TaxRate)[];
/**
 * @schema AdminTaxRatesDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Shipping Option.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: tax-rate
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminTaxRatesDeleteRes = DeleteResponse;
/**
 * @schema AdminTaxRatesListRes
 * type: object
 * properties:
 *   tax_rates:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/TaxRate"
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
export declare type AdminTaxRatesListRes = PaginatedResponse & {
    tax_rates: TaxRate[];
};
/**
 * @schema AdminTaxRatesRes
 * type: object
 * properties:
 *   tax_rate:
 *     $ref: "#/components/schemas/TaxRate"
 */
export declare type AdminTaxRatesRes = {
    tax_rate: TaxRate;
};
export * from "./list-tax-rates";
export * from "./get-tax-rate";
export * from "./remove-from-product-types";
export * from "./remove-from-products";
export * from "./remove-from-shipping-options";
export * from "./add-to-product-types";
export * from "./add-to-products";
export * from "./add-to-shipping-options";
export * from "./create-tax-rate";
export * from "./delete-tax-rate";
export * from "./update-tax-rate";
