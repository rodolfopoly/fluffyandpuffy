import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterIconProps extends Omit<PropsWithChildren<ComponentProps<'a'>>, 'className'> {
    href?: string;
    icon: FC<ComponentProps<'svg'>>;
    ariaLabel?: string;
}
export declare const FooterIcon: FC<FooterIconProps>;
