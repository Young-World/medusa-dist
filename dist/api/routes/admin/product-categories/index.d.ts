import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { ProductCategory } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
export * from "./get-product-category";
export * from "./delete-product-category";
export * from "./list-product-categories";
export * from "./create-product-category";
export * from "./update-product-category";
export * from "./add-products-batch";
export * from "./delete-products-batch";
export declare const defaultAdminProductCategoryRelations: string[];
export declare const allowedAdminProductCategoryRelations: string[];
export declare const defaultProductCategoryFields: string[];
/**
 * @schema AdminProductCategoriesCategoryRes
 * type: object
 * properties:
 *   product_category:
 *     $ref: "#/components/schemas/ProductCategory"
 */
export declare type AdminProductCategoriesCategoryRes = {
    product_category: ProductCategory;
};
/**
 * @schema AdminProductCategoriesCategoryDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted product category
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: product-category
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminProductCategoriesCategoryDeleteRes = DeleteResponse;
/**
 * @schema AdminProductCategoriesListRes
 * type: object
 * properties:
 *   product_categories:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
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
export declare type AdminProductCategoriesListRes = PaginatedResponse & {
    product_categories: ProductCategory[];
};
