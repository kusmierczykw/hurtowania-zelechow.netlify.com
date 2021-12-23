import * as React from 'react';
import {ProductAccordionItem} from './product-accordion-item.fragment';

export const ProductAccordion = ({accordions}) => {
    const accordionName = 'products-accordion';

    return (
        <div
            className='accordion accordion-flush'
            id={accordionName}>
            {
                accordions.map(({id, title, content}) => (
                    <ProductAccordionItem
                        id={id}
                        key={id}
                        title={title}
                        accordionName={accordionName}
                        content={content}
                    />
                ))
            }
        </div>
    );
}
