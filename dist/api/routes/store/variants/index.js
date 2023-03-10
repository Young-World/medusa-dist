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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultStoreVariantRelations = void 0;
var express_1 = require("express");
var middlewares_1 = __importDefault(require("../../../middlewares"));
var feature_flags_1 = require("../../../../loaders/feature-flags");
var publishable_api_keys_1 = __importDefault(require("../../../../loaders/feature-flags/publishable-api-keys"));
var extend_request_params_1 = require("../../../middlewares/publishable-api-key/extend-request-params");
var validate_sales_channel_param_1 = require("../../../middlewares/publishable-api-key/validate-sales-channel-param");
var validate_variant_sales_channel_association_1 = require("../../../middlewares/publishable-api-key/validate-variant-sales-channel-association");
var route = (0, express_1.Router)();
exports.default = (function (app) {
    app.use("/variants", route);
    if (feature_flags_1.featureFlagRouter.isFeatureEnabled(publishable_api_keys_1.default.key)) {
        route.use("/", extend_request_params_1.extendRequestParams, validate_sales_channel_param_1.validateSalesChannelParam);
        route.use("/:id", validate_variant_sales_channel_association_1.validateProductVariantSalesChannelAssociation);
    }
    route.get("/", middlewares_1.default.wrap(require("./list-variants").default));
    route.get("/:id", middlewares_1.default.wrap(require("./get-variant").default));
    return app;
});
exports.defaultStoreVariantRelations = ["prices", "options"];
__exportStar(require("./list-variants"), exports);
__exportStar(require("./get-variant"), exports);
//# sourceMappingURL=index.js.map