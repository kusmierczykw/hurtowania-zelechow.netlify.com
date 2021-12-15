import * as React from 'react';

const menu = [
    {
        label: 'Strona główna',
        link: '#glowna',
    },
    {
        label: 'O nas',
        link: '#o-nas',
    },
    {
        label: 'Kontakt',
        link: '#kontak',
    }
];

export const Navbar = () => (
    <>
        <nav className={'navbar'}>
            {menu.map(({label, link}) => (<a href={link}>{label}</a>))}
        </nav>
    </>
);
