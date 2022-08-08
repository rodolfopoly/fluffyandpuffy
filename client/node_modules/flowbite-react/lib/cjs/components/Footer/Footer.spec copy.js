"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@testing-library/react");
const bs_1 = require("react-icons/bs");
const vitest_1 = require("vitest");
const _1 = require(".");
vitest_1.describe.concurrent('Footer Component should be able to render a', () => {
    afterEach(react_1.cleanup);
    (0, vitest_1.it)('footer', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(FooterTest, {}));
        (0, vitest_1.expect)(getByTestId('footer-element')).toBeTruthy();
    });
    (0, vitest_1.it)('footer with logo', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(FooterTest, {}));
        (0, vitest_1.expect)(getByTestId('footer-element').children[0].children[0].src).toEqual('https://flowbite.com/docs/images/logo.svg');
    });
    (0, vitest_1.it)('footer with social media icons ', () => {
        const { getByTestId } = (0, react_1.render)((0, jsx_runtime_1.jsx)(FooterTest, {}));
        (0, vitest_1.expect)(getByTestId('footer-element').children[3].children[0].tagName).toEqual('svg');
    });
});
const FooterTest = () => ((0, jsx_runtime_1.jsxs)(_1.Footer, { children: [(0, jsx_runtime_1.jsx)(_1.Footer.Brand, { href: "https://flowbite.com", src: "https://flowbite.com/docs/images/logo.svg", alt: "Flowbite Logo", name: "Flowbite" }), (0, jsx_runtime_1.jsxs)(_1.Footer.LinkGroup, { children: [(0, jsx_runtime_1.jsx)(_1.Footer.Link, { href: "#", children: "About" }), (0, jsx_runtime_1.jsx)(_1.Footer.Link, { href: "#", children: "Services" })] }), (0, jsx_runtime_1.jsx)(_1.Footer.Copyright, { href: "#", by: "Flowbite\u2122", year: 2022 }), (0, jsx_runtime_1.jsx)(_1.Footer.Icon, { href: "#", icon: bs_1.BsFacebook })] }));
