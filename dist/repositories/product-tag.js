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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTagRepository = void 0;
var typeorm_1 = require("typeorm");
var product_tag_1 = require("../models/product-tag");
var ProductTagRepository = /** @class */ (function (_super) {
    __extends(ProductTagRepository, _super);
    function ProductTagRepository() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ProductTagRepository.prototype.listTagsByUsage = function (count) {
        if (count === void 0) { count = 10; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.query("\n          SELECT id, COUNT(pts.product_tag_id) as usage_count, pt.value\n          FROM product_tag pt\n                   LEFT JOIN product_tags pts ON pt.id = pts.product_tag_id\n          GROUP BY id\n          ORDER BY usage_count DESC\n              LIMIT $1\n      ", [count])];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductTagRepository.prototype.upsertTags = function (tags) {
        return __awaiter(this, void 0, void 0, function () {
            var tagsValues, existingTags, existingTagsMap, upsertedTags, tags_1, tags_1_1, tag, aTag, newTag, savedTag, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        tagsValues = tags.map(function (tag) { return tag.value; });
                        return [4 /*yield*/, this.find({
                                where: {
                                    value: (0, typeorm_1.In)(tagsValues),
                                },
                            })];
                    case 1:
                        existingTags = _b.sent();
                        existingTagsMap = new Map(existingTags.map(function (tag) { return [tag.value, tag]; }));
                        upsertedTags = [];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 8, 9, 10]);
                        tags_1 = __values(tags), tags_1_1 = tags_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!tags_1_1.done) return [3 /*break*/, 7];
                        tag = tags_1_1.value;
                        aTag = existingTagsMap.get(tag.value);
                        if (!aTag) return [3 /*break*/, 4];
                        upsertedTags.push(aTag);
                        return [3 /*break*/, 6];
                    case 4:
                        newTag = this.create(tag);
                        return [4 /*yield*/, this.save(newTag)];
                    case 5:
                        savedTag = _b.sent();
                        upsertedTags.push(savedTag);
                        _b.label = 6;
                    case 6:
                        tags_1_1 = tags_1.next();
                        return [3 /*break*/, 3];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (tags_1_1 && !tags_1_1.done && (_a = tags_1.return)) _a.call(tags_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, upsertedTags];
                }
            });
        });
    };
    ProductTagRepository.prototype.findAndCountByDiscountConditionId = function (conditionId, query) {
        return __awaiter(this, void 0, void 0, function () {
            var qb;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        qb = this.createQueryBuilder("pt");
                        if (query === null || query === void 0 ? void 0 : query.select) {
                            qb.select(query.select.map(function (select) { return "pt.".concat(select); }));
                        }
                        if (query.skip) {
                            qb.skip(query.skip);
                        }
                        if (query.take) {
                            qb.take(query.take);
                        }
                        return [4 /*yield*/, qb
                                .where(query.where)
                                .innerJoin("discount_condition_product_tag", "dc_pt", "dc_pt.product_tag_id = pt.id AND dc_pt.condition_id = :dcId", { dcId: conditionId })
                                .getManyAndCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductTagRepository = __decorate([
        (0, typeorm_1.EntityRepository)(product_tag_1.ProductTag)
    ], ProductTagRepository);
    return ProductTagRepository;
}(typeorm_1.Repository));
exports.ProductTagRepository = ProductTagRepository;
//# sourceMappingURL=product-tag.js.map