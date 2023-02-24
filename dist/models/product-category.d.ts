import { SoftDeletableEntity } from "../interfaces/models/soft-deletable-entity";
import { Product } from ".";
export declare class ProductCategory extends SoftDeletableEntity {
    static productCategoryProductJoinTable: string;
    static treeRelations: string[];
    name: string;
    handle: string;
    is_active: Boolean;
    is_internal: Boolean;
    parent_category: ProductCategory | null;
    parent_category_id: string | null;
    category_children: ProductCategory[];
    products: Product[];
    private beforeInsert;
}
/**
 * @schema ProductCategory
 * title: "ProductCategory"
 * description: "Represents a product category"
 * x-resourceId: ProductCategory
 * type: object
 * required:
 *   - category_children
 *   - created_at
 *   - deleted_at
 *   - handle
 *   - id
 *   - is_active
 *   - is_internal
 *   - mpath
 *   - name
 *   - parent_category_id
 *   - updated_at
 * properties:
 *   id:
 *     description: The product category's ID
 *     type: string
 *     example: pcat_01G2SG30J8C85S4A5CHM2S1NS2
 *   name:
 *     description: The product category's name
 *     type: string
 *     example: Regular Fit
 *   handle:
 *     description: A unique string that identifies the Product Category - can for example be used in slug structures.
 *     type: string
 *     example: regular-fit
 *   mpath:
 *     description: A string for Materialized Paths - used for finding ancestors and descendents
 *     nullable: true
 *     type: string
 *     example: pcat_id1.pcat_id2.pcat_id3
 *   is_internal:
 *     type: boolean
 *     description: A flag to make product category an internal category for admins
 *     default: false
 *   is_active:
 *     type: boolean
 *     description: A flag to make product category visible/hidden in the store front
 *     default: false
 *   category_children:
 *     description: Available if the relation `category_children` are expanded.
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/ProductCategory"
 *   parent_category_id:
 *     description: The ID of the parent category.
 *     nullable: true
 *     type: string
 *     default: null
 *   parent_category:
 *     description: A product category object. Available if the relation `parent_category` is expanded.
 *     nullable: true
 *     $ref: "#/components/schemas/ProductCategory"
 *   products:
 *     description: Products associated with category. Available if the relation `products` is expanded.
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
 */
