"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productExportSchemaDescriptors = void 0;
exports.productExportSchemaDescriptors = new Map([
    [
        "Product id",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Handle",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.handle) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Title",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.title) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Subtitle",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.subtitle) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Description",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.description) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Status",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.status) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Thumbnail",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.thumbnail) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Weight",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.weight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Length",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.length) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Width",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.width) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Height",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.height) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product HS Code",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.hs_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Origin Country",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.origin_country) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product MID Code",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.mid_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Material",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.material) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Collection Title",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.collection) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Collection Handle",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.collection) === null || _a === void 0 ? void 0 : _a.handle) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Type",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.type) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Tags",
        {
            accessor: function (product) { var _a; return ((_a = product.tags.map(function (t) { return t.value; })) !== null && _a !== void 0 ? _a : []).join(","); },
            entityName: "product",
        },
    ],
    [
        "Product Discountable",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.discountable) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product External ID",
        {
            accessor: function (product) { var _a; return (_a = product === null || product === void 0 ? void 0 : product.external_id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Profile Name",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.profile) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Product Profile Type",
        {
            accessor: function (product) { var _a, _b; return (_b = (_a = product === null || product === void 0 ? void 0 : product.profile) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ""; },
            entityName: "product",
        },
    ],
    [
        "Variant id",
        {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.id) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Title",
        {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.title) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant SKU",
        {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.sku) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Barcode",
        {
            accessor: function (variant) { var _a; return (_a = variant === null || variant === void 0 ? void 0 : variant.barcode) !== null && _a !== void 0 ? _a : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Inventory Quantity",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.inventory_quantity) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Allow backorder",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.allow_backorder) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Manage inventory",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.manage_inventory) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Weight",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.weight) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Length",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.length) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Width",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.width) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Height",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.height) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant HS Code",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.hs_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Origin Country",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.origin_country) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant MID Code",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.mid_code) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
    [
        "Variant Material",
        {
            accessor: function (variant) { var _a, _b; return (_b = (_a = variant === null || variant === void 0 ? void 0 : variant.material) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : ""; },
            entityName: "variant",
        },
    ],
]);
//# sourceMappingURL=index.js.map