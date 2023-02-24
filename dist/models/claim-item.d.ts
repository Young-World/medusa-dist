import { ClaimImage } from "./claim-image";
import { ClaimOrder } from "./claim-order";
import { ClaimTag } from "./claim-tag";
import { LineItem } from "./line-item";
import { ProductVariant } from "./product-variant";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare enum ClaimReason {
    MISSING_ITEM = "missing_item",
    WRONG_ITEM = "wrong_item",
    PRODUCTION_FAILURE = "production_failure",
    OTHER = "other"
}
export declare class ClaimItem extends SoftDeletableEntity {
    images: ClaimImage[];
    claim_order_id: string;
    claim_order: ClaimOrder;
    item_id: string;
    item: LineItem;
    variant_id: string;
    variant: ProductVariant;
    reason: ClaimReason;
    note: string;
    quantity: number;
    tags: ClaimTag[];
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema ClaimItem
 * title: "Claim Item"
 * description: "Represents a claimed item along with information about the reasons for the claim."
 * type: object
 * required:
 *   - claim_order_id
 *   - created_at
 *   - deleted_at
 *   - id
 *   - item_id
 *   - metadata
 *   - note
 *   - quantity
 *   - reason
 *   - updated_at
 *   - variant_id
 * properties:
 *   id:
 *     description: The claim item's ID
 *     type: string
 *     example: citm_01G8ZH853Y6TFXWPG5EYE81X63
 *   images:
 *     description: Available if the relation `images` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ClaimImage"
 *   claim_order_id:
 *     description: The ID of the claim this item is associated with.
 *     type: string
 *   claim_order:
 *     description: A claim order object. Available if the relation `claim_order` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ClaimOrder"
 *   item_id:
 *     description: The ID of the line item that the claim item refers to.
 *     type: string
 *     example: item_01G8ZM25TN49YV9EQBE2NC27KC
 *   item:
 *     description: Available if the relation `item` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/LineItem"
 *   variant_id:
 *     description: The ID of the product variant that is claimed.
 *     type: string
 *     example: variant_01G1G5V2MRX2V3PVSR2WXYPFB6
 *   variant:
 *     description: A variant object. Available if the relation `variant` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ProductVariant"
 *   reason:
 *     description: The reason for the claim
 *     type: string
 *     enum:
 *       - missing_item
 *       - wrong_item
 *       - production_failure
 *       - other
 *   note:
 *     description: An optional note about the claim, for additional information
 *     nullable: true
 *     type: string
 *     example: "I don't like it."
 *   quantity:
 *     description: The quantity of the item that is being claimed; must be less than or equal to the amount purchased in the original order.
 *     type: integer
 *     example: 1
 *   tags:
 *     description: User defined tags for easy filtering and grouping. Available if the relation 'tags' is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ClaimTag"
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
