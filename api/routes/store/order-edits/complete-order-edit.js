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
var order_edit_1 = require("../../../../types/order-edit");
var models_1 = require("../../../../models");
var medusa_core_utils_1 = require("medusa-core-utils");
/**
 * @oas [post] /order-edits/{id}/complete
 * operationId: "PostOrderEditsOrderEditComplete"
 * summary: "Completes an OrderEdit"
 * description: "Completes an OrderEdit."
 * parameters:
 *   - (path) id=* {string} The ID of the Order Edit.
 * x-codeSamples:
 *   - lang: JavaScript
 *     label: JS Client
 *     source: |
 *       import Medusa from "@medusajs/medusa-js"
 *       const medusa = new Medusa({ baseUrl: MEDUSA_BACKEND_URL, maxRetries: 3 })
 *       medusa.orderEdit.complete(orderEditId)
 *         .then(({ order_edit }) => {
 *           console.log(order_edit.id)
 *         })
 *   - lang: Shell
 *     label: cURL
 *     source: |
 *       curl --location --request POST 'https://medusa-url.com/store/order-edits/{id}/complete'
 * tags:
 *   - OrderEdit
 * responses:
 *   200:
 *     description: OK
 *     content:
 *       application/json:
 *         schema:
 *           properties:
 *             order_edit:
 *               $ref: "#/components/schemas/order_edit"
 *   "400":
 *     $ref: "#/components/responses/400_error"
 *   "401":
 *     $ref: "#/components/responses/unauthorized"
 *   "404":
 *     $ref: "#/components/responses/not_found_error"
 *   "500":
 *     $ref: "#/components/responses/500_error"
 */
exports.default = (function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id, orderEditService, manager, userId, orderEdit;
    var _a, _b, _c, _d, _e;
    return __generator(this, function (_f) {
        switch (_f.label) {
            case 0:
                id = req.params.id;
                orderEditService = req.scope.resolve("orderEditService");
                manager = req.scope.resolve("manager");
                userId = (_d = (_b = (_a = req.user) === null || _a === void 0 ? void 0 : _a.customer_id) !== null && _b !== void 0 ? _b : (_c = req.user) === null || _c === void 0 ? void 0 : _c.id) !== null && _d !== void 0 ? _d : (_e = req.user) === null || _e === void 0 ? void 0 : _e.userId;
                return [4 /*yield*/, manager.transaction(function (manager) { return __awaiter(void 0, void 0, void 0, function () {
                        var orderEditServiceTx, orderEdit;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    orderEditServiceTx = orderEditService.withTransaction(manager);
                                    return [4 /*yield*/, orderEditServiceTx.retrieve(id)];
                                case 1:
                                    orderEdit = _a.sent();
                                    if (orderEdit.status === models_1.OrderEditStatus.CONFIRMED) {
                                        return [2 /*return*/, orderEdit];
                                    }
                                    if (orderEdit.status !== models_1.OrderEditStatus.REQUESTED) {
                                        throw new medusa_core_utils_1.MedusaError(medusa_core_utils_1.MedusaError.Types.NOT_ALLOWED, "Cannot complete an order edit with status ".concat(orderEdit.status));
                                    }
                                    return [4 /*yield*/, orderEditServiceTx.confirm(id, {
                                            loggedInUserId: userId,
                                        })];
                                case 2: 
                                // TODO once payment collection is done
                                /*const paymentCollection = await this.paymentCollectionService_.withTransaction(manager).retrieve(orderEdit.payment_collection_id)
                                if (!paymentCollection.authorized_at) {
                                  throw new MedusaError(
                                    MedusaError.Types.NOT_ALLOWED,
                                    "Unable to complete an order edit if the payment is not authorized"
                                  )
                                }*/
                                return [2 /*return*/, _a.sent()];
                            }
                        });
                    }); })];
            case 1:
                _f.sent();
                return [4 /*yield*/, orderEditService.retrieve(id, {
                        select: order_edit_1.defaultStoreOrderEditFields,
                        relations: order_edit_1.defaultStoreOrderEditRelations,
                    })];
            case 2:
                orderEdit = _f.sent();
                return [4 /*yield*/, orderEditService.decorateTotals(orderEdit)];
            case 3:
                orderEdit = _f.sent();
                res.status(200).json({ order_edit: orderEdit });
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=complete-order-edit.js.map