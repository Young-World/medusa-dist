import { EntityManager } from "typeorm";
import { IPriceSelectionStrategy, TransactionBaseService } from "../interfaces";
import { Address, Cart, Customer, CustomShippingOption, LineItem, SalesChannel, ShippingMethod } from "../models";
import { AddressRepository } from "../repositories/address";
import { CartRepository } from "../repositories/cart";
import { LineItemRepository } from "../repositories/line-item";
import { PaymentSessionRepository } from "../repositories/payment-session";
import { ShippingMethodRepository } from "../repositories/shipping-method";
import { CartCreateProps, CartUpdateProps, FilterableCartProps, LineItemUpdate } from "../types/cart";
import { AddressPayload, FindConfig, TotalField } from "../types/common";
import { FlagRouter } from "../utils/flag-router";
import CustomShippingOptionService from "./custom-shipping-option";
import CustomerService from "./customer";
import DiscountService from "./discount";
import EventBusService from "./event-bus";
import GiftCardService from "./gift-card";
import InventoryService from "./inventory";
import LineItemService from "./line-item";
import LineItemAdjustmentService from "./line-item-adjustment";
import PaymentProviderService from "./payment-provider";
import ProductService from "./product";
import ProductVariantService from "./product-variant";
import RegionService from "./region";
import ShippingOptionService from "./shipping-option";
import TaxProviderService from "./tax-provider";
import TotalsService from "./totals";
import StoreService from "./store";
import { SalesChannelService } from "./index";
declare type InjectedDependencies = {
    manager: EntityManager;
    cartRepository: typeof CartRepository;
    shippingMethodRepository: typeof ShippingMethodRepository;
    addressRepository: typeof AddressRepository;
    paymentSessionRepository: typeof PaymentSessionRepository;
    lineItemRepository: typeof LineItemRepository;
    eventBusService: EventBusService;
    salesChannelService: SalesChannelService;
    taxProviderService: TaxProviderService;
    paymentProviderService: PaymentProviderService;
    productService: ProductService;
    storeService: StoreService;
    featureFlagRouter: FlagRouter;
    productVariantService: ProductVariantService;
    regionService: RegionService;
    lineItemService: LineItemService;
    shippingOptionService: ShippingOptionService;
    customerService: CustomerService;
    discountService: DiscountService;
    giftCardService: GiftCardService;
    totalsService: TotalsService;
    inventoryService: InventoryService;
    customShippingOptionService: CustomShippingOptionService;
    lineItemAdjustmentService: LineItemAdjustmentService;
    priceSelectionStrategy: IPriceSelectionStrategy;
};
declare type TotalsConfig = {
    force_taxes?: boolean;
};
declare class CartService extends TransactionBaseService {
    static readonly Events: {
        CUSTOMER_UPDATED: string;
        CREATED: string;
        UPDATED: string;
    };
    protected manager_: EntityManager;
    protected transactionManager_: EntityManager | undefined;
    protected readonly shippingMethodRepository_: typeof ShippingMethodRepository;
    protected readonly cartRepository_: typeof CartRepository;
    protected readonly addressRepository_: typeof AddressRepository;
    protected readonly paymentSessionRepository_: typeof PaymentSessionRepository;
    protected readonly lineItemRepository_: typeof LineItemRepository;
    protected readonly eventBus_: EventBusService;
    protected readonly productVariantService_: ProductVariantService;
    protected readonly productService_: ProductService;
    protected readonly storeService_: StoreService;
    protected readonly salesChannelService_: SalesChannelService;
    protected readonly regionService_: RegionService;
    protected readonly lineItemService_: LineItemService;
    protected readonly paymentProviderService_: PaymentProviderService;
    protected readonly customerService_: CustomerService;
    protected readonly shippingOptionService_: ShippingOptionService;
    protected readonly discountService_: DiscountService;
    protected readonly giftCardService_: GiftCardService;
    protected readonly taxProviderService_: TaxProviderService;
    protected readonly totalsService_: TotalsService;
    protected readonly inventoryService_: InventoryService;
    protected readonly customShippingOptionService_: CustomShippingOptionService;
    protected readonly priceSelectionStrategy_: IPriceSelectionStrategy;
    protected readonly lineItemAdjustmentService_: LineItemAdjustmentService;
    protected readonly featureFlagRouter_: FlagRouter;
    constructor({ manager, cartRepository, shippingMethodRepository, lineItemRepository, eventBusService, paymentProviderService, productService, productVariantService, taxProviderService, regionService, lineItemService, shippingOptionService, customerService, discountService, giftCardService, totalsService, addressRepository, paymentSessionRepository, inventoryService, customShippingOptionService, lineItemAdjustmentService, priceSelectionStrategy, salesChannelService, featureFlagRouter, storeService, }: InjectedDependencies);
    private getTotalsRelations;
    protected transformQueryForTotals_(config: FindConfig<Cart>): FindConfig<Cart> & {
        totalsToSelect: TotalField[];
    };
    protected decorateTotals_(cart: Cart, totalsToSelect: TotalField[], options?: TotalsConfig): Promise<Cart>;
    /**
     * @param selector - the query object for find
     * @param config - config object
     * @return the result of the find operation
     */
    list(selector: FilterableCartProps, config?: FindConfig<Cart>): Promise<Cart[]>;
    /**
     * Gets a cart by id.
     * @param cartId - the id of the cart to get.
     * @param options - the options to get a cart
     * @return the cart document.
     */
    retrieve(cartId: string, options?: FindConfig<Cart>, totalsConfig?: TotalsConfig): Promise<Cart>;
    private retrieveNew;
    retrieveWithTotals(cartId: string, options?: FindConfig<Cart>, totalsConfig?: TotalsConfig): Promise<Cart>;
    /**
     * Creates a cart.
     * @param data - the data to create the cart with
     * @return the result of the create operation
     */
    create(data: CartCreateProps): Promise<Cart | never>;
    protected getValidatedSalesChannel(salesChannelId?: string): Promise<SalesChannel | never>;
    /**
     * Removes a line item from the cart.
     * @param cartId - the id of the cart that we will remove from
     * @param lineItemId - the line item to remove.
     * @return the result of the update operation
     */
    removeLineItem(cartId: string, lineItemId: string): Promise<Cart>;
    /**
     * Checks if a given line item has a shipping method that can fulfill it.
     * Returns true if all products in the cart can be fulfilled with the current
     * shipping methods.
     * @param shippingMethods - the set of shipping methods to check from
     * @param lineItem - the line item
     * @return boolean representing whether shipping method is validated
     */
    protected validateLineItemShipping_(shippingMethods: ShippingMethod[], lineItem: LineItem): boolean;
    /**
     * Check if line item's variant belongs to the cart's sales channel.
     *
     * @param cart - the cart for the line item
     * @param lineItem - the line item being added
     * @return a boolean indicating validation result
     */
    protected validateLineItem(cart: Cart, lineItem: LineItem): Promise<boolean>;
    /**
     * Adds a line item to the cart.
     * @param cartId - the id of the cart that we will add to
     * @param lineItem - the line item to add.
     * @param config
     *    validateSalesChannels - should check if product belongs to the same sales chanel as cart
     *                            (if cart has associated sales channel)
     * @return the result of the update operation
     */
    addLineItem(cartId: string, lineItem: LineItem, config?: {
        validateSalesChannels: boolean;
    }): Promise<Cart>;
    /**
     * Updates a cart's existing line item.
     * @param cartId - the id of the cart to update
     * @param lineItemId - the id of the line item to update.
     * @param lineItemUpdate - the line item to update. Must include an id field.
     * @return the result of the update operation
     */
    updateLineItem(cartId: string, lineItemId: string, lineItemUpdate: LineItemUpdate): Promise<Cart>;
    /**
     * Ensures shipping total on cart is correct in regards to a potential free
     * shipping discount
     * If a free shipping is present, we set shipping methods price to 0
     * if a free shipping was present, we set shipping methods to original amount
     * @param cart - the the cart to adjust free shipping for
     * @param shouldAdd - flag to indicate, if we should add or remove
     * @return void
     */
    protected adjustFreeShipping_(cart: Cart, shouldAdd: boolean): Promise<void>;
    update(cartId: string, data: CartUpdateProps): Promise<Cart>;
    /**
     * Remove the cart line item that does not belongs to the newly assigned sales channel
     *
     * @param cart - The cart being updated
     * @param newSalesChannelId - The new sales channel being assigned to the cart
     * @return void
     * @protected
     */
    protected onSalesChannelChange(cart: Cart, newSalesChannelId: string): Promise<void>;
    /**
     * Sets the customer id of a cart
     * @param cart - the cart to add email to
     * @param customerId - the customer to add to cart
     * @return the result of the update operation
     */
    protected updateCustomerId_(cart: Cart, customerId: string): Promise<void>;
    /**
     * Creates or fetches a user based on an email.
     * @param email - the email to use
     * @return the resultign customer object
     */
    protected createOrFetchUserFromEmail_(email: string): Promise<Customer>;
    /**
     * Updates the cart's billing address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the billing address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    protected updateBillingAddress_(cart: Cart, addressOrId: AddressPayload | Partial<Address> | string, addrRepo: AddressRepository): Promise<void>;
    /**
     * Updates the cart's shipping address.
     * @param cart - the cart to update
     * @param addressOrId - the value to set the shipping address to
     * @param addrRepo - the repository to use for address updates
     * @return the result of the update operation
     */
    protected updateShippingAddress_(cart: Cart, addressOrId: AddressPayload | Partial<Address> | string, addrRepo: AddressRepository): Promise<void>;
    protected applyGiftCard_(cart: Cart, code: string): Promise<void>;
    /**
     * Updates the cart's discounts.
     * If discount besides free shipping is already applied, this
     * will be overwritten
     * Throws if discount regions does not include the cart region
     * @param cart - the cart to update
     * @param discountCode - the discount code
     * @return the result of the update operation
     */
    applyDiscount(cart: Cart, discountCode: string): Promise<void>;
    /**
     * Removes a discount based on a discount code.
     * @param cartId - the id of the cart to remove from
     * @param discountCode - the discount code to remove
     * @return the resulting cart
     */
    removeDiscount(cartId: string, discountCode: string): Promise<Cart>;
    /**
     * Updates the currently selected payment session.
     * @param cartId - the id of the cart to update the payment session for
     * @param update - the data to update the payment session with
     * @return the resulting cart
     */
    updatePaymentSession(cartId: string, update: Record<string, unknown>): Promise<Cart>;
    /**
     * Authorizes a payment for a cart.
     * Will authorize with chosen payment provider. This will return
     * a payment object, that we will use to update our cart payment with.
     * Additionally, if the payment does not require more or fails, we will
     * set the payment on the cart.
     * @param cartId - the id of the cart to authorize payment for
     * @param context - object containing whatever is relevant for
     *    authorizing the payment with the payment provider. As an example,
     *    this could be IP address or similar for fraud handling.
     * @return the resulting cart
     */
    authorizePayment(cartId: string, context?: Record<string, unknown>): Promise<Cart>;
    /**
     * Sets a payment method for a cart.
     * @param cartId - the id of the cart to add payment method to
     * @param providerId - the id of the provider to be set to the cart
     * @return result of update operation
     */
    setPaymentSession(cartId: string, providerId: string): Promise<Cart>;
    /**
     * Creates, updates and sets payment sessions associated with the cart. The
     * first time the method is called payment sessions will be created for each
     * provider. Additional calls will ensure that payment sessions have correct
     * amounts, currencies, etc. as well as make sure to filter payment sessions
     * that are not available for the cart's region.
     * @param cartOrCartId - the id of the cart to set payment session for
     * @return the result of the update operation.
     */
    setPaymentSessions(cartOrCartId: Cart | string): Promise<void>;
    /**
     * Removes a payment session from the cart.
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whoose payment session
     *    should be removed.
     * @return the resulting cart.
     */
    deletePaymentSession(cartId: string, providerId: string): Promise<Cart>;
    /**
     * Refreshes a payment session on a cart
     * @param cartId - the id of the cart to remove from
     * @param providerId - the id of the provider whoose payment session
     *    should be removed.
     * @return {Promise<Cart>} the resulting cart.
     */
    refreshPaymentSession(cartId: string, providerId: string): Promise<Cart>;
    /**
     * Adds the shipping method to the list of shipping methods associated with
     * the cart. Shipping Methods are the ways that an order is shipped, whereas a
     * Shipping Option is a possible way to ship an order. Shipping Methods may
     * also have additional details in the data field such as an id for a package
     * shop.
     * @param cartId - the id of the cart to add shipping method to
     * @param optionId - id of shipping option to add as valid method
     * @param data - the fulmillment data for the method
     * @return the result of the update operation
     */
    addShippingMethod(cartId: string, optionId: string, data?: Record<string, unknown>): Promise<Cart>;
    /**
     * Finds the cart's custom shipping options based on the passed option id.
     * throws if custom options is not empty and no shipping option corresponds to optionId
     * @param cartCustomShippingOptions - the cart's custom shipping options
     * @param optionId - id of the normal or custom shipping option to find in the cartCustomShippingOptions
     * @return custom shipping option
     */
    findCustomShippingOption(cartCustomShippingOptions: CustomShippingOption[], optionId: string): CustomShippingOption | undefined;
    protected updateUnitPrices_(cart: Cart, regionId?: string, customer_id?: string): Promise<void>;
    /**
     * Set's the region of a cart.
     * @param cart - the cart to set region on
     * @param regionId - the id of the region to set the region to
     * @param countryCode - the country code to set the country to
     * @return the result of the update operation
     */
    protected setRegion_(cart: Cart, regionId: string, countryCode: string | null): Promise<void>;
    /**
     * Deletes a cart from the database. Completed carts cannot be deleted.
     * @param cartId - the id of the cart to delete
     * @return the deleted cart or undefined if the cart was not found.
     */
    delete(cartId: string): Promise<Cart>;
    /**
     * Dedicated method to set metadata for a cart.
     * To ensure that plugins does not overwrite each
     * others metadata fields, setMetadata is provided.
     * @param cartId - the cart to apply metadata to.
     * @param key - key for metadata field
     * @param value - value for metadata field.
     * @return resolves to the updated result.
     */
    setMetadata(cartId: string, key: string, value: string | number): Promise<Cart>;
    createTaxLines(id: string): Promise<Cart>;
    deleteTaxLines(id: string): Promise<void>;
    decorateTotals(cart: Cart, totalsConfig?: TotalsConfig): Promise<Cart>;
    protected refreshAdjustments_(cart: Cart): Promise<void>;
}
export default CartService;
