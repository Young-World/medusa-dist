import { AddressCreatePayload } from "../../../../types/common";
/**
 * @oas [post] /customers/me/addresses
 * operationId: PostCustomersCustomerAddresses
 * summary: "Add a Shipping Address"
 * description: "Adds a Shipping Address to a Customer's saved addresses."
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/StorePostCustomersCustomerAddressesReq"
 * x-codegen:
 *   method: addAddress
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.addresses.addAddress({
 *         address: {
 *           first_name: 'Celia',
 *           last_name: 'Schumm',
 *           address_1: '225 Bednar Curve',
 *           city: 'Danielville',
 *           country_code: 'US',
 *           postal_code: '85137',
 *           phone: '981-596-6748 x90188',
 *           company: 'Wyman LLC',
 *           address_2: '',
 *           province: 'Georgia',
 *           metadata: {}
 *         }
 *       })
 *       .then(({ customer }) => {
 *         console.log(customer.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/customers/me/addresses' \
 *       --header 'Cookie: connect.sid={sid}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "address": {
 *             "first_name": "Celia",
 *             "last_name": "Schumm",
 *             "address_1": "225 Bednar Curve",
 *             "city": "Danielville",
 *             "country_code": "US",
 *             "postal_code": "85137"
 *           }
 *       }'
 * security:
 *   - cookie_auth: []
 * tags:
 *   - Customer
 * responses:
 *  "200":
 *    description: "A successful response"
 *    content:
 *      application/json:
 *        schema:
 *          $ref: "#/components/schemas/StoreCustomersRes"
 *  "400":
 *    $ref: "#/components/responses/400_error"
 *  "401":
 *    $ref: "#/components/responses/unauthorized"
 *  "404":
 *    $ref: "#/components/responses/not_found_error"
 *  "409":
 *    $ref: "#/components/responses/invalid_state_error"
 *  "422":
 *    $ref: "#/components/responses/invalid_request_error"
 *  "500":
 *    $ref: "#/components/responses/500_error"
 */
declare const _default: (req: any, res: any) => Promise<void>;
export default _default;
/**
 * @schema StorePostCustomersCustomerAddressesReq
 * type: object
 * required:
 *   - address
 * properties:
 *   address:
 *     description: "The Address to add to the Customer."
 *     allOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *       - type: object
 *         required:
 *           - first_name
 *           - last_name
 *           - address_1
 *           - city
 *           - country_code
 *           - postal_code
 */
export declare class StorePostCustomersCustomerAddressesReq {
    address: AddressCreatePayload;
}
