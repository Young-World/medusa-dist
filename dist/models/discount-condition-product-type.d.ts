import { DiscountCondition } from "./discount-condition";
import { ProductType } from "./product-type";
export declare class DiscountConditionProductType {
    product_type_id: string;
    condition_id: string;
    product_type?: ProductType;
    discount_condition?: DiscountCondition;
    created_at: Date;
    updated_at: Date;
    metadata: Record<string, unknown>;
}
/**
 * @schema DiscountConditionProductType
 * title: "Product Type Discount Condition"
 * description: "Associates a discount condition with a product type"
 * type: object
 * required:
 *   - condition_id
 *   - created_at
 *   - metadata
 *   - product_type_id
 *   - updated_at
 * properties:
 *   product_type_id:
 *     description: The ID of the Product Tag
 *     type: string
 *     example: ptyp_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   condition_id:
 *     description: The ID of the Discount Condition
 *     type: string
 *     example: discon_01G8X9A7ESKAJXG2H0E6F1MW7A
 *   product_type:
 *     description: Available if the relation `product_type` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ProductType"
 *   discount_condition:
 *     description: Available if the relation `discount_condition` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/DiscountCondition"
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
