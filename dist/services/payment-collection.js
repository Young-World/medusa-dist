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
var medusa_core_utils_1 = require("medusa-core-utils");
var utils_1 = require("../utils");
var models_1 = require("../models");
var interfaces_1 = require("../interfaces");
var PaymentCollectionService = /** @class */ (function (_super) {
    __extends(PaymentCollectionService, _super);
    function PaymentCollectionService(_a) {
        var manager = _a.manager, paymentCollectionRepository = _a.paymentCollectionRepository, eventBusService = _a.eventBusService;
        var _this = 
        // eslint-disable-next-line prefer-rest-params
        _super.call(this, arguments[0]) || this;
        _this.manager_ = manager;
        _this.paymentCollectionRepository_ = paymentCollectionRepository;
        _this.eventBusService_ = eventBusService;
        return _this;
    }
    PaymentCollectionService.prototype.retrieve = function (paymentCollectionId, config) {
        var _a;
        if (config === void 0) { config = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var manager, paymentCollectionRepository, query, paymentCollection;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        manager = (_a = this.transactionManager_) !== null && _a !== void 0 ? _a : this.manager_;
                        paymentCollectionRepository = manager.getCustomRepository(this.paymentCollectionRepository_);
                        query = (0, utils_1.buildQuery)({ id: paymentCollectionId }, config);
                        return [4 /*yield*/, paymentCollectionRepository.findOne(query)];
                    case 1:
                        paymentCollection = _b.sent();
                        if (!paymentCollection) {
                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_FOUND, "Payment collection with id ".concat(paymentCollectionId, " was not found"));
                        }
                        return [2 /*return*/, paymentCollection];
                }
            });
        });
    };
    PaymentCollectionService.prototype.create = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (transactionManager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepository, paymentCollectionToCreate, paymentCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentCollectionRepository = transactionManager.getCustomRepository(this.paymentCollectionRepository_);
                                        paymentCollectionToCreate = paymentCollectionRepository.create({
                                            region_id: data.region_id,
                                            type: data.type,
                                            status: models_1.PaymentCollectionStatus.NOT_PAID,
                                            currency_code: data.currency_code,
                                            amount: data.amount,
                                            metadata: data.metadata,
                                            created_by: data.created_by,
                                            description: data.description,
                                        });
                                        return [4 /*yield*/, paymentCollectionRepository.save(paymentCollectionToCreate)];
                                    case 1:
                                        paymentCollection = _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(transactionManager)
                                                .emit(PaymentCollectionService.Events.CREATED, paymentCollection)];
                                    case 2:
                                        _a.sent();
                                        return [2 /*return*/, paymentCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentCollectionService.prototype.update = function (paymentCollectionId, data) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepo, paymentCollection, _a, _b, key, result;
                            var e_1, _c;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        paymentCollectionRepo = manager.getCustomRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId)];
                                    case 1:
                                        paymentCollection = _d.sent();
                                        try {
                                            for (_a = __values(Object.keys(data)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                                key = _b.value;
                                                if (key === "metadata" && data.metadata) {
                                                    paymentCollection[key] = (0, utils_1.setMetadata)(paymentCollection, data.metadata);
                                                }
                                                else if ((0, utils_1.isDefined)(data[key])) {
                                                    paymentCollection[key] = data[key];
                                                }
                                            }
                                        }
                                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                                        finally {
                                            try {
                                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                            }
                                            finally { if (e_1) throw e_1.error; }
                                        }
                                        return [4 /*yield*/, paymentCollectionRepo.save(paymentCollection)];
                                    case 2:
                                        result = _d.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.UPDATED, result)];
                                    case 3:
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
    PaymentCollectionService.prototype.delete = function (paymentCollectionId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.atomicPhase_(function (manager) { return __awaiter(_this, void 0, void 0, function () {
                            var paymentCollectionRepo, paymentCollection;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        paymentCollectionRepo = manager.getCustomRepository(this.paymentCollectionRepository_);
                                        return [4 /*yield*/, this.retrieve(paymentCollectionId).catch(function () { return void 0; })];
                                    case 1:
                                        paymentCollection = _a.sent();
                                        if (!paymentCollection) {
                                            return [2 /*return*/];
                                        }
                                        if ([
                                            models_1.PaymentCollectionStatus.CANCELED,
                                            models_1.PaymentCollectionStatus.NOT_PAID,
                                        ].includes(paymentCollection.status) === false) {
                                            throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot delete payment collection with status ".concat(paymentCollection.status));
                                        }
                                        return [4 /*yield*/, paymentCollectionRepo.remove(paymentCollection)];
                                    case 2:
                                        _a.sent();
                                        return [4 /*yield*/, this.eventBusService_
                                                .withTransaction(manager)
                                                .emit(PaymentCollectionService.Events.DELETED, paymentCollection)];
                                    case 3:
                                        _a.sent();
                                        return [2 /*return*/, paymentCollection];
                                }
                            });
                        }); })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    PaymentCollectionService.Events = {
        CREATED: "payment-collection.created",
        UPDATED: "payment-collection.updated",
        DELETED: "payment-collection.deleted",
    };
    return PaymentCollectionService;
}(interfaces_1.TransactionBaseService));
exports.default = PaymentCollectionService;
//# sourceMappingURL=payment-collection.js.map