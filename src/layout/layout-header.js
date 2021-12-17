import * as React from 'react';
import {NavbarBrand} from '../fragments/navbar-brand.fragment';
import {NavbarMenu} from '../fragments/navbar-menu.fragment';
import {NavbarAddress} from '../fragments/navbar-address.fragment';

import './layout-header.scss';


export const LayoutHeader = ({menu}) => (
    <header className={'header'}>
        <div className={'container'}>
            <div className={'row align-items-center'}>
                <div className={'col text-start'}>
                    <NavbarBrand/>
                </div>

                <div className={'col-auto'}>
                    <nav className='navbar navbar-expand'>
                        <NavbarMenu menu={menu}/>
                    </nav>
                </div>

                <div className={'col text-end'}>
                    <NavbarAddress/>
                </div>
            </div>
        </div>
    </header>
);
