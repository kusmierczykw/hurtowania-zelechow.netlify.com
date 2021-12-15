import * as React from 'react';
import {Menu} from "../menu/menu.fragment";

const menu = [
    {
        label: 'Strona główna',
        link: '#glowna',
        key: '429d4124-69ad-4472-a7e3-adf6e27b0487',
    },
    {
        label: 'O nas',
        link: '#o-nas',
        key: '2d9a0cf2-6c70-4fcd-a12b-17db232936b0',
    },
    {
        label: 'Kontakt',
        link: '#kontak',
        key: '742d882d-f271-485a-8d14-a2ca0f696b4e',
    }
];

export const Navbar = () => (
    <>
        <nav className={'navbar'}>
            <Menu menu={menu}/>
        </nav>
    </>
);
