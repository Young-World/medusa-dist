import { PaginatedResponse } from "../../../../types/common";
import { ProductCollection } from "../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreCollectionRelations: string[];
export declare const allowedFields: string[];
/**
 * @schema StoreCollectionsListRes
 * type: object
 * properties:
 *   collections:
 *      type: array
 *      items:
 *        $ref: "#/components/schemas/ProductCollection"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of items skipped before these items
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export declare type StoreCollectionsListRes = PaginatedResponse & {
    collections: ProductCollection[];
};
/**
 * @schema StoreCollectionsRes
 * type: object
 * properties:
 *   collection:
 *     $ref: "#/components/schemas/ProductCollection"
 */
export declare type StoreCollectionsRes = {
    collection: ProductCollection;
};
export * from "./get-collection";
export * from "./list-collections";
