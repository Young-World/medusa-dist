import { User } from "../../../..";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminAuthRes
 * type: object
 * properties:
 *   user:
 *     $ref: "#/components/schemas/User"
 */
export declare type AdminAuthRes = {
    user: Omit<User, "password_hash">;
};
export * from "./create-session";
export * from "./delete-session";
export * from "./get-session";
