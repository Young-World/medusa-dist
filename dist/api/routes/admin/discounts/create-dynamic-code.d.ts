import { Request, Response } from "express";
/**
 * @oas [post] /discounts/{id}/dynamic-codes
 * operationId: "PostDiscountsDiscountDynamicCodes"
 * summary: "Create a Dynamic Code"
 * description: "Creates a dynamic unique code that can map to a parent Discount. This is useful if you want to automatically generate codes with the same behaviour."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Discount to create the dynamic code from."
 * requestBody:
 *  content:
 *    application/json:
 *      schema:
 *        $ref: "#/components/schemas/AdminPostDiscountsDiscountDynamicCodesReq"
 * x-codegen:
 *   method: createDynamicCode
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.createDynamicCode(discount_id, {
 *         code: 'TEST',
 *         usage_limit: 1
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/discounts/{id}/dynamic-codes' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "code": "TEST"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Discount
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDiscountsRes"
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
/**
 * @schema AdminPostDiscountsDiscountDynamicCodesReq
 * type: object
 * required:
 *   - code
 * properties:
 *   code:
 *     type: string
 *     description: A unique code that will be used to redeem the Discount
 *   usage_limit:
 *     type: number
 *     description: Maximum times the discount can be used
 *     default: 1
 *   metadata:
 *     type: object
 *     description: An optional set of key-value pairs to hold additional information.
 */
export declare class AdminPostDiscountsDiscountDynamicCodesReq {
    code: string;
    usage_limit: number;
    metadata?: Record<string, unknown>;
}
