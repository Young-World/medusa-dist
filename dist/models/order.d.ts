import { BaseEntity } from "../interfaces/models/base-entity";
import { Address } from "./address";
import { Cart } from "./cart";
import { ClaimOrder } from "./claim-order";
import { Currency } from "./currency";
import { Customer } from "./customer";
import { Discount } from "./discount";
import { DraftOrder } from "./draft-order";
import { Fulfillment } from "./fulfillment";
import { GiftCard } from "./gift-card";
import { GiftCardTransaction } from "./gift-card-transaction";
import { LineItem } from "./line-item";
import { OrderEdit } from "./order-edit";
import { Payment } from "./payment";
import { Refund } from "./refund";
import { Region } from "./region";
import { Return } from "./return";
import { SalesChannel } from "./sales-channel";
import { ShippingMethod } from "./shipping-method";
import { Swap } from "./swap";
export declare enum OrderStatus {
    PENDING = "pending",
    COMPLETED = "completed",
    ARCHIVED = "archived",
    CANCELED = "canceled",
    REQUIRES_ACTION = "requires_action"
}
export declare enum FulfillmentStatus {
    NOT_FULFILLED = "not_fulfilled",
    PARTIALLY_FULFILLED = "partially_fulfilled",
    FULFILLED = "fulfilled",
    PARTIALLY_SHIPPED = "partially_shipped",
    SHIPPED = "shipped",
    PARTIALLY_RETURNED = "partially_returned",
    RETURNED = "returned",
    CANCELED = "canceled",
    REQUIRES_ACTION = "requires_action"
}
export declare enum PaymentStatus {
    NOT_PAID = "not_paid",
    AWAITING = "awaiting",
    CAPTURED = "captured",
    PARTIALLY_REFUNDED = "partially_refunded",
    REFUNDED = "refunded",
    CANCELED = "canceled",
    REQUIRES_ACTION = "requires_action"
}
export declare class Order extends BaseEntity {
    readonly object = "order";
    status: OrderStatus;
    fulfillment_status: FulfillmentStatus;
    payment_status: PaymentStatus;
    display_id: number;
    cart_id: string;
    cart: Cart;
    customer_id: string;
    customer: Customer;
    email: string;
    billing_address_id: string;
    billing_address: Address;
    shipping_address_id: string;
    shipping_address: Address;
    region_id: string;
    region: Region;
    currency_code: string;
    currency: Currency;
    tax_rate: number | null;
    discounts: Discount[];
    gift_cards: GiftCard[];
    shipping_methods: ShippingMethod[];
    payments: Payment[];
    fulfillments: Fulfillment[];
    returns: Return[];
    claims: ClaimOrder[];
    refunds: Refund[];
    swaps: Swap[];
    draft_order_id: string;
    draft_order: DraftOrder;
    edits: OrderEdit[];
    items: LineItem[];
    gift_card_transactions: GiftCardTransaction[];
    canceled_at: Date;
    metadata: Record<string, unknown>;
    no_notification: boolean;
    idempotency_key: string;
    external_id: string | null;
    sales_channel_id: string | null;
    sales_channel: SalesChannel;
    shipping_total: number;
    discount_total: number;
    tax_total: number | null;
    refunded_total: number;
    total: number;
    subtotal: number;
    paid_total: number;
    refundable_amount: number;
    gift_card_total: number;
    gift_card_tax_total: number;
    returnable_items?: LineItem[];
    private beforeInsert;
}
/**
 * @schema Order
 * title: "Order"
 * description: "Represents an order"
 * type: object
 * required:
 *   - billing_address_id
 *   - canceled_at
 *   - cart_id
 *   - created_at
 *   - currency_code
 *   - customer_id
 *   - draft_order_id
 *   - display_id
 *   - email
 *   - external_id
 *   - fulfillment_status
 *   - id
 *   - idempotency_key
 *   - metadata
 *   - no_notification
 *   - object
 *   - payment_status
 *   - region_id
 *   - shipping_address_id
 *   - status
 *   - tax_rate
 *   - updated_at
 * properties:
 *   id:
 *     description: The order's ID
 *     type: string
 *     example: order_01G8TJSYT9M6AVS5N4EMNFS1EK
 *   status:
 *     description: The order's status
 *     type: string
 *     enum:
 *       - pending
 *       - completed
 *       - archived
 *       - canceled
 *       - requires_action
 *     default: pending
 *   fulfillment_status:
 *     description: The order's fulfillment status
 *     type: string
 *     enum:
 *       - not_fulfilled
 *       - partially_fulfilled
 *       - fulfilled
 *       - partially_shipped
 *       - shipped
 *       - partially_returned
 *       - returned
 *       - canceled
 *       - requires_action
 *     default: not_fulfilled
 *   payment_status:
 *     description: The order's payment status
 *     type: string
 *     enum:
 *       - not_paid
 *       - awaiting
 *       - captured
 *       - partially_refunded
 *       - refunded
 *       - canceled
 *       - requires_action
 *     default: not_paid
 *   display_id:
 *     description: The order's display ID
 *     type: integer
 *     example: 2
 *   cart_id:
 *     description: The ID of the cart associated with the order
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: A cart object. Available if the relation `cart` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   customer_id:
 *     description: The ID of the customer associated with the order
 *     type: string
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: A customer object. Available if the relation `customer` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Customer"
 *   email:
 *     description: The email associated with the order
 *     type: string
 *     format: email
 *   billing_address_id:
 *     description: The ID of the billing address associated with the order
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   billing_address:
 *     description: Available if the relation `billing_address` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   shipping_address_id:
 *     description: The ID of the shipping address associated with the order
 *     nullable: true
 *     type: string
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: Available if the relation `shipping_address` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Address"
 *   region_id:
 *     description: The region's ID
 *     type: string
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: A region object. Available if the relation `region` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Region"
 *   currency_code:
 *     description: The 3 character currency code that is used in the order
 *     type: string
 *     example: usd
 *     externalDocs:
 *       url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *       description: See a list of codes.
 *   currency:
 *     description: Available if the relation `currency` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Currency"
 *   tax_rate:
 *     description: The order's tax rate
 *     nullable: true
 *     type: number
 *     example: 0
 *   discounts:
 *     description: The discounts used in the order. Available if the relation `discounts` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Discount"
 *   gift_cards:
 *     description: The gift cards used in the order. Available if the relation `gift_cards` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/GiftCard"
 *   shipping_methods:
 *     description: The shipping methods used in the order. Available if the relation `shipping_methods` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ShippingMethod"
 *   payments:
 *     description: The payments used in the order. Available if the relation `payments` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Payment"
 *   fulfillments:
 *     description: The fulfillments used in the order. Available if the relation `fulfillments` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Fulfillment"
 *   returns:
 *     description: The returns associated with the order. Available if the relation `returns` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Return"
 *   claims:
 *     description: The claims associated with the order. Available if the relation `claims` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ClaimOrder"
 *   refunds:
 *     description: The refunds associated with the order. Available if the relation `refunds` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Refund"
 *   swaps:
 *     description: The swaps associated with the order. Available if the relation `swaps` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Swap"
 *   draft_order_id:
 *     description: The ID of the draft order this order is associated with.
 *     nullable: true
 *     type: string
 *     example: null
 *   draft_order:
 *     description: A draft order object. Available if the relation `draft_order` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/DraftOrder"
 *   items:
 *     description: The line items that belong to the order. Available if the relation `items` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   edits:
 *     description: Order edits done on the order. Available if the relation `edits` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/OrderEdit"
 *   gift_card_transactions:
 *     description: The gift card transactions used in the order. Available if the relation `gift_card_transactions` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/GiftCardTransaction"
 *   canceled_at:
 *     description: The date the order was canceled on.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   no_notification:
 *     description: Flag for describing whether or not notifications related to this should be send.
 *     nullable: true
 *     type: boolean
 *     example: false
 *   idempotency_key:
 *     description: Randomly generated key used to continue the processing of the order in case of failure.
 *     nullable: true
 *     type: string
 *     externalDocs:
 *       url: https://docs.medusajs.com/advanced/backend/payment/overview#idempotency-key
 *       description: Learn more how to use the idempotency key.
 *   external_id:
 *     description: The ID of an external order.
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channel_id:
 *     description: The ID of the sales channel this order is associated with.
 *     nullable: true
 *     type: string
 *     example: null
 *   sales_channel:
 *     description: A sales channel object. Available if the relation `sales_channel` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/SalesChannel"
 *   shipping_total:
 *     type: integer
 *     description: The total of shipping
 *     example: 1000
 *   discount_total:
 *     description: The total of discount
 *     type: integer
 *     example: 800
 *   tax_total:
 *     description: The total of tax
 *     type: integer
 *     example: 0
 *   refunded_total:
 *     description: The total amount refunded if the order is returned.
 *     type: integer
 *     example: 0
 *   total:
 *     description: The total amount of the order
 *     type: integer
 *     example: 8200
 *   subtotal:
 *     description: The subtotal of the order
 *     type: integer
 *     example: 8000
 *   paid_total:
 *     description: The total amount paid
 *     type: integer
 *     example: 8000
 *   refundable_amount:
 *     description: The amount that can be refunded
 *     type: integer
 *     example: 8200
 *   gift_card_total:
 *     description: The total of gift cards
 *     type: integer
 *     example: 0
 *   gift_card_tax_total:
 *     description: The total of gift cards with taxes
 *     type: integer
 *     example: 0
 *   returnable_items:
 *     description: The items that are returnable as part of the order, order swaps or order claims
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/LineItem"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 */
