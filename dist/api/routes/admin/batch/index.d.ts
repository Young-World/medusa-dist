import { BatchJob } from "../../../..";
import { PaginatedResponse } from "../../../../types/common";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminBatchJobRes
 * type: object
 * properties:
 *   batch_job:
 *     $ref: "#/components/schemas/BatchJob"
 */
export declare type AdminBatchJobRes = {
    batch_job: BatchJob;
};
/**
 * @schema AdminBatchJobListRes
 * type: object
 * properties:
 *   batch_jobs:
 *      type: array
 *      items:
 *        $ref: "#/components/schemas/BatchJob"
 *   count:
 *      type: integer
 *      description: The total number of items available
 *   offset:
 *      type: integer
 *      description: The number of items skipped before these items
 *   limit:
 *      type: integer
 *      description: The number of items per page
 */
export declare type AdminBatchJobListRes = PaginatedResponse & {
    batch_jobs: BatchJob[];
};
export declare const defaultAdminBatchFields: string[];
export * from "./cancel-batch-job";
export * from "./confirm-batch-job";
export * from "./create-batch-job";
export * from "./get-batch-job";
export * from "./list-batch-jobs";
