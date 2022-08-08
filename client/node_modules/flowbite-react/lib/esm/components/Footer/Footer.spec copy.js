import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cleanup, render } from '@testing-library/react';
import { BsFacebook } from 'react-icons/bs';
import { describe, expect, it } from 'vitest';
import { Footer } from '.';
describe.concurrent('Footer Component should be able to render a', () => {
    afterEach(cleanup);
    it('footer', () => {
        const { getByTestId } = render(_jsx(FooterTest, {}));
        expect(getByTestId('footer-element')).toBeTruthy();
    });
    it('footer with logo', () => {
        const { getByTestId } = render(_jsx(FooterTest, {}));
        expect(getByTestId('footer-element').children[0].children[0].src).toEqual('https://flowbite.com/docs/images/logo.svg');
    });
    it('footer with social media icons ', () => {
        const { getByTestId } = render(_jsx(FooterTest, {}));
        expect(getByTestId('footer-element').children[3].children[0].tagName).toEqual('svg');
    });
});
const FooterTest = () => (_jsxs(Footer, { children: [_jsx(Footer.Brand, { href: "https://flowbite.com", src: "https://flowbite.com/docs/images/logo.svg", alt: "Flowbite Logo", name: "Flowbite" }), _jsxs(Footer.LinkGroup, { children: [_jsx(Footer.Link, { href: "#", children: "About" }), _jsx(Footer.Link, { href: "#", children: "Services" })] }), _jsx(Footer.Copyright, { href: "#", by: "Flowbite\u2122", year: 2022 }), _jsx(Footer.Icon, { href: "#", icon: BsFacebook })] }));
