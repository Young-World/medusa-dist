import { Request, Response } from "express";
import { FulfillmentStatus, OrderStatus, PaymentStatus } from "../../../../models/order";
import { DateComparisonOperator } from "../../../../types/common";
/**
 * @oas [get] /customers/me/orders
 * operationId: GetCustomersCustomerOrders
 * summary: List Orders
 * description: "Retrieves a list of a Customer's Orders."
 * x-authenticated: true
 * parameters:
 *   - (query) q {string} Query used for searching orders.
 *   - (query) id {string} Id of the order to search for.
 *   - in: query
 *     name: status
 *     style: form
 *     explode: false
 *     description: Status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *   - in: query
 *     name: fulfillment_status
 *     style: form
 *     explode: false
 *     description: Fulfillment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *   - in: query
 *     name: payment_status
 *     style: form
 *     explode: false
 *     description: Payment status to search for.
 *     schema:
 *         type: array
 *         items:
 *           type: string
 *   - (query) display_id {string} Display id to search for.
 *   - (query) cart_id {string} to search for.
 *   - (query) email {string} to search for.
 *   - (query) region_id {string} to search for.
 *   - in: query
 *     name: currency_code
 *     style: form
 *     explode: false
 *     description: The 3 character ISO currency code to set prices based on.
 *     schema:
 *       type: string
 *       externalDocs:
 *         url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *         description: See a list of codes.
 *   - (query) tax_rate {string} to search for.
 *   - in: query
 *     name: created_at
 *     description: Date comparison for when resulting collections were created.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: updated_at
 *     description: Date comparison for when resulting collections were updated.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - in: query
 *     name: canceled_at
 *     description: Date comparison for when resulting collections were canceled.
 *     schema:
 *       type: object
 *       properties:
 *         lt:
 *            type: string
 *            description: filter by dates less than this date
 *            format: date
 *         gt:
 *            type: string
 *            description: filter by dates greater than this date
 *            format: date
 *         lte:
 *            type: string
 *            description: filter by dates less than or equal to this date
 *            format: date
 *         gte:
 *            type: string
 *            description: filter by dates greater than or equal to this date
 *            format: date
 *   - (query) limit=10 {integer} How many orders to return.
 *   - (query) offset=0 {integer} The offset in the resulting orders.
 *   - (query) fields {string} (Comma separated string) Which fields should be included in the resulting orders.
 *   - (query) expand {string} (Comma separated string) Which relations should be expanded in the resulting orders.
 * x-codegen:
 *   method: listOrders
 *   queryParams: StoreGetCustomersCustomerOrdersParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged
 *       medusa.customers.listOrders()
 *       .then(({ orders, limit, offset, count }) => {
 *         console.log(orders);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/customers/me/orders' \
 *       --header 'Cookie: connect.sid={sid}'
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
 *           $ref: "#/components/schemas/StoreCustomersListOrdersRes"
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
declare const _default: (req: Request, res: Response) => Promise<void>;
export default _default;
export declare class StoreGetCustomersCustomerOrdersPaginationParams {
    limit: number;
    offset: number;
    fields?: string;
    expand?: string;
}
export declare class StoreGetCustomersCustomerOrdersParams extends StoreGetCustomersCustomerOrdersPaginationParams {
    id?: string;
    q?: string;
    status?: OrderStatus[];
    fulfillment_status?: FulfillmentStatus[];
    payment_status?: PaymentStatus[];
    display_id?: string;
    cart_id?: string;
    email?: string;
    region_id?: string;
    currency_code?: string;
    tax_rate?: string;
    created_at?: DateComparisonOperator;
    updated_at?: DateComparisonOperator;
    canceled_at?: DateComparisonOperator;
}
