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
exports.ProductVariantRepository = void 0;
var typeorm_1 = require("typeorm");
var lodash_1 = require("lodash");
var product_variant_1 = require("../models/product-variant");
var ProductVariantRepository = /** @class */ (function (_super) {
    __extends(ProductVariantRepository, _super);
    function ProductVariantRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductVariantRepository.prototype.mergeEntitiesWithRelations = function (entitiesAndRelations) {
        var entitiesAndRelationsById = (0, lodash_1.groupBy)(entitiesAndRelations, "id");
        return (0, lodash_1.map)(entitiesAndRelationsById, function (entityAndRelations) {
            return lodash_1.merge.apply(void 0, __spreadArray([{}], __read(entityAndRelations), false));
        });
    };
    ProductVariantRepository.prototype.queryProductsVariants = function (optionsWithoutRelations, shouldCount) {
        if (shouldCount === void 0) { shouldCount = false; }
        return __awaiter(this, void 0, void 0, function () {
            var qb, entities, count, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("pv")
                            .select(["pv.id"])
                            .skip(optionsWithoutRelations.skip)
                            .take(optionsWithoutRelations.take);
                        qb = optionsWithoutRelations.where
                            ? qb.where(optionsWithoutRelations.where)
                            : qb;
                        qb = optionsWithoutRelations.order
                            ? qb.orderBy(optionsWithoutRelations.order)
                            : qb;
                        if (optionsWithoutRelations.withDeleted) {
                            qb = qb.withDeleted();
                        }
                        count = 0;
                        if (!shouldCount) return [3 /*break*/, 2];
                        return [4 /*yield*/, qb.getManyAndCount()];
                    case 1:
                        result = _a.sent();
                        entities = result[0];
                        count = result[1];
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, qb.getMany()];
                    case 3:
                        entities = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, [entities, count]];
                }
            });
        });
    };
    ProductVariantRepository.prototype.getGroupedRelations = function (relations) {
        var e_1, _a;
        var groupedRelations = {};
        try {
            for (var relations_1 = __values(relations), relations_1_1 = relations_1.next(); !relations_1_1.done; relations_1_1 = relations_1.next()) {
                var rel = relations_1_1.value;
                var _b = __read(rel.split("."), 1), topLevel = _b[0];
                if (groupedRelations[topLevel]) {
                    groupedRelations[topLevel].push(rel);
                }
                else {
                    groupedRelations[topLevel] = [rel];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (relations_1_1 && !relations_1_1.done && (_a = relations_1.return)) _a.call(relations_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return groupedRelations;
    };
    ProductVariantRepository.prototype.queryProductVariantsWithIds = function (entityIds, groupedRelations, withDeleted) {
        if (withDeleted === void 0) { withDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var entitiesIdsWithRelations;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Promise.all(Object.entries(groupedRelations).map(function (_a) {
                            var _b = __read(_a, 2), toplevel = _b[0], rels = _b[1];
                            return __awaiter(_this, void 0, void 0, function () {
                                var querybuilder, rels_1, rels_1_1, rel, _c, _1, rest;
                                var e_2, _d;
                                return __generator(this, function (_e) {
                                    querybuilder = this.createQueryBuilder("pv").leftJoinAndSelect("pv.".concat(toplevel), toplevel);
                                    try {
                                        for (rels_1 = __values(rels), rels_1_1 = rels_1.next(); !rels_1_1.done; rels_1_1 = rels_1.next()) {
                                            rel = rels_1_1.value;
                                            _c = __read(rel.split("."), 2), _1 = _c[0], rest = _c[1];
                                            if (!rest) {
                                                continue;
                                            }
                                            // Regex matches all '.' except the rightmost
                                            querybuilder.leftJoinAndSelect(rel.replace(/\.(?=[^.]*\.)/g, "__"), rel.replace(".", "__"));
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (rels_1_1 && !rels_1_1.done && (_d = rels_1.return)) _d.call(rels_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                    if (withDeleted) {
                                        querybuilder
                                            .where("pv.id IN (:...entitiesIds)", {
                                            entitiesIds: entityIds,
                                        })
                                            .withDeleted();
                                    }
                                    else {
                                        querybuilder.where("pv.deleted_at IS NULL AND pv.id IN (:...entitiesIds)", {
                                            entitiesIds: entityIds,
                                        });
                                    }
                                    return [2 /*return*/, querybuilder.getMany()];
                                });
                            });
                        })).then(lodash_1.flatten)];
                    case 1:
                        entitiesIdsWithRelations = _a.sent();
                        return [2 /*return*/, entitiesIdsWithRelations];
                }
            });
        });
    };
    ProductVariantRepository.prototype.findWithRelationsAndCount = function (relations, idsOrOptionsWithoutRelations, withDeleted) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {
            where: {},
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var count, entities, result, entitiesIds, options, toReturn, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations, {
                                withDeleted: withDeleted !== null && withDeleted !== void 0 ? withDeleted : false,
                            })];
                    case 1:
                        entities = _a.sent();
                        count = entities.length;
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.queryProductsVariants(idsOrOptionsWithoutRelations, true)];
                    case 3:
                        result = _a.sent();
                        entities = result[0];
                        count = result[1];
                        _a.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, [[], count]];
                        }
                        if (!(relations.length === 0)) return [3 /*break*/, 6];
                        options = __assign({}, idsOrOptionsWithoutRelations);
                        // Since we are finding by the ids that have been retrieved above and those ids are already
                        // applying skip/take. Remove those options to avoid getting no results
                        if (typeof options === "object") {
                            delete options.skip;
                            delete options.take;
                        }
                        return [4 /*yield*/, this.findByIds(entitiesIds, options)];
                    case 5:
                        toReturn = _a.sent();
                        return [2 /*return*/, [toReturn, count]];
                    case 6:
                        groupedRelations = this.getGroupedRelations(relations);
                        return [4 /*yield*/, this.queryProductVariantsWithIds(entitiesIds, groupedRelations, withDeleted)];
                    case 7:
                        entitiesIdsWithRelations = _a.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesToReturn = this.mergeEntitiesWithRelations(entitiesAndRelations);
                        return [2 /*return*/, [entitiesToReturn, count]];
                }
            });
        });
    };
    ProductVariantRepository.prototype.findWithRelations = function (relations, idsOrOptionsWithoutRelations, withDeleted) {
        if (relations === void 0) { relations = []; }
        if (idsOrOptionsWithoutRelations === void 0) { idsOrOptionsWithoutRelations = {}; }
        if (withDeleted === void 0) { withDeleted = false; }
        return __awaiter(this, void 0, void 0, function () {
            var entities, result, entitiesIds, options, groupedRelations, entitiesIdsWithRelations, entitiesAndRelations, entitiesToReturn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!Array.isArray(idsOrOptionsWithoutRelations)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.findByIds(idsOrOptionsWithoutRelations, {
                                withDeleted: withDeleted,
                            })];
                    case 1:
                        entities = _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.queryProductsVariants(idsOrOptionsWithoutRelations, false)];
                    case 3:
                        result = _a.sent();
                        entities = result[0];
                        _a.label = 4;
                    case 4:
                        entitiesIds = entities.map(function (_a) {
                            var id = _a.id;
                            return id;
                        });
                        if (entitiesIds.length === 0) {
                            // no need to continue
                            return [2 /*return*/, []];
                        }
                        if (!(relations.length === 0)) return [3 /*break*/, 6];
                        options = __assign({}, idsOrOptionsWithoutRelations);
                        // Since we are finding by the ids that have been retrieved above and those ids are already
                        // applying skip/take. Remove those options to avoid getting no results
                        if (typeof options === "object") {
                            delete options.skip;
                            delete options.take;
                        }
                        return [4 /*yield*/, this.findByIds(entitiesIds, options)];
                    case 5: return [2 /*return*/, _a.sent()];
                    case 6:
                        groupedRelations = this.getGroupedRelations(relations);
                        return [4 /*yield*/, this.queryProductVariantsWithIds(entitiesIds, groupedRelations, withDeleted)];
                    case 7:
                        entitiesIdsWithRelations = _a.sent();
                        entitiesAndRelations = entitiesIdsWithRelations.concat(entities);
                        entitiesToReturn = this.mergeEntitiesWithRelations(entitiesAndRelations);
                        return [2 /*return*/, entitiesToReturn];
                }
            });
        });
    };
    ProductVariantRepository.prototype.findOneWithRelations = function (relations, optionsWithoutRelations) {
        if (relations === void 0) { relations = []; }
        if (optionsWithoutRelations === void 0) { optionsWithoutRelations = { where: {} }; }
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // Limit 1
                        optionsWithoutRelations.take = 1;
                        return [4 /*yield*/, this.findWithRelations(relations, optionsWithoutRelations)];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result[0]];
                }
            });
        });
    };
    ProductVariantRepository = __decorate([
        (0, typeorm_1.EntityRepository)(product_variant_1.ProductVariant)
    ], ProductVariantRepository);
    return ProductVariantRepository;
}(typeorm_1.Repository));
exports.ProductVariantRepository = ProductVariantRepository;
//# sourceMappingURL=product-variant.js.map