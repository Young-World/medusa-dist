import { User } from "../../../..";
import { DeleteResponse } from "../../../../types/common";
export declare const unauthenticatedUserRoutes: (app: any) => void;
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminUserRes
 * type: object
 * properties:
 *   user:
 *     $ref: "#/components/schemas/User"
 */
export declare type AdminUserRes = {
    user: Omit<User, "password_hash">;
};
/**
 * @schema AdminUsersListRes
 * type: object
 * properties:
 *   users:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/User"
 */
export declare type AdminUsersListRes = {
    users: Omit<User, "password_hash">[];
};
/**
 * @schema AdminDeleteUserRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted user.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: user
 *   deleted:
 *     type: boolean
 *     description: Whether or not the items were deleted.
 *     default: true
 */
export declare type AdminDeleteUserRes = DeleteResponse;
export * from "./reset-password";
export * from "./reset-password-token";
export * from "./create-user";
export * from "./delete-user";
export * from "./get-user";
export * from "./list-users";
export * from "./update-user";
