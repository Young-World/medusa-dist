import "reflect-metadata";
import { PriceList, Product } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import { FlagRouter } from "../../../../utils/flag-router";
declare const _default: (app: any, featureFlagRouter: FlagRouter) => any;
export default _default;
export declare const defaultAdminPriceListFields: string[];
export declare const defaultAdminPriceListRelations: string[];
/**
 * @schema AdminPriceListRes
 * type: object
 * properties:
 *   price_list:
 *     $ref: "#/components/schemas/PriceList"
 */
export declare type AdminPriceListRes = {
    price_list: PriceList;
};
/**
 * @schema AdminPriceListDeleteBatchRes
 * type: object
 * properties:
 *   ids:
 *     type: array
 *     items:
 *       type: string
 *       description: The IDs of the deleted Money Amounts (Prices).
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: money-amount
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminPriceListDeleteBatchRes = {
    ids: string[];
    deleted: boolean;
    object: string;
};
/**
 * @schema AdminPriceListDeleteProductPricesRes
 * type: object
 * properties:
 *    ids:
 *     type: array
 *     description: The price ids that have been deleted.
 *     items:
 *       type: string
 *    object:
 *      type: string
 *      description: The type of the object that was deleted.
 *      default: money-amount
 *    deleted:
 *      type: boolean
 *      description: Whether or not the items were deleted.
 *      default: true
 */
export declare type AdminPriceListDeleteProductPricesRes = AdminPriceListDeleteBatchRes;
/**
 * @schema AdminPriceListDeleteVariantPricesRes
 * type: object
 * properties:
 *    ids:
 *     type: array
 *     description: The price ids that have been deleted.
 *     items:
 *       type: string
 *    object:
 *      type: string
 *      description: The type of the object that was deleted.
 *      default: money-amount
 *    deleted:
 *      type: boolean
 *      description: Whether or not the items were deleted.
 *      default: true
 */
export declare type AdminPriceListDeleteVariantPricesRes = AdminPriceListDeleteBatchRes;
/**
 * @schema AdminPriceListDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Price List.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: price-list
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminPriceListDeleteRes = DeleteResponse;
/**
 * @schema AdminPriceListsListRes
 * type: object
 * properties:
 *   price_lists:
 *    type: array
 *    items:
 *      $ref: "#/components/schemas/PriceList"
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
export declare type AdminPriceListsListRes = PaginatedResponse & {
    price_lists: PriceList[];
};
/**
 * @schema AdminPriceListsProductsListRes
 * type: object
 * properties:
 *   products:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Product"
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
export declare type AdminPriceListsProductsListRes = PaginatedResponse & {
    products: Product[];
};
export * from "./add-prices-batch";
export * from "./create-price-list";
export * from "./delete-price-list";
export * from "./get-price-list";
export * from "./list-price-lists";
export * from "./update-price-list";
export * from "./delete-prices-batch";
export * from "./list-price-list-products";
