import * as React from 'react';
import './company-logo.fragment.scss';

export const CompanyLogo = ({src, alt = 'Logo'}) => {
    return (
        <>
            <div className={'company-logo'}>
                <img
                    className={'company-logo__image'}
                    src={src}
                    alt={alt}/>
            </div>
        </>
    );
}
