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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategoryRepository = void 0;
var typeorm_1 = require("typeorm");
var product_category_1 = require("../models/product-category");
var ProductCategoryRepository = /** @class */ (function (_super) {
    __extends(ProductCategoryRepository, _super);
    function ProductCategoryRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductCategoryRepository.prototype.getFreeTextSearchResultsAndCount = function (options, q, treeScope) {
        var _a, _b;
        if (options === void 0) { options = {
            where: {},
        }; }
        if (treeScope === void 0) { treeScope = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var entityName, options_, relations, selectStatements, queryBuilder, includedTreeRelations, nonTreeRelations;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        entityName = "product_category";
                        options_ = __assign({}, options);
                        relations = options_.relations || [];
                        selectStatements = function (relationName) {
                            var modelColumns = _this.manager.connection
                                .getMetadata(product_category_1.ProductCategory)
                                .ownColumns.map(function (column) { return column.propertyName; });
                            return (options_.select || modelColumns).map(function (column) {
                                return "".concat(relationName, ".").concat(column);
                            });
                        };
                        queryBuilder = this.createQueryBuilder(entityName)
                            .select(selectStatements(entityName))
                            .skip(options_.skip)
                            .take(options_.take);
                        if (q) {
                            (_a = options_.where) === null || _a === void 0 ? true : delete _a.name;
                            (_b = options_.where) === null || _b === void 0 ? true : delete _b.handle;
                            queryBuilder.where(new typeorm_1.Brackets(function (bracket) {
                                bracket
                                    .where({ name: (0, typeorm_1.ILike)("%".concat(q, "%")) })
                                    .orWhere({ handle: (0, typeorm_1.ILike)("%".concat(q, "%")) });
                            }));
                        }
                        queryBuilder.andWhere(options_.where);
                        includedTreeRelations = relations.filter(function (rel) {
                            return product_category_1.ProductCategory.treeRelations.includes(rel);
                        });
                        includedTreeRelations.forEach(function (treeRelation) {
                            var treeWhere = Object.entries(treeScope)
                                .map(function (entry) { return "".concat(treeRelation, ".").concat(entry[0], " = :").concat(entry[0]); })
                                .join(" AND ");
                            queryBuilder
                                .leftJoin("".concat(entityName, ".").concat(treeRelation), treeRelation, treeWhere, treeScope)
                                .addSelect(selectStatements(treeRelation));
                        });
                        nonTreeRelations = relations.filter(function (rel) { return !product_category_1.ProductCategory.treeRelations.includes(rel); });
                        nonTreeRelations.forEach(function (relation) {
                            queryBuilder.leftJoinAndSelect("".concat(entityName, ".").concat(relation), relation);
                        });
                        if (options_.withDeleted) {
                            queryBuilder.withDeleted();
                        }
                        return [4 /*yield*/, queryBuilder.getManyAndCount()];
                    case 1: return [2 /*return*/, _c.sent()];
                }
            });
        });
    };
    ProductCategoryRepository.prototype.addProducts = function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .insert()
                            .into(product_category_1.ProductCategory.productCategoryProductJoinTable)
                            .values(productIds.map(function (id) { return ({
                            product_category_id: productCategoryId,
                            product_id: id,
                        }); }))
                            .orIgnore()
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProductCategoryRepository.prototype.removeProducts = function (productCategoryId, productIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createQueryBuilder()
                            .delete()
                            .from(product_category_1.ProductCategory.productCategoryProductJoinTable)
                            .where({
                            product_category_id: productCategoryId,
                            product_id: (0, typeorm_1.In)(productIds),
                        })
                            .execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductCategoryRepository = __decorate([
        (0, typeorm_1.EntityRepository)(product_category_1.ProductCategory)
    ], ProductCategoryRepository);
    return ProductCategoryRepository;
}(typeorm_1.TreeRepository));
exports.ProductCategoryRepository = ProductCategoryRepository;
//# sourceMappingURL=product-category.js.map