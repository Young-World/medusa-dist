import { PriceListStatus, PriceListType } from "../types/price-list";
import { CustomerGroup } from "./customer-group";
import { MoneyAmount } from "./money-amount";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class PriceList extends SoftDeletableEntity {
    name: string;
    description: string;
    type: PriceListType;
    status: PriceListStatus;
    starts_at: Date | null;
    ends_at: Date | null;
    customer_groups: CustomerGroup[];
    prices: MoneyAmount[];
    includes_tax: boolean;
    private beforeInsert;
}
/**
 * @schema PriceList
 * title: "Price List"
 * description: "Price Lists represents a set of prices that overrides the default price for one or more product variants."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - description
 *   - ends_at
 *   - id
 *   - name
 *   - starts_at
 *   - status
 *   - type
 *   - updated_at
 * properties:
 *   id:
 *     description: The price list's ID
 *     type: string
 *     example: pl_01G8X3CKJXCG5VXVZ87H9KC09W
 *   name:
 *     description: The price list's name
 *     type: string
 *     example: VIP Prices
 *   description:
 *     description: The price list's description
 *     type: string
 *     example: Prices for VIP customers
 *   type:
 *     description: The type of Price List. This can be one of either `sale` or `override`.
 *     type: string
 *     enum:
 *       - sale
 *       - override
 *     default: sale
 *   status:
 *     description: The status of the Price List
 *     type: string
 *     enum:
 *       - active
 *       - draft
 *     default: draft
 *   starts_at:
 *     description: The date with timezone that the Price List starts being valid.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   ends_at:
 *     description: The date with timezone that the Price List stops being valid.
 *     nullable: true
 *     type: string
 *     format: date-time
 *   customer_groups:
 *     description: The Customer Groups that the Price List applies to. Available if the relation `customer_groups` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
 *   prices:
 *     description: The Money Amounts that are associated with the Price List. Available if the relation `prices` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/MoneyAmount"
 *   includes_tax:
 *     description: "[EXPERIMENTAL] Does the price list prices include tax"
 *     type: boolean
 *     default: false
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
 */
