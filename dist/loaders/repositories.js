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
var glob_1 = __importDefault(require("glob"));
var path_1 = __importDefault(require("path"));
var awilix_1 = require("awilix");
var format_registration_name_1 = __importDefault(require("../utils/format-registration-name"));
/**
 * Registers all models in the model directory
 */
exports.default = (function (_a) {
    var container = _a.container;
    var corePath = "../repositories/*.js";
    var coreFull = path_1.default.join(__dirname, corePath);
    var core = glob_1.default.sync(coreFull, { cwd: __dirname });
    core.forEach(function (fn) {
        var loaded = require(fn);
        Object.entries(loaded).map(function (_a) {
            var _b;
            var _c = __read(_a, 2), val = _c[1];
            if (typeof val === "function") {
                var name_1 = (0, format_registration_name_1.default)(fn);
                container.register((_b = {},
                    _b[name_1] = (0, awilix_1.asClass)(val),
                    _b));
            }
        });
    });
});
//# sourceMappingURL=repositories.js.map