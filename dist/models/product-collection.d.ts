import { Product } from "./product";
import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
export declare class ProductCollection extends SoftDeletableEntity {
    title: string;
    handle: string;
    products: Product[];
    metadata: Record<string, unknown>;
    private createHandleIfNotProvided;
}
/**
 * @schema ProductCollection
 * title: "Product Collection"
 * description: "Product Collections represents a group of Products that are related."
 * type: object
 * required:
 *   - created_at
 *   - deleted_at
 *   - handle
 *   - id
 *   - metadata
 *   - title
 *   - updated_at
 * properties:
 *   id:
 *     description: The product collection's ID
 *     type: string
 *     example: pcol_01F0YESBFAZ0DV6V831JXWH0BG
 *   title:
 *     description: The title that the Product Collection is identified by.
 *     type: string
 *     example: Summer Collection
 *   handle:
 *     description: A unique string that identifies the Product Collection - can for example be used in slug structures.
 *     nullable: true
 *     type: string
 *     example: summer-collection
 *   products:
 *     description: The Products contained in the Product Collection. Available if the relation `products` is expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Product"
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
