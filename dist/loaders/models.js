"use strict";
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
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var typeorm_1 = require("typeorm");
var awilix_1 = require("awilix");
/**
 * Registers all models in the model directory
 */
exports.default = (function (_a, config) {
    var container = _a.container;
    if (config === void 0) { config = { register: true }; }
    var corePath = "../models/*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var models = [];
    var core = glob_1.default.sync(coreFull, {
        cwd: __dirname,
        ignore: ["index.js", "index.ts"],
    });
    core.forEach(function (fn) {
        var loaded = require(fn);
        if (loaded) {
            Object.entries(loaded).map(function (_a) {
                var _b;
                var _c = __read(_a, 2), val = _c[1];
                if (typeof val === "function" || val instanceof typeorm_1.EntitySchema) {
                    if (config.register) {
                        var name_1 = (0, format_registration_name_1.default)(fn);
                        container.register((_b = {},
                            _b[name_1] = (0, awilix_1.asClass)(val),
                            _b));
                        container.registerAdd("db_entities", (0, awilix_1.asValue)(val));
                    }
                    models.push(val);
                }
            });
        }
    });
    return models;
});
//# sourceMappingURL=models.js.map