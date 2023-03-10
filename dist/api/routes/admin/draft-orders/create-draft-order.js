"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostDraftOrdersReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var class_transformer_1 = require("class-transformer");
var common_1 = require("../../../../types/common");
var validator_1 = require("../../../../utils/validator");
var is_type_1 = require("../../../../utils/validators/is-type");
/**
 * @oas [post] /draft-orders
 * operationId: "PostDraftOrders"
 * summary: "Create a Draft Order"
 * description: "Creates a Draft Order"
 * x-authenticated: true
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostDraftOrdersReq"
 * x-codegen:
 *   method: create
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.draftOrders.create({
 *         email: 'user@example.com',
 *         region_id,
 *         items: [
 *           {
 *             quantity: 1
 *           }
 *         ],
 *         shipping_methods: [
 *           {
 *             option_id
 *           }
 *         ],
 *       })
 *       .then(({ draft_order }) => {
 *         console.log(draft_order.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/draft-orders' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "email": "user@example.com",
 *           "region_id": "{region_id}"
 *           "items": [
 *              {
 *                "quantity": 1
 *              }
 *           ],
 *           "shipping_methods": [
 *              {
 *                "option_id": "{option_id}"
 *              }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Draft Order
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminDraftOrdersRes"
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
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var validated, shipping_address, billing_address, rest, draftOrderDataToCreate, draftOrderService, manager, draftOrder, cartService, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(AdminPostDraftOrdersReq, req.body)];
            case 1:
                validated = _b.sent();
                shipping_address = validated.shipping_address, billing_address = validated.billing_address, rest = __rest(validated, ["shipping_address", "billing_address"]);
                draftOrderDataToCreate = __assign({}, rest);
                if (typeof shipping_address === "string") {
                    draftOrderDataToCreate.shipping_address_id = shipping_address;
                }
                else {
                    draftOrderDataToCreate.shipping_address = shipping_address;
                }
                if (typeof billing_address === "string") {
                    draftOrderDataToCreate.billing_address_id = billing_address;
                }
                else {
                    draftOrderDataToCreate.billing_address = billing_address;
                }
                draftOrderService = req.scope.resolve("draftOrderService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, draftOrderService
                                        .withTransaction(transactionManager)
                                        .create(draftOrderDataToCreate)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 2:
                draftOrder = _b.sent();
                return [4 /*yield*/, draftOrderService.retrieve(draftOrder.id, {
                        relations: _1.defaultAdminDraftOrdersRelations,
                        select: _1.defaultAdminDraftOrdersFields,
                    })];
            case 3:
                draftOrder = _b.sent();
                cartService = req.scope.resolve("cartService");
                _a = draftOrder;
                return [4 /*yield*/, cartService
                        .withTransaction(manager)
                        .retrieveWithTotals(draftOrder.cart_id, {
                        relations: _1.defaultAdminDraftOrdersCartRelations,
                        select: _1.defaultAdminDraftOrdersCartFields,
                    })];
            case 4:
                _a.cart = _b.sent();
                res.status(200).json({ draft_order: draftOrder });
                return [2 /*return*/];
        }
    });
}); });
var Status;
(function (Status) {
    Status["open"] = "open";
    Status["completed"] = "completed";
})(Status || (Status = {}));
/**
 * @schema AdminPostDraftOrdersReq
 * type: object
 * required:
 *   - email
 *   - region_id
 *   - shipping_methods
 * properties:
 *   status:
 *     description: "The status of the draft order"
 *     type: string
 *     enum: [open, completed]
 *   email:
 *     description: "The email of the customer of the draft order"
 *     type: string
 *     format: email
 *   billing_address:
 *     description: "The Address to be used for billing purposes."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *       - type: string
 *   shipping_address:
 *     description: "The Address to be used for shipping."
 *     anyOf:
 *       - $ref: "#/components/schemas/AddressFields"
 *       - type: string
 *   items:
 *     description: The Line Items that have been received.
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - quantity
 *       properties:
 *         variant_id:
 *           description: The ID of the Product Variant to generate the Line Item from.
 *           type: string
 *         unit_price:
 *           description: The potential custom price of the item.
 *           type: integer
 *         title:
 *           description: The potential custom title of the item.
 *           type: string
 *         quantity:
 *           description: The quantity of the Line Item.
 *           type: integer
 *         metadata:
 *           description: The optional key-value map with additional details about the Line Item.
 *           type: object
 *   region_id:
 *     description: The ID of the region for the draft order
 *     type: string
 *   discounts:
 *     description: The discounts to add on the draft order
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - code
 *       properties:
 *         code:
 *           description: The code of the discount to apply
 *           type: string
 *   customer_id:
 *     description: The ID of the customer to add on the draft order
 *     type: string
 *   no_notification_order:
 *     description: An optional flag passed to the resulting order to determine use of notifications.
 *     type: boolean
 *   shipping_methods:
 *     description: The shipping methods for the draft order
 *     type: array
 *     items:
 *       type: object
 *       required:
 *          - option_id
 *       properties:
 *         option_id:
 *           description: The ID of the shipping option in use
 *           type: string
 *         data:
 *           description: The optional additional data needed for the shipping method
 *           type: object
 *         price:
 *           description: The potential custom price of the shipping
 *           type: integer
 *   metadata:
 *     description: The optional key-value map with additional details about the Draft Order.
 *     type: object
 */
var AdminPostDraftOrdersReq = /** @class */ (function () {
    function AdminPostDraftOrdersReq() {
        this.metadata = {};
    }
    __decorate([
        (0, class_validator_1.IsEnum)(Status),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersReq.prototype, "status", void 0);
    __decorate([
        (0, class_validator_1.IsEmail)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersReq.prototype, "email", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersReq.prototype, "billing_address", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([common_1.AddressPayload, String]),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersReq.prototype, "shipping_address", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return Item; }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], AdminPostDraftOrdersReq.prototype, "items", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersReq.prototype, "region_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Discount; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostDraftOrdersReq.prototype, "discounts", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDraftOrdersReq.prototype, "customer_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostDraftOrdersReq.prototype, "no_notification_order", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_transformer_1.Type)(function () { return ShippingMethod; }),
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        __metadata("design:type", Array)
    ], AdminPostDraftOrdersReq.prototype, "shipping_methods", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostDraftOrdersReq.prototype, "metadata", void 0);
    return AdminPostDraftOrdersReq;
}());
exports.AdminPostDraftOrdersReq = AdminPostDraftOrdersReq;
var ShippingMethod = /** @class */ (function () {
    function ShippingMethod() {
        this.data = {};
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ShippingMethod.prototype, "option_id", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], ShippingMethod.prototype, "data", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], ShippingMethod.prototype, "price", void 0);
    return ShippingMethod;
}());
var Discount = /** @class */ (function () {
    function Discount() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], Discount.prototype, "code", void 0);
    return Discount;
}());
var Item = /** @class */ (function () {
    function Item() {
        this.metadata = {};
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Item.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], Item.prototype, "unit_price", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], Item.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        __metadata("design:type", Number)
    ], Item.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], Item.prototype, "metadata", void 0);
    return Item;
}());
//# sourceMappingURL=create-draft-order.js.map