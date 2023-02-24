import { AwilixContainer } from "awilix";
import { EntityManager } from "typeorm";
import Redis from "ioredis";
import { LineItemTaxLineRepository } from "../repositories/line-item-tax-line";
import { ShippingMethodTaxLineRepository } from "../repositories/shipping-method-tax-line";
import { TaxProviderRepository } from "../repositories/tax-provider";
import { Cart, LineItem, LineItemTaxLine, Region, ShippingMethod, ShippingMethodTaxLine, TaxProvider } from "../models";
import { ITaxService, TaxCalculationContext, TransactionBaseService } from "../interfaces";
import { TaxServiceRate } from "../types/tax-service";
import TaxRateService from "./tax-rate";
import EventBusService from "./event-bus";
declare type RegionDetails = {
    id: string;
    tax_rate: number | null;
};
/**
 * Finds tax providers and assists in tax related operations.
 */
declare class TaxProviderService extends TransactionBaseService {
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager;
    protected readonly container_: AwilixContainer;
    protected readonly taxRateService_: TaxRateService;
    protected readonly taxLineRepo_: typeof LineItemTaxLineRepository;
    protected readonly smTaxLineRepo_: typeof ShippingMethodTaxLineRepository;
    protected readonly taxProviderRepo_: typeof TaxProviderRepository;
    protected readonly redis_: Redis.Redis;
    protected readonly eventBus_: EventBusService;
    constructor(container: AwilixContainer);
    list(): Promise<TaxProvider[]>;
    /**
     * Retrieves the relevant tax provider for the given region.
     * @param region - the region to get tax provider for.
     * @return the region specific tax provider
     */
    retrieveProvider(region: Region): ITaxService;
    clearLineItemsTaxLines(itemIds: string[]): Promise<void>;
    clearTaxLines(cartId: string): Promise<void>;
    /**
     * Persists the tax lines relevant for an order to the database.
     * @param cartOrLineItems - the cart or line items to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    createTaxLines(cartOrLineItems: Cart | LineItem[], calculationContext: TaxCalculationContext): Promise<(ShippingMethodTaxLine | LineItemTaxLine)[]>;
    /**
     * Persists the tax lines relevant for a shipping method to the database. Used
     * for return shipping methods.
     * @param shippingMethod - the shipping method to create tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the newly created tax lines
     */
    createShippingTaxLines(shippingMethod: ShippingMethod, calculationContext: TaxCalculationContext): Promise<(ShippingMethodTaxLine | LineItemTaxLine)[]>;
    /**
     * Gets the relevant tax lines for a shipping method. Note: this method
     * doesn't persist the tax lines. Use createShippingTaxLines if you wish to
     * persist the tax lines to the DB layer.
     * @param shippingMethod - the shipping method to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    getShippingTaxLines(shippingMethod: ShippingMethod, calculationContext: TaxCalculationContext): Promise<ShippingMethodTaxLine[]>;
    /**
     * Gets the relevant tax lines for an order or cart. If an order is provided
     * the order's tax lines will be returned. If a cart is provided the tax lines
     * will be computed from the tax rules and potentially a 3rd party tax plugin.
     * Note: this method doesn't persist the tax lines. Use createTaxLines if you
     * wish to persist the tax lines to the DB layer.
     * @param lineItems - the cart or order to get tax lines for
     * @param calculationContext - the calculation context to get tax lines by
     * @return the computed tax lines
     */
    getTaxLines(lineItems: LineItem[], calculationContext: TaxCalculationContext): Promise<(ShippingMethodTaxLine | LineItemTaxLine)[]>;
    /**
     * Gets the tax rates configured for a shipping option. The rates are cached
     * between calls.
     * @param optionId - the option id of the shipping method.
     * @param regionDetails - the region to get configured rates for.
     * @return the tax rates configured for the shipping option.
     */
    getRegionRatesForShipping(optionId: string, regionDetails: RegionDetails): Promise<TaxServiceRate[]>;
    /**
     * Gets the tax rates configured for a product. The rates are cached between
     * calls.
     * @param productId - the product id to get rates for
     * @param region - the region to get configured rates for.
     * @return the tax rates configured for the shipping option.
     */
    getRegionRatesForProduct(productId: string, region: RegionDetails): Promise<TaxServiceRate[]>;
    /**
     * The cache key to get cache hits by.
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @return the cache key to use for the id set
     */
    private getCacheKey;
    /**
     * Sets the cache results for a set of ids
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @param value - tax rates to cache
     * @return promise that resolves after the cache has been set
     */
    private setCache;
    /**
     * Gets the cache results for a set of ids
     * @param productId - the product id to cache
     * @param regionId - the region id to cache
     * @return the cached result or null
     */
    private getCacheEntry;
    registerInstalledProviders(providers: string[]): Promise<void>;
}
export default TaxProviderService;
