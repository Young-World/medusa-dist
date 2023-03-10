import { CustomerGroup } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCustomerGroupsRes
 * type: object
 * properties:
 *   customer_group:
 *     $ref: "#/components/schemas/CustomerGroup"
 */
export declare type AdminCustomerGroupsRes = {
    customer_group: CustomerGroup;
};
/**
 * @schema AdminCustomerGroupsDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted customer group.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: customer_group
 *   deleted:
 *     type: boolean
 *     description: Whether the customer group was deleted successfully or not.
 *     default: true
 */
export declare type AdminCustomerGroupsDeleteRes = DeleteResponse;
/**
 * @schema AdminCustomerGroupsListRes
 * type: object
 * properties:
 *   customer_groups:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/CustomerGroup"
 *   count:
 *     type: integer
 *     description: The total number of items available
 *   offset:
 *     type: integer
 *     description: The number of items skipped before these items
 *   limit:
 *     type: integer
 *     description: The number of items per page
 */
export declare type AdminCustomerGroupsListRes = PaginatedResponse & {
    customer_groups: CustomerGroup[];
};
export declare const defaultAdminCustomerGroupsRelations: never[];
export * from "./add-customers-batch";
export * from "./create-customer-group";
export * from "./delete-customers-batch";
export * from "./get-customer-group";
export * from "./list-customer-groups";
export * from "./update-customer-group";
