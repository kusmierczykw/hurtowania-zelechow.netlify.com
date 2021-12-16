import * as React from "react";
import './navbar-menu.fragment.scss';

export const NavbarMenu = ({menu}) => {
    return (
        <ul className="navbar-nav">
            {
                menu.map(({label, link, key}) => (
                    <li key={key} className={'nav-item'}>
                        <a href={link} className={'nav-link'}>{label}</a>
                    </li>
                ))
            }
        </ul>
    )
}
