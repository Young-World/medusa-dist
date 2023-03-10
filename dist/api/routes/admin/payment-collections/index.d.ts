import "reflect-metadata";
import { PaymentCollection } from "../../../../models";
declare const _default: (app: any, container: any) => any;
export default _default;
export declare const defaultPaymentCollectionFields: string[];
export declare const defaulPaymentCollectionRelations: string[];
/**
 * @schema AdminPaymentCollectionsRes
 * type: object
 * properties:
 *   payment_collection:
 *     $ref: "#/components/schemas/PaymentCollection"
 */
export declare type AdminPaymentCollectionsRes = {
    payment_collection: PaymentCollection;
};
/**
 * @schema AdminPaymentCollectionDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Payment Collection.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: payment_collection
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Payment Collection was deleted.
 *     default: true
 */
export declare type AdminPaymentCollectionDeleteRes = {
    id: string;
    object: "payment_collection";
    deleted: boolean;
};
export * from "./get-payment-collection";
export * from "./update-payment-collection";
