"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostDiscountsDiscountConditionsParams = exports.AdminPostDiscountsDiscountConditions = void 0;
var models_1 = require("../../../../models");
var class_validator_1 = require("class-validator");
var _1 = require(".");
var discount_1 = require("../../../../types/discount");
var get_query_config_1 = require("../../../../utils/get-query-config");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /discounts/{discount_id}/conditions
 * operationId: "PostDiscountsDiscountConditions"
 * summary: "Create a Condition"
 * description: "Creates a DiscountCondition. Only one of `products`, `product_types`, `product_collections`, `product_tags`, and `customer_groups` should be provided."
 * x-authenticated: true
 * parameters:
 *   - (path) discount_id=* {string} The ID of the Product.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in each product of the result.
 *   - (query) fields {string} (Comma separated) Which fields should be included in each product of the result.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         required:
 *           - operator
 *         properties:
 *           operator:
 *              description: Operator of the condition
 *              type: string
 *              enum: [in, not_in]
 *           products:
 *              type: array
 *              description: list of product IDs if the condition is applied on products.
 *              items:
 *                type: string
 *           product_types:
 *              type: array
 *              description: list of product type IDs if the condition is applied on product types.
 *              items:
 *                type: string
 *           product_collections:
 *              type: array
 *              description: list of product collection IDs if the condition is applied on product collections.
 *              items:
 *                type: string
 *           product_tags:
 *              type: array
 *              description: list of product tag IDs if the condition is applied on product tags.
 *              items:
 *                type: string
 *           customer_groups:
 *              type: array
 *              description: list of customer group IDs if the condition is applied on customer groups.
 *              items:
 *                type: string
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       import { DiscountConditionOperator } from "@medusajs/medusa"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.discounts.createCondition(discount_id, {
 *         operator: DiscountConditionOperator.IN
 *       })
 *       .then(({ discount }) => {
 *         console.log(discount.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/discounts/{id}/conditions' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "operator": "in"
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Discount Condition
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             discount:
 *               $ref: "#/components/schemas/discount"
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
    var discount_id, validatedCondition, validatedParams, conditionService, discountService, discount, manager, config;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                discount_id = req.params.discount_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostDiscountsDiscountConditions, req.body)];
            case 1:
                validatedCondition = _c.sent();
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostDiscountsDiscountConditionsParams, req.query)];
            case 2:
                validatedParams = _c.sent();
                conditionService = req.scope.resolve("discountConditionService");
                discountService = req.scope.resolve("discountService");
                return [4 /*yield*/, discountService.retrieve(discount_id)];
            case 3:
                discount = _c.sent();
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, conditionService
                                        .withTransaction(transactionManager)
                                        .upsertCondition(__assign(__assign({}, validatedCondition), { rule_id: discount.rule_id }))];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 4:
                _c.sent();
                config = (0, get_query_config_1.getRetrieveConfig)(_1.defaultAdminDiscountsFields, _1.defaultAdminDiscountsRelations, (_a = validatedParams === null || validatedParams === void 0 ? void 0 : validatedParams.fields) === null || _a === void 0 ? void 0 : _a.split(","), (_b = validatedParams === null || validatedParams === void 0 ? void 0 : validatedParams.expand) === null || _b === void 0 ? void 0 : _b.split(","));
                return [4 /*yield*/, discountService.retrieve(discount.id, config)];
            case 5:
                discount = _c.sent();
                res.status(200).json({ discount: discount });
                return [2 /*return*/];
        }
    });
}); });
// eslint-disable-next-line max-len
var AdminPostDiscountsDiscountConditions = /** @class */ (function (_super) {
    __extends(AdminPostDiscountsDiscountConditions, _super);
    function AdminPostDiscountsDiscountConditions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountConditions.prototype, "operator", void 0);
    return AdminPostDiscountsDiscountConditions;
}(discount_1.AdminUpsertConditionsReq));
exports.AdminPostDiscountsDiscountConditions = AdminPostDiscountsDiscountConditions;
var AdminPostDiscountsDiscountConditionsParams = /** @class */ (function () {
    function AdminPostDiscountsDiscountConditionsParams() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountConditionsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostDiscountsDiscountConditionsParams.prototype, "fields", void 0);
    return AdminPostDiscountsDiscountConditionsParams;
}());
exports.AdminPostDiscountsDiscountConditionsParams = AdminPostDiscountsDiscountConditionsParams;
//# sourceMappingURL=create-condition.js.map