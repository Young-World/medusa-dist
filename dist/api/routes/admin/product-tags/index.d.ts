import { ProductTag } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminProductTagsFields: string[];
export declare const defaultAdminProductTagsRelations: never[];
/**
 * @schema AdminProductTagsListRes
 * type: object
 * properties:
 *   product_tags:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductTag"
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
export declare type AdminProductTagsListRes = PaginatedResponse & {
    product_tags: ProductTag[];
};
export * from "./list-product-tags";
