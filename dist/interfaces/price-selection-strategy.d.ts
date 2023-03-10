import { EntityManager } from "typeorm";
import { MoneyAmount } from "..";
import { PriceListType } from "../types/price-list";
import { TaxServiceRate } from "../types/tax-service";
export interface IPriceSelectionStrategy {
    /**
     * Instantiate a new price selection strategy with the active transaction in
     * order to ensure reads are accurate.
     * @param manager EntityManager with the queryrunner of the active transaction
     * @returns a new price selection strategy
     */
    withTransaction(manager: EntityManager): IPriceSelectionStrategy;
    /**
     * Calculate the original and discount price for a given variant in a set of
     * circumstances described in the context.
     * @param variant The variant id of the variant for which to retrieve prices
     * @param context Details relevant to determine the correct pricing of the variant
     * @return pricing details in an object containing the calculated lowest price,
     * the default price an all valid prices for the given variant
     */
    calculateVariantPrice(variant_id: string, context: PriceSelectionContext): Promise<PriceSelectionResult>;
}
export declare abstract class AbstractPriceSelectionStrategy implements IPriceSelectionStrategy {
    abstract withTransaction(manager: EntityManager): IPriceSelectionStrategy;
    abstract calculateVariantPrice(variant_id: string, context: PriceSelectionContext): Promise<PriceSelectionResult>;
}
export declare function isPriceSelectionStrategy(object: any): object is IPriceSelectionStrategy;
export declare type PriceSelectionContext = {
    cart_id?: string;
    customer_id?: string;
    quantity?: number;
    region_id?: string;
    currency_code?: string;
    include_discount_prices?: boolean;
    tax_rates?: TaxServiceRate[];
};
declare enum DefaultPriceType {
    DEFAULT = "default"
}
export declare type PriceType = DefaultPriceType | PriceListType;
export declare const PriceType: {
    SALE: PriceListType.SALE;
    OVERRIDE: PriceListType.OVERRIDE;
    DEFAULT: DefaultPriceType.DEFAULT;
};
export declare type PriceSelectionResult = {
    originalPrice: number | null;
    originalPriceIncludesTax?: boolean | null;
    calculatedPrice: number | null;
    calculatedPriceIncludesTax?: boolean | null;
    calculatedPriceType?: PriceType;
    prices: MoneyAmount[];
};
export {};
