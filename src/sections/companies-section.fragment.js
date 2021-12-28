import * as React from 'react';
import {CompanyLogo} from '../fragments/company-logo.fragment';

export const CompaniesSection = ({companies}) => {
    return (
        <div className={'row align-items-center py-3'}>
            <div className={'fw-bold col-lg-auto py-3'}>
                Sprzedajemy <br/> artykuły takich firm:
            </div>

            <div className={'col-lg'}>
                <div className={'row row-cols-6 align-items-center'}>
                    {
                        companies.map(({src, alt, key}) => (<CompanyLogo src={src} key={key} alt={alt}/>))
                    }
                </div>
            </div>
        </div>
    );
}
