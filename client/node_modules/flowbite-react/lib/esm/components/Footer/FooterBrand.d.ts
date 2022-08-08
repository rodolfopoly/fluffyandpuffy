import type { ComponentProps, FC, PropsWithChildren } from 'react';
export interface FooterBrandProps extends Omit<PropsWithChildren<ComponentProps<'div'>>, 'className'> {
    href?: string;
    src: string;
    alt?: string;
    name?: string;
}
export declare const FooterBrand: FC<FooterBrandProps>;
