"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorePostCartsCartLineItemsReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /carts/{id}/line-items
 * operationId: PostCartsCartLineItems
 * summary: "Add a Line Item"
 * description: "Generates a Line Item with a given Product Variant and adds it
 *   to the Cart"
 * parameters:
 *   - (path) id=* {string} The id of the Cart to add the Line Item to.
 *   - (body) variant_id=* {string} The id of the Product Variant to generate the Line Item from.
 *   - (body) quantity=* {integer} The quantity of the Product Variant to add to the Line Item.
 *   - (body) metadata {object} An optional key-value map with additional details about the Line Item.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.carts.lineItems.create(cart_id, {
 *         variant_id,
 *         quantity: 1
 *       })
 *       .then(({ cart }) => {
 *         console.log(cart.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/carts/{id}/line-items' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "variant_id": "{variant_id}",
 *           "quantity": 1
 *       }'
 * tags:
 *   - Cart
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             cart:
 *               $ref: "#/components/schemas/cart"
 *   "400":
 *     $ref: "#/components/responses/400_error"
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
    var id, customerId, validated, lineItemService, cartService, manager, featureFlagRouter, data;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = req.params.id;
                customerId = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id;
                return [4 /*yield*/, (0, validator_1.validator)(StorePostCartsCartLineItemsReq, req.body)];
            case 1:
                validated = _b.sent();
                lineItemService = req.scope.resolve("lineItemService");
                cartService = req.scope.resolve("cartService");
                manager = req.scope.resolve("manager");
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                return [4 /*yield*/, manager.transaction(function (m) { return __awaiter(void 0, void 0, void 0, function () {
                        var txCartService, cart, line, updated;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    txCartService = cartService.withTransaction(m);
                                    return [4 /*yield*/, txCartService.retrieve(id)];
                                case 1:
                                    cart = _b.sent();
                                    return [4 /*yield*/, lineItemService
                                            .withTransaction(m)
                                            .generate(validated.variant_id, cart.region_id, validated.quantity, {
                                            customer_id: customerId || cart.customer_id,
                                            metadata: validated.metadata,
                                        })];
                                case 2:
                                    line = _b.sent();
                                    return [4 /*yield*/, txCartService.addLineItem(id, line, {
                                            validateSalesChannels: featureFlagRouter.isFeatureEnabled("sales_channels"),
                                        })];
                                case 3:
                                    _b.sent();
                                    return [4 /*yield*/, txCartService.retrieve(id, {
                                            relations: ["payment_sessions"],
                                        })];
                                case 4:
                                    updated = _b.sent();
                                    if (!((_a = updated.payment_sessions) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 6];
                                    return [4 /*yield*/, txCartService.setPaymentSessions(id)];
                                case 5:
                                    _b.sent();
                                    _b.label = 6;
                                case 6: return [2 /*return*/];
                            }
                        });
                    }); })];
            case 2:
                _b.sent();
                return [4 /*yield*/, cartService.retrieveWithTotals(id, {
                        select: _1.defaultStoreCartFields,
                        relations: _1.defaultStoreCartRelations,
                    })];
            case 3:
                data = _b.sent();
                res.status(200).json({ cart: data });
                return [2 /*return*/];
        }
    });
}); });
var StorePostCartsCartLineItemsReq = /** @class */ (function () {
    function StorePostCartsCartLineItemsReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StorePostCartsCartLineItemsReq.prototype, "variant_id", void 0);
    __decorate([
        (0, class_validator_1.IsInt)(),
        __metadata("design:type", Number)
    ], StorePostCartsCartLineItemsReq.prototype, "quantity", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], StorePostCartsCartLineItemsReq.prototype, "metadata", void 0);
    return StorePostCartsCartLineItemsReq;
}());
exports.StorePostCartsCartLineItemsReq = StorePostCartsCartLineItemsReq;
//# sourceMappingURL=create-line-item.js.map