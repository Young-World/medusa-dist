import { Repository } from "typeorm";
import { MoneyAmount } from "../models/money-amount";
import { PriceListPriceCreateInput, PriceListPriceUpdateInput } from "../types/price-list";
declare type Price = Partial<Omit<MoneyAmount, "created_at" | "updated_at" | "deleted_at">> & {
    amount: number;
};
export declare class MoneyAmountRepository extends Repository<MoneyAmount> {
    /**
     * Will be removed in a future release.
     * Use `deleteVariantPricesNotIn` instead.
     * @deprecated
     */
    findVariantPricesNotIn(variantId: string, prices: Price[]): Promise<MoneyAmount[]>;
    deleteVariantPricesNotIn(variantId: string, prices: Price[]): Promise<void>;
    upsertVariantCurrencyPrice(variantId: string, price: Price): Promise<MoneyAmount>;
    addPriceListPrices(priceListId: string, prices: PriceListPriceCreateInput[], overrideExisting?: boolean): Promise<MoneyAmount[]>;
    deletePriceListPrices(priceListId: string, moneyAmountIds: string[]): Promise<void>;
    findManyForVariantInPriceList(variant_id: string, price_list_id: string, requiresPriceList?: boolean): Promise<[MoneyAmount[], number]>;
    findManyForVariantInRegion(variant_id: string, region_id?: string, currency_code?: string, customer_id?: string, include_discount_prices?: boolean, include_tax_inclusive_pricing?: boolean): Promise<[MoneyAmount[], number]>;
    updatePriceListPrices(priceListId: string, updates: PriceListPriceUpdateInput[]): Promise<MoneyAmount[]>;
}
export {};
