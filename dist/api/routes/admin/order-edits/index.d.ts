import { OrderEdit } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminOrderEditsRes
 * type: object
 * properties:
 *   order_edit:
 *     $ref: "#/components/schemas/OrderEdit"
 */
export declare type AdminOrderEditsRes = {
    order_edit: OrderEdit;
};
/**
 * @schema AdminOrderEditsListRes
 * type: object
 * properties:
 *   order_edits:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/OrderEdit"
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
export declare type AdminOrderEditsListRes = PaginatedResponse & {
    order_edits: OrderEdit[];
};
/**
 * @schema AdminOrderEditDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Order Edit.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: order_edit
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Order Edit was deleted.
 *     default: true
 */
export declare type AdminOrderEditDeleteRes = DeleteResponse;
/**
 * @schema AdminOrderEditItemChangeDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Order Edit Item Change.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: item_change
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Order Edit Item Change was deleted.
 *     default: true
 */
export declare type AdminOrderEditItemChangeDeleteRes = {
    id: string;
    object: "item_change";
    deleted: boolean;
};
export * from "./add-line-item";
export * from "./create-order-edit";
export * from "./get-order-edit";
export * from "./list-order-edit";
export * from "./request-confirmation";
export * from "./update-order-edit";
export * from "./update-order-edit-line-item";
