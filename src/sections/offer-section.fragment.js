import * as React from 'react';
import {SectionTitle} from '../fragments/section-title.fragment';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';
import {ProductAccordion} from '../fragments/product-accordion.fragment';

export const OfferSection = ({products}) => {
    return (
        <>
            <div className={'text-center py-5'}>
                <SectionTitle title={'Oferta'}/>
                <SectionSubtitle subtitle={'Nasz asortyment'}/>
            </div>

            <div className={'pb-5'}>
                <ProductAccordion accordions={products}/>
            </div>
        </>
    );
}
