import { Cart } from "./cart";
import { ShippingOption } from "./shipping-option";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class CustomShippingOption extends SoftDeletableEntity {
    price: number;
    shipping_option_id: string;
    shipping_option: ShippingOption;
    cart_id: string;
    cart: Cart;
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema CustomShippingOption
 * title: "Custom Shipping Option"
 * description: "Custom Shipping Options are 'overriden' Shipping Options. Store managers can attach a Custom Shipping Option to a cart in order to set a custom price for a particular Shipping Option"
 * type: object
 * required:
 *   - cart_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - price
 *   - shipping_option_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The custom shipping option's ID
 *     type: string
 *     example: cso_01G8X99XNB77DMFBJFWX6DN9V9
 *   price:
 *     description: The custom price set that will override the shipping option's original price
 *     type: integer
 *     example: 1000
 *   shipping_option_id:
 *     description: The ID of the Shipping Option that the custom shipping option overrides
 *     type: string
 *     example: so_01G1G5V27GYX4QXNARRQCW1N8T
 *   shipping_option:
 *     description: A shipping option object. Available if the relation `shipping_option` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ShippingOption"
 *   cart_id:
 *     description: The ID of the Cart that the custom shipping option is attached to
 *     nullable: true
 *     type: string
 *     example: cart_01G8ZH853Y6TFXWPG5EYE81X63
 *   cart:
 *     description: A cart object. Available if the relation `cart` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/Cart"
 *   created_at:
 *     description: The date with timezone at which the resource was created.
 *     type: string
 *     format: date-time
 *   updated_at:
 *     description: The date with timezone at which the resource was updated.
 *     type: string
 *     format: date-time
 *   deleted_at:
 *     description: The date with timezone at which the resource was deleted.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   metadata:
 *     description: An optional key-value map with additional details
 *     nullable: true
 *     type: object
 *     example: {car: "white"}
 */
