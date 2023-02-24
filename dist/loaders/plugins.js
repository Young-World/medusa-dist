"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerServices = exports.registerStrategies = exports.registerPluginModels = exports.isSearchEngineInstalledResolutionKey = void 0;
var awilix_1 = require("awilix");
var fs_1 = __importDefault(require("fs"));
var fs_exists_cached_1 = require("fs-exists-cached");
var glob_1 = __importDefault(require("glob"));
var lodash_1 = __importDefault(require("lodash"));
var medusa_core_utils_1 = require("medusa-core-utils");
var medusa_interfaces_1 = require("medusa-interfaces");
var medusa_telemetry_1 = require("medusa-telemetry");
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var interfaces_1 = require("../interfaces");
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var logger_1 = __importDefault(require("./logger"));
exports.isSearchEngineInstalledResolutionKey = "isSearchEngineInstalled";
/**
 * Registers all services in the services directory
 */
exports.default = (function (_a) {
    var rootDirectory = _a.rootDirectory, container = _a.container, app = _a.app, configModule = _a.configModule, activityId = _a.activityId;
    return __awaiter(void 0, void 0, void 0, function () {
        var resolved;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resolved = getResolvedPlugins(rootDirectory, configModule) || [];
                    return [4 /*yield*/, Promise.all(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        registerRepositories(pluginDetails, container);
                                        return [4 /*yield*/, registerServices(pluginDetails, container)];
                                    case 1:
                                        _a.sent();
                                        return [4 /*yield*/, registerMedusaApi(pluginDetails, container)];
                                    case 2:
                                        _a.sent();
                                        registerApi(pluginDetails, app, rootDirectory, container, activityId);
                                        registerCoreRouters(pluginDetails, container);
                                        registerSubscribers(pluginDetails, container);
                                        return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, Promise.all(resolved.map(function (pluginDetails) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                            return [2 /*return*/, runLoaders(pluginDetails, container)];
                        }); }); }))];
                case 2:
                    _b.sent();
                    resolved.forEach(function (plugin) { return (0, medusa_telemetry_1.trackInstallation)(plugin.name, "plugin"); });
                    return [2 /*return*/];
            }
        });
    });
});
function getResolvedPlugins(rootDirectory, configModule) {
    var plugins = configModule.plugins;
    var resolved = plugins.map(function (plugin) {
        if (lodash_1.default.isString(plugin)) {
            return resolvePlugin(plugin);
        }
        var details = resolvePlugin(plugin.resolve);
        details.options = plugin.options;
        return details;
    });
    resolved.push({
        resolve: "".concat(rootDirectory, "/dist"),
        name: "project-plugin",
        id: createPluginId("project-plugin"),
        options: {},
        version: createFileContentHash(process.cwd(), "**"),
    });
    return resolved;
}
function registerPluginModels(_a) {
    var rootDirectory = _a.rootDirectory, container = _a.container, configModule = _a.configModule;
    return __awaiter(this, void 0, void 0, function () {
        var resolved;
        var _this = this;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    resolved = getResolvedPlugins(rootDirectory, configModule) || [];
                    return [4 /*yield*/, Promise.all(resolved.map(function (pluginDetails) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                registerModels(pluginDetails, container);
                                return [2 /*return*/];
                            });
                        }); }))];
                case 1:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.registerPluginModels = registerPluginModels;
