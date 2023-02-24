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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var express_1 = __importDefault(require("express"));
var typeorm_1 = require("typeorm");
var fs_exists_cached_1 = require("fs-exists-cached");
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_telemetry_1 = require("medusa-telemetry");
var logger_1 = __importDefault(require("../loaders/logger"));
var loaders_1 = __importDefault(require("../loaders"));
var feature_flags_1 = __importDefault(require("../loaders/feature-flags"));
var get_migrations_1 = __importDefault(require("./utils/get-migrations"));
var t = function (_a) {
    var directory = _a.directory, migrate = _a.migrate, seedFile = _a.seedFile;
    return __awaiter(this, void 0, void 0, function () {
        var resolvedPath, configModule, featureFlagRouter, dbType, migrationDirs, connection, app, container, manager, storeService, userService, regionService, productService, productVariantService, shippingOptionService, shippingProfileService;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    (0, medusa_telemetry_1.track)("CLI_SEED");
                    resolvedPath = seedFile;
                    // If we are already given an absolute path we can skip resolution step
                    if (!(0, fs_exists_cached_1.sync)(resolvedPath)) {
                        resolvedPath = path_1.default.resolve(path_1.default.join(directory, seedFile));
                        if (!(0, fs_exists_cached_1.sync)(resolvedPath)) {
                            console.error("Could not find a seed file at: ".concat(seedFile));
                            console.error("Resolved path: ".concat(resolvedPath));
                            process.exit(1);
                        }
                    }
                    configModule = (0, medusa_core_utils_1.getConfigFile)(directory, "medusa-config").configModule;
                    featureFlagRouter = (0, feature_flags_1.default)(configModule);
                    dbType = configModule.projectConfig.database_type;
                    if (!(migrate && dbType !== "sqlite")) return [3 /*break*/, 5];
                    return [4 /*yield*/, (0, get_migrations_1.default)(directory, featureFlagRouter)];
                case 1:
                    migrationDirs = _b.sent();
                    return [4 /*yield*/, (0, typeorm_1.createConnection)({
                            type: configModule.projectConfig.database_type,
                            database: configModule.projectConfig.database_database,
                            url: configModule.projectConfig.database_url,
                            extra: configModule.projectConfig.database_extra || {},
                            migrations: migrationDirs,
                            logging: true,
                        })];
                case 2:
                    connection = _b.sent();
                    return [4 /*yield*/, connection.runMigrations()];
                case 3:
                    _b.sent();
                    return [4 /*yield*/, connection.close()];
                case 4:
                    _b.sent();
                    logger_1.default.info("Migrations completed.");
                    _b.label = 5;
                case 5:
                    app = (0, express_1.default)();
                    return [4 /*yield*/, (0, loaders_1.default)({
                            directory: directory,
                            expressApp: app,
                        })];
                case 6:
                    container = (_b.sent()).container;
                    manager = container.resolve("manager");
                    storeService = container.resolve("storeService");
                    userService = container.resolve("userService");
                    regionService = container.resolve("regionService");
                    productService = container.resolve("productService");
                    productVariantService = container.resolve("productVariantService");
                    shippingOptionService = container.resolve("shippingOptionService");
                    shippingProfileService = container.resolve("shippingProfileService");
                    return [4 /*yield*/, manager.transaction(function (tx) { return __awaiter(_this, void 0, void 0, function () {
                            var _a, store, regions, products, shipping_options, users, gcProfile, defaultProfile, users_1, users_1_1, u, pass, e_1_1, regionIds, regions_1, regions_1_1, r, dummyId, reg, e_2_1, shipping_options_1, shipping_options_1_1, so, e_3_1, _loop_1, products_1, products_1_1, p, e_4_1;
                            var e_1, _b, e_2, _c, e_3, _d, e_4, _e;
                            return __generator(this, function (_f) {
                                switch (_f.label) {
                                    case 0:
                                        _a = JSON.parse(fs_1.default.readFileSync(resolvedPath, "utf-8")), store = _a.store, regions = _a.regions, products = _a.products, shipping_options = _a.shipping_options, users = _a.users;
                                        return [4 /*yield*/, shippingProfileService.retrieveGiftCardDefault()];
                                    case 1:
                                        gcProfile = _f.sent();
                                        return [4 /*yield*/, shippingProfileService.retrieveDefault()];
                                    case 2:
                                        defaultProfile = _f.sent();
                                        if (!store) return [3 /*break*/, 4];
                                        return [4 /*yield*/, storeService.withTransaction(tx).update(store)];
                                    case 3:
                                        _f.sent();
                                        _f.label = 4;
                                    case 4:
                                        _f.trys.push([4, 9, 10, 11]);
                                        users_1 = __values(users), users_1_1 = users_1.next();
                                        _f.label = 5;
                                    case 5:
                                        if (!!users_1_1.done) return [3 /*break*/, 8];
                                        u = users_1_1.value;
                                        pass = u.password;
                                        if (pass) {
                                            delete u.password;
                                        }
                                        return [4 /*yield*/, userService.withTransaction(tx).create(u, pass)];
                                    case 6:
                                        _f.sent();
                                        _f.label = 7;
                                    case 7:
                                        users_1_1 = users_1.next();
                                        return [3 /*break*/, 5];
                                    case 8: return [3 /*break*/, 11];
                                    case 9:
                                        e_1_1 = _f.sent();
                                        e_1 = { error: e_1_1 };
                                        return [3 /*break*/, 11];
                                    case 10:
                                        try {
                                            if (users_1_1 && !users_1_1.done && (_b = users_1.return)) _b.call(users_1);
                                        }
                                        finally { if (e_1) throw e_1.error; }
                                        return [7 /*endfinally*/];
                                    case 11:
                                        regionIds = {};
                                        _f.label = 12;
                                    case 12:
                                        _f.trys.push([12, 17, 18, 19]);
                                        regions_1 = __values(regions), regions_1_1 = regions_1.next();
                                        _f.label = 13;
                                    case 13:
                                        if (!!regions_1_1.done) return [3 /*break*/, 16];
                                        r = regions_1_1.value;
                                        dummyId = void 0;
                                        if (!r.id || !r.id.startsWith("reg_")) {
                                            dummyId = r.id;
                                            delete r.id;
                                        }
                                        return [4 /*yield*/, regionService.withTransaction(tx).create(r)];
                                    case 14:
                                        reg = _f.sent();
                                        if (dummyId) {
                                            regionIds[dummyId] = reg.id;
                                        }
                                        _f.label = 15;
                                    case 15:
                                        regions_1_1 = regions_1.next();
                                        return [3 /*break*/, 13];
                                    case 16: return [3 /*break*/, 19];
                                    case 17:
                                        e_2_1 = _f.sent();
                                        e_2 = { error: e_2_1 };
                                        return [3 /*break*/, 19];
                                    case 18:
                                        try {
                                            if (regions_1_1 && !regions_1_1.done && (_c = regions_1.return)) _c.call(regions_1);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                        return [7 /*endfinally*/];
                                    case 19:
                                        _f.trys.push([19, 24, 25, 26]);
                                        shipping_options_1 = __values(shipping_options), shipping_options_1_1 = shipping_options_1.next();
                                        _f.label = 20;
                                    case 20:
                                        if (!!shipping_options_1_1.done) return [3 /*break*/, 23];
                                        so = shipping_options_1_1.value;
                                        if (regionIds[so.region_id]) {
                                            so.region_id = regionIds[so.region_id];
                                        }
                                        so.profile_id = defaultProfile.id;
                                        if (so.is_giftcard) {
                                            so.profile_id = gcProfile.id;
                                            delete so.is_giftcard;
                                        }
                                        return [4 /*yield*/, shippingOptionService.withTransaction(tx).create(so)];
                                    case 21:
                                        _f.sent();
                                        _f.label = 22;
                                    case 22:
                                        shipping_options_1_1 = shipping_options_1.next();
                                        return [3 /*break*/, 20];
                                    case 23: return [3 /*break*/, 26];
                                    case 24:
                                        e_3_1 = _f.sent();
                                        e_3 = { error: e_3_1 };
                                        return [3 /*break*/, 26];
                                    case 25:
                                        try {
                                            if (shipping_options_1_1 && !shipping_options_1_1.done && (_d = shipping_options_1.return)) _d.call(shipping_options_1);
                                        }
                                        finally { if (e_3) throw e_3.error; }
                                        return [7 /*endfinally*/];
                                    case 26:
                                        _loop_1 = function (p) {
                                            var variants, newProd, optionIds_1, variants_1, variants_1_1, v, variant, e_5_1;
                                            var e_5, _g;
                                            return __generator(this, function (_h) {
                                                switch (_h.label) {
                                                    case 0:
                                                        variants = p.variants;
                                                        delete p.variants;
                                                        // default to the products being visible
                                                        p.status = p.status || "published";
                                                        p.profile_id = defaultProfile.id;
                                                        if (p.is_giftcard) {
                                                            p.profile_id = gcProfile.id;
                                                        }
                                                        return [4 /*yield*/, productService.withTransaction(tx).create(p)];
                                                    case 1:
                                                        newProd = _h.sent();
                                                        if (!(variants && variants.length)) return [3 /*break*/, 9];
                                                        optionIds_1 = p.options.map(function (o) { return newProd.options.find(function (newO) { return newO.title === o.title; }).id; });
                                                        _h.label = 2;
                                                    case 2:
                                                        _h.trys.push([2, 7, 8, 9]);
                                                        variants_1 = (e_5 = void 0, __values(variants)), variants_1_1 = variants_1.next();
                                                        _h.label = 3;
                                                    case 3:
                                                        if (!!variants_1_1.done) return [3 /*break*/, 6];
                                                        v = variants_1_1.value;
                                                        variant = __assign(__assign({}, v), { options: v.options.map(function (o, index) { return (__assign(__assign({}, o), { option_id: optionIds_1[index] })); }) });
                                                        return [4 /*yield*/, productVariantService
                                                                .withTransaction(tx)
                                                                .create(newProd.id, variant)];
                                                    case 4:
                                                        _h.sent();
                                                        _h.label = 5;
                                                    case 5:
                                                        variants_1_1 = variants_1.next();
                                                        return [3 /*break*/, 3];
                                                    case 6: return [3 /*break*/, 9];
                                                    case 7:
                                                        e_5_1 = _h.sent();
                                                        e_5 = { error: e_5_1 };
                                                        return [3 /*break*/, 9];
                                                    case 8:
                                                        try {
                                                            if (variants_1_1 && !variants_1_1.done && (_g = variants_1.return)) _g.call(variants_1);
                                                        }
                                                        finally { if (e_5) throw e_5.error; }
                                                        return [7 /*endfinally*/];
                                                    case 9: return [2 /*return*/];
                                                }
                                            });
                                        };
                                        _f.label = 27;
                                    case 27:
                                        _f.trys.push([27, 32, 33, 34]);
                                        products_1 = __values(products), products_1_1 = products_1.next();
                                        _f.label = 28;
                                    case 28:
                                        if (!!products_1_1.done) return [3 /*break*/, 31];
                                        p = products_1_1.value;
                                        return [5 /*yield**/, _loop_1(p)];
                                    case 29:
                                        _f.sent();
                                        _f.label = 30;
                                    case 30:
                                        products_1_1 = products_1.next();
                                        return [3 /*break*/, 28];
                                    case 31: return [3 /*break*/, 34];
                                    case 32:
                                        e_4_1 = _f.sent();
                                        e_4 = { error: e_4_1 };
                                        return [3 /*break*/, 34];
                                    case 33:
                                        try {
                                            if (products_1_1 && !products_1_1.done && (_e = products_1.return)) _e.call(products_1);
                                        }
                                        finally { if (e_4) throw e_4.error; }
                                        return [7 /*endfinally*/];
                                    case 34: return [2 /*return*/];
                                }
                            });
                        }); })];
                case 7:
                    _b.sent();
                    (0, medusa_telemetry_1.track)("CLI_SEED_COMPLETED");
                    return [2 /*return*/];
            }
        });
    });
};
exports.default = t;
//# sourceMappingURL=seed.js.map