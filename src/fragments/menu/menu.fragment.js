import * as React from "react";
import './menu.fragment.scss';

export const Menu = ({menu}) => {
    return (
        <ul className={'menu'}>
            {
                menu.map(({label, link, key}) => (
                    <li key={key} className={'menu__item'}>
                        <a href={link} className={'menu__link'}>{label}</a>
                    </li>
                ))
            }
        </ul>

    );
}
