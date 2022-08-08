import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterBrand = ({ children, href, src, alt, name }) => {
    const theme = useTheme().theme.footer.brand;
    return (_jsx("div", { "data-testid": "footer-brand", children: href ? (_jsxs("a", { href: href, className: theme.base, children: [_jsx("img", { src: src, className: theme.img, alt: alt }), _jsx("span", { className: theme.span, children: name }), children] })) : (_jsx("img", { src: src, className: theme.img, alt: alt })) }));
};
