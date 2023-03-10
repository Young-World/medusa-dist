import { ProductType } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminProductTypeFields: string[];
export declare const defaultAdminProductTypeRelations: never[];
/**
 * @schema AdminProductTypesListRes
 * type: object
 * properties:
 *   product_types:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductType"
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
export declare type AdminProductTypesListRes = PaginatedResponse & {
    product_types: ProductType[];
};
export * from "./list-product-types";