function runLoaders(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        var loaderFiles;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loaderFiles = glob_1.default.sync("".concat(pluginDetails.resolve, "/loaders/[!__]*.js"), {});
                    return [4 /*yield*/, Promise.all(loaderFiles.map(function (loader) { return __awaiter(_this, void 0, void 0, function () {
                            var module_1, err_1, logger_2;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 3, , 4]);
                                        module_1 = require(loader).default;
                                        if (!(typeof module_1 === "function")) return [3 /*break*/, 2];
                                        return [4 /*yield*/, module_1(container, pluginDetails.options)];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        logger_2 = container.resolve("logger");
                                        logger_2.warn("Running loader failed: ".concat(err_1.message));
                                        return [2 /*return*/, Promise.resolve()];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function registerMedusaApi(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            registerMedusaMiddleware(pluginDetails, container);
            registerStrategies(pluginDetails, container);
            return [2 /*return*/];
        });
    });
}
function registerStrategies(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/strategies/[!__]*.js"), {
        ignore: ["**/__fixtures__/**", "**/index.js", "**/index.ts"],
    });
    var registeredServices = {};
    files.map(function (file) {
        var _a;
        var module = require(file).default;
        switch (true) {
            case (0, interfaces_1.isTaxCalculationStrategy)(module.prototype): {
                if (!("taxCalculationStrategy" in registeredServices)) {
                    container.register({
                        taxCalculationStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                    });
                    registeredServices["taxCalculationStrategy"] = file;
                }
                else {
                    logger_1.default.warn("Cannot register ".concat(file, ". A tax calculation strategy is already registered"));
                }
                break;
            }
            case (0, interfaces_1.isCartCompletionStrategy)(module.prototype): {
                if (!("cartCompletionStrategy" in registeredServices)) {
                    container.register({
                        cartCompletionStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                    });
                    registeredServices["cartCompletionStrategy"] = file;
                }
                else {
                    logger_1.default.warn("Cannot register ".concat(file, ". A cart completion strategy is already registered"));
                }
                break;
            }
            case (0, interfaces_1.isBatchJobStrategy)(module.prototype): {
                container.registerAdd("batchJobStrategies", (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }));
                var name_1 = (0, format_registration_name_1.default)(file);
                container.register((_a = {},
                    _a[name_1] = (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                    _a["batch_".concat(module.identifier)] = (0, awilix_1.aliasTo)(name_1),
                    _a["batchType_".concat(module.batchType)] = (0, awilix_1.aliasTo)(name_1),
                    _a));
                break;
            }
            case (0, interfaces_1.isPriceSelectionStrategy)(module.prototype): {
                if (!("priceSelectionStrategy" in registeredServices)) {
                    container.register({
                        priceSelectionStrategy: (0, awilix_1.asFunction)(function (cradle) { return new module(cradle, pluginDetails.options); }).singleton(),
                    });
                    registeredServices["priceSelectionStrategy"] = file;
                }
                else {
                    logger_1.default.warn("Cannot register ".concat(file, ". A price selection strategy is already registered"));
                }
                break;
            }
            default:
                logger_1.default.warn("".concat(file, " did not export a class that implements a strategy interface. Your Medusa server will still work, but if you have written custom strategy logic it will not be used. Make sure to implement the proper interface."));
        }
    });
}
exports.registerStrategies = registerStrategies;
function registerMedusaMiddleware(pluginDetails, container) {
    var module;
    try {
        module = require("".concat(pluginDetails.resolve, "/api/medusa-middleware")).default;
    }
    catch (err) {
        return;
    }
    var middlewareService = container.resolve("middlewareService");
    if (module.postAuthentication) {
        middlewareService.addPostAuthentication(module.postAuthentication, pluginDetails.options);
    }
    if (module.preAuthentication) {
        middlewareService.addPreAuthentication(module.preAuthentication, pluginDetails.options);
    }
    if (module.preCartCreation) {
        middlewareService.addPreCartCreation(module.preCartCreation);
    }
}
function registerCoreRouters(pluginDetails, container) {
    var middlewareService = container.resolve("middlewareService");
    var resolve = pluginDetails.resolve;
    var adminFiles = glob_1.default.sync("".concat(resolve, "/api/admin/[!__]*.js"), {});
    var storeFiles = glob_1.default.sync("".concat(resolve, "/api/store/[!__]*.js"), {});
    adminFiles.forEach(function (fn) {
        var descriptor = fn.split(".")[0];
        var splat = descriptor.split("/");
        var path = "".concat(splat[splat.length - 2], "/").concat(splat[splat.length - 1]);
        var loaded = require(fn).default;
        middlewareService.addRouter(path, loaded());
    });
    storeFiles.forEach(function (fn) {
        var descriptor = fn.split(".")[0];
        var splat = descriptor.split("/");
        var path = "".concat(splat[splat.length - 2], "/").concat(splat[splat.length - 1]);
        var loaded = require(fn).default;
        middlewareService.addRouter(path, loaded());
    });
}
/**
 * Registers the plugin's api routes.
 */
