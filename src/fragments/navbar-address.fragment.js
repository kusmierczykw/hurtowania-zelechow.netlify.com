import * as React from 'react';
import {Icon} from '../core/icons/icon';
import {GEO_PIN_LOCATION} from '../core/icons/consts/icon.const';

import './navbar-address.fragment.scss';

export const NavbarAddress = () => {
    return (
        <>
            <div className={'navbar-address'}>
                <div className={'navbar-address__icon'}>
                    <Icon name={GEO_PIN_LOCATION}/>
                </div>
                <div className={'navbar-address__location'}>
                    ul. Długa 105, <br/> 08-430 Żelechów
                </div>
            </div>
        </>
    );
}
