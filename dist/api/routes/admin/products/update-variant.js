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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPostProductsProductVariantsVariantReq = void 0;
var class_validator_1 = require("class-validator");
var _1 = require(".");
var class_transformer_1 = require("class-transformer");
var price_selection_1 = require("../../../../types/price-selection");
var product_variant_1 = require("../../../../types/product-variant");
var validator_1 = require("../../../../utils/validator");
/**
 * @oas [post] /products/{id}/variants/{variant_id}
 * operationId: "PostProductsProductVariantsVariant"
 * summary: "Update a Product Variant"
 * description: "Update a Product Variant."
 * x-authenticated: true
 * parameters:
 *   - (path) id=* {string} The ID of the Product.
 *   - (path) variant_id=* {string} The ID of the Product Variant.
 * requestBody:
 *   content:
 *     application/json:
 *       schema:
 *         $ref: "#/components/schemas/AdminPostProductsProductVariantsVariantReq"
 * x-codegen:
 *   method: updateVariant
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       // must be previously logged in or use api token
 *       medusa.admin.products.updateVariant(product_id, variant_id, {
 *         title: 'Color',
 *         prices: [
 *           {
 *             amount: 1000,
 *             currency_code: "eur"
 *           }
 *         ],
 *         options: [
 *           {
 *             option_id,
 *             value: 'S'
 *           }
 *         ],
 *         inventory_quantity: 100
 *       })
 *       .then(({ product }) => {
 *         console.log(product.id);
 *       });
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/admin/products/asfsaf/variants/saaga' \
 *       --header 'Authorization: Bearer {api_token}' \
 *       --header 'Content-Type: application/json' \
 *       --data-raw '{
 *           "title": "Color",
 *           "prices": [
 *             {
 *               "amount": 1000,
 *               "currency_code": "eur"
 *             }
 *           ]
 *       }'
 * security:
 *   - api_token: []
 *   - cookie_auth: []
 * tags:
 *   - Product
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           $ref: "#/components/schemas/AdminProductsRes"
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
    var _a, id, variant_id, validated, validatedQueryParams, productService, pricingService, productVariantService, manager, rawProduct, _b, product;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.params, id = _a.id, variant_id = _a.variant_id;
                return [4 /*yield*/, (0, validator_1.validator)(AdminPostProductsProductVariantsVariantReq, req.body)];
            case 1:
                validated = _c.sent();
                return [4 /*yield*/, (0, validator_1.validator)(price_selection_1.PriceSelectionParams, req.query)];
            case 2:
                validatedQueryParams = _c.sent();
                productService = req.scope.resolve("productService");
                pricingService = req.scope.resolve("pricingService");
                productVariantService = req.scope.resolve("productVariantService");
                manager = req.scope.resolve("manager");
                return [4 /*yield*/, manager.transaction(function (transactionManager) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, productVariantService
                                        .withTransaction(transactionManager)
                                        .update(variant_id, __assign({ product_id: id }, validated))];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); })];
            case 3:
                _c.sent();
                return [4 /*yield*/, productService.retrieve(id, __assign({ select: _1.defaultAdminProductFields, relations: _1.defaultAdminProductRelations }, validatedQueryParams))];
            case 4:
                rawProduct = _c.sent();
                return [4 /*yield*/, pricingService.setProductPrices([rawProduct])];
            case 5:
                _b = __read.apply(void 0, [_c.sent(), 1]), product = _b[0];
                res.json({ product: product });
                return [2 /*return*/];
        }
    });
}); });
var ProductVariantOptionReq = /** @class */ (function () {
    function ProductVariantOptionReq() {
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "value", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        __metadata("design:type", String)
    ], ProductVariantOptionReq.prototype, "option_id", void 0);
    return ProductVariantOptionReq;
}());
/**
 * @schema AdminPostProductsProductVariantsVariantReq
 * type: object
 * required:
 *   - prices
 * properties:
 *   title:
 *     description: The title to identify the Product Variant by.
 *     type: string
 *   sku:
 *     description: The unique SKU for the Product Variant.
 *     type: string
 *   ean:
 *     description: The EAN number of the item.
 *     type: string
 *   upc:
 *     description: The UPC number of the item.
 *     type: string
 *   barcode:
 *     description: A generic GTIN field for the Product Variant.
 *     type: string
 *   hs_code:
 *     description: The Harmonized System code for the Product Variant.
 *     type: string
 *   inventory_quantity:
 *     description: The amount of stock kept for the Product Variant.
 *     type: integer
 *   allow_backorder:
 *     description: Whether the Product Variant can be purchased when out of stock.
 *     type: boolean
 *   manage_inventory:
 *     description: Whether Medusa should keep track of the inventory for this Product Variant.
 *     type: boolean
 *   weight:
 *     description: The weight of the Product Variant.
 *     type: number
 *   length:
 *     description: The length of the Product Variant.
 *     type: number
 *   height:
 *     description: The height of the Product Variant.
 *     type: number
 *   width:
 *     description: The width of the Product Variant.
 *     type: number
 *   origin_country:
 *     description: The country of origin of the Product Variant.
 *     type: string
 *   mid_code:
 *     description: The Manufacturer Identification code for the Product Variant.
 *     type: string
 *   material:
 *     description: The material composition of the Product Variant.
 *     type: string
 *   metadata:
 *     description: An optional set of key-value pairs with additional information.
 *     type: object
 *   prices:
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - amount
 *       properties:
 *         id:
 *           description: The ID of the price.
 *           type: string
 *         region_id:
 *           description: The ID of the Region for which the price is used. Only required if currency_code is not provided.
 *           type: string
 *         currency_code:
 *           description: The 3 character ISO currency code for which the price will be used. Only required if region_id is not provided.
 *           type: string
 *           externalDocs:
 *             url: https://en.wikipedia.org/wiki/ISO_4217#Active_codes
 *             description: See a list of codes.
 *         amount:
 *           description: The amount to charge for the Product Variant.
 *           type: integer
 *         min_quantity:
 *          description: The minimum quantity for which the price will be used.
 *          type: integer
 *         max_quantity:
 *           description: The maximum quantity for which the price will be used.
 *           type: integer
 *   options:
 *     type: array
 *     items:
 *       type: object
 *       required:
 *         - option_id
 *         - value
 *       properties:
 *         option_id:
 *           description: The ID of the Product Option to set the value for.
 *           type: string
 *         value:
 *           description: The value to give for the Product Option.
 *           type: string
 */
