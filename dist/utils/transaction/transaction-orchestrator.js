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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionOrchestrator = void 0;
var events_1 = require("events");
var _1 = require(".");
var distributed_transaction_1 = require("./distributed-transaction");
var transaction_step_1 = require("./transaction-step");
/**
 * @class TransactionOrchestrator is responsible for managing and executing distributed transactions.
 * It is based on a single transaction definition, which is used to execute all the transaction steps
 */
var TransactionOrchestrator = /** @class */ (function (_super) {
    __extends(TransactionOrchestrator, _super);
    function TransactionOrchestrator(id, definition) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.definition = definition;
        _this.ROOT_STEP = "_root";
        _this.invokeSteps = [];
        _this.compensateSteps = [];
        _this.DEFAULT_RETRIES = 0;
        return _this;
    }
    TransactionOrchestrator.getKeyName = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return params.join(this.SEPARATOR);
    };
    TransactionOrchestrator.prototype.getPreviousStep = function (flow, step) {
        var id = step.id.split(".");
        id.pop();
        var parentId = id.join(".");
        return flow.steps[parentId];
    };
    TransactionOrchestrator.prototype.getInvokeSteps = function (flow) {
        if (this.invokeSteps.length) {
            return this.invokeSteps;
        }
        var steps = Object.keys(flow.steps);
        steps.sort(function (a, b) { return flow.steps[a].depth - flow.steps[b].depth; });
        this.invokeSteps = steps;
        return steps;
    };
    TransactionOrchestrator.prototype.getCompensationSteps = function (flow) {
        if (this.compensateSteps.length) {
            return this.compensateSteps;
        }
        var steps = Object.keys(flow.steps);
        steps.sort(function (a, b) { return (flow.steps[b].depth || 0) - (flow.steps[a].depth || 0); });
        this.compensateSteps = steps;
        return steps;
    };
    TransactionOrchestrator.prototype.canMoveForward = function (flow, previousStep) {
        var states = [
            _1.TransactionState.DONE,
            _1.TransactionState.FAILED,
            _1.TransactionState.SKIPPED,
        ];
        var siblings = this.getPreviousStep(flow, previousStep).next.map(function (sib) { return flow.steps[sib]; });
        return (!!previousStep.definition.noWait ||
            siblings.every(function (sib) { return states.includes(sib.invoke.state); }));
    };
    TransactionOrchestrator.prototype.canMoveBackward = function (flow, step) {
        var states = [
            _1.TransactionState.DONE,
            _1.TransactionState.REVERTED,
            _1.TransactionState.FAILED,
            _1.TransactionState.DORMANT,
        ];
        var siblings = step.next.map(function (sib) { return flow.steps[sib]; });
        return (siblings.length === 0 ||
            siblings.every(function (sib) { return states.includes(sib.compensate.state); }));
    };
    TransactionOrchestrator.prototype.canContinue = function (flow, step) {
        if (flow.state == _1.TransactionState.COMPENSATING) {
            return this.canMoveBackward(flow, step);
        }
        else {
            var previous = this.getPreviousStep(flow, step);
            if (previous.id === this.ROOT_STEP) {
                return true;
            }
            return this.canMoveForward(flow, previous);
        }
    };
    TransactionOrchestrator.prototype.checkAllSteps = function (transaction) {
        var e_1, _a;
        var hasSkipped = false;
        var hasIgnoredFailure = false;
        var hasFailed = false;
        var hasWaiting = false;
        var hasReverted = false;
        var completedSteps = 0;
        var flow = transaction.getFlow();
        var nextSteps = [];
        var allSteps = flow.state === _1.TransactionState.COMPENSATING
            ? this.getCompensationSteps(flow)
            : this.getInvokeSteps(flow);
        try {
            for (var allSteps_1 = __values(allSteps), allSteps_1_1 = allSteps_1.next(); !allSteps_1_1.done; allSteps_1_1 = allSteps_1.next()) {
                var step = allSteps_1_1.value;
                if (step === this.ROOT_STEP ||
                    !this.canContinue(flow, flow.steps[step])) {
                    continue;
                }
                var stepDef = flow.steps[step];
                var curState = stepDef.getStates();
                if (curState.status === _1.TransactionStepStatus.WAITING) {
                    hasWaiting = true;
                    if (stepDef.canRetry()) {
                        nextSteps.push(stepDef);
                    }
                    continue;
                }
                if (stepDef.canInvoke(flow.state) || stepDef.canCompensate(flow.state)) {
                    nextSteps.push(stepDef);
                }
                else {
                    completedSteps++;
                    if (curState.state === _1.TransactionState.SKIPPED) {
                        hasSkipped = true;
                    }
                    else if (curState.state === _1.TransactionState.REVERTED) {
                        hasReverted = true;
                    }
                    else if (curState.state === _1.TransactionState.FAILED) {
                        if (stepDef.definition.continueOnPermanentFailure) {
                            hasIgnoredFailure = true;
                        }
                        else {
                            hasFailed = true;
                        }
                    }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (allSteps_1_1 && !allSteps_1_1.done && (_a = allSteps_1.return)) _a.call(allSteps_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var totalSteps = allSteps.length - 1;
        if (flow.state === _1.TransactionState.WAITING_TO_COMPENSATE &&
            nextSteps.length === 0 &&
            !hasWaiting) {
            flow.state = _1.TransactionState.COMPENSATING;
            this.flagStepsToRevert(flow);
            this.emit("compensate", transaction);
            return this.checkAllSteps(transaction);
        }
        else if (completedSteps === totalSteps) {
            if (hasSkipped) {
                flow.hasSkippedSteps = true;
            }
            if (hasIgnoredFailure) {
                flow.hasFailedSteps = true;
            }
            if (hasFailed) {
                flow.state = _1.TransactionState.FAILED;
            }
            else {
                flow.state = hasReverted
                    ? _1.TransactionState.REVERTED
                    : _1.TransactionState.DONE;
            }
            this.emit("finish", transaction);
            // TODO: check TransactionModel if it should delete the checkpoint when the transaction is done
            void transaction.deleteCheckpoint();
        }
        return {
            next: nextSteps,
            total: totalSteps,
            remaining: totalSteps - completedSteps,
            completed: completedSteps,
        };
    };
    TransactionOrchestrator.prototype.flagStepsToRevert = function (flow) {
        for (var step in flow.steps) {
            if (step === this.ROOT_STEP) {
                continue;
            }
            var stepDef = flow.steps[step];
            var curState = stepDef.getStates();
            if ((curState.state === _1.TransactionState.DONE ||
                curState.status === _1.TransactionStepStatus.PERMANENT_FAILURE) &&
                !stepDef.definition.noCompensation) {
                stepDef.beginCompensation();
                stepDef.changeState(_1.TransactionState.NOT_STARTED);
            }
        }
    };
    TransactionOrchestrator.prototype.setStepSuccess = function (transaction, step, response) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (step.saveResponse) {
                            transaction.addResponse(step.definition.action, step.isCompensating()
                                ? _1.TransactionHandlerType.COMPENSATE
                                : _1.TransactionHandlerType.INVOKE, response);
                        }
                        step.changeStatus(_1.TransactionStepStatus.OK);
                        if (step.isCompensating()) {
                            step.changeState(_1.TransactionState.REVERTED);
                        }
                        else {
                            step.changeState(_1.TransactionState.DONE);
                        }
                        if (!step.definition.async) return [3 /*break*/, 2];
                        return [4 /*yield*/, transaction.saveCheckpoint()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TransactionOrchestrator.prototype.setStepFailure = function (transaction, step, error, maxRetries) {
        if (maxRetries === void 0) { maxRetries = this.DEFAULT_RETRIES; }
        return __awaiter(this, void 0, void 0, function () {
            var flow, _a, _b, childStep, child;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        step.failures++;
                        step.changeStatus(_1.TransactionStepStatus.TEMPORARY_FAILURE);
                        if (step.failures > maxRetries) {
                            step.changeState(_1.TransactionState.FAILED);
                            step.changeStatus(_1.TransactionStepStatus.PERMANENT_FAILURE);
                            transaction.addError(step.definition.action, step.isCompensating()
                                ? _1.TransactionHandlerType.COMPENSATE
                                : _1.TransactionHandlerType.INVOKE, error);
                            if (!step.isCompensating()) {
                                flow = transaction.getFlow();
                                if (step.definition.continueOnPermanentFailure) {
                                    try {
                                        for (_a = __values(step.next), _b = _a.next(); !_b.done; _b = _a.next()) {
                                            childStep = _b.value;
                                            child = flow.steps[childStep];
                                            child.changeState(_1.TransactionState.SKIPPED);
                                        }
                                    }
                                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                                    finally {
                                        try {
                                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                                        }
                                        finally { if (e_2) throw e_2.error; }
                                    }
                                }
                                else {
                                    flow.state = _1.TransactionState.WAITING_TO_COMPENSATE;
                                }
                            }
                        }
                        if (!step.definition.async) return [3 /*break*/, 2];
                        return [4 /*yield*/, transaction.saveCheckpoint()];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    TransactionOrchestrator.prototype.executeNext = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var flow, nextSteps, execution, _loop_1, _a, _b, step;
            var e_3, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (transaction.hasFinished()) {
                            return [2 /*return*/];
                        }
                        flow = transaction.getFlow();
                        nextSteps = this.checkAllSteps(transaction);
                        execution = [];
                        _loop_1 = function (step) {
                            var curState = step.getStates();
                            var type = step.isCompensating()
                                ? _1.TransactionHandlerType.COMPENSATE
                                : _1.TransactionHandlerType.INVOKE;
                            step.lastAttempt = Date.now();
                            step.attempts++;
                            if (curState.state === _1.TransactionState.NOT_STARTED) {
                                if (step.isCompensating()) {
                                    step.changeState(_1.TransactionState.COMPENSATING);
                                }
                                else if (flow.state === _1.TransactionState.INVOKING) {
                                    step.changeState(_1.TransactionState.INVOKING);
                                }
                            }
                            step.changeStatus(_1.TransactionStepStatus.WAITING);
                            var payload = new distributed_transaction_1.TransactionPayload({
                                producer: flow.transactionModelId,
                                reply_to_topic: TransactionOrchestrator.getKeyName("trans", flow.transactionModelId),
                                idempotency_key: TransactionOrchestrator.getKeyName(flow.transactionId, step.definition.action, type),
                                action: step.definition.action + "",
                                action_type: type,
                                attempt: step.attempts,
                                timestamp: Date.now(),
                            }, transaction.payload, transaction.getContext());
                            if (!step.definition.async) {
                                execution.push(transaction
                                    .handler(step.definition.action + "", type, payload)
                                    .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.setStepSuccess(transaction, step, response)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); })
                                    .catch(function (error) { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, this.setStepFailure(transaction, step, error, step.definition.maxRetries)];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }));
                            }
                            else {
                                execution.push(transaction
                                    .saveCheckpoint()
                                    .then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        return [2 /*return*/, transaction
                                                .handler(step.definition.action + "", type, payload)
                                                .catch(function () { return void 0; })];
                                    });
                                }); }));
                            }
                        };
                        try {
                            for (_a = __values(nextSteps.next), _b = _a.next(); !_b.done; _b = _a.next()) {
                                step = _b.value;
                                _loop_1(step);
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [4 /*yield*/, Promise.all(execution)];
                    case 1:
                        _d.sent();
                        if (!(nextSteps.next.length > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.executeNext(transaction)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Start a new transaction or resume a transaction that has been previously started
     * @param transaction - The transaction to resume
     */
    TransactionOrchestrator.prototype.resume = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var flow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (transaction.modelId !== this.id) {
                            throw new Error("TransactionModel \"".concat(transaction.modelId, "\" cannot be orchestrated by \"").concat(this.id, "\" model."));
                        }
                        if (transaction.hasFinished()) {
                            return [2 /*return*/];
                        }
                        flow = transaction.getFlow();
                        if (flow.state === _1.TransactionState.NOT_STARTED) {
                            flow.state = _1.TransactionState.INVOKING;
                            this.emit("begin", transaction);
                        }
                        else {
                            this.emit("resume", transaction);
                        }
                        return [4 /*yield*/, this.executeNext(transaction)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Cancel and revert a transaction compensating all its executed steps. It can be an ongoing transaction or a completed one
     * @param transaction - The transaction to be reverted
     */
    TransactionOrchestrator.prototype.cancelTransaction = function (transaction) {
        return __awaiter(this, void 0, void 0, function () {
            var flow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (transaction.modelId !== this.id) {
                            throw new Error("TransactionModel \"".concat(transaction.modelId, "\" cannot be orchestrated by \"").concat(this.id, "\" model."));
                        }
                        flow = transaction.getFlow();
                        if (flow.state === _1.TransactionState.FAILED) {
                            throw new Error("Cannot revert a perment failed transaction.");
                        }
                        flow.state = _1.TransactionState.WAITING_TO_COMPENSATE;
                        return [4 /*yield*/, this.executeNext(transaction)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TransactionOrchestrator.prototype.createTransactionFlow = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, {
                        transactionModelId: this.id,
                        transactionId: transactionId,
                        hasFailedSteps: false,
                        hasSkippedSteps: false,
                        state: _1.TransactionState.NOT_STARTED,
                        definition: this.definition,
                        steps: this.buildSteps(this.definition),
                    }];
            });
        });
    };
    TransactionOrchestrator.prototype.loadTransactionById = function (transactionId) {
        return __awaiter(this, void 0, void 0, function () {
            var transaction, flow;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, distributed_transaction_1.DistributedTransaction.loadTransaction(transactionId)];
                    case 1:
                        transaction = _a.sent();
                        if (transaction !== null) {
                            flow = transaction.flow;
                            transaction.flow.steps = this.buildSteps(flow.definition, flow.steps);
                            return [2 /*return*/, transaction];
                        }
                        return [2 /*return*/, null];
                }
            });
        });
    };
    TransactionOrchestrator.prototype.buildSteps = function (flow, existingSteps) {
        var _a;
        var _b;
        var states = (_a = {},
            _a[this.ROOT_STEP] = {
                id: this.ROOT_STEP,
                next: [],
            },
            _a);
        var actionNames = new Set();
        var queue = [{ obj: flow, level: [this.ROOT_STEP] }];
        while (queue.length > 0) {
            var _c = queue.shift(), obj = _c.obj, level = _c.level;
            for (var key in obj) {
                // eslint-disable-next-line no-prototype-builtins
                if (!obj.hasOwnProperty(key)) {
                    continue;
                }
                if (typeof obj[key] === "object" && obj[key] !== null) {
                    queue.push({ obj: obj[key], level: __spreadArray([], __read(level), false) });
                }
                else if (key === "action") {
                    if (actionNames.has(obj.action)) {
                        throw new Error("Action \"".concat(obj.action, "\" is already defined."));
                    }
                    actionNames.add(obj.action);
                    level.push(obj.action);
                    var id = level.join(".");
                    var parent_1 = level.slice(0, level.length - 1).join(".");
                    (_b = states[parent_1].next) === null || _b === void 0 ? void 0 : _b.push(id);
                    var definitionCopy = __assign({}, obj);
                    delete definitionCopy.next;
                    states[id] = Object.assign(new transaction_step_1.TransactionStep(), (existingSteps === null || existingSteps === void 0 ? void 0 : existingSteps[id]) || {
                        id: id,
                        depth: level.length - 1,
                        definition: definitionCopy,
                        saveResponse: definitionCopy.saveResponse,
                        invoke: {
                            state: _1.TransactionState.NOT_STARTED,
                            status: _1.TransactionStepStatus.IDLE,
                        },
                        compensate: {
                            state: _1.TransactionState.DORMANT,
                            status: _1.TransactionStepStatus.IDLE,
                        },
                        attempts: 0,
                        failures: 0,
                        lastAttempt: null,
                        next: [],
                    });
                }
            }
        }
        return states;
    };
    /** Create a new transaction
     * @param transactionId - unique identifier of the transaction
     * @param handler - function to handle action of the transaction
     * @param payload - payload to be passed to all the transaction steps
     */
    TransactionOrchestrator.prototype.beginTransaction = function (transactionId, handler, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var existingTransaction, newTransaction, modelFlow, transaction;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadTransactionById(transactionId)];
                    case 1:
                        existingTransaction = _a.sent();
                        newTransaction = false;
                        if (!!existingTransaction) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.createTransactionFlow(transactionId)];
                    case 2:
                        modelFlow = _a.sent();
                        newTransaction = true;
                        return [3 /*break*/, 4];
                    case 3:
                        modelFlow = existingTransaction.flow;
                        _a.label = 4;
                    case 4:
                        transaction = new distributed_transaction_1.DistributedTransaction(modelFlow, handler, payload, existingTransaction === null || existingTransaction === void 0 ? void 0 : existingTransaction.errors, existingTransaction === null || existingTransaction === void 0 ? void 0 : existingTransaction.context);
                        if (!newTransaction) return [3 /*break*/, 6];
                        return [4 /*yield*/, transaction.saveCheckpoint()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/, transaction];
                }
            });
        });
    };
    TransactionOrchestrator.prototype.getStepByAction = function (flow, action) {
        var _a, _b;
        for (var key in flow.steps) {
            if (action === ((_b = (_a = flow.steps[key]) === null || _a === void 0 ? void 0 : _a.definition) === null || _b === void 0 ? void 0 : _b.action)) {
                return flow.steps[key];
            }
        }
        return null;
    };
    TransactionOrchestrator.prototype.getTransactionAndStepFromIdempotencyKey = function (responseIdempotencyKey, handler, transaction, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, transactionId, action, actionType, existingTransaction, step;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = __read(responseIdempotencyKey.split(TransactionOrchestrator.SEPARATOR), 3), transactionId = _a[0], action = _a[1], actionType = _a[2];
                        if (!transaction && !handler) {
                            throw new Error("If a transaction is not provided, the handler is required");
                        }
                        if (!!transaction) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.loadTransactionById(transactionId)];
                    case 1:
                        existingTransaction = _b.sent();
                        if (existingTransaction === null) {
                            throw new Error("Transaction ".concat(transactionId, " could not be found."));
                        }
                        transaction = new distributed_transaction_1.DistributedTransaction(existingTransaction.flow, handler, payload, existingTransaction.errors, existingTransaction.context);
                        _b.label = 2;
                    case 2:
                        step = this.getStepByAction(transaction.getFlow(), action);
                        if (step === null) {
                            throw new Error("Action not found.");
                        }
                        else if (step.isCompensating()
                            ? actionType !== _1.TransactionHandlerType.COMPENSATE
                            : actionType !== _1.TransactionHandlerType.INVOKE) {
                            throw new Error("Incorrect action type.");
                        }
                        return [2 /*return*/, [transaction, step]];
                }
            });
        });
    };
    /** Register a step success for a specific transaction and step
     * @param responseIdempotencyKey - The idempotency key for the step
     * @param handler - The handler function to execute the step
     * @param transaction - The current transaction. If not provided it will be loaded based on the responseIdempotencyKey
     * @param response - The response of the step
     */
    TransactionOrchestrator.prototype.registerStepSuccess = function (responseIdempotencyKey, handler, transaction, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, curTransaction, step;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTransactionAndStepFromIdempotencyKey(responseIdempotencyKey, handler, transaction, response)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), curTransaction = _a[0], step = _a[1];
                        if (!(step.getStates().status === _1.TransactionStepStatus.WAITING)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.setStepSuccess(curTransaction, step, response)];
                    case 2:
                        _b.sent();
                        this.emit("resume", curTransaction);
                        return [4 /*yield*/, this.executeNext(curTransaction)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error("Cannot set step success when status is ".concat(step.getStates().status));
                    case 5: return [2 /*return*/, curTransaction];
                }
            });
        });
    };
    /**
     * Register a step failure for a specific transaction and step
     * @param responseIdempotencyKey - The idempotency key for the step
     * @param error - The error that caused the failure
     * @param handler - The handler function to execute the step
     * @param transaction - The current transaction
     * @param response - The response of the step
     */
    TransactionOrchestrator.prototype.registerStepFailure = function (responseIdempotencyKey, error, handler, transaction, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, curTransaction, step;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.getTransactionAndStepFromIdempotencyKey(responseIdempotencyKey, handler, transaction, response)];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 2]), curTransaction = _a[0], step = _a[1];
                        if (!(step.getStates().status === _1.TransactionStepStatus.WAITING)) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.setStepFailure(curTransaction, step, error, 0)];
                    case 2:
                        _b.sent();
                        this.emit("resume", curTransaction);
                        return [4 /*yield*/, this.executeNext(curTransaction)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 5];
                    case 4: throw new Error("Cannot set step failure when status is ".concat(step.getStates().status));
                    case 5: return [2 /*return*/, curTransaction];
                }
            });
        });
    };
    TransactionOrchestrator.SEPARATOR = ":";
    return TransactionOrchestrator;
}(events_1.EventEmitter));
exports.TransactionOrchestrator = TransactionOrchestrator;
//# sourceMappingURL=transaction-orchestrator.js.map