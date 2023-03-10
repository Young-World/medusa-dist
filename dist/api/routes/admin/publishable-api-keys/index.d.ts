import { PublishableApiKey, SalesChannel } from "../../../../models";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => void;
export default _default;
/**
 * @schema AdminPublishableApiKeysRes
 * type: object
 * properties:
 *   publishable_api_key:
 *     $ref: "#/components/schemas/PublishableApiKey"
 */
export declare type AdminPublishableApiKeysRes = {
    publishable_api_key: PublishableApiKey;
};
/**
 * @schema AdminPublishableApiKeysListRes
 * type: object
 * properties:
 *   publishable_api_keys:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/PublishableApiKey"
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
export declare type AdminPublishableApiKeysListRes = PaginatedResponse & {
    publishable_api_keys: PublishableApiKey[];
};
/**
 * @schema AdminPublishableApiKeyDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted PublishableApiKey.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: publishable_api_key
 *   deleted:
 *     type: boolean
 *     description: Whether the PublishableApiKeys was deleted.
 *     default: true
 */
export declare type AdminPublishableApiKeyDeleteRes = DeleteResponse;
/**
 * @schema AdminPublishableApiKeysListSalesChannelsRes
 * type: object
 * properties:
 *   sales_channels:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/SalesChannel"
 */
export declare type AdminPublishableApiKeysListSalesChannelsRes = {
    sales_channels: SalesChannel[];
};
export * from "./add-channels-batch";
export * from "./delete-channels-batch";
export * from "./list-publishable-api-keys";
export * from "./list-publishable-api-key-sales-channels";
export * from "./create-publishable-api-key";
export * from "./update-publishable-api-key";
