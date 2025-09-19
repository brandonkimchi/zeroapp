"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Header;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var lucide_react_1 = require("lucide-react");
var zerologo_png_1 = __importDefault(require("../assets/images/zerologo.png"));
function Header() {
    var _a = (0, react_1.useState)(false), isScrolled = _a[0], setIsScrolled = _a[1];
    var _b = (0, react_1.useState)(false), isMenuOpen = _b[0], setIsMenuOpen = _b[1];
    (0, react_1.useEffect)(function () {
        var handleScroll = function () {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return function () { return window.removeEventListener("scroll", handleScroll); };
    }, []);
    return ((0, jsx_runtime_1.jsxs)("header", { className: "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-gray-200 ".concat(isScrolled ? "bg-white shadow py-3" : "bg-white py-5"), children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center px-12 lg:px-20", children: [(0, jsx_runtime_1.jsx)("a", { href: "#home", className: "flex items-center space-x-2", children: (0, jsx_runtime_1.jsx)("img", { src: zerologo_png_1.default, alt: "ZeroApp Doors Logo", className: "h-14 w-auto transition-transform duration-300 hover:scale-105" }) }), (0, jsx_runtime_1.jsxs)("nav", { className: "hidden md:flex space-x-10 text-lg font-medium text-gray-900", children: [(0, jsx_runtime_1.jsxs)("a", { href: "#home", className: "relative group", children: [(0, jsx_runtime_1.jsx)("span", { className: "hover:text-green-600 transition", children: "Home" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" })] }), (0, jsx_runtime_1.jsxs)("a", { href: "#projects", className: "relative group", children: [(0, jsx_runtime_1.jsx)("span", { className: "hover:text-green-600 transition", children: "Projects" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" })] }), (0, jsx_runtime_1.jsxs)("a", { href: "#contact", className: "relative group", children: [(0, jsx_runtime_1.jsx)("span", { className: "hover:text-green-600 transition", children: "Contact Us" }), (0, jsx_runtime_1.jsx)("span", { className: "absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full" })] })] }), (0, jsx_runtime_1.jsx)("button", { className: "md:hidden text-gray-900", onClick: function () { return setIsMenuOpen(!isMenuOpen); }, children: isMenuOpen ? (0, jsx_runtime_1.jsx)(lucide_react_1.X, { size: 28 }) : (0, jsx_runtime_1.jsx)(lucide_react_1.Menu, { size: 28 }) })] }), isMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "md:hidden bg-white shadow-lg", children: (0, jsx_runtime_1.jsxs)("nav", { className: "flex flex-col space-y-4 px-6 py-4 text-lg font-medium text-gray-900", children: [(0, jsx_runtime_1.jsx)("a", { href: "#home", onClick: function () { return setIsMenuOpen(false); }, children: "Home" }), (0, jsx_runtime_1.jsx)("a", { href: "#projects", onClick: function () { return setIsMenuOpen(false); }, children: "Projects" }), (0, jsx_runtime_1.jsx)("a", { href: "#contact", onClick: function () { return setIsMenuOpen(false); }, children: "Contact Us" })] }) }))] }));
}
