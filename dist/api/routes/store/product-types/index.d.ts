import { ProductType } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const allowedStoreProductTypeFields: string[];
export declare const defaultStoreProductTypeFields: string[];
export declare const defaultStoreProductTypeRelations: never[];
/**
 * @schema StoreProductTypesListRes
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
export declare type StoreProductTypesListRes = PaginatedResponse & {
    product_types: ProductType[];
};
export * from "./list-product-types";
