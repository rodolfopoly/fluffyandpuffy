"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FooterBrand = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const ThemeContext_1 = require("../Flowbite/ThemeContext");
const FooterBrand = ({ children, href, src, alt, name }) => {
    const theme = (0, ThemeContext_1.useTheme)().theme.footer.brand;
    return ((0, jsx_runtime_1.jsx)("div", { "data-testid": "footer-brand", children: href ? ((0, jsx_runtime_1.jsxs)("a", { href: href, className: theme.base, children: [(0, jsx_runtime_1.jsx)("img", { src: src, className: theme.img, alt: alt }), (0, jsx_runtime_1.jsx)("span", { className: theme.span, children: name }), children] })) : ((0, jsx_runtime_1.jsx)("img", { src: src, className: theme.img, alt: alt })) }));
};
exports.FooterBrand = FooterBrand;
