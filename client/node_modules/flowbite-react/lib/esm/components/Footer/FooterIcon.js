import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '../Flowbite/ThemeContext';
export const FooterIcon = ({ href, ariaLabel, icon: Icon }) => {
    const theme = useTheme().theme.footer.icon;
    return (_jsx("div", { "data-testid": "footer-icon", children: href ? (_jsx("a", { href: href, "aria-label": ariaLabel, className: theme.base, children: _jsx(Icon, { className: theme.size }) })) : (_jsx(Icon, { className: theme.size })) }));
};
