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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
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
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var utils_1 = require("../utils");
var ProductVariantService = /** @class */ (function (_super) {
    __extends(ProductVariantService, _super);
    function ProductVariantService(_a) {
        var manager = _a.manager, productVariantRepository = _a.productVariantRepository, productRepository = _a.productRepository, eventBusService = _a.eventBusService, regionService = _a.regionService, moneyAmountRepository = _a.moneyAmountRepository, productOptionValueRepository = _a.productOptionValueRepository, cartRepository = _a.cartRepository, priceSelectionStrategy = _a.priceSelectionStrategy;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.productVariantRepository_ = productVariantRepository;
        _this.productRepository_ = productRepository;
        _this.eventBus_ = eventBusService;
        _this.regionService_ = regionService;
        _this.moneyAmountRepository_ = moneyAmountRepository;
        _this.productOptionValueRepository_ = productOptionValueRepository;
        _this.cartRepository_ = cartRepository;
        _this.priceSelectionStrategy_ = priceSelectionStrategy;
        return _this;
    }
    /**
     * Gets a product variant by id.
     * @param variantId - the id of the product to get.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    ProductVariantService.prototype.retrieve = function (variantId, config) {
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, query, variant;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        variantRepo = this.manager_.getCustomRepository(this.productVariantRepository_);
                        query = (0, utils_1.buildQuery)({ id: variantId }, config);
                        return [4 /*yield*/, variantRepo.findOne(query)];
                    case 1:
                        variant = _a.sent();
                        if (!variant) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with id: ".concat(variantId, " was not found"));
                        }
                        return [2 /*return*/, variant];
                }
            });
        });
    };
    /**
     * Gets a product variant by id.
     * @param sku - The unique stock keeping unit used to identify the product variant.
     * @param config - query config object for variant retrieval.
     * @return the product document.
     */
    ProductVariantService.prototype.retrieveBySKU = function (sku, config) {
        var _a, _b;
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, priceIndex, query, variant;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        variantRepo = this.manager_.getCustomRepository(this.productVariantRepository_);
                        priceIndex = (_b = (_a = config.relations) === null || _a === void 0 ? void 0 : _a.indexOf("prices")) !== null && _b !== void 0 ? _b : -1;
                        if (priceIndex >= 0 && config.relations) {
                            config.relations = __spreadArray([], __read(config.relations), false);
                            config.relations.splice(priceIndex, 1);
                        }
                        query = (0, utils_1.buildQuery)({ sku: sku }, config);
                        return [4 /*yield*/, variantRepo.findOne(query)];
                    case 1:
                        variant = _c.sent();
                        if (!variant) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with sku: ".concat(sku, " was not found"));
                        }
                        return [2 /*return*/, variant];
                }
            });
        });
    };
    /**
     * Creates an unpublished product variant. Will validate against parent product
     * to ensure that the variant can in fact be created.
     * @param productOrProductId - the product the variant will be added to
     * @param variant - the variant to create
     * @return resolves to the creation result.
     */
    ProductVariantService.prototype.create = function (productOrProductId, variant) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, variantRepo, prices, rest, product, variantExists, toCreate, productVariant, result, prices_1, prices_1_1, price, region, e_1_1;
                            var e_1, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        variantRepo = manager.getCustomRepository(this.productVariantRepository_);
                                        prices = variant.prices, rest = __rest(variant, ["prices"]);
                                        product = productOrProductId;
                                        if (!(typeof product === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, productRepo.findOne({
                                                where: { id: productOrProductId },
                                                relations: ["variants", "variants.options", "options"],
                                            })];
                                    case 1:
                                        product = (_b.sent());
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (!product.id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product id missing");
                                        }
                                        _b.label = 3;
                                    case 3:
                                        if (product.options.length !== variant.options.length) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product options length does not match variant options length. Product has ".concat(product.options.length, " and variant has ").concat(variant.options.length, "."));
                                        }
                                        product.options.forEach(function (option) {
                                            if (!variant.options.find(function (vo) { return option.id === vo.option_id; })) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Variant options do not contain value for ".concat(option.title));
                                            }
                                        });
                                        variantExists = product.variants.find(function (v) {
                                            return v.options.every(function (option) {
                                                var variantOption = variant.options.find(function (o) { return option.option_id === o.option_id; });
                                                return option.value === (variantOption === null || variantOption === void 0 ? void 0 : variantOption.value);
                                            });
                                        });
                                        if (variantExists) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "Variant with title ".concat(variantExists.title, " with provided options already exists"));
                                        }
                                        if (!rest.variant_rank) {
                                            rest.variant_rank = product.variants.length;
                                        }
                                        toCreate = __assign(__assign({}, rest), { product_id: product.id });
                                        productVariant = variantRepo.create(toCreate);
                                        return [4 /*yield*/, variantRepo.save(productVariant)];
                                    case 4:
                                        result = _b.sent();
                                        if (!prices) return [3 /*break*/, 15];
                                        _b.label = 5;
                                    case 5:
                                        _b.trys.push([5, 13, 14, 15]);
                                        prices_1 = __values(prices), prices_1_1 = prices_1.next();
                                        _b.label = 6;
                                    case 6:
                                        if (!!prices_1_1.done) return [3 /*break*/, 12];
                                        price = prices_1_1.value;
                                        if (!price.region_id) return [3 /*break*/, 9];
                                        return [4 /*yield*/, this.regionService_.retrieve(price.region_id)];
                                    case 7:
                                        region = _b.sent();
                                        return [4 /*yield*/, this.setRegionPrice(result.id, {
                                                amount: price.amount,
                                                region_id: price.region_id,
                                                currency_code: region.currency_code,
                                            })];
                                    case 8:
                                        _b.sent();
                                        return [3 /*break*/, 11];
                                    case 9: return [4 /*yield*/, this.setCurrencyPrice(result.id, price)];
                                    case 10:
                                        _b.sent();
                                        _b.label = 11;
                                    case 11:
                                        prices_1_1 = prices_1.next();
                                        return [3 /*break*/, 6];
                                    case 12: return [3 /*break*/, 15];
                                    case 13:
                                        e_1_1 = _b.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 15];
                                    case 14:
                                        try {
                                            if (prices_1_1 && !prices_1_1.done && (_a = prices_1.return)) _a.call(prices_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 15: return [4 /*yield*/, this.eventBus_
                                            .withTransaction(manager)
                                            .emit(ProductVariantService.Events.CREATED, {
                                            id: result.id,
                                            product_id: result.product_id,
                                        })];
                                    case 16:
                                        _b.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a variant.
     * Price updates should use dedicated methods.
     * The function will throw, if price updates are attempted.
     * @param variantOrVariantId - variant or id of a variant.
     * @param update - an object with the update values.
     * @param config - an object with the config values for returning the variant.
     * @return resolves to the update result.
     */
    ProductVariantService.prototype.update = function (variantOrVariantId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var variantRepo, variant, variantRes, prices, options, metadata, inventory_quantity, rest, options_1, options_1_1, option, e_2_1, _a, _b, _c, key, value, result;
                            var e_2, _d, e_3, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        variantRepo = manager.getCustomRepository(this.productVariantRepository_);
                                        variant = variantOrVariantId;
                                        if (!(typeof variant === "string")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, variantRepo.findOne({
                                                where: { id: variantOrVariantId },
                                            })];
                                    case 1:
                                        variantRes = _f.sent();
                                        if (!(0, medusa_core_utils_1.isDefined)(variantRes)) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Variant with id ".concat(variantOrVariantId, " was not found"));
                                        }
                                        else {
                                            variant = variantRes;
                                        }
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (!variant.id) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Variant id missing");
                                        }
                                        _f.label = 3;
                                    case 3:
                                        prices = update.prices, options = update.options, metadata = update.metadata, inventory_quantity = update.inventory_quantity, rest = __rest(update, ["prices", "options", "metadata", "inventory_quantity"]);
                                        if (!prices) return [3 /*break*/, 5];
                                        return [4 /*yield*/, this.updateVariantPrices(variant.id, prices)];
                                    case 4:
                                        _f.sent();
                                        _f.label = 5;
                                    case 5:
                                        if (!options) return [3 /*break*/, 13];
                                        _f.label = 6;
                                    case 6:
                                        _f.trys.push([6, 11, 12, 13]);
                                        options_1 = __values(options), options_1_1 = options_1.next();
                                        _f.label = 7;
                                    case 7:
                                        if (!!options_1_1.done) return [3 /*break*/, 10];
                                        option = options_1_1.value;
                                        return [4 /*yield*/, this.updateOptionValue(variant.id, option.option_id, option.value)];
                                    case 8:
                                        _f.sent();
                                        _f.label = 9;
                                    case 9:
                                        options_1_1 = options_1.next();
                                        return [3 /*break*/, 7];
                                    case 10: return [3 /*break*/, 13];
                                    case 11:
                                        e_2_1 = _f.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 13];
                                    case 12:
                                        try {
                                            if (options_1_1 && !options_1_1.done && (_d = options_1.return)) _d.call(options_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 13:
                                        if (typeof metadata === "object") {
                                            variant.metadata = (0, utils_1.setMetadata)(variant, metadata);
                                        }
                                        if (typeof inventory_quantity === "number") {
                                            variant.inventory_quantity = inventory_quantity;
                                        }
                                        try {
                                            for (_a = __values(Object.entries(rest)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                _c = __read(_b.value, 2), key = _c[0], value = _c[1];
                                                variant[key] = value;
                                            }
                                        }
                                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                                            }
                                            finally { if (e_3) throw e_3.error; }
                                        }
                                        return [4 /*yield*/, variantRepo.save(variant)];
                                    case 14:
                                        result = _f.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductVariantService.Events.UPDATED, {
                                                id: result.id,
                                                product_id: result.product_id,
                                                fields: Object.keys(update),
                                            })];
                                    case 15:
                                        _f.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates a variant's prices.
     * Deletes any prices that are not in the update object, and is not associated with a price list.
     * @param variantId - the id of variant
     * @param prices - the update prices
     * @returns empty promise
     */
    ProductVariantService.prototype.updateVariantPrices = function (variantId, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, regionsServiceTx, prices_2, prices_2_1, price, region, e_4_1;
                            var e_4, _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        moneyAmountRepo = manager.getCustomRepository(this.moneyAmountRepository_);
                                        // Delete obsolete prices
                                        return [4 /*yield*/, moneyAmountRepo.deleteVariantPricesNotIn(variantId, prices)];
                                    case 1:
                                        // Delete obsolete prices
                                        _b.sent();
                                        regionsServiceTx = this.regionService_.withTransaction(manager);
                                        _b.label = 2;
                                    case 2:
                                        _b.trys.push([2, 10, 11, 12]);
                                        prices_2 = __values(prices), prices_2_1 = prices_2.next();
                                        _b.label = 3;
                                    case 3:
                                        if (!!prices_2_1.done) return [3 /*break*/, 9];
                                        price = prices_2_1.value;
                                        if (!price.region_id) return [3 /*break*/, 6];
                                        return [4 /*yield*/, regionsServiceTx.retrieve(price.region_id)];
                                    case 4:
                                        region = _b.sent();
                                        return [4 /*yield*/, this.setRegionPrice(variantId, {
                                                currency_code: region.currency_code,
                                                region_id: price.region_id,
                                                amount: price.amount,
                                            })];
                                    case 5:
                                        _b.sent();
                                        return [3 /*break*/, 8];
                                    case 6: return [4 /*yield*/, this.setCurrencyPrice(variantId, price)];
                                    case 7:
                                        _b.sent();
                                        _b.label = 8;
                                    case 8:
                                        prices_2_1 = prices_2.next();
                                        return [3 /*break*/, 3];
                                    case 9: return [3 /*break*/, 12];
                                    case 10:
                                        e_4_1 = _b.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 12];
                                    case 11:
                                        try {
                                            if (prices_2_1 && !prices_2_1.done && (_a = prices_2.return)) _a.call(prices_2);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 12: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets the price specific to a region. If no region specific money amount
     * exists the function will try to use a currency price. If no default
     * currency price exists the function will throw an error.
     * @param variantId - the id of the variant to get price from
     * @param context - context for getting region price
     * @return the price specific to the region
     */
    ProductVariantService.prototype.getRegionPrice = function (variantId, context) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var region, prices;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.regionService_
                                            .withTransaction(manager)
                                            .retrieve(context.regionId)];
                                    case 1:
                                        region = _a.sent();
                                        return [4 /*yield*/, this.priceSelectionStrategy_
                                                .withTransaction(manager)
                                                .calculateVariantPrice(variantId, {
                                                region_id: context.regionId,
                                                currency_code: region.currency_code,
                                                quantity: context.quantity,
                                                customer_id: context.customer_id,
                                                include_discount_prices: !!context.include_discount_prices,
                                            })];
                                    case 2:
                                        prices = _a.sent();
                                        return [2 /*return*/, prices.calculatedPrice];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the default price of a specific region
     * @param variantId - the id of the variant to update
     * @param price - the price for the variant.
     * @return the result of the update operation
     */
    ProductVariantService.prototype.setRegionPrice = function (variantId, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo, moneyAmount;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.getCustomRepository(this.moneyAmountRepository_);
                                        return [4 /*yield*/, moneyAmountRepo.findOne({
                                                where: {
                                                    variant_id: variantId,
                                                    region_id: price.region_id,
                                                    price_list_id: null,
                                                },
                                            })];
                                    case 1:
                                        moneyAmount = _a.sent();
                                        if (!moneyAmount) {
                                            moneyAmount = moneyAmountRepo.create(__assign(__assign({}, price), { variant_id: variantId }));
                                        }
                                        else {
                                            moneyAmount.amount = price.amount;
                                        }
                                        return [4 /*yield*/, moneyAmountRepo.save(moneyAmount)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Sets the default price for the given currency.
     * @param variantId - the id of the variant to set prices for
     * @param price - the price for the variant
     * @return the result of the update operation
     */
    ProductVariantService.prototype.setCurrencyPrice = function (variantId, price) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var moneyAmountRepo;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        moneyAmountRepo = manager.getCustomRepository(this.moneyAmountRepository_);
                                        return [4 /*yield*/, moneyAmountRepo.upsertVariantCurrencyPrice(variantId, price)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Updates variant's option value.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    ProductVariantService.prototype.updateOptionValue = function (variantId, optionId, optionValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.getCustomRepository(this.productOptionValueRepository_);
                                        return [4 /*yield*/, productOptionValueRepo.findOne({
                                                where: { variant_id: variantId, option_id: optionId },
                                            })];
                                    case 1:
                                        productOptionValue = _a.sent();
                                        if (!productOptionValue) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product option value not found");
                                        }
                                        productOptionValue.value = optionValue;
                                        return [4 /*yield*/, productOptionValueRepo.save(productOptionValue)];
                                    case 2: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Adds option value to a variant.
     * Fails when product with variant does not exist or
     * if that product does not have an option with the given
     * option id. Fails if given variant is not found.
     * Option value must be of type string or number.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @param optionValue - option value to add.
     * @return the result of the update operation.
     */
    ProductVariantService.prototype.addOptionValue = function (variantId, optionId, optionValue) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.getCustomRepository(this.productOptionValueRepository_);
                                        productOptionValue = productOptionValueRepo.create({
                                            variant_id: variantId,
                                            option_id: optionId,
                                            value: optionValue,
                                        });
                                        return [4 /*yield*/, productOptionValueRepo.save(productOptionValue)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Deletes option value from given variant.
     * Will never fail due to delete being idempotent.
     * @param variantId - the variant to decorate.
     * @param optionId - the option from product.
     * @return empty promise
     */
    ProductVariantService.prototype.deleteOptionValue = function (variantId, optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionValueRepo, productOptionValue;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionValueRepo = manager.getCustomRepository(this.productOptionValueRepository_);
                                        return [4 /*yield*/, productOptionValueRepo.findOne({
                                                where: {
                                                    variant_id: variantId,
                                                    option_id: optionId,
                                                },
                                            })];
                                    case 1:
                                        productOptionValue = _a.sent();
                                        if (!productOptionValue) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, productOptionValueRepo.softRemove(productOptionValue)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, Promise.resolve()];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    ProductVariantService.prototype.listAndCount = function (selector, config) {
        var _a;
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var variantRepo, _b, q, query, relations, qb, _c, raw, count_1, variants_1, _d, variants, count;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        variantRepo = this.manager_.getCustomRepository(this.productVariantRepository_);
                        _b = this.prepareListQuery_(selector, config), q = _b.q, query = _b.query, relations = _b.relations;
                        if (!q) return [3 /*break*/, 3];
                        qb = this.getFreeTextQueryBuilder_(variantRepo, query, q);
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1:
                        _c = __read.apply(void 0, [_e.sent(), 2]), raw = _c[0], count_1 = _c[1];
                        return [4 /*yield*/, variantRepo.findWithRelations(relations, raw.map(function (i) { return i.id; }), (_a = query.withDeleted) !== null && _a !== void 0 ? _a : false)];
                    case 2:
                        variants_1 = _e.sent();
                        return [2 /*return*/, [variants_1, count_1]];
                    case 3: return [4 /*yield*/, variantRepo.findWithRelationsAndCount(relations, query)];
                    case 4:
                        _d = __read.apply(void 0, [_e.sent(), 2]), variants = _d[0], count = _d[1];
                        return [2 /*return*/, [variants, count]];
                }
            });
        });
    };
    /**
     * @param selector - the query object for find
     * @param config - query config object for variant retrieval
     * @return the result of the find operation
     */
    ProductVariantService.prototype.list = function (selector, config) {
        var _a, _b;
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var productVariantRepo, priceIndex, q, query, where_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        productVariantRepo = this.manager_.getCustomRepository(this.productVariantRepository_);
                        priceIndex = (_b = (_a = config.relations) === null || _a === void 0 ? void 0 : _a.indexOf("prices")) !== null && _b !== void 0 ? _b : -1;
                        if (priceIndex >= 0 && config.relations) {
                            config.relations = __spreadArray([], __read(config.relations), false);
                            config.relations.splice(priceIndex, 1);
                        }
                        if ("q" in selector) {
                            q = selector.q;
                            delete selector.q;
                        }
                        query = (0, utils_1.buildQuery)(selector, config);
                        if (q) {
                            where_1 = query.where;
                            delete where_1.sku;
                            delete where_1.title;
                            query.join = {
                                alias: "variant",
                                innerJoin: {
                                    product: "variant.product",
                                },
                            };
                            query.where = function (qb) {
                                qb.where(where_1).andWhere([
                                    { sku: (0, typeorm_1.ILike)("%".concat(q, "%")) },
                                    { title: (0, typeorm_1.ILike)("%".concat(q, "%")) },
                                    { product: { title: (0, typeorm_1.ILike)("%".concat(q, "%")) } },
                                ]);
                            };
                        }
                        return [4 /*yield*/, productVariantRepo.find(query)];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    /**
     * Deletes variant.
     * Will never fail due to delete being idempotent.
     * @param variantId - the id of the variant to delete. Must be
     *   castable as an ObjectId
     * @return empty promise
     */
    ProductVariantService.prototype.delete = function (variantId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var variantRepo, variant;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        variantRepo = manager.getCustomRepository(this.productVariantRepository_);
                                        return [4 /*yield*/, variantRepo.findOne({
                                                where: { id: variantId },
                                                relations: ["prices", "options", "inventory_items"],
                                            })];
                                    case 1:
                                        variant = _a.sent();
                                        if (!variant) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        return [4 /*yield*/, variantRepo.softRemove(variant)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductVariantService.Events.DELETED, {
                                                id: variant.id,
                                                product_id: variant.product_id,
                                                metadata: variant.metadata,
                                            })];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check if the variant is assigned to at least one of the provided sales channels.
     *
     * @param id - product variant id
     * @param salesChannelIds - an array of sales channel ids
     */
    ProductVariantService.prototype.isVariantInSalesChannels = function (id, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var variant, productsSalesChannels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve(id, {
                            relations: ["product", "product.sales_channels"],
                        })
                        // TODO: reimplement this to use db level check
                    ];
                    case 1:
                        variant = _a.sent();
                        productsSalesChannels = variant.product.sales_channels.map(function (channel) { return channel.id; });
                        return [2 /*return*/, productsSalesChannels.some(function (id) { return salesChannelIds.includes(id); })];
                }
            });
        });
    };
    /**
     * Creates a query object to be used for list queries.
     * @param selector - the selector to create the query from
     * @param config - the config to use for the query
     * @return an object containing the query, relations and free-text
     *   search param.
     */
    ProductVariantService.prototype.prepareListQuery_ = function (selector, config) {
        var q;
        if ((0, medusa_core_utils_1.isDefined)(selector.q)) {
            q = selector.q;
            delete selector.q;
        }
        var query = (0, utils_1.buildQuery)(selector, config);
        if (config.relations && config.relations.length > 0) {
            query.relations = config.relations;
        }
        if (config.select && config.select.length > 0) {
            query.select = config.select;
        }
        var rels = query.relations;
        delete query.relations;
        return {
            query: query,
            relations: rels,
            q: q,
        };
    };
    /**
     * Lists variants based on the provided parameters and includes the count of
     * variants that match the query.
     * @param variantRepo - the variant repository
     * @param query - object that defines the scope for what should be returned
     * @param q - free text query
     * @return an array containing the products as the first element and the total
     *   count of products that matches the query as the second element.
     */
    ProductVariantService.prototype.getFreeTextQueryBuilder_ = function (variantRepo, query, q) {
        var _a;
        var where = query.where;
        if (typeof where === "object") {
            if ("title" in where) {
                delete where.title;
            }
        }
        var qb = variantRepo
            .createQueryBuilder("pv")
            .take(query.take)
            .skip(Math.max((_a = query.skip) !== null && _a !== void 0 ? _a : 0, 0))
            .leftJoinAndSelect("pv.product", "product")
            .select(["pv.id"])
            .where(where)
            .andWhere(new typeorm_1.Brackets(function (qb) {
            qb.where("product.title ILIKE :q", { q: "%".concat(q, "%") })
                .orWhere("pv.title ILIKE :q", { q: "%".concat(q, "%") })
                .orWhere("pv.sku ILIKE :q", { q: "%".concat(q, "%") });
        }));
        if (query.withDeleted) {
            qb = qb.withDeleted();
        }
        return qb;
    };
    ProductVariantService.Events = {
        UPDATED: "product-variant.updated",
        CREATED: "product-variant.created",
        DELETED: "product-variant.deleted",
    };
    return ProductVariantService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductVariantService;
//# sourceMappingURL=product-variant.js.map