function registerApi(pluginDetails, app, rootDirectory, container, activityId) {
    if (rootDirectory === void 0) { rootDirectory = ""; }
    var logger = container.resolve("logger");
    logger.progress(activityId, "Registering custom endpoints for ".concat(pluginDetails.name));
    try {
        var routes = require("".concat(pluginDetails.resolve, "/api")).default;
        if (routes) {
            app.use("/", routes(rootDirectory, pluginDetails.options));
        }
        return app;
    }
    catch (err) {
        if (err.message !== "Cannot find module '".concat(pluginDetails.resolve, "/api'")) {
            logger.progress(activityId, "No customer endpoints registered for ".concat(pluginDetails.name));
        }
        return app;
    }
}
/**
 * Registers a service at the right location in our container. If the service is
 * a BaseService instance it will be available directly from the container.
 * PaymentService instances are added to the paymentProviders array in the
 * container. Names are camelCase formatted and namespaced by the folder i.e:
 * services/example-payments -> examplePaymentsService
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerServices(pluginDetails, container) {
    return __awaiter(this, void 0, void 0, function () {
        var files;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    files = glob_1.default.sync("".concat(pluginDetails.resolve, "/services/[!__]*.js"), {});
                    return [4 /*yield*/, Promise.all(files.map(function (fn) { return __awaiter(_this, void 0, void 0, function () {
                            var loaded, name, logger_3, message, appDetails, oauthService, name_2;
                            var _a, _b, _c, _d, _e, _f, _g, _h;
                            return __generator(this, function (_j) {
                                switch (_j.label) {
                                    case 0:
                                        loaded = require(fn).default;
                                        name = (0, format_registration_name_1.default)(fn);
                                        if (!(loaded.prototype instanceof medusa_interfaces_1.BaseService) &&
                                            !(loaded.prototype instanceof interfaces_1.TransactionBaseService)) {
                                            logger_3 = container.resolve("logger");
                                            message = "The class must be a valid service implementation, please check ".concat(fn);
                                            logger_3.error(message);
                                            throw new Error(message);
                                        }
                                        if (!(0, interfaces_1.isPaymentService)(loaded.prototype)) return [3 /*break*/, 1];
                                        // Register our payment providers to paymentProviders
                                        container.registerAdd("paymentProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }));
                                        // Add the service directly to the container in order to make simple
                                        // resolution if we already know which payment provider we need to use
                                        container.register((_a = {},
                                            _a[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }),
                                            _a["pp_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                            _a));
                                        return [3 /*break*/, 4];
                                    case 1:
                                        if (!(loaded.prototype instanceof medusa_interfaces_1.OauthService)) return [3 /*break*/, 3];
                                        appDetails = loaded.getAppDetails(pluginDetails.options);
                                        oauthService = container.resolve("oauthService");
                                        return [4 /*yield*/, oauthService.registerOauthApp(appDetails)];
                                    case 2:
                                        _j.sent();
                                        name_2 = appDetails.application_name;
                                        container.register((_b = {},
                                            _b["".concat(name_2, "Oauth")] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }),
                                            _b));
                                        return [3 /*break*/, 4];
                                    case 3:
                                        if (loaded.prototype instanceof medusa_interfaces_1.FulfillmentService) {
                                            // Register our payment providers to paymentProviders
                                            container.registerAdd("fulfillmentProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }));
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which fulfillment provider we need to use
                                            container.register((_c = {},
                                                _c[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }).singleton(),
                                                _c["fp_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                                _c));
                                        }
                                        else if ((0, interfaces_1.isNotificationService)(loaded.prototype)) {
                                            container.registerAdd("notificationProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }));
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which notification provider we need to use
                                            container.register((_d = {},
                                                _d[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }).singleton(),
                                                _d["noti_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                                _d));
                                        }
                                        else if (loaded.prototype instanceof medusa_interfaces_1.FileService ||
                                            (0, interfaces_1.isFileService)(loaded.prototype)) {
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which file storage provider we need to use
                                            container.register((_e = {},
                                                _e[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }),
                                                _e["fileService"] = (0, awilix_1.aliasTo)(name),
                                                _e));
                                        }
                                        else if ((0, interfaces_1.isSearchService)(loaded.prototype)) {
                                            // Add the service directly to the container in order to make simple
                                            // resolution if we already know which search provider we need to use
                                            container.register((_f = {},
                                                _f[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }),
                                                _f["searchService"] = (0, awilix_1.aliasTo)(name),
                                                _f));
                                            container.register(exports.isSearchEngineInstalledResolutionKey, (0, awilix_1.asValue)(true));
                                        }
                                        else if (loaded.prototype instanceof interfaces_1.AbstractTaxService) {
                                            container.registerAdd("taxProviders", (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }));
                                            container.register((_g = {},
                                                _g[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }).singleton(),
                                                _g["tp_".concat(loaded.identifier)] = (0, awilix_1.aliasTo)(name),
                                                _g));
                                        }
                                        else {
                                            container.register((_h = {},
                                                _h[name] = (0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }),
                                                _h));
                                        }
                                        _j.label = 4;
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.registerServices = registerServices;
/**
 * Registers a plugin's subscribers at the right location in our container.
 * Subscribers are registered directly in the container.
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerSubscribers(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/subscribers/*.js"), {});
    files.forEach(function (fn) {
        var loaded = require(fn).default;
        container.build((0, awilix_1.asFunction)(function (cradle) { return new loaded(cradle, pluginDetails.options); }).singleton());
    });
}
/**
 * Registers a plugin's repositories at the right location in our container.
 * repositories are registered directly in the container.
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerRepositories(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/repositories/*.js"), {});
    files.forEach(function (fn) {
        var loaded = require(fn);
        Object.entries(loaded).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), val = _c[1];
            if (typeof val === "function") {
                var name_3 = (0, format_registration_name_1.default)(fn);
                container.register((_b = {},
                    _b[name_3] = (0, awilix_1.asClass)(val),
                    _b));
            }
        });
    });
}
/**
 * Registers a plugin's models at the right location in our container. Models
 * must inherit from BaseModel. Models are registered directly in the container.
 * Names are camelCase formatted and namespaced by the folder i.e:
 * models/example-person -> examplePersonModel
 * @param {object} pluginDetails - the plugin details including plugin options,
 *    version, id, resolved path, etc. See resolvePlugin
 * @param {object} container - the container where the services will be
 *    registered
 * @return {void}
 */
function registerModels(pluginDetails, container) {
    var files = glob_1.default.sync("".concat(pluginDetails.resolve, "/models/*.js"), {});
    files.forEach(function (fn) {
        var loaded = require(fn);
        Object.entries(loaded).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), val = _c[1];
            if (typeof val === "function" || val instanceof typeorm_1.EntitySchema) {
                var name_4 = (0, format_registration_name_1.default)(fn);
                container.register((_b = {},
                    _b[name_4] = (0, awilix_1.asValue)(val),
                    _b));
                container.registerAdd("db_entities", (0, awilix_1.asValue)(val));
            }
        });
    });
}
// TODO: Create unique id for each plugin
function createPluginId(name) {
    return name;
}
/**
 * Finds the correct path for the plugin. If it is a local plugin it will be
 * found in the plugins folder. Otherwise we will look for the plugin in the
 * installed npm packages.
 * @param {string} pluginName - the name of the plugin to find. Should match
 *    the name of the folder where the plugin is contained.
 * @return {object} the plugin details
 */
function resolvePlugin(pluginName) {
    // Only find plugins when we're not given an absolute path
    if (!(0, fs_exists_cached_1.sync)(pluginName)) {
        // Find the plugin in the local plugins folder
        var resolvedPath = path_1.default.resolve("./plugins/".concat(pluginName));
        if ((0, fs_exists_cached_1.sync)(resolvedPath)) {
            if ((0, fs_exists_cached_1.sync)("".concat(resolvedPath, "/package.json"))) {
                var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
                var name_5 = packageJSON.name || pluginName;
                // warnOnIncompatiblePeerDependency(name, packageJSON)
                return {
                    resolve: resolvedPath,
                    name: name_5,
                    id: createPluginId(name_5),
                    options: {},
                    version: packageJSON.version || createFileContentHash(resolvedPath, "**"),
                };
            }
            else {
                // Make package.json a requirement for local plugins too
                throw new Error("Plugin ".concat(pluginName, " requires a package.json file"));
            }
        }
    }
    var rootDir = path_1.default.resolve(".");
    /**
     *  Here we have an absolute path to an internal plugin, or a name of a module
     *  which should be located in node_modules.
     */
    try {
        var requireSource = rootDir !== null
            ? (0, medusa_core_utils_1.createRequireFromPath)("".concat(rootDir, "/:internal:"))
            : require;
        // If the path is absolute, resolve the directory of the internal plugin,
        // otherwise resolve the directory containing the package.json
        var resolvedPath = path_1.default.dirname(requireSource.resolve("".concat(pluginName, "/package.json")));
        var packageJSON = JSON.parse(fs_1.default.readFileSync("".concat(resolvedPath, "/package.json"), "utf-8"));
        // warnOnIncompatiblePeerDependency(packageJSON.name, packageJSON)
        return {
            resolve: resolvedPath + (process.env.DEV_MODE ? "/src" : ""),
            id: createPluginId(packageJSON.name),
            name: packageJSON.name,
            options: {},
            version: packageJSON.version,
        };
    }
    catch (err) {
        throw new Error("Unable to find plugin \"".concat(pluginName, "\". Perhaps you need to install its package?"));
    }
}
function createFileContentHash(path, files) {
    return path + files;
}
//# sourceMappingURL=plugins.js.map