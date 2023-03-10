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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var tax_inclusive_pricing_1 = __importDefault(require("../loaders/feature-flags/tax-inclusive-pricing"));
var utils_1 = require("../utils");
/**
 * Allows retrieval of prices.
 */
var PricingService = /** @class */ (function (_super) {
    __extends(PricingService, _super);
    function PricingService(_a) {
        var manager = _a.manager, productVariantService = _a.productVariantService, taxProviderService = _a.taxProviderService, regionService = _a.regionService, priceSelectionStrategy = _a.priceSelectionStrategy, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.regionService = regionService;
        _this.taxProviderService = taxProviderService;
        _this.priceSelectionStrategy = priceSelectionStrategy;
        _this.productVariantService = productVariantService;
        _this.featureFlagRouter = featureFlagRouter;
        return _this;
    }
    /**
     * Collects additional information neccessary for completing the price
     * selection.
     * @param context - the price selection context to use
     * @return The pricing context
     */
    PricingService.prototype.collectPricingContext = function (context) {
        return __awaiter(this, void 0, void 0, function () {
            var automaticTaxes, taxRate, currencyCode, region;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        automaticTaxes = false;
                        taxRate = null;
                        currencyCode = context.currency_code;
                        if (!context.region_id) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.regionService
                                .withTransaction(this.manager_)
                                .retrieve(context.region_id, {
                                select: ["id", "currency_code", "automatic_taxes", "tax_rate"],
                            })];
                    case 1:
                        region = _a.sent();
                        currencyCode = region.currency_code;
                        automaticTaxes = region.automatic_taxes;
                        taxRate = region.tax_rate;
                        _a.label = 2;
                    case 2: return [2 /*return*/, {
                            price_selection: __assign(__assign({}, context), { currency_code: currencyCode }),
                            automatic_taxes: automaticTaxes,
                            tax_rate: taxRate,
                        }];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant
     * @param variantPricing - the prices retrieved from a variant
     * @param productRates - the tax rates that the product has applied
     * @return The tax related variant prices.
     */
    PricingService.prototype.calculateTaxes = function (variantPricing, productRates) {
        return __awaiter(this, void 0, void 0, function () {
            var rate, taxedPricing, includesTax, includesTax;
            return __generator(this, function (_a) {
                rate = productRates.reduce(function (accRate, nextTaxRate) {
                    return accRate + (nextTaxRate.rate || 0) / 100;
                }, 0);
                taxedPricing = {
                    original_tax: null,
                    calculated_tax: null,
                    original_price_incl_tax: null,
                    calculated_price_incl_tax: null,
                    tax_rates: productRates,
                };
                if (variantPricing.calculated_price !== null) {
                    includesTax = !!(this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && variantPricing.calculated_price_includes_tax);
                    taxedPricing.calculated_tax = Math.round((0, utils_1.calculatePriceTaxAmount)({
                        price: variantPricing.calculated_price,
                        taxRate: rate,
                        includesTax: includesTax,
                    }));
                    taxedPricing.calculated_price_incl_tax =
                        variantPricing.calculated_price_includes_tax
                            ? variantPricing.calculated_price
                            : variantPricing.calculated_price + taxedPricing.calculated_tax;
                }
                if (variantPricing.original_price !== null) {
                    includesTax = !!(this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && variantPricing.original_price_includes_tax);
                    taxedPricing.original_tax = Math.round((0, utils_1.calculatePriceTaxAmount)({
                        price: variantPricing.original_price,
                        taxRate: rate,
                        includesTax: includesTax,
                    }));
                    taxedPricing.original_price_incl_tax =
                        variantPricing.original_price_includes_tax
                            ? variantPricing.original_price
                            : variantPricing.original_price + taxedPricing.original_tax;
                }
                return [2 /*return*/, taxedPricing];
            });
        });
    };
    PricingService.prototype.getProductVariantPricing_ = function (variantId, taxRates, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, pricing, pricingResult, taxResults;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        context.price_selection.tax_rates = taxRates;
                        return [4 /*yield*/, this.priceSelectionStrategy
                                .withTransaction(transactionManager)
                                .calculateVariantPrice(variantId, context.price_selection)];
                    case 1:
                        pricing = _b.sent();
                        pricingResult = {
                            prices: pricing.prices,
                            original_price: pricing.originalPrice,
                            calculated_price: pricing.calculatedPrice,
                            calculated_price_type: pricing.calculatedPriceType,
                            original_price_includes_tax: pricing.originalPriceIncludesTax,
                            calculated_price_includes_tax: pricing.calculatedPriceIncludesTax,
                            original_price_incl_tax: null,
                            calculated_price_incl_tax: null,
                            original_tax: null,
                            calculated_tax: null,
                            tax_rates: null,
                        };
                        if (!(context.automatic_taxes && context.price_selection.region_id)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.calculateTaxes(pricingResult, taxRates)];
                    case 2:
                        taxResults = _b.sent();
                        pricingResult.original_price_incl_tax = taxResults.original_price_incl_tax;
                        pricingResult.calculated_price_incl_tax =
                            taxResults.calculated_price_incl_tax;
                        pricingResult.original_tax = taxResults.original_tax;
                        pricingResult.calculated_tax = taxResults.calculated_tax;
                        pricingResult.tax_rates = taxResults.tax_rates;
                        _b.label = 3;
                    case 3: return [2 /*return*/, pricingResult];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant.
     * @param variant - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    PricingService.prototype.getProductVariantPricing = function (variant, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, productRates;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _a.sent();
                        _a.label = 3;
                    case 3:
                        productRates = [];
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.taxProviderService.getRegionRatesForProduct(variant.product_id, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 4:
                        productRates = _a.sent();
                        _a.label = 5;
                    case 5: return [4 /*yield*/, this.getProductVariantPricing_(variant.id, productRates, pricingContext)];
                    case 6: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the prices for a product variant by a variant id.
     * @param variantId - the id of the variant to get prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     * @deprecated Use {@link getProductVariantsPricing} instead.
     */
    PricingService.prototype.getProductVariantPricingById = function (variantId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, productRates, product_id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _a.sent();
                        _a.label = 3;
                    case 3:
                        productRates = [];
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.productVariantService
                                .withTransaction(this.manager_)
                                .retrieve(variantId, { select: ["id", "product_id"] })];
                    case 4:
                        product_id = (_a.sent()).product_id;
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.manager_)
                                .getRegionRatesForProduct(product_id, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 5:
                        productRates = _a.sent();
                        _a.label = 6;
                    case 6: return [4 /*yield*/, this.getProductVariantPricing_(variantId, productRates, pricingContext)];
                    case 7: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the prices for a collection of variants.
     * @param variantIds - the id of the variants to get the prices for
     * @param context - the price selection context to use
     * @return The product variant prices
     */
    PricingService.prototype.getProductVariantsPricing = function (variantIds, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, ids, variants, variantsMap, pricingResult, ids_1, ids_1_1, variantId, _a, id, product_id, productRates, _b, _c, e_1_1;
            var e_1, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 2:
                        pricingContext = _e.sent();
                        _e.label = 3;
                    case 3:
                        ids = (Array.isArray(variantIds) ? variantIds : [variantIds]);
                        return [4 /*yield*/, this.productVariantService
                                .withTransaction(this.manager_)
                                .list({ id: ids }, { select: ["id", "product_id"] })];
                    case 4:
                        variants = _e.sent();
                        variantsMap = new Map(variants.map(function (variant) {
                            return [variant.id, variant];
                        }));
                        pricingResult = {};
                        _e.label = 5;
                    case 5:
                        _e.trys.push([5, 12, 13, 14]);
                        ids_1 = __values(ids), ids_1_1 = ids_1.next();
                        _e.label = 6;
                    case 6:
                        if (!!ids_1_1.done) return [3 /*break*/, 11];
                        variantId = ids_1_1.value;
                        _a = variantsMap.get(variantId), id = _a.id, product_id = _a.product_id;
                        productRates = [];
                        if (!pricingContext.price_selection.region_id) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.manager_)
                                .getRegionRatesForProduct(product_id, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 7:
                        productRates = _e.sent();
                        _e.label = 8;
                    case 8:
                        _b = pricingResult;
                        _c = id;
                        return [4 /*yield*/, this.getProductVariantPricing_(id, productRates, pricingContext)];
                    case 9:
                        _b[_c] = _e.sent();
                        _e.label = 10;
                    case 10:
                        ids_1_1 = ids_1.next();
                        return [3 /*break*/, 6];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_1_1 = _e.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (ids_1_1 && !ids_1_1.done && (_d = ids_1.return)) _d.call(ids_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, (!Array.isArray(variantIds)
                            ? Object.values(pricingResult)[0]
                            : pricingResult)];
                }
            });
        });
    };
    PricingService.prototype.getProductPricing_ = function (productId, variants, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var transactionManager, taxRates, pricings;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        transactionManager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        taxRates = [];
                        if (!(context.automatic_taxes && context.price_selection.region_id)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(transactionManager)
                                .getRegionRatesForProduct(productId, {
                                id: context.price_selection.region_id,
                                tax_rate: context.tax_rate,
                            })];
                    case 1:
                        taxRates = _b.sent();
                        _b.label = 2;
                    case 2:
                        pricings = {};
                        return [4 /*yield*/, Promise.all(variants.map(function (_a) {
                                var id = _a.id;
                                return __awaiter(_this, void 0, void 0, function () {
                                    var variantPricing;
                                    return __generator(this, function (_b) {
                                        switch (_b.label) {
                                            case 0: return [4 /*yield*/, this.getProductVariantPricing_(id, taxRates, context)];
                                            case 1:
                                                variantPricing = _b.sent();
                                                pricings[id] = variantPricing;
                                                return [2 /*return*/];
                                        }
                                    });
                                });
                            }))];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, pricings];
                }
            });
        });
    };
    /**
     * Gets all the variant prices for a product. All the product's variants will
     * be fetched.
     * @param product - the product to get pricing for.
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    PricingService.prototype.getProductPricing = function (product, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, this.getProductPricing_(product.id, product.variants, pricingContext)];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets all the variant prices for a product by the product id
     * @param productId - the id of the product to get prices for
     * @param context - the price selection context to use
     * @return A map of variant ids to their corresponding prices
     */
    PricingService.prototype.getProductPricingById = function (productId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, variants;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, this.productVariantService.list({ product_id: productId }, { select: ["id"] })];
                    case 2:
                        variants = _a.sent();
                        return [4 /*yield*/, this.getProductPricing_(productId, variants, pricingContext)];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of product variants.
     * @param variants - list of variants on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    PricingService.prototype.setVariantPrices = function (variants, context) {
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, Promise.all(variants.map(function (variant) { return __awaiter(_this, void 0, void 0, function () {
                                var variantPricing;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.getProductVariantPricing(variant, pricingContext)];
                                        case 1:
                                            variantPricing = _a.sent();
                                            return [2 /*return*/, __assign(__assign({}, variant), variantPricing)];
                                    }
                                });
                            }); }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of products.
     * @param products - list of products on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of products with variants decorated with prices
     */
    PricingService.prototype.setProductPrices = function (products, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 1:
                        pricingContext = _a.sent();
                        return [4 /*yield*/, Promise.all(products.map(function (product) { return __awaiter(_this, void 0, void 0, function () {
                                var variantPricing, pricedVariants, pricedProduct;
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!((_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.length)) {
                                                return [2 /*return*/, product];
                                            }
                                            return [4 /*yield*/, this.getProductPricing_(product.id, product.variants, pricingContext)];
                                        case 1:
                                            variantPricing = _b.sent();
                                            pricedVariants = product.variants.map(function (productVariant) {
                                                var pricing = variantPricing[productVariant.id];
                                                return __assign(__assign({}, productVariant), pricing);
                                            });
                                            pricedProduct = __assign(__assign({}, product), { variants: pricedVariants });
                                            return [2 /*return*/, pricedProduct];
                                    }
                                });
                            }); }))];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the prices for a shipping option.
     * @param shippingOption - the shipping option to get prices for
     * @param context - the price selection context to use
     * @return The shipping option prices
     */
    PricingService.prototype.getShippingOptionPricing = function (shippingOption, context) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var pricingContext, _b, shippingOptionRates, price, rate, includesTax, taxAmount, totalInclTax;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!("automatic_taxes" in context)) return [3 /*break*/, 1];
                        pricingContext = context;
                        return [3 /*break*/, 5];
                    case 1:
                        if (!((_a = context) !== null && _a !== void 0)) return [3 /*break*/, 2];
                        _b = _a;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.collectPricingContext(context)];
                    case 3:
                        _b = (_c.sent());
                        _c.label = 4;
                    case 4:
                        pricingContext = _b;
                        _c.label = 5;
                    case 5:
                        shippingOptionRates = [];
                        if (!(pricingContext.automatic_taxes &&
                            pricingContext.price_selection.region_id)) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.taxProviderService
                                .withTransaction(this.manager_)
                                .getRegionRatesForShipping(shippingOption.id, {
                                id: pricingContext.price_selection.region_id,
                                tax_rate: pricingContext.tax_rate,
                            })];
                    case 6:
                        shippingOptionRates = _c.sent();
                        _c.label = 7;
                    case 7:
                        price = shippingOption.amount || 0;
                        rate = shippingOptionRates.reduce(function (accRate, nextTaxRate) {
                            return accRate + (nextTaxRate.rate || 0) / 100;
                        }, 0);
                        includesTax = this.featureFlagRouter.isFeatureEnabled(tax_inclusive_pricing_1.default.key) && shippingOption.includes_tax;
                        taxAmount = Math.round((0, utils_1.calculatePriceTaxAmount)({
                            taxRate: rate,
                            price: price,
                            includesTax: includesTax,
                        }));
                        totalInclTax = includesTax ? price : price + taxAmount;
                        return [2 /*return*/, __assign(__assign({}, shippingOption), { price_incl_tax: totalInclTax, tax_rates: shippingOptionRates, tax_amount: taxAmount })];
                }
            });
        });
    };
    /**
     * Set additional prices on a list of shipping options.
     * @param shippingOptions - list of shipping options on which to set additional prices
     * @param context - the price selection context to use
     * @return A list of shipping options with prices
     */
    PricingService.prototype.setShippingOptionPrices = function (shippingOptions, context) {
        if (context === void 0) { context = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var regions, shippingOptions_1, shippingOptions_1_1, shippingOption, contexts, shippingOptionPricingPromises;
            var e_2, _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        regions = new Set();
                        try {
                            for (shippingOptions_1 = __values(shippingOptions), shippingOptions_1_1 = shippingOptions_1.next(); !shippingOptions_1_1.done; shippingOptions_1_1 = shippingOptions_1.next()) {
                                shippingOption = shippingOptions_1_1.value;
                                regions.add(shippingOption.region_id);
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (shippingOptions_1_1 && !shippingOptions_1_1.done && (_a = shippingOptions_1.return)) _a.call(shippingOptions_1);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        return [4 /*yield*/, Promise.all(__spreadArray([], __read(regions), false).map(function (regionId) { return __awaiter(_this, void 0, void 0, function () {
                                var _a;
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            _a = {};
                                            return [4 /*yield*/, this.collectPricingContext(__assign(__assign({}, context), { region_id: regionId }))];
                                        case 1: return [2 /*return*/, (_a.context = _b.sent(),
                                                _a.region_id = regionId,
                                                _a)];
                                    }
                                });
                            }); }))];
                    case 1:
                        contexts = _b.sent();
                        shippingOptionPricingPromises = [];
                        shippingOptions.map(function (shippingOption) { return __awaiter(_this, void 0, void 0, function () {
                            var pricingContext;
                            return __generator(this, function (_a) {
                                pricingContext = contexts.find(function (c) { return c.region_id === shippingOption.region_id; });
                                if (!pricingContext) {
                                    throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.UNEXPECTED_STATE, "Could not find pricing context for shipping option");
                                }
                                shippingOptionPricingPromises.push(this.getShippingOptionPricing(shippingOption, pricingContext.context));
                                return [2 /*return*/];
                            });
                        }); });
                        return [4 /*yield*/, Promise.all(shippingOptionPricingPromises)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    return PricingService;
}(interfaces_1.TransactionBaseService));
exports.default = PricingService;
//# sourceMappingURL=pricing.js.map