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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreGetProductsParams = exports.StoreGetProductsPaginationParams = void 0;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
var sales_channels_1 = __importDefault(require("../../../../loaders/feature-flags/sales-channels"));
var common_1 = require("../../../../types/common");
var price_selection_1 = require("../../../../types/price-selection");
var feature_flag_decorators_1 = require("../../../../utils/feature-flag-decorators");
var is_boolean_1 = require("../../../../utils/validators/is-boolean");
var is_type_1 = require("../../../../utils/validators/is-type");
var publishable_api_keys_1 = __importDefault(require("../../../../loaders/feature-flags/publishable-api-keys"));
var clean_response_data_1 = require("../../../../utils/clean-response-data");
/**
 * @oas [get] /products
 * operationId: GetProducts
 * summary: List Products
 * description: "Retrieves a list of Products."
 * parameters:
 *   - (query) q {string} Query used for searching products by title, description, variant's title, variant's sku, and collection's title
 *   - in: query
 *     name: id
 *     style: form
 *     explode: false
 *     description: product IDs to search for.
 *     schema:
 *       oneOf:
 *         - type: string
 *         - type: array
 *           items:
 *             type: string
 *   - in: query
 *     name: sales_channel_id
 *     style: form
 *     explode: false
 *     description: an array of sales channel IDs to filter the retrieved products by.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: collection_id
 *     style: form
 *     explode: false
 *     description: Collection IDs to search for
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: type_id
 *     style: form
 *     explode: false
 *     description: Type IDs to search for
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - in: query
 *     name: tags
 *     style: form
 *     explode: false
 *     description: Tag IDs to search for
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) title {string} title to search for.
 *   - (query) description {string} description to search for.
 *   - (query) handle {string} handle to search for.
 *   - (query) is_giftcard {boolean} Search for giftcards using is_giftcard=true.
 *   - in: query
 *     name: created_at
 *     description: Date comparison for when resulting products were created.
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
 *     description: Date comparison for when resulting products were updated.
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
 *     name: category_id
 *     style: form
 *     explode: false
 *     description: Category ids to filter by.
 *     schema:
 *       type: array
 *       items:
 *         type: string
 *   - (query) include_category_children {boolean} Include category children when filtering by category_id.
 *   - (query) offset=0 {integer} How many products to skip in the result.
 *   - (query) limit=100 {integer} Limit the number of products returned.
 *   - (query) expand {string} (Comma separated) Which fields should be expanded in each product of the result.
 *   - (query) fields {string} (Comma separated) Which fields should be included in each product of the result.
 *   - (query) order {string} the field used to order the products.
 *   - (query) cart_id {string} The id of the Cart to set prices based on.
 *   - (query) region_id {string} The id of the Region to set prices based on.
 *   - (query) currency_code {string} The currency code to use for price selection.
 * x-codegen:
 *   method: list
 *   queryParams: StoreGetProductsParams
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.products.list()
 *       .then(({ products, limit, offset, count }) => {
 *         console.log(products.length);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request GET 'https://medusa-url.com/store/products'
 * tags:
 *   - Product
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/StoreProductsListRes"
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
    var productService, productVariantInventoryService, pricingService, cartService, regionService, validated, _a, cart_id, regionId, currencyCode, filterableFields, listConfig, featureFlagRouter, _b, rawProducts, count, cart, region, pricedProducts, products;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                productService = req.scope.resolve("productService");
                productVariantInventoryService = req.scope.resolve("productVariantInventoryService");
                pricingService = req.scope.resolve("pricingService");
                cartService = req.scope.resolve("cartService");
                regionService = req.scope.resolve("regionService");
                validated = req.validatedQuery;
                _a = req.filterableFields, cart_id = _a.cart_id, regionId = _a.region_id, currencyCode = _a.currency_code, filterableFields = __rest(_a, ["cart_id", "region_id", "currency_code"]);
                listConfig = req.listConfig;
                // get only published products for store endpoint
                filterableFields["status"] = ["published"];
                featureFlagRouter = req.scope.resolve("featureFlagRouter");
                if (featureFlagRouter.isFeatureEnabled(publishable_api_keys_1.default.key)) {
                    if ((_c = req.publishableApiKeyScopes) === null || _c === void 0 ? void 0 : _c.sales_channel_id.length) {
                        filterableFields.sales_channel_id =
                            filterableFields.sales_channel_id ||
                                req.publishableApiKeyScopes.sales_channel_id;
                        listConfig.relations.push("sales_channels");
                    }
                }
                return [4 /*yield*/, productService.listAndCount(filterableFields, listConfig)];
            case 1:
                _b = __read.apply(void 0, [_e.sent(), 2]), rawProducts = _b[0], count = _b[1];
                if (!validated.cart_id) return [3 /*break*/, 4];
                return [4 /*yield*/, cartService.retrieve(validated.cart_id, {
                        select: ["id", "region_id"],
                    })];
            case 2:
                cart = _e.sent();
                return [4 /*yield*/, regionService.retrieve(cart.region_id, {
                        select: ["id", "currency_code"],
                    })];
            case 3:
                region = _e.sent();
                regionId = region.id;
                currencyCode = region.currency_code;
                _e.label = 4;
            case 4: return [4 /*yield*/, pricingService.setProductPrices(rawProducts, {
                    cart_id: cart_id,
                    region_id: regionId,
                    currency_code: currencyCode,
                    customer_id: (_d = req.user) === null || _d === void 0 ? void 0 : _d.customer_id,
                    include_discount_prices: true,
                })];
            case 5:
                pricedProducts = _e.sent();
                return [4 /*yield*/, productVariantInventoryService.setProductAvailability(pricedProducts, filterableFields.sales_channel_id)];
            case 6:
                products = _e.sent();
                res.json({
                    products: (0, clean_response_data_1.cleanResponseData)(products, req.allowedProperties || []),
                    count: count,
                    offset: validated.offset,
                    limit: validated.limit,
                });
                return [2 /*return*/];
        }
    });
}); });
var StoreGetProductsPaginationParams = /** @class */ (function (_super) {
    __extends(StoreGetProductsPaginationParams, _super);
    function StoreGetProductsPaginationParams() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.offset = 0;
        _this.limit = 100;
        return _this;
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsPaginationParams.prototype, "fields", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsPaginationParams.prototype, "expand", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetProductsPaginationParams.prototype, "offset", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Type)(function () { return Number; }),
        __metadata("design:type", Number)
    ], StoreGetProductsPaginationParams.prototype, "limit", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsPaginationParams.prototype, "order", void 0);
    return StoreGetProductsPaginationParams;
}(price_selection_1.PriceSelectionParams));
exports.StoreGetProductsPaginationParams = StoreGetProductsPaginationParams;
var StoreGetProductsParams = /** @class */ (function (_super) {
    __extends(StoreGetProductsParams, _super);
    function StoreGetProductsParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, is_type_1.IsType)([String, [String]]),
        __metadata("design:type", Object)
    ], StoreGetProductsParams.prototype, "id", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "q", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "collection_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "tags", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "description", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], StoreGetProductsParams.prototype, "handle", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], StoreGetProductsParams.prototype, "is_giftcard", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "type_id", void 0);
    __decorate([
        (0, feature_flag_decorators_1.FeatureFlagDecorators)(sales_channels_1.default.key, [(0, class_validator_1.IsOptional)(), (0, class_validator_1.IsArray)()]),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "sales_channel_id", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Array)
    ], StoreGetProductsParams.prototype, "category_id", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_transformer_1.Transform)(function (_a) {
            var value = _a.value;
            return is_boolean_1.optionalBooleanMapper.get(value.toLowerCase());
        }),
        __metadata("design:type", Boolean)
    ], StoreGetProductsParams.prototype, "include_category_children", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], StoreGetProductsParams.prototype, "created_at", void 0);
    __decorate([
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)(),
        (0, class_transformer_1.Type)(function () { return common_1.DateComparisonOperator; }),
        __metadata("design:type", common_1.DateComparisonOperator)
    ], StoreGetProductsParams.prototype, "updated_at", void 0);
    return StoreGetProductsParams;
}(StoreGetProductsPaginationParams));
exports.StoreGetProductsParams = StoreGetProductsParams;
//# sourceMappingURL=list-products.js.map