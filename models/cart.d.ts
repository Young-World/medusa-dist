/**
 * @schema cart
 * title: "Cart"
 * description: "Represents a user cart"
 * x-resourceId: cart
 * properties:
 *   id:
 *     type: string
 *     description: The cart's ID
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   email:
 *     type: string
 *     description: The email associated with the cart
 *     format: email
 *   billing_address_id:
 *     type: string
 *     description: The billing address's ID
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   billing_address:
 *     description: Available if the relation `billing_address` is expanded.
 *     $ref: "#/components/schemas/address"
 *   shipping_address_id:
 *     type: string
 *     description: The shipping address's ID
 *     example: addr_01G8ZH853YPY9B94857DY91YGW
 *   shipping_address:
 *     description: Available if the relation `shipping_address` is expanded.
 *     $ref: "#/components/schemas/address"
 *   items:
 *     description: Available if the relation `items` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/line_item"
 *   region_id:
 *     type: string
 *     description: The region's ID
 *     example: reg_01G1G5V26T9H8Y0M4JNE3YGA4G
 *   region:
 *     description: A region object. Available if the relation `region` is expanded.
 *     type: object
 *   discounts:
 *     type: array
 *     description: Available if the relation `discounts` is expanded.
 *     items:
 *       type: object
 *       description: A discount object.
 *   gift_cards:
 *     type: array
 *     description: Available if the relation `gift_cards` is expanded.
 *     items:
 *       type: object
 *       description: A gift card object.
 *   customer_id:
 *     type: string
 *     description: The customer's ID
 *     example: cus_01G2SG30J8C85S4A5CHM2S1NS2
 *   customer:
 *     description: A customer object. Available if the relation `customer` is expanded.
 *     type: object
 *   payment_session:
 *     description: The selected payment session in the cart.
 *     $ref: "#/components/schemas/payment_session"
 *   payment_sessions:
 *     type: array
 *     description: The payment sessions created on the cart.
 *     items:
 *       $ref: "#/components/schemas/payment_session"
 *   payment_id:
 *     type: string
 *     description: The payment's ID if available
 *     example: pay_01G8ZCC5W42ZNY842124G7P5R9
 *   payment:
 *     description: Available if the relation `payment` is expanded.
 *     $ref: "#/components/schemas/payment"
 *   shipping_methods:
 *     type: array
 *     description: The shipping methods added to the cart.
 *     items:
 *       $ref: "#/components/schemas/shipping_method"
 *   type:
 *     type: string
 *     description: The cart's type.
 *     enum:
 *       - default
 *       - swap
 *       - draft_order
 *       - payment_link
 *       - claim
 *     default: default
 *   completed_at:
 *     type: string
 *     description: "The date with timezone at which the cart was completed."
 *     format: date-time
 *   payment_authorized_at:
 *     type: string
 *     description: "The date with timezone at which the payment was authorized."
 *     format: date-time
 *   idempotency_key:
 *     type: string
 *     description: Randomly generated key used to continue the completion of a cart in case of failure.
 *     externalDocs:
 *       url: https://docs.medusajs.com/advanced/backend/payment/overview#idempotency-key
 *       description: Learn more how to use the idempotency key.
 *   context:
 *     type: object
 *     description: "The context of the cart which can include info like IP or user agent."
 *     example:
 *       ip: "::1"
 *       user_agent: "PostmanRuntime/7.29.2"
 *   sales_channel_id:
 *     type: string
 *     description: The sales channel ID the cart is associated with.
 *     example: null
 *   sales_channel:
 *     description: A sales channel object. Available if the relation `sales_channel` is expanded.
 *     type: object
 *   created_at:
 *     type: string
 *     description: "The date with timezone at which the resource was created."
 *     format: date-time
 *   updated_at:
 *     type: string
 *     description: "The date with timezone at which the resource was updated."
 *     format: date-time
 *   deleted_at:
 *     type: string
 *     description: "The date with timezone at which the resource was deleted."
 *     format: date-time
 *   metadata:
 *     type: object
 *     description: An optional key-value map with additional details
 *     example: {car: "white"}
 *   shipping_total:
 *     type: integer
 *     description: The total of shipping
 *     example: 1000
 *   discount_total:
 *     type: integer
 *     description: The total of discount
 *     example: 800
 *   tax_total:
 *     type: integer
 *     description: The total of tax
 *     example: 0
 *   refunded_total:
 *     type: integer
 *     description: The total amount refunded if the order associated with this cart is returned.
 *     example: 0
 *   total:
 *     type: integer
 *     description: The total amount of the cart
 *     example: 8200
 *   subtotal:
 *     type: integer
 *     description: The subtotal of the cart
 *     example: 8000
 *   refundable_amount:
 *     type: integer
 *     description: The amount that can be refunded
 *     example: 8200
 *   gift_card_total:
 *     type: integer
 *     description: The total of gift cards
 *     example: 0
 *   gift_card_tax_total:
 *     type: integer
 *     description: The total of gift cards with taxes
 *     example: 0
 */
import { Address } from "./address";
import { Customer } from "./customer";
import { Discount } from "./discount";
import { GiftCard } from "./gift-card";
import { LineItem } from "./line-item";
import { Payment } from "./payment";
import { PaymentSession } from "./payment-session";
import { Region } from "./region";
import { SalesChannel } from "./sales-channel";
import { ShippingMethod } from "./shipping-method";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare enum CartType {
    DEFAULT = "default",
    SWAP = "swap",
    DRAFT_ORDER = "draft_order",
    PAYMENT_LINK = "payment_link",
    CLAIM = "claim"
}
export declare class Cart extends SoftDeletableEntity {
    readonly object = "cart";
    email: string;
    billing_address_id: string;
    billing_address: Address;
    shipping_address_id: string;
    shipping_address: Address | null;
    items: LineItem[];
    region_id: string;
    region: Region;
    discounts: Discount[];
    gift_cards: GiftCard[];
    customer_id: string;
    customer: Customer;
    payment_session: PaymentSession | null;
    payment_sessions: PaymentSession[];
    payment_id: string;
    payment: Payment;
    shipping_methods: ShippingMethod[];
    type: CartType;
    completed_at: Date;
    payment_authorized_at: Date;
    idempotency_key: string;
    context: Record<string, unknown>;
    metadata: Record<string, unknown>;
    sales_channel_id: string | null;
    sales_channel: SalesChannel;
    shipping_total?: number;
    discount_total?: number;
    item_tax_total?: number | null;
    shipping_tax_total?: number | null;
    tax_total?: number | null;
    refunded_total?: number;
    total?: number;
    subtotal?: number;
    refundable_amount?: number;
    gift_card_total?: number;
    gift_card_tax_total?: number;
    private afterLoad;
    private beforeInsert;
}
