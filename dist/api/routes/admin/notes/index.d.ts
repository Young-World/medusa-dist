import { Note } from "../../../..";
import { DeleteResponse, PaginatedResponse } from "../../../../types/common";
import "reflect-metadata";
declare const _default: (app: any) => any;
export default _default;
/**
 * @schema AdminNotesRes
 * type: object
 * properties:
 *   note:
 *     $ref: "#/components/schemas/Note"
 */
export declare type AdminNotesRes = {
    note: Note;
};
/**
 * @schema AdminNotesDeleteRes
 * type: object
 * properties:
 *   id:
 *     type: string
 *     description: The ID of the deleted Note.
 *   object:
 *     type: string
 *     description: The type of the object that was deleted.
 *     default: note
 *   deleted:
 *     type: boolean
 *     description: Whether or not the Note was deleted.
 *     default: true
 */
export declare type AdminNotesDeleteRes = DeleteResponse;
/**
 * @schema AdminNotesListRes
 * type: object
 * properties:
 *   notes:
 *     type: array
 *     items:
 *       $ref: "#/components/schemas/Note"
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
export declare type AdminNotesListRes = PaginatedResponse & {
    notes: Note[];
};
export * from "./create-note";
export * from "./delete-note";
export * from "./get-note";
export * from "./list-notes";
export * from "./update-note";