var AdminPostProductsProductVariantsVariantReq = /** @class */ (function () {
    function AdminPostProductsProductVariantsVariantReq() {
        this.options = [];
    }
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "title", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "sku", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "ean", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "upc", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "barcode", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "hs_code", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "inventory_quantity", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "allow_backorder", void 0);
    __decorate([
        (0, class_validator_1.IsBoolean)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Boolean)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "manage_inventory", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "weight", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "length", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "height", void 0);
    __decorate([
        (0, class_validator_1.IsNumber)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Number)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "width", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "origin_country", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "mid_code", void 0);
    __decorate([
        (0, class_validator_1.IsString)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", String)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "material", void 0);
    __decorate([
        (0, class_validator_1.IsObject)(),
        (0, class_validator_1.IsOptional)(),
        __metadata("design:type", Object)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "metadata", void 0);
    __decorate([
        (0, class_validator_1.IsArray)(),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_transformer_1.Type)(function () { return product_variant_1.ProductVariantPricesUpdateReq; }),
        __metadata("design:type", Array)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "prices", void 0);
    __decorate([
        (0, class_transformer_1.Type)(function () { return ProductVariantOptionReq; }),
        (0, class_validator_1.ValidateNested)({ each: true }),
        (0, class_validator_1.IsOptional)(),
        (0, class_validator_1.IsArray)(),
        __metadata("design:type", Array)
    ], AdminPostProductsProductVariantsVariantReq.prototype, "options", void 0);
    return AdminPostProductsProductVariantsVariantReq;
}());
exports.AdminPostProductsProductVariantsVariantReq = AdminPostProductsProductVariantsVariantReq;
//# sourceMappingURL=update-variant.js.map