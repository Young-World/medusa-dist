import "reflect-metadata";
import { Cart, Order, Swap } from "../../../../";
import { DeleteResponse } from "../../../../types/common";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultStoreCartFields: (keyof Cart)[];
export declare const defaultStoreCartRelations: string[];
/**
 * @schema StoreCartsRes
 * type: object
 * properties:
 *   cart:
 *     $ref: "#/components/schemas/Cart"
 */
export declare type StoreCartsRes = {
    cart: Omit<Cart, "refundable_amount" | "refunded_total">;
};
/**
 * @schema StoreCompleteCartRes
 * type: object
 * properties:
 *   type:
 *     type: string
 *     description: The type of the data property.
 *     enum: [order, cart, swap]
 *   data:
 *     type: object
 *     description: The data of the result object. Its type depends on the type field.
 *     oneOf:
 *       - type: object
 *         allOf:
 *           - description: Cart was successfully authorized and order was placed successfully.
 *           - $ref: "#/components/schemas/Order"
 *       - type: object
 *         allOf:
 *           - description: Cart was successfully authorized but requires further actions.
 *           - $ref: "#/components/schemas/Cart"
 *       - type: object
 *         allOf:
 *           - description: When cart is used for a swap and it has been completed successfully.
 *           - $ref: "#/components/schemas/Swap"
 */
export declare type StoreCompleteCartRes = {
    type: "cart";
    data: Cart;
} | {
    type: "order";
    data: Order;
} | {
    type: "swap";
    data: Swap;
};
export declare type StoreCartsDeleteRes = DeleteResponse;
export * from "./add-shipping-method";
export * from "./create-cart";
export * from "./create-line-item";
export * from "./create-payment-sessions";
export * from "./set-payment-session";
export * from "./update-cart";
export * from "./update-line-item";
export * from "./update-payment-session";
