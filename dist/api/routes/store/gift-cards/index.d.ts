import { GiftCard } from "./../../../../";
declare const _default: (app: any) => any;
export default _default;
export declare const defaultStoreGiftCardRelations: string[];
export declare const defaultStoreGiftCardFields: (keyof GiftCard)[];
export declare const allowedStoreGiftCardRelations: string[];
export declare const allowedStoreGiftCardFields: string[];
/**
 * @schema StoreGiftCardsRes
 * type: object
 * properties:
 *   gift_card:
 *     $ref: "#/components/schemas/GiftCard"
 */
export declare type StoreGiftCardsRes = {
    gift_card: GiftCard;
};
export * from "./get-gift-card";
