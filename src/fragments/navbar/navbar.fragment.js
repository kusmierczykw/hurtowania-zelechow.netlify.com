import * as React from 'react';
import {NavbarMenu} from "../navbar-menu/navbar-menu.fragment";
import {NavbarBrand} from "../navbar-brand/navbar-brand.fragment";

const menu = [
    {
        label: 'Start',
        link: '#start',
        key: '429d4124-69ad-4472-a7e3-adf6e27b0487',
    },
    {
        label: 'O nas',
        link: '#o-nas',
        key: '2d9a0cf2-6c70-4fcd-a12b-17db232936b0',
    },
    {
        label: 'Oferta',
        link: '#oferta',
        key: 'c10d8206-3ac4-4855-bcc1-63e50c91e1a1',
    },
    {
        label: 'Kontakt',
        link: '#kontak',
        key: '742d882d-f271-485a-8d14-a2ca0f696b4e',
    }
];

export const Navbar = () => (
    <header>
        <div className={'container'}>
            <div className={'row align-items-center'}>
                <div className={'col text-start'}>
                    <NavbarBrand/>
                </div>

                <div className={'col-auto'}>
                    <nav className="navbar navbar-expand">
                        <NavbarMenu menu={menu}/>
                    </nav>
                </div>

                <div className={'col text-end'}/>
            </div>
        </div>
    </header>
);
