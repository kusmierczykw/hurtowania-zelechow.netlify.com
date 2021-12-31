import * as React from 'react';
import './button-link.scss';
import {AnchorLink} from 'gatsby-plugin-anchor-links';

export const ButtonLink = ({href, label}) => {
    return (
        <AnchorLink className={'button-link'} to={href}>{label}</AnchorLink>
    );
}
