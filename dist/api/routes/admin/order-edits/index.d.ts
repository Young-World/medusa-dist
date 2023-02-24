import { DeleteResponse } from "../../../../types/common";
import { OrderEdit } from "../../../../models";
declare const _default: (app: any) => any;
export default _default;
export declare type AdminOrderEditsRes = {
    order_edit: OrderEdit;
};
export declare type AdminOrderEditDeleteRes = DeleteResponse;
export declare type AdminOrderEditItemChangeDeleteRes = {
    id: string;
    object: "item_change";
    deleted: boolean;
};
export * from "./update-order-edit";
export * from "./update-order-edit-line-item";
export * from "./create-order-edit";
export * from "./add-line-item";
