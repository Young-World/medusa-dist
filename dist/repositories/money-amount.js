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
exports.MoneyAmountRepository = void 0;
var partition_1 = __importDefault(require("lodash/partition"));
var typeorm_1 = require("typeorm");
var money_amount_1 = require("../models/money-amount");
var MoneyAmountRepository = /** @class */ (function (_super) {
    __extends(MoneyAmountRepository, _super);
    function MoneyAmountRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Will be removed in a future release.
     * Use `deleteVariantPricesNotIn` instead.
     * @deprecated
     */
    MoneyAmountRepository.prototype.findVariantPricesNotIn = function (variantId, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var pricesNotInPricesPayload;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .where({
                            variant_id: variantId,
                            price_list_id: (0, typeorm_1.IsNull)(),
                        })
                            .andWhere(new typeorm_1.Brackets(function (qb) {
                            qb.where({
                                currency_code: (0, typeorm_1.Not)((0, typeorm_1.In)(prices.map(function (p) { return p.currency_code; }))),
                            }).orWhere({ region_id: (0, typeorm_1.Not)((0, typeorm_1.In)(prices.map(function (p) { return p.region_id; }))) });
                        }))
                            .getMany()];
                    case 1:
                        pricesNotInPricesPayload = _a.sent();
                        return [2 /*return*/, pricesNotInPricesPayload];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.deleteVariantPricesNotIn = function (variantId, prices) {
        return __awaiter(this, void 0, void 0, function () {
            var where, orWhere, prices_1, prices_1_1, price;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        where = {
                            variant_id: variantId,
                            price_list_id: (0, typeorm_1.IsNull)(),
                        };
                        orWhere = [];
                        try {
                            for (prices_1 = __values(prices), prices_1_1 = prices_1.next(); !prices_1_1.done; prices_1_1 = prices_1.next()) {
                                price = prices_1_1.value;
                                if (price.currency_code) {
                                    orWhere.push({
                                        currency_code: (0, typeorm_1.Not)(price.currency_code),
                                    }, {
                                        region_id: price.region_id ? (0, typeorm_1.Not)(price.region_id) : (0, typeorm_1.Not)((0, typeorm_1.IsNull)()),
                                        currency_code: price.currency_code,
                                    });
                                }
                                if (price.region_id) {
                                    orWhere.push({
                                        region_id: (0, typeorm_1.Not)(price.region_id),
                                    });
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (prices_1_1 && !prices_1_1.done && (_a = prices_1.return)) _a.call(prices_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .where(where)
                                .andWhere(orWhere)
                                .execute()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.upsertVariantCurrencyPrice = function (variantId, price) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var moneyAmount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findOne({
                            where: {
                                currency_code: price.currency_code,
                                variant_id: variantId,
                                region_id: (0, typeorm_1.IsNull)(),
                                price_list_id: (0, typeorm_1.IsNull)(),
                            },
                        })];
                    case 1:
                        moneyAmount = _b.sent();
                        if (!moneyAmount) {
                            moneyAmount = this.create(__assign(__assign({}, price), { currency_code: (_a = price.currency_code) === null || _a === void 0 ? void 0 : _a.toLowerCase(), variant_id: variantId }));
                        }
                        else {
                            moneyAmount.amount = price.amount;
                        }
                        return [4 /*yield*/, this.save(moneyAmount)];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.addPriceListPrices = function (priceListId, prices, overrideExisting) {
        if (overrideExisting === void 0) { overrideExisting = false; }
        return __awaiter(this, void 0, void 0, function () {
            var toInsert, insertResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toInsert = prices.map(function (price) {
                            return _this.create(__assign(__assign({}, price), { price_list_id: priceListId }));
                        });
                        return [4 /*yield*/, this.createQueryBuilder()
                                .insert()
                                .orIgnore(true)
                                .into(money_amount_1.MoneyAmount)
                                .values(toInsert)
                                .execute()];
                    case 1:
                        insertResult = _a.sent();
                        if (!overrideExisting) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createQueryBuilder()
                                .delete()
                                .from(money_amount_1.MoneyAmount)
                                .where({
                                price_list_id: priceListId,
                                id: (0, typeorm_1.Not)((0, typeorm_1.In)(insertResult.identifiers.map(function (ma) { return ma.id; }))),
                            })
                                .execute()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [4 /*yield*/, this.manager
                            .createQueryBuilder(money_amount_1.MoneyAmount, "ma")
                            .select()
                            .where(insertResult.identifiers)
                            .getMany()];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.deletePriceListPrices = function (priceListId, moneyAmountIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(money_amount_1.MoneyAmount)
                            .where({ price_list_id: priceListId, id: (0, typeorm_1.In)(moneyAmountIds) })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.findManyForVariantInPriceList = function (variant_id, price_list_id, requiresPriceList) {
        if (requiresPriceList === void 0) { requiresPriceList = false; }
        return __awaiter(this, void 0, void 0, function () {
            var qb, getAndWhere;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("ma")
                            .leftJoinAndSelect("ma.price_list", "price_list")
                            .where("ma.variant_id = :variant_id", { variant_id: variant_id });
                        getAndWhere = function (subQb) {
                            var andWhere = subQb.where("ma.price_list_id = :price_list_id", {
                                price_list_id: price_list_id,
                            });
                            if (!requiresPriceList) {
                                andWhere.orWhere("ma.price_list_id IS NULL");
                            }
                            return andWhere;
                        };
                        qb.andWhere(new typeorm_1.Brackets(getAndWhere));
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.findManyForVariantInRegion = function (variant_id, region_id, currency_code, customer_id, include_discount_prices, include_tax_inclusive_pricing) {
        if (include_tax_inclusive_pricing === void 0) { include_tax_inclusive_pricing = false; }
        return __awaiter(this, void 0, void 0, function () {
            var date, qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        date = new Date();
                        qb = this.createQueryBuilder("ma")
                            .leftJoinAndSelect("ma.price_list", "price_list")
                            .where({ variant_id: variant_id })
                            .andWhere("(ma.price_list_id is null or price_list.status = 'active')")
                            .andWhere("(price_list.ends_at is null OR price_list.ends_at > :date)", {
                            date: date.toUTCString(),
                        })
                            .andWhere("(price_list.starts_at is null OR price_list.starts_at < :date)", {
                            date: date.toUTCString(),
                        });
                        if (include_tax_inclusive_pricing) {
                            qb.leftJoin("ma.currency", "currency")
                                .leftJoin("ma.region", "region")
                                .addSelect(["currency.includes_tax", "region.includes_tax"]);
                        }
                        if (region_id || currency_code) {
                            qb.andWhere(new typeorm_1.Brackets(function (qb) {
                                if (region_id && !currency_code) {
                                    qb.where({ region_id: region_id });
                                }
                                if (!region_id && currency_code) {
                                    qb.where({ currency_code: currency_code });
                                }
                                if (currency_code && region_id) {
                                    qb.where({ region_id: region_id }).orWhere({
                                        currency_code: currency_code,
                                    });
                                }
                            }));
                        }
                        else if (!customer_id && !include_discount_prices) {
                            qb.andWhere("price_list.id IS null");
                        }
                        if (customer_id) {
                            qb.leftJoin("price_list.customer_groups", "cgroup")
                                .leftJoin("customer_group_customers", "cgc", "cgc.customer_group_id = cgroup.id")
                                .andWhere("(cgc.customer_group_id is null OR cgc.customer_id = :customer_id)", {
                                customer_id: customer_id,
                            });
                        }
                        else {
                            qb.leftJoin("price_list.customer_groups", "cgroup").andWhere("cgroup.id is null");
                        }
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MoneyAmountRepository.prototype.updatePriceListPrices = function (priceListId, updates) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, existingPrices, newPrices, newPriceEntities;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read((0, partition_1.default)(updates, function (update) { return update.id; }), 2), existingPrices = _a[0], newPrices = _a[1];
                        newPriceEntities = newPrices.map(function (price) {
                            return _this.create(__assign(__assign({}, price), { price_list_id: priceListId }));
                        });
                        return [4 /*yield*/, this.save(__spreadArray(__spreadArray([], __read(existingPrices), false), __read(newPriceEntities), false))];
                    case 1: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    MoneyAmountRepository = __decorate([
        (0, typeorm_1.EntityRepository)(money_amount_1.MoneyAmount)
    ], MoneyAmountRepository);
    return MoneyAmountRepository;
}(typeorm_1.Repository));
exports.MoneyAmountRepository = MoneyAmountRepository;
//# sourceMappingURL=money-amount.js.map