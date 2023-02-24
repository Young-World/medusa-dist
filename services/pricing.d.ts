import { EntityManager } from "typeorm";
import { ProductVariantService, RegionService, TaxProviderService } from ".";
import { TransactionBaseService } from "../interfaces";
import { IPriceSelectionStrategy, PriceSelectionContext } from "../interfaces/price-selection-strategy";
import { Product, ProductVariant, ShippingOption } from "../models";
import { PricedProduct, PricedShippingOption, PricedVariant, PricingContext, ProductVariantPricing, TaxedPricing } from "../types/pricing";
import { TaxServiceRate } from "../types/tax-service";
import { FlagRouter } from "../utils/flag-router";
declare type InjectedDependencies = {
    manager: EntityManager;
    productVariantService: ProductVariantService;
    taxProviderService: TaxProviderService;
    regionService: RegionService;
    priceSelectionStrategy: IPriceSelectionStrategy;
    featureFlagRouter: FlagRouter;
};
/**
 * Allows retrieval of prices.
 */
declare class PricingService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly regionService: RegionService;
    protected readonly taxProviderService: TaxProviderService;
    protected readonly priceSelectionStrategy: IPriceSelectionStrategy;
    protected readonly productVariantService: ProductVariantService;
    protected readonly featureFlagRouter: FlagRouter;
    constructor({ manager, productVariantService, taxProviderService, regionService, priceSelectionStrategy, featureFlagRouter, }: InjectedDependencies);
    /**
     * Collects additional information neccessary for completing the price
     * selection.
     * @param context - the price selection context to use
     * @return The pricing context
     */
    collectPricingContext(context: PriceSelectionContext): Promise<PricingContext>;
    /**
     * Gets the prices for a product variant
     * @param variantPricing - the prices retrieved from a variant
     * @param productRates - the tax rates that the product has applied
     * @return The tax related variant prices.
     */
    calculateTaxes(variantPricing: ProductVariantPricing, productRates: TaxServiceRate[]): Promise<TaxedPricing>;
    private getProductVariantPricing_;
    /**
     * Gets the prices for a product variant.
     * @param variant - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    getProductVariantPricing(variant: Pick<ProductVariant, "id" | "product_id">, context: PriceSelectionContext | PricingContext): Promise<ProductVariantPricing>;
    /**
     * Gets the prices for a product variant by a variant id.
     * @param variantId - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    getProductVariantPricingById(variantId: string, context: PriceSelectionContext | PricingContext): Promise<ProductVariantPricing>;
    private getProductPricing_;
    /**
     * Gets all the variant prices for a product. All the product's variants will
     * be fetched.
     * @param product - the product to get pricing for.
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    getProductPricing(product: Pick<Product, "id" | "variants">, context: PriceSelectionContext): Promise<Record<string, ProductVariantPricing>>;
    /**
     * Gets all the variant prices for a product by the product id
     * @param productId - the id of the product to get prices for
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    getProductPricingById(productId: string, context: PriceSelectionContext): Promise<Record<string, ProductVariantPricing>>;
    /**
     * Set additional prices on a list of product variants.
     * @param variants - list of variants on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    setVariantPrices(variants: ProductVariant[], context: PriceSelectionContext): Promise<PricedVariant[]>;
    /**
     * Set additional prices on a list of products.
     * @param products - list of products on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    setProductPrices(products: Product[], context?: PriceSelectionContext): Promise<(Product | PricedProduct)[]>;
    /**
     * Gets the prices for a shipping option.
     * @param shippingOption - the shipping option to get prices for
     * @param context - the price selection context to use
     * @return The shipping option prices
     */
    getShippingOptionPricing(shippingOption: ShippingOption, context: PriceSelectionContext | PricingContext): Promise<PricedShippingOption>;
    /**
     * Set additional prices on a list of shipping options.
     * @param shippingOptions - list of shipping options on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of shipping options with prices
     */
    setShippingOptionPrices(shippingOptions: ShippingOption[], context?: Omit<PriceSelectionContext, "region_id">): Promise<PricedShippingOption[]>;
}
export default PricingService;
