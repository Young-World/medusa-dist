import { PriceList, Product, ProductOptionValue, ProductStatus, SalesChannel, ProductCategory } from "../models";
import { DateComparisonOperator, FindConfig, Selector } from "./common";
import { PriceListLoadConfig } from "./price-list";
import { FindOperator } from "typeorm";
/**
 * API Level DTOs + Validation rules
 */
export declare class FilterableProductProps {
    id?: string | string[];
    q?: string;
    status?: ProductStatus[];
    price_list_id?: string[];
    collection_id?: string[];
    tags?: string[];
    title?: string;
    description?: string;
    handle?: string;
    is_giftcard?: boolean;
    type_id?: string[];
    sales_channel_id?: string[];
    discount_condition_id?: string;
    category_id?: string[];
    include_category_children?: boolean;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
    deleted_at?: DateComparisonOperator;
}
export declare type ProductSelector = FilterableProductProps | (Selector<Product> & {
    q?: string;
    discount_condition_id?: string;
    price_list_id?: string[] | FindOperator<PriceList>;
    sales_channel_id?: string[] | FindOperator<SalesChannel>;
    category_id?: string[] | FindOperator<ProductCategory>;
});
/**
 * Service Level DTOs
 */
export declare type CreateProductInput = {
    title: string;
    subtitle?: string;
    profile_id?: string;
    description?: string;
    is_giftcard?: boolean;
    discountable?: boolean;
    images?: string[];
    thumbnail?: string;
    handle?: string;
    status?: ProductStatus;
    type?: CreateProductProductTypeInput;
    collection_id?: string;
    tags?: CreateProductProductTagInput[];
    options?: CreateProductProductOption[];
    variants?: CreateProductProductVariantInput[];
    sales_channels?: CreateProductProductSalesChannelInput[] | null;
    categories?: CreateProductProductCategoryInput[] | null;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    hs_code?: string;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    external_id?: string | null;
};
export declare type CreateProductProductTagInput = {
    id?: string;
    value: string;
};
export declare type CreateProductProductSalesChannelInput = {
    id: string;
};
export declare type CreateProductProductCategoryInput = {
    id: string;
};
export declare type CreateProductProductTypeInput = {
    id?: string;
    value: string;
};
export declare type CreateProductProductVariantInput = {
    title: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
    }[];
};
export declare type UpdateProductProductVariantDTO = {
    id?: string;
    title?: string;
    sku?: string;
    ean?: string;
    upc?: string;
    barcode?: string;
    hs_code?: string;
    inventory_quantity?: number;
    allow_backorder?: boolean;
    manage_inventory?: boolean;
    weight?: number;
    length?: number;
    height?: number;
    width?: number;
    origin_country?: string;
    mid_code?: string;
    material?: string;
    metadata?: Record<string, unknown>;
    prices?: CreateProductProductVariantPriceInput[];
    options?: {
        value: string;
        option_id: string;
    }[];
};
export declare type CreateProductProductOption = {
    title: string;
};
export declare type CreateProductProductVariantPriceInput = {
    region_id?: string;
    currency_code?: string;
    amount: number;
    min_quantity?: number;
    max_quantity?: number;
};
export declare type UpdateProductInput = Omit<Partial<CreateProductInput>, "variants"> & {
    variants?: UpdateProductProductVariantDTO[];
};
export declare type ProductOptionInput = {
    title: string;
    values?: ProductOptionValue[];
};
export declare type FindProductConfig = FindConfig<Product> & PriceListLoadConfig;
export declare class ProductSalesChannelReq {
    id: string;
}
export declare class ProductProductCategoryReq {
    id: string;
}
export declare class ProductTagReq {
    id?: string;
    value: string;
}
export declare class ProductTypeReq {
    id?: string;
    value: string;
}
