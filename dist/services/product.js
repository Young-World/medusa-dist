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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var medusa_core_utils_1 = require("medusa-core-utils");
var interfaces_1 = require("../interfaces");
var sales_channels_1 = __importDefault(require("../loaders/feature-flags/sales-channels"));
var utils_1 = require("../utils");
var ProductService = /** @class */ (function (_super) {
    __extends(ProductService, _super);
    function ProductService(_a) {
        var manager = _a.manager, productOptionRepository = _a.productOptionRepository, productRepository = _a.productRepository, productVariantRepository = _a.productVariantRepository, eventBusService = _a.eventBusService, productVariantService = _a.productVariantService, productTypeRepository = _a.productTypeRepository, productTagRepository = _a.productTagRepository, productCategoryRepository = _a.productCategoryRepository, imageRepository = _a.imageRepository, searchService = _a.searchService, featureFlagRouter = _a.featureFlagRouter;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.productOptionRepository_ = productOptionRepository;
        _this.productRepository_ = productRepository;
        _this.productVariantRepository_ = productVariantRepository;
        _this.eventBus_ = eventBusService;
        _this.productVariantService_ = productVariantService;
        _this.productCategoryRepository_ = productCategoryRepository;
        _this.productTypeRepository_ = productTypeRepository;
        _this.productTagRepository_ = productTagRepository;
        _this.imageRepository_ = imageRepository;
        _this.searchService_ = searchService;
        _this.featureFlagRouter_ = featureFlagRouter;
        return _this;
    }
    /**
     * Lists products based on the provided parameters.
     * @param selector - an object that defines rules to filter products
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return the result of the find operation
     */
    ProductService.prototype.list = function (selector, config) {
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, products;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.listAndCount(selector, config)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), products = _a[0];
                        return [2 /*return*/, products];
                }
            });
        });
    };
    /**
     * Lists products based on the provided parameters and includes the count of
     * products that match the query.
     * @param selector - an object that defines rules to filter products
     *   by
     * @param config - object that defines the scope for what should be
     *   returned
     * @return an array containing the products as
     *   the first element and the total count of products that matches the query
     *   as the second element.
     */
    ProductService.prototype.listAndCount = function (selector, config) {
        if (config === void 0) { config = {
            relations: [],
            skip: 0,
            take: 20,
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, productRepo, _a, q, query, relations;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = this.manager_;
                        productRepo = manager.getCustomRepository(this.productRepository_);
                        _a = this.prepareListQuery_(selector, config), q = _a.q, query = _a.query, relations = _a.relations;
                        if (!q) return [3 /*break*/, 2];
                        return [4 /*yield*/, productRepo.getFreeTextSearchResultsAndCount(q, query, relations)];
                    case 1: return [2 /*return*/, _b.sent()];
                    case 2: return [4 /*yield*/, productRepo.findWithRelationsAndCount(relations, query)];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    /**
     * Return the total number of documents in database
     * @param {object} selector - the selector to choose products by
     * @return {Promise} the result of the count operation
     */
    ProductService.prototype.count = function (selector) {
        if (selector === void 0) { selector = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, productRepo, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        productRepo = manager.getCustomRepository(this.productRepository_);
                        query = (0, utils_1.buildQuery)(selector);
                        return [4 /*yield*/, productRepo.count(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a product by id.
     * Throws in case of DB Error and if product was not found.
     * @param productId - id of the product to get.
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    ProductService.prototype.retrieve = function (productId, config) {
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(productId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"productId\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ id: productId }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a product by handle.
     * Throws in case of DB Error and if product was not found.
     * @param productHandle - handle of the product to get.
     * @param config - details about what to get from the product
     * @return the result of the find one operation.
     */
    ProductService.prototype.retrieveByHandle = function (productHandle, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(productHandle)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"productHandle\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ handle: productHandle }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a product by external id.
     * Throws in case of DB Error and if product was not found.
     * @param externalId - handle of the product to get.
     * @param config - details about what to get from the product
     * @return the result of the find one operation.
     */
    ProductService.prototype.retrieveByExternalId = function (externalId, config) {
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(0, medusa_core_utils_1.isDefined)(externalId)) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "\"externalId\" must be defined");
                        }
                        return [4 /*yield*/, this.retrieve_({ external_id: externalId }, config)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Gets a product by selector.
     * Throws in case of DB Error and if product was not found.
     * @param selector - selector object
     * @param config - object that defines what should be included in the
     *   query response
     * @return the result of the find one operation.
     */
    ProductService.prototype.retrieve_ = function (selector, config) {
        if (config === void 0) { config = {
            include_discount_prices: false,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, productRepo, _a, relations, query, product, selectorConstraints;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = this.manager_;
                        productRepo = manager.getCustomRepository(this.productRepository_);
                        _a = (0, utils_1.buildQuery)(selector, config), relations = _a.relations, query = __rest(_a, ["relations"]);
                        return [4 /*yield*/, productRepo.findOneWithRelations(relations, query)];
                    case 1:
                        product = _b.sent();
                        if (!product) {
                            selectorConstraints = Object.entries(selector)
                                .map(function (_a) {
                                var _b = __read(_a, 2), key = _b[0], value = _b[1];
                                return "".concat(key, ": ").concat(value);
                            })
                                .join(", ");
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Product with ".concat(selectorConstraints, " was not found"));
                        }
                        return [2 /*return*/, product];
                }
            });
        });
    };
    /**
     * Gets all variants belonging to a product.
     * @param productId - the id of the product to get variants from.
     * @param config - The config to select and configure relations etc...
     * @return an array of variants
     */
    ProductService.prototype.retrieveVariants = function (productId, config) {
        var _a;
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var givenRelations, requiredRelations, relationsSet, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        givenRelations = (_a = config.relations) !== null && _a !== void 0 ? _a : [];
                        requiredRelations = ["variants"];
                        relationsSet = new Set(__spreadArray(__spreadArray([], __read(givenRelations), false), __read(requiredRelations), false));
                        return [4 /*yield*/, this.retrieve(productId, __assign(__assign({}, config), { relations: __spreadArray([], __read(relationsSet), false) }))];
                    case 1:
                        product = _b.sent();
                        return [2 /*return*/, product.variants];
                }
            });
        });
    };
    ProductService.prototype.filterProductsBySalesChannel = function (productIds, salesChannelId, config) {
        var _a;
        if (config === void 0) { config = {
            skip: 0,
            take: 50,
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var givenRelations, requiredRelations, relationsSet, products, productSalesChannelsMap;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        givenRelations = (_a = config.relations) !== null && _a !== void 0 ? _a : [];
                        requiredRelations = ["sales_channels"];
                        relationsSet = new Set(__spreadArray(__spreadArray([], __read(givenRelations), false), __read(requiredRelations), false));
                        return [4 /*yield*/, this.list({
                                id: productIds,
                            }, __assign(__assign({}, config), { relations: __spreadArray([], __read(relationsSet), false) }))];
                    case 1:
                        products = _b.sent();
                        productSalesChannelsMap = new Map(products.map(function (product) { return [product.id, product.sales_channels]; }));
                        return [2 /*return*/, products.filter(function (product) {
                                var _a;
                                return (_a = productSalesChannelsMap
                                    .get(product.id)) === null || _a === void 0 ? void 0 : _a.some(function (sc) { return sc.id === salesChannelId; });
                            })];
                }
            });
        });
    };
    ProductService.prototype.listTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var manager, productTypeRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        productTypeRepository = manager.getCustomRepository(this.productTypeRepository_);
                        return [4 /*yield*/, productTypeRepository.find({})];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.listTagsByUsage = function (count) {
        if (count === void 0) { count = 10; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, productTagRepo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        manager = this.manager_;
                        productTagRepo = manager.getCustomRepository(this.productTagRepository_);
                        return [4 /*yield*/, productTagRepo.listTagsByUsage(count)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Check if the product is assigned to at least one of the provided sales channels.
     *
     * @param id - product id
     * @param salesChannelIds - an array of sales channel ids
     */
    ProductService.prototype.isProductInSalesChannels = function (id, salesChannelIds) {
        return __awaiter(this, void 0, void 0, function () {
            var product, productsSalesChannels;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.retrieve_({ id: id }, { relations: ["sales_channels"] })
                        // TODO: reimplement this to use db level check
                    ];
                    case 1:
                        product = _a.sent();
                        productsSalesChannels = product.sales_channels.map(function (channel) { return channel.id; });
                        return [2 /*return*/, productsSalesChannels.some(function (id) { return salesChannelIds.includes(id); })];
                }
            });
        });
    };
    /**
     * Creates a product.
     * @param productObject - the product to create
     * @return resolves to the creation result.
     */
    ProductService.prototype.create = function (productObject) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, productTagRepo, productTypeRepo, imageRepo, optionRepo, options, tags, type, images, salesChannels, categories, rest, product, _a, _b, _c, salesChannelIds, categoryIds, categoryRecords, _d, result;
                            var _this = this;
                            var _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        productTagRepo = manager.getCustomRepository(this.productTagRepository_);
                                        productTypeRepo = manager.getCustomRepository(this.productTypeRepository_);
                                        imageRepo = manager.getCustomRepository(this.imageRepository_);
                                        optionRepo = manager.getCustomRepository(this.productOptionRepository_);
                                        options = productObject.options, tags = productObject.tags, type = productObject.type, images = productObject.images, salesChannels = productObject.sales_channels, categories = productObject.categories, rest = __rest(productObject, ["options", "tags", "type", "images", "sales_channels", "categories"]);
                                        if (!rest.thumbnail && (images === null || images === void 0 ? void 0 : images.length)) {
                                            rest.thumbnail = images[0];
                                        }
                                        // if product is a giftcard, we should disallow discounts
                                        if (rest.is_giftcard) {
                                            rest.discountable = false;
                                        }
                                        product = productRepo.create(rest);
                                        if (!(images === null || images === void 0 ? void 0 : images.length)) return [3 /*break*/, 2];
                                        _a = product;
                                        return [4 /*yield*/, imageRepo.upsertImages(images)];
                                    case 1:
                                        _a.images = _f.sent();
                                        _f.label = 2;
                                    case 2:
                                        if (!(tags === null || tags === void 0 ? void 0 : tags.length)) return [3 /*break*/, 4];
                                        _b = product;
                                        return [4 /*yield*/, productTagRepo.upsertTags(tags)];
                                    case 3:
                                        _b.tags = _f.sent();
                                        _f.label = 4;
                                    case 4:
                                        if (!(typeof type !== "undefined")) return [3 /*break*/, 6];
                                        _c = product;
                                        return [4 /*yield*/, productTypeRepo.upsertType(type)];
                                    case 5:
                                        _c.type_id = ((_e = (_f.sent())) === null || _e === void 0 ? void 0 : _e.id) || null;
                                        _f.label = 6;
                                    case 6:
                                        if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) {
                                            if ((0, medusa_core_utils_1.isDefined)(salesChannels)) {
                                                product.sales_channels = [];
                                                if (salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.length) {
                                                    salesChannelIds = salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.map(function (sc) { return sc.id; });
                                                    product.sales_channels = salesChannelIds === null || salesChannelIds === void 0 ? void 0 : salesChannelIds.map(function (id) { return ({ id: id }); });
                                                }
                                            }
                                        }
                                        if ((0, medusa_core_utils_1.isDefined)(categories)) {
                                            product.categories = [];
                                            if (categories === null || categories === void 0 ? void 0 : categories.length) {
                                                categoryIds = categories.map(function (c) { return c.id; });
                                                categoryRecords = categoryIds.map(function (id) { return ({ id: id }); });
                                                product.categories = categoryRecords;
                                            }
                                        }
                                        return [4 /*yield*/, productRepo.save(product)];
                                    case 7:
                                        product = _f.sent();
                                        _d = product;
                                        return [4 /*yield*/, Promise.all((options !== null && options !== void 0 ? options : []).map(function (option) { return __awaiter(_this, void 0, void 0, function () {
                                                var res;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            res = optionRepo.create(__assign(__assign({}, option), { product_id: product.id }));
                                                            return [4 /*yield*/, optionRepo.save(res)];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/, res];
                                                    }
                                                });
                                            }); }))];
                                    case 8:
                                        _d.options = _f.sent();
                                        return [4 /*yield*/, this.retrieve(product.id, {
                                                relations: ["options"],
                                            })];
                                    case 9:
                                        result = _f.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.CREATED, {
                                                id: result.id,
                                            })];
                                    case 10:
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
     * Updates a product. Product variant updates should use dedicated methods,
     * e.g. `addVariant`, etc. The function will throw errors if metadata or
     * product variant updates are attempted.
     * @param {string} productId - the id of the product. Must be a string that
     *   can be casted to an ObjectId
     * @param {object} update - an object with the update values.
     * @return {Promise} resolves to the update result.
     */
    ProductService.prototype.update = function (productId, update) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, productVariantRepo, productTagRepo, productTypeRepo, imageRepo, relations, product, metadata, images, tags, type, salesChannels, categories, rest, _a, _b, _c, categoryIds, categoryRecords, salesChannelIds, _d, _e, _f, key, value, result;
                            var e_1, _g;
                            var _h;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        productVariantRepo = manager.getCustomRepository(this.productVariantRepository_);
                                        productTagRepo = manager.getCustomRepository(this.productTagRepository_);
                                        productTypeRepo = manager.getCustomRepository(this.productTypeRepository_);
                                        imageRepo = manager.getCustomRepository(this.imageRepository_);
                                        relations = ["tags", "images"];
                                        if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) {
                                            if ((0, medusa_core_utils_1.isDefined)(update.sales_channels)) {
                                                relations.push("sales_channels");
                                            }
                                        }
                                        else {
                                            if ((0, medusa_core_utils_1.isDefined)(update.sales_channels)) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "the property sales_channels should no appears as part of the payload");
                                            }
                                        }
                                        return [4 /*yield*/, this.retrieve(productId, {
                                                relations: relations,
                                            })];
                                    case 1:
                                        product = _j.sent();
                                        metadata = update.metadata, images = update.images, tags = update.tags, type = update.type, salesChannels = update.sales_channels, categories = update.categories, rest = __rest(update, ["metadata", "images", "tags", "type", "sales_channels", "categories"]);
                                        if (!product.thumbnail && !update.thumbnail && (images === null || images === void 0 ? void 0 : images.length)) {
                                            product.thumbnail = images[0];
                                        }
                                        if (!images) return [3 /*break*/, 3];
                                        _a = product;
                                        return [4 /*yield*/, imageRepo.upsertImages(images)];
                                    case 2:
                                        _a.images = _j.sent();
                                        _j.label = 3;
                                    case 3:
                                        if (metadata) {
                                            product.metadata = (0, utils_1.setMetadata)(product, metadata);
                                        }
                                        if (!(typeof type !== "undefined")) return [3 /*break*/, 5];
                                        _b = product;
                                        return [4 /*yield*/, productTypeRepo.upsertType(type)];
                                    case 4:
                                        _b.type_id = ((_h = (_j.sent())) === null || _h === void 0 ? void 0 : _h.id) || null;
                                        _j.label = 5;
                                    case 5:
                                        if (!tags) return [3 /*break*/, 7];
                                        _c = product;
                                        return [4 /*yield*/, productTagRepo.upsertTags(tags)];
                                    case 6:
                                        _c.tags = _j.sent();
                                        _j.label = 7;
                                    case 7:
                                        if ((0, medusa_core_utils_1.isDefined)(categories)) {
                                            product.categories = [];
                                            if (categories === null || categories === void 0 ? void 0 : categories.length) {
                                                categoryIds = categories.map(function (c) { return c.id; });
                                                categoryRecords = categoryIds.map(function (id) { return ({ id: id }); });
                                                product.categories = categoryRecords;
                                            }
                                        }
                                        if (this.featureFlagRouter_.isFeatureEnabled(sales_channels_1.default.key)) {
                                            if ((0, medusa_core_utils_1.isDefined)(salesChannels)) {
                                                product.sales_channels = [];
                                                if (salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.length) {
                                                    salesChannelIds = salesChannels === null || salesChannels === void 0 ? void 0 : salesChannels.map(function (sc) { return sc.id; });
                                                    product.sales_channels = salesChannelIds === null || salesChannelIds === void 0 ? void 0 : salesChannelIds.map(function (id) { return ({ id: id }); });
                                                }
                                            }
                                        }
                                        try {
                                            for (_d = __values(Object.entries(rest)), _e = _d.next(); !_e.done; _e = _d.next()) {
                                                _f = __read(_e.value, 2), key = _f[0], value = _f[1];
                                                if ((0, medusa_core_utils_1.isDefined)(value)) {
                                                    product[key] = value;
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_e && !_e.done && (_g = _d.return)) _g.call(_d);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, productRepo.save(product)];
                                    case 8:
                                        result = _j.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, {
                                                id: result.id,
                                                fields: Object.keys(update),
                                            })];
                                    case 9:
                                        _j.sent();
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
     * Deletes a product from a given product id. The product's associated
     * variants will also be deleted.
     * @param productId - the id of the product to delete. Must be
     *   castable as an ObjectId
     * @return empty promise
     */
    ProductService.prototype.delete = function (productId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, product;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        return [4 /*yield*/, productRepo.findOne({ id: productId }, { relations: ["variants", "variants.prices", "variants.options"] })];
                                    case 1:
                                        product = _a.sent();
                                        if (!product) {
                                            return [2 /*return*/];
                                        }
                                        return [4 /*yield*/, productRepo.softRemove(product)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.DELETED, {
                                                id: productId,
                                            })];
                                    case 3:
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
     * Adds an option to a product. Options can, for example, be "Size", "Color",
     * etc. Will update all the products variants with a dummy value for the newly
     * created option. The same option cannot be added more than once.
     * @param productId - the product to apply the new option to
     * @param optionTitle - the display title of the option, e.g. "Size"
     * @return the result of the model update operation
     */
    ProductService.prototype.addOption = function (productId, optionTitle) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionRepo, product, option, productVariantServiceTx, _a, _b, variant, e_2_1, result;
                            var e_2, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        productOptionRepo = manager.getCustomRepository(this.productOptionRepository_);
                                        return [4 /*yield*/, this.retrieve(productId, {
                                                relations: ["options", "variants"],
                                            })];
                                    case 1:
                                        product = _d.sent();
                                        if (product.options.find(function (o) { return o.title === optionTitle; })) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.DUPLICATE_ERROR, "An option with the title: ".concat(optionTitle, " already exists"));
                                        }
                                        option = productOptionRepo.create({
                                            title: optionTitle,
                                            product_id: productId,
                                        });
                                        return [4 /*yield*/, productOptionRepo.save(option)];
                                    case 2:
                                        _d.sent();
                                        productVariantServiceTx = this.productVariantService_.withTransaction(manager);
                                        _d.label = 3;
                                    case 3:
                                        _d.trys.push([3, 8, 9, 10]);
                                        _a = __values(product.variants), _b = _a.next();
                                        _d.label = 4;
                                    case 4:
                                        if (!!_b.done) return [3 /*break*/, 7];
                                        variant = _b.value;
                                        return [4 /*yield*/, productVariantServiceTx.addOptionValue(variant.id, option.id, "Default Value")];
                                    case 5:
                                        _d.sent();
                                        _d.label = 6;
                                    case 6:
                                        _b = _a.next();
                                        return [3 /*break*/, 4];
                                    case 7: return [3 /*break*/, 10];
                                    case 8:
                                        e_2_1 = _d.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 10];
                                    case 9:
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 10: return [4 /*yield*/, this.retrieve(productId)];
                                    case 11:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, result)];
                                    case 12:
                                        _d.sent();
                                        return [2 /*return*/, result];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProductService.prototype.reorderVariants = function (productId, variantOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, product, result;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        return [4 /*yield*/, this.retrieve(productId, {
                                                relations: ["variants"],
                                            })];
                                    case 1:
                                        product = _a.sent();
                                        if (product.variants.length !== variantOrder.length) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product variants and new variant order differ in length.");
                                        }
                                        product.variants = variantOrder.map(function (vId) {
                                            var variant = product.variants.find(function (v) { return v.id === vId; });
                                            if (!variant) {
                                                throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "Product has no variant with id: ".concat(vId));
                                            }
                                            return variant;
                                        });
                                        result = productRepo.save(product);
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, result)];
                                    case 2:
                                        _a.sent();
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
     * Updates a product's option. Throws if the call tries to update an option
     * not associated with the product. Throws if the updated title already exists.
     * @param productId - the product whose option we are updating
     * @param optionId - the id of the option we are updating
     * @param data - the data to update the option with
     * @return the updated product
     */
    ProductService.prototype.updateOption = function (productId, optionId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionRepo, product, title, values, optionExists, productOption;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productOptionRepo = manager.getCustomRepository(this.productOptionRepository_);
                                        return [4 /*yield*/, this.retrieve(productId, { relations: ["options"] })];
                                    case 1:
                                        product = _a.sent();
                                        title = data.title, values = data.values;
                                        optionExists = product.options.some(function (o) {
                                            return o.title.toUpperCase() === title.toUpperCase() && o.id !== optionId;
                                        });
                                        if (optionExists) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "An option with title ".concat(title, " already exists"));
                                        }
                                        return [4 /*yield*/, productOptionRepo.findOne({
                                                where: { id: optionId },
                                            })];
                                    case 2:
                                        productOption = _a.sent();
                                        if (!productOption) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Option with id: ".concat(optionId, " does not exist"));
                                        }
                                        productOption.title = title;
                                        if (values) {
                                            productOption.values = values;
                                        }
                                        return [4 /*yield*/, productOptionRepo.save(productOption)];
                                    case 3:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, product)];
                                    case 4:
                                        _a.sent();
                                        return [2 /*return*/, product];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Retrieve product's option by title.
     *
     * @param title - title of the option
     * @param productId - id of a product
     * @return product option
     */
    ProductService.prototype.retrieveOptionByTitle = function (title, productId) {
        return __awaiter(this, void 0, void 0, function () {
            var productOptionRepo;
            return __generator(this, function (_a) {
                productOptionRepo = this.manager_.getCustomRepository(this.productOptionRepository_);
                return [2 /*return*/, productOptionRepo.findOne({
                        where: { title: title, product_id: productId },
                    })];
            });
        });
    };
    /**
     * Delete an option from a product.
     * @param productId - the product to delete an option from
     * @param optionId - the option to delete
     * @return the updated product
     */
    ProductService.prototype.deleteOption = function (productId, optionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productOptionRepo, product, productOption, firstVariant, valueToMatch_1, equalsFirst;
                            var _this = this;
                            var _a, _b;
                            return __generator(this, function (_c) {
                                switch (_c.label) {
                                    case 0:
                                        productOptionRepo = manager.getCustomRepository(this.productOptionRepository_);
                                        return [4 /*yield*/, this.retrieve(productId, {
                                                relations: ["variants", "variants.options"],
                                            })];
                                    case 1:
                                        product = _c.sent();
                                        return [4 /*yield*/, productOptionRepo.findOne({
                                                where: { id: optionId, product_id: productId },
                                                relations: ["values"],
                                            })];
                                    case 2:
                                        productOption = _c.sent();
                                        if (!productOption) {
                                            return [2 /*return*/, Promise.resolve()];
                                        }
                                        if (!((_a = product === null || product === void 0 ? void 0 : product.variants) === null || _a === void 0 ? void 0 : _a.length)) return [3 /*break*/, 4];
                                        firstVariant = product.variants[0];
                                        valueToMatch_1 = (_b = firstVariant.options.find(function (o) { return o.option_id === optionId; })) === null || _b === void 0 ? void 0 : _b.value;
                                        return [4 /*yield*/, Promise.all(product.variants.map(function (v) { return __awaiter(_this, void 0, void 0, function () {
                                                var option;
                                                return __generator(this, function (_a) {
                                                    option = v.options.find(function (o) { return o.option_id === optionId; });
                                                    return [2 /*return*/, (option === null || option === void 0 ? void 0 : option.value) === valueToMatch_1];
                                                });
                                            }); }))];
                                    case 3:
                                        equalsFirst = _c.sent();
                                        if (!equalsFirst.every(function (v) { return v; })) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.INVALID_DATA, "To delete an option, first delete all variants, such that when an option is deleted, no duplicate variants will exist.");
                                        }
                                        _c.label = 4;
                                    case 4: 
                                    // If we reach this point, we can safely delete the product option
                                    return [4 /*yield*/, productOptionRepo.softRemove(productOption)];
                                    case 5:
                                        // If we reach this point, we can safely delete the product option
                                        _c.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, product)];
                                    case 6:
                                        _c.sent();
                                        return [2 /*return*/, product];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     *
     * @param productIds ID or IDs of the products to update
     * @param profileId Shipping profile ID to update the shipping options with
     * @returns updated shipping options
     */
    ProductService.prototype.updateShippingProfile = function (productIds, profileId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var productRepo, ids, products;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        productRepo = manager.getCustomRepository(this.productRepository_);
                                        ids = (0, utils_1.isString)(productIds) ? [productIds] : productIds;
                                        return [4 /*yield*/, productRepo.upsertShippingProfile(ids, profileId)];
                                    case 1:
                                        products = _a.sent();
                                        return [4 /*yield*/, this.eventBus_
                                                .withTransaction(manager)
                                                .emit(ProductService.Events.UPDATED, products)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, products];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
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
    ProductService.prototype.prepareListQuery_ = function (selector, config) {
        var q;
        if ("q" in selector) {
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
    ProductService.IndexName = "products";
    ProductService.Events = {
        UPDATED: "product.updated",
        CREATED: "product.created",
        DELETED: "product.deleted",
    };
    return ProductService;
}(interfaces_1.TransactionBaseService));
exports.default = ProductService;
//# sourceMappingURL=product.js.map