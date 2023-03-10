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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistributedTransaction = exports.TransactionPayload = exports.TransactionCheckpoint = exports.TransactionStepError = exports.TransactionContext = void 0;
var _1 = require(".");
/**
 * @typedef TransactionContext
 * @property invoke - Object containing responses of Invoke handlers on steps flagged with saveResponse.
 * @property compensate - Object containing responses of Compensate handlers on steps flagged with saveResponse.
 */
var TransactionContext = /** @class */ (function () {
    function TransactionContext(invoke, compensate) {
        if (invoke === void 0) { invoke = {}; }
        if (compensate === void 0) { compensate = {}; }
        this.invoke = invoke;
        this.compensate = compensate;
    }
    return TransactionContext;
}());
exports.TransactionContext = TransactionContext;
var TransactionStepError = /** @class */ (function () {
    function TransactionStepError(action, handlerType, error) {
        this.action = action;
        this.handlerType = handlerType;
        this.error = error;
    }
    return TransactionStepError;
}());
exports.TransactionStepError = TransactionStepError;
var TransactionCheckpoint = /** @class */ (function () {
    function TransactionCheckpoint(flow, context, errors) {
        if (errors === void 0) { errors = []; }
        this.flow = flow;
        this.context = context;
        this.errors = errors;
    }
    return TransactionCheckpoint;
}());
exports.TransactionCheckpoint = TransactionCheckpoint;
var TransactionPayload = /** @class */ (function () {
    /**
     * @param metadata - The metadata of the transaction.
     * @param data - The initial payload data to begin a transation.
     * @param context - Object gathering responses of all steps flagged with saveResponse.
     */
    function TransactionPayload(metadata, data, context) {
        this.metadata = metadata;
        this.data = data;
        this.context = context;
    }
    return TransactionPayload;
}());
exports.TransactionPayload = TransactionPayload;
/**
 * DistributedTransaction represents a distributed transaction, which is a transaction that is composed of multiple steps that are executed in a specific order.
 */
var DistributedTransaction = /** @class */ (function () {
    function DistributedTransaction(flow, handler, payload, errors, context) {
        this.flow = flow;
        this.handler = handler;
        this.payload = payload;
        this.errors = [];
        this.context = new TransactionContext();
        this.transactionId = flow.transactionId;
        this.modelId = flow.transactionModelId;
        if (errors) {
            this.errors = errors;
        }
        if (context) {
            this.context = context;
        }
    }
    DistributedTransaction.prototype.getFlow = function () {
        return this.flow;
    };
    DistributedTransaction.prototype.getContext = function () {
        return this.context;
    };
    DistributedTransaction.prototype.getErrors = function () {
        return this.errors;
    };
    DistributedTransaction.prototype.addError = function (action, handlerType, error) {
        this.errors.push({
            action: action,
            handlerType: handlerType,
            error: error,
        });
    };
    DistributedTransaction.prototype.addResponse = function (action, handlerType, response) {
        this.context[handlerType][action] = response;
    };
    DistributedTransaction.prototype.hasFinished = function () {
        return [
            _1.TransactionState.DONE,
            _1.TransactionState.REVERTED,
            _1.TransactionState.FAILED,
        ].includes(this.getState());
    };
    DistributedTransaction.prototype.getState = function () {
        return this.getFlow().state;
    };
    Object.defineProperty(DistributedTransaction.prototype, "isPartiallyCompleted", {
        get: function () {
            return !!this.getFlow().hasFailedSteps || !!this.getFlow().hasSkippedSteps;
        },
        enumerable: false,
        configurable: true
    });
    DistributedTransaction.prototype.canInvoke = function () {
        return (this.getFlow().state === _1.TransactionState.NOT_STARTED ||
            this.getFlow().state === _1.TransactionState.INVOKING);
    };
    DistributedTransaction.prototype.canRevert = function () {
        return (this.getFlow().state === _1.TransactionState.DONE ||
            this.getFlow().state === _1.TransactionState.COMPENSATING);
    };
    DistributedTransaction.prototype.saveCheckpoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key, data;
            return __generator(this, function (_a) {
                key = DistributedTransaction.keyPrefix + this.transactionId;
                data = new TransactionCheckpoint(this.getFlow(), this.getContext(), this.getErrors());
                DistributedTransaction.keyValueStore[key] = JSON.stringify(data);
                return [2 /*return*/, data];
            });
        });
    };
    DistributedTransaction.loadTransaction = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                key = DistributedTransaction.keyPrefix + transactionId;
                if (DistributedTransaction.keyValueStore[key]) {
                    return [2 /*return*/, JSON.parse(DistributedTransaction.keyValueStore[key])];
                }
                return [2 /*return*/, null];
            });
        });
    };
    DistributedTransaction.prototype.deleteCheckpoint = function () {
        return __awaiter(this, void 0, void 0, function () {
            var key;
            return __generator(this, function (_a) {
                key = DistributedTransaction.keyPrefix + this.transactionId;
                delete DistributedTransaction.keyValueStore[key];
                return [2 /*return*/];
            });
        });
    };
    DistributedTransaction.keyValueStore = {}; // TODO: Use Key/Value db
    DistributedTransaction.keyPrefix = "dtrans:";
    return DistributedTransaction;
}());
exports.DistributedTransaction = DistributedTransaction;
//# sourceMappingURL=distributed-transaction.js.map