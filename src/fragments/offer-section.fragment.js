import {SectionTitle} from './section-title.fragment';
import {SectionSubtitle} from './section-subtitle.fragment';
import {ProductAccordion} from './product-accordion.fragment';
import * as React from 'react';

export const OfferSection = ({products}) => {
    return (
        <>
            <div className={'text-center py-5'}>
                <SectionTitle title={'Oferta'}/>
                <SectionSubtitle subtitle={'Poznaj naszą ofertę'}/>
            </div>

            <div className={'pb-5'}>
                <ProductAccordion accordions={products}/>
            </div>
        </>
    );
}
