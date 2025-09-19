"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Footer;
var jsx_runtime_1 = require("react/jsx-runtime");
var zerologo_png_1 = __importDefault(require("../assets/images/zerologo.png"));
function Footer() {
    return ((0, jsx_runtime_1.jsx)("footer", { className: "bg-gray-900 text-white py-6", children: (0, jsx_runtime_1.jsxs)("div", { className: "container mx-auto px-6 lg:px-20 flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("img", { src: zerologo_png_1.default, alt: "ZeroApp Doors", className: "h-10" }), (0, jsx_runtime_1.jsxs)("p", { className: "text-sm text-white", children: ["\u00A9 ", new Date().getFullYear(), " Zero. All rights reserved."] })] }) }));
}
