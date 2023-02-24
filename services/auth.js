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
var scrypt_kdf_1 = __importDefault(require("scrypt-kdf"));
var interfaces_1 = require("../interfaces");
/**
 * Can authenticate a user based on email password combination
 */
var AuthService = /** @class */ (function (_super) {
    __extends(AuthService, _super);
    function AuthService(_a) {
        var manager = _a.manager, userService = _a.userService, customerService = _a.customerService;
        var _this = _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.userService_ = userService;
        _this.customerService_ = customerService;
        return _this;
    }
    /**
     * Verifies if a password is valid given the provided password hash
     * @param {string} password - the raw password to check
     * @param {string} hash - the hash to compare against
     * @return {bool} the result of the comparison
     */
    AuthService.prototype.comparePassword_ = function (password, hash) {
        return __awaiter(this, void 0, void 0, function () {
            var buf;
            return __generator(this, function (_a) {
                buf = Buffer.from(hash, "base64");
                return [2 /*return*/, scrypt_kdf_1.default.verify(buf, password)];
            });
        });
    };
    /**
     * Authenticates a given user with an API token
     * @param {string} token - the api_token of the user to authenticate
     * @return {AuthenticateResult}
     *    success: whether authentication succeeded
     *    user: the user document if authentication succeded
     *    error: a string with the error message
     */
    AuthService.prototype.authenticateAPIToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var user, error_1, user, error_2;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        if (!((_a = process.env.NODE_ENV) === null || _a === void 0 ? void 0 : _a.startsWith("dev"))) return [3 /*break*/, 4];
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this.userService_
                                                .withTransaction(transactionManager)
                                                .retrieve(token)];
                                    case 2:
                                        user = _b.sent();
                                        return [2 /*return*/, {
                                                success: true,
                                                user: user,
                                            }];
                                    case 3:
                                        error_1 = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 4:
                                        _b.trys.push([4, 6, , 7]);
                                        return [4 /*yield*/, this.userService_
                                                .withTransaction(transactionManager)
                                                .retrieveByApiToken(token)];
                                    case 5:
                                        user = _b.sent();
                                        return [2 /*return*/, {
                                                success: true,
                                                user: user,
                                            }];
                                    case 6:
                                        error_2 = _b.sent();
                                        return [2 /*return*/, {
                                                success: false,
                                                error: "Invalid API Token",
                                            }];
                                    case 7: return [2 /*return*/];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authenticates a given user based on an email, password combination. Uses
     * scrypt to match password with hashed value.
     * @param {string} email - the email of the user
     * @param {string} password - the password of the user
     * @return {AuthenticateResult}
     *    success: whether authentication succeeded
     *    user: the user document if authentication succeded
     *    error: a string with the error message
     */
    AuthService.prototype.authenticate = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var userPasswordHash, passwordsMatch, user, error_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 5, , 6]);
                                        return [4 /*yield*/, this.userService_
                                                .withTransaction(transactionManager)
                                                .retrieveByEmail(email, {
                                                select: ["password_hash"],
                                            })];
                                    case 1:
                                        userPasswordHash = _a.sent();
                                        return [4 /*yield*/, this.comparePassword_(password, userPasswordHash.password_hash)];
                                    case 2:
                                        passwordsMatch = _a.sent();
                                        if (!passwordsMatch) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.userService_
                                                .withTransaction(transactionManager)
                                                .retrieveByEmail(email)];
                                    case 3:
                                        user = _a.sent();
                                        return [2 /*return*/, {
                                                success: true,
                                                user: user,
                                            }];
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        error_3 = _a.sent();
                                        console.log("error ->", error_3);
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/, {
                                            success: false,
                                            error: "Invalid email or password",
                                        }];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Authenticates a customer based on an email, password combination. Uses
     * scrypt to match password with hashed value.
     * @param {string} email - the email of the user
     * @param {string} password - the password of the user
     * @return {{ success: (bool), customer: (object | undefined) }}
     *    success: whether authentication succeeded
     *    user: the user document if authentication succeded
     *    error: a string with the error message
     */
    AuthService.prototype.authenticateCustomer = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var customerPasswordHash, passwordsMatch, customer, error_4;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 5, , 6]);
                                        return [4 /*yield*/, this.customerService_
                                                .withTransaction(transactionManager)
                                                .retrieveByEmail(email, {
                                                select: ["password_hash"],
                                            })];
                                    case 1:
                                        customerPasswordHash = _a.sent();
                                        if (!customerPasswordHash.password_hash) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.comparePassword_(password, customerPasswordHash.password_hash)];
                                    case 2:
                                        passwordsMatch = _a.sent();
                                        if (!passwordsMatch) return [3 /*break*/, 4];
                                        return [4 /*yield*/, this.customerService_
                                                .withTransaction(transactionManager)
                                                .retrieveByEmail(email)];
                                    case 3:
                                        customer = _a.sent();
                                        return [2 /*return*/, {
                                                success: true,
                                                customer: customer,
                                            }];
                                    case 4: return [3 /*break*/, 6];
                                    case 5:
                                        error_4 = _a.sent();
                                        return [3 /*break*/, 6];
                                    case 6: return [2 /*return*/, {
                                            success: false,
                                            error: "Invalid email or password",
                                        }];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return AuthService;
}(interfaces_1.TransactionBaseService));
exports.default = AuthService;
//# sourceMappingURL=auth.js.map