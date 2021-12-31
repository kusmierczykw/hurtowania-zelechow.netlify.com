import * as React from 'react';
import {AnchorLink} from 'gatsby-plugin-anchor-links';
import './navbar-menu.fragment.scss';

export const NavbarMenu = ({menu}) => {
    return (
        <ul className='navbar-nav'>
            {
                menu.map(({label, link, key}) => (
                    <li key={key} className={'nav-item'}>
                        <AnchorLink to={link} title={label} className={'nav-link'}>{label}</AnchorLink>
                    </li>
                ))
            }
        </ul>
    )
}
