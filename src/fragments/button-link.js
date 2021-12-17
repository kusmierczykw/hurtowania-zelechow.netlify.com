import * as React from 'react';
import './button-link.scss';

export const ButtonLink = ({href, label}) => {
    return (
        <a className={'button-link'} href={href}>{label}</a>
    );
}
