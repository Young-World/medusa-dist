import { Customer } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminCustomersRes
 * type: object
 * properties:
 *   customer:
 *     $ref: "#/components/schemas/Customer"
 */
export declare type AdminCustomersRes = {
    customer: Customer;
};
/**
 * @schema AdminCustomersListRes
 * type: object
 * properties:
 *   customers:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Customer"
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
export declare type AdminCustomersListRes = PaginatedResponse & {
    customers: Customer[];
};
export declare const defaultAdminCustomersRelations: string[];
export * from "./create-customer";
export * from "./get-customer";
export * from "./list-customers";
export * from "./update-customer";
