"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var passport_1 = __importDefault(require("passport"));
exports.default = (function () {
    return function (req, res, next) {
        passport_1.default.authenticate(["jwt", "bearer"], { session: false }, function (err, user) {
            if (err) {
                return next(err);
            }
            req.user = user;
            return next();
        })(req, res, next);
    };
});
//# sourceMappingURL=authenticate-customer.js.map