import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class ProductTag extends SoftDeletableEntity {
    value: string;
    metadata: Record<string, unknown>;
    private beforeInsert;
}
/**
 * @schema ProductTag
 * title: "Product Tag"
 * description: "Product Tags can be added to Products for easy filtering and grouping."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - id
 *   - metadata
 *   - updated_at
 *   - value
 * properties:
 *   id:
 *     description: The product tag's ID
 *     type: string
 *     example: ptag_01G8K2MTMG9168F2B70S1TAVK3
 *   value:
 *     description: The value that the Product Tag represents
 *     type: string
 *     example: Pants
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
