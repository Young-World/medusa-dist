"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var awilix_1 = require("awilix");
var medusa_telemetry_1 = require("medusa-telemetry");
var os_1 = require("os");
require("reflect-metadata");
var request_ip_1 = __importDefault(require("request-ip"));
var typeorm_1 = require("typeorm");
var api_1 = __importDefault(require("./api"));
var config_1 = __importDefault(require("./config"));
var database_1 = __importDefault(require("./database"));
var defaults_1 = __importDefault(require("./defaults"));
var express_1 = __importDefault(require("./express"));
var feature_flags_1 = __importDefault(require("./feature-flags"));
var logger_1 = __importDefault(require("./logger"));
var models_1 = __importDefault(require("./models"));
var module_1 = __importDefault(require("./module"));
var passport_1 = __importDefault(require("./passport"));
var plugins_1 = __importStar(require("./plugins"));
var redis_1 = __importDefault(require("./redis"));
var repositories_1 = __importDefault(require("./repositories"));
var search_index_1 = __importDefault(require("./search-index"));
var services_1 = __importDefault(require("./services"));
var strategies_1 = __importDefault(require("./strategies"));
var subscribers_1 = __importDefault(require("./subscribers"));
exports.default = (function (_a) {
    var rootDirectory = _a.directory, expressApp = _a.expressApp, isTest = _a.isTest;
    return __awaiter(void 0, void 0, void 0, function () {
        var configModule, container, featureFlagRouter, modelsActivity, mAct, pmActivity, pmAct, repoActivity, rAct, stratActivity, stratAct, modulesActivity, modAct, dbActivity, dbConnection, dbAct, servicesActivity, servAct, expActivity, exAct, pluginsActivity, pAct, subActivity, subAct, apiActivity, apiAct, defaultsActivity, dAct, searchActivity, searchAct;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    configModule = (0, config_1.default)(rootDirectory);
                    container = (0, awilix_1.createContainer)();
                    container.register("configModule", (0, awilix_1.asValue)(configModule));
                    container.registerAdd = function (name, registration) {
                        var storeKey = name + "_STORE";
                        if (this.registrations[storeKey] === undefined) {
                            this.register(storeKey, (0, awilix_1.asValue)([]));
                        }
                        var store = this.resolve(storeKey);
                        if (this.registrations[name] === undefined) {
                            this.register(name, asArray(store));
                        }
                        store.unshift(registration);
                        return this;
                    }.bind(container);
                    // Add additional information to context of request
                    expressApp.use(function (req, res, next) {
                        var ipAddress = request_ip_1.default.getClientIp(req);
                        req.request_context = {
                            ip_address: ipAddress,
                        };
                        next();
                    });
                    featureFlagRouter = (0, feature_flags_1.default)(configModule, logger_1.default);
                    (0, medusa_telemetry_1.track)("FEATURE_FLAGS_LOADED");
                    container.register({
                        logger: (0, awilix_1.asValue)(logger_1.default),
                        featureFlagRouter: (0, awilix_1.asValue)(featureFlagRouter),
                    });
                    return [4 /*yield*/, (0, redis_1.default)({ container: container, configModule: configModule, logger: logger_1.default })];
                case 1:
                    _b.sent();
                    modelsActivity = logger_1.default.activity("Initializing models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODELS_INIT_STARTED");
                    (0, models_1.default)({ container: container });
                    mAct = logger_1.default.success(modelsActivity, "Models initialized") || {};
                    (0, medusa_telemetry_1.track)("MODELS_INIT_COMPLETED", { duration: mAct.duration });
                    pmActivity = logger_1.default.activity("Initializing plugin models".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.registerPluginModels)({
                            rootDirectory: rootDirectory,
                            container: container,
                            configModule: configModule,
                        })];
                case 2:
                    _b.sent();
                    pmAct = logger_1.default.success(pmActivity, "Plugin models initialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGIN_MODELS_INIT_COMPLETED", { duration: pmAct.duration });
                    repoActivity = logger_1.default.activity("Initializing repositories".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_STARTED");
                    (0, repositories_1.default)({ container: container });
                    rAct = logger_1.default.success(repoActivity, "Repositories initialized") || {};
                    (0, medusa_telemetry_1.track)("REPOSITORIES_INIT_COMPLETED", { duration: rAct.duration });
                    stratActivity = logger_1.default.activity("Initializing strategies".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_STARTED");
                    (0, strategies_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    stratAct = logger_1.default.success(stratActivity, "Strategies initialized") || {};
                    (0, medusa_telemetry_1.track)("STRATEGIES_INIT_COMPLETED", { duration: stratAct.duration });
                    modulesActivity = logger_1.default.activity("Initializing modules".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("MODULES_INIT_STARTED");
                    return [4 /*yield*/, (0, module_1.default)({ container: container, configModule: configModule, logger: logger_1.default })];
                case 3:
                    _b.sent();
                    modAct = logger_1.default.success(modulesActivity, "Modules initialized") || {};
                    (0, medusa_telemetry_1.track)("MODULES_INIT_COMPLETED", { duration: modAct.duration });
                    dbActivity = logger_1.default.activity("Initializing database".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_STARTED");
                    return [4 /*yield*/, (0, database_1.default)({
                            container: container,
                            configModule: configModule,
                        })];
                case 4:
                    dbConnection = _b.sent();
                    dbAct = logger_1.default.success(dbActivity, "Database initialized") || {};
                    (0, medusa_telemetry_1.track)("DATABASE_INIT_COMPLETED", { duration: dbAct.duration });
                    container.register({ manager: (0, awilix_1.asValue)(dbConnection.manager) });
                    servicesActivity = logger_1.default.activity("Initializing services".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_STARTED");
                    (0, services_1.default)({ container: container, configModule: configModule, isTest: isTest });
                    servAct = logger_1.default.success(servicesActivity, "Services initialized") || {};
                    (0, medusa_telemetry_1.track)("SERVICES_INIT_COMPLETED", { duration: servAct.duration });
                    expActivity = logger_1.default.activity("Initializing express".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_STARTED");
                    return [4 /*yield*/, (0, express_1.default)({ app: expressApp, configModule: configModule })];
                case 5:
                    _b.sent();
                    return [4 /*yield*/, (0, passport_1.default)({ app: expressApp, container: container, configModule: configModule })];
                case 6:
                    _b.sent();
                    exAct = logger_1.default.success(expActivity, "Express intialized") || {};
                    (0, medusa_telemetry_1.track)("EXPRESS_INIT_COMPLETED", { duration: exAct.duration });
                    // Add the registered services to the request scope
                    expressApp.use(function (req, res, next) {
                        container.register({ manager: (0, awilix_1.asValue)((0, typeorm_1.getManager)()) });
                        req.scope = container.createScope();
                        next();
                    });
                    pluginsActivity = logger_1.default.activity("Initializing plugins".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_STARTED");
                    return [4 /*yield*/, (0, plugins_1.default)({
                            container: container,
                            rootDirectory: rootDirectory,
                            configModule: configModule,
                            app: expressApp,
                            activityId: pluginsActivity,
                        })];
                case 7:
                    _b.sent();
                    pAct = logger_1.default.success(pluginsActivity, "Plugins intialized") || {};
                    (0, medusa_telemetry_1.track)("PLUGINS_INIT_COMPLETED", { duration: pAct.duration });
                    subActivity = logger_1.default.activity("Initializing subscribers".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_STARTED");
                    (0, subscribers_1.default)({ container: container });
                    subAct = logger_1.default.success(subActivity, "Subscribers initialized") || {};
                    (0, medusa_telemetry_1.track)("SUBSCRIBERS_INIT_COMPLETED", { duration: subAct.duration });
                    apiActivity = logger_1.default.activity("Initializing API".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("API_INIT_STARTED");
                    return [4 /*yield*/, (0, api_1.default)({ container: container, app: expressApp, configModule: configModule })];
                case 8:
                    _b.sent();
                    apiAct = logger_1.default.success(apiActivity, "API initialized") || {};
                    (0, medusa_telemetry_1.track)("API_INIT_COMPLETED", { duration: apiAct.duration });
                    defaultsActivity = logger_1.default.activity("Initializing defaults".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_STARTED");
                    return [4 /*yield*/, (0, defaults_1.default)({ container: container })];
                case 9:
                    _b.sent();
                    dAct = logger_1.default.success(defaultsActivity, "Defaults initialized") || {};
                    (0, medusa_telemetry_1.track)("DEFAULTS_INIT_COMPLETED", { duration: dAct.duration });
                    searchActivity = logger_1.default.activity("Initializing search engine indexing".concat(os_1.EOL));
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_STARTED");
                    return [4 /*yield*/, (0, search_index_1.default)({ container: container })];
                case 10:
                    _b.sent();
                    searchAct = logger_1.default.success(searchActivity, "Indexing event emitted") || {};
                    (0, medusa_telemetry_1.track)("SEARCH_ENGINE_INDEXING_COMPLETED", { duration: searchAct.duration });
                    return [2 /*return*/, { container: container, dbConnection: dbConnection, app: expressApp }];
            }
        });
    });
});
function asArray(resolvers) {
    return {
        resolve: function (container) {
            return resolvers.map(function (resolver) { return container.build(resolver); });
        },
    };
}
//# sourceMappingURL=index.js.map