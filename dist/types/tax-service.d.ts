import { LineItemTaxLine, ShippingMethodTaxLine } from "../models";
export declare type TaxLinesMaps = {
    lineItemsTaxLines: {
        [lineItemId: string]: LineItemTaxLine[];
    };
    shippingMethodsTaxLines: {
        [shippingMethodId: string]: ShippingMethodTaxLine[];
    };
};
/**
 * The tax rate object as configured in Medusa. These may have an unspecified
 * numerical rate as they may be used for lookup purposes in the tax provider
 * plugin.
 */
export declare type TaxServiceRate = {
    rate?: number | null;
    name: string;
    code: string | null;
};
/**
 * The tax line properties for a given shipping method.
 */
export declare type ProviderShippingMethodTaxLine = {
    rate: number;
    name: string;
    code: string | null;
    metadata?: Record<string, unknown>;
    shipping_method_id: string;
};
/**
 * The tax line properties for a given line item.
 */
export declare type ProviderLineItemTaxLine = {
    rate: number;
    name: string;
    code: string | null;
    item_id: string;
    metadata?: Record<string, unknown>;
};
/**
 * A union type of the possible provider tax lines.
 */
export declare type ProviderTaxLine = ProviderLineItemTaxLine | ProviderShippingMethodTaxLine;
