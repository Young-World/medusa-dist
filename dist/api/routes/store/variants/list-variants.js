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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetVariantsParams = void 0;
var class_validator_1 = require("class-validator");
var class_transformer_1 = require("class-transformer");
var lodash_1 = require("lodash");
var _1 = require(".");
var common_1 = require("../../../../types/common");
var price_selection_1 = require("../../../../types/price-selection");
var validator_1 = require("../../../../utils/validator");
var is_type_1 = require("../../../../utils/validators/is-type");
var publishable_api_keys_1 = __importDefault(require("../../../../loaders/feature-flags/publishable-api-keys"));
/**
 * @oas [get] /variants
 * operationId: GetVariants
 * summary: Get Product Variants
 * description: "Retrieves a list of Product Variants"
 * parameters:
 *   - (query) ids {string} A comma separated list of Product Variant ids to filter by.
 *   - (query) sales_channel_id {string} A sales channel id for result configuration.
 *   - (query) expand {string} A comma separated list of Product Variant relations to load.
 *   - (query) offset=0 {number} How many product variants to skip in the result.
 *   - (query) limit=100 {number} Maximum number of Product Variants to return.
 *   - (query) cart_id {string} The id of the Cart to set prices based on.
 *   - (query) region_id {string} The id of the Region to set prices based on.
 *   - (query) currency_code {string} The currency code to use for price selection.
 *   - in: query
 *     name: title
 *     style: form
 *     explode: false
 *     description: product variant title to search for.
 *     schema:
 *       oneOf:
 *         - type: string
 *           description: a single title to search by
 *         - type: array
 *           description: multiple titles to search by
 *           items:
 *             type: string
 *   - in: query
 *     name: inventory_quantity
 *     description: Filter by available inventory quantity
 *     schema:
 *       oneOf:
 *         - type: number
 *           description: a specific number to search by.
 *         - type: object
 *           description: search using less and greater than comparisons.
 *           properties:
 *             lt:
 *               type: number
 *               description: filter by inventory quantity less than this number
 *             gt:
 *               type: number
 *               description: filter by inventory quantity greater than this number
 *             lte:
 *               type: number
 *               description: filter by inventory quantity less than or equal to this number
 *             gte:
 *               type: number
 *               description: filter by inventory quantity greater than or equal to this number
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetVariantsParams
 * x-codeSamples:
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/variants'
 * tags:
 *   - Product Variant
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreVariantsListRes"
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
    var validated, expand, offset, limit, expandFields, customer_id, listConfig, filterableFields, sales_channel_id, featureFlagRouter, pricingService, variantService, cartService, productVariantInventoryService, regionService, rawVariants, regionId, currencyCode, cart, region, pricedVariants, variants;
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, (0, validator_1.validator)(StoreGetVariantsParams, req.query)];
            case 1:
                validated = _c.sent();
                expand = validated.expand, offset = validated.offset, limit = validated.limit;
                expandFields = [];
                if (expand) {
                    expandFields = expand.split(",");
                }
                customer_id = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id;
                listConfig = {
                    relations: expandFields.length
                        ? expandFields
                        : _1.defaultStoreVariantRelations,
                    skip: offset,
                    take: limit,
                };
                filterableFields = (0, lodash_1.omit)(validated, [
                    "ids",
                    "limit",
                    "offset",
                    "expand",
                    "cart_id",
                    "region_id",
                    "currency_code",
                ]);
                if (validated.ids) {
                    filterableFields.id = validated.ids.split(",");
                }
                sales_channel_id = validated.sales_channel_id;
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                if (featureFlagRouter.isFeatureEnabled(publishable_api_keys_1.default.key)) {
                    if (((_b = req.publishableApiKeyScopes) === null || _b === void 0 ? void 0 : _b.sales_channel_id.length) === 1) {
                        sales_channel_id = req.publishableApiKeyScopes.sales_channel_id[0];
                    }
                }
                pricingService = req.scope.resolve("pricingService");
                variantService = req.scope.resolve("productVariantService");
                cartService = req.scope.resolve("cartService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                regionService = req.scope.resolve("regionService");
                return [4 /*yield*/, variantService.list(filterableFields, listConfig)];
            case 2:
                rawVariants = _c.sent();
                regionId = validated.region_id;
                currencyCode = validated.currency_code;
                if (!validated.cart_id) return [3 /*break*/, 5];
                return [4 /*yield*/, cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 3:
                cart = _c.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 4:
                region = _c.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _c.label = 5;
            case 5: return [4 /*yield*/, pricingService.setVariantPrices(rawVariants, {
                    cart_id: validated.cart_id,
                    region_id: regionId,
                    currency_code: currencyCode,
                    customer_id: customer_id,
                    include_discount_prices: true,
                })];
            case 6:
                pricedVariants = _c.sent();
                return [4 /*yield*/, productVariantInventoryService.setVariantAvailability(pricedVariants, sales_channel_id)];
            case 7:
                variants = _c.sent();
                res.json({ variants: variants });
                return [2 /*return*/];
        }
    });
}); });
var StoreGetVariantsParams = /** @class */ (function (_super) {
    __extends(StoreGetVariantsParams, _super);
    function StoreGetVariantsParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.limit = 100;
        _this.offset = 0;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetVariantsParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsInt)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetVariantsParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetVariantsParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetVariantsParams.prototype, "ids", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], StoreGetVariantsParams.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([Number, common_1.NumericalComparisonOperator]),
        __metadata("design:type", Object)
    ], StoreGetVariantsParams.prototype, "inventory_quantity", void 0);
    return StoreGetVariantsParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetVariantsParams = StoreGetVariantsParams;
//# sourceMappingURL=list-variants.js.map