import "reflect-metadata";
import { ProductCollection } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultAdminCollectionsFields: string[];
export declare const defaultAdminCollectionsRelations: string[];
/**
 * @schema AdminCollectionsListRes
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
export declare type AdminCollectionsListRes = PaginatedResponse & {
    collections: ProductCollection[];
};
/**
 * @schema AdminCollectionsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Collection
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-collection
 *   deleted:
 *     type: boolean
 *     description: Whether the collection was deleted successfully or not.
 *     default: true
 */
export declare type AdminCollectionsDeleteRes = DeleteResponse;
/**
 * @schema AdminDeleteProductsFromCollectionRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: "The ID of the collection"
 *   object:
 *     type: string
 *     description: "The type of object the removal was executed on"
 *     default: product-collection
 *   removed_products:
 *     description: "The IDs of the products removed from the collection"
 *     type: array
 *     items:
 *       description: "The ID of a Product to add to the Product Collection."
 *       type: string
 */
export declare type AdminDeleteProductsFromCollectionRes = {
    id: string;
    object: string;
    removed_products: string[];
};
/**
 * @schema AdminCollectionsRes
 * type: object
 * properties:
 *   collection:
 *     $ref: "#/components/schemas/ProductCollection"
 */
export declare type AdminCollectionsRes = {
    collection: ProductCollection;
};
export * from "./add-products";
export * from "./create-collection";
export * from "./delete-collection";
export * from "./get-collection";
export * from "./list-collections";
export * from "./remove-products";
export * from "./update-collection";
