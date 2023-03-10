import { AddressPayload } from "../../../../types/common";
/**
 * @oas [post] /customers/me
 * operationId: PostCustomersCustomer
 * summary: Update Customer
 * description: "Updates a Customer's saved details."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerReq"
 * x-codegen:
 *   method: update
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.update({
 *         first_name: 'Laury'
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/customers/me' \
 *       --header 'Cookie: connect.sid={sid}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "first_name": "Laury"
 *       }'
 * security:
 *   - cookie_auth: []
 * tags:
 *   - Customer
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreCustomersRes"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "409":
 *     $ref: "#/components/responses/invalid_state_error"
 *   "422":
 *     $ref: "#/components/responses/invalid_request_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema StorePostCustomersCustomerReq
 * type: object
 * properties:
 *   first_name:
 *     description: "The Customer's first name."
 *     type: string
 *   last_name:
 *     description: "The Customer's last name."
 *     type: string
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *         description: The full billing address object
 *       - type: string
 *         description: The ID of an existing billing address
 *   password:
 *     description: "The Customer's password."
 *     type: string
 *   phone:
 *     description: "The Customer's phone number."
 *     type: string
 *   email:
 *     description: "The email of the customer."
 *     type: string
 *   metadata:
 *     description: "Metadata about the customer."
 *     type: object
 */
export declare class StorePostCustomersCustomerReq {
    billing_address?: AddressPayload | string;
    first_name?: string;
    last_name?: string;
    password?: string;
    phone?: string;
    email?: string;
    metadata?: Record<string, unknown>;
}
