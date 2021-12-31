import * as React from 'react';
import './product-accordion-item.fragment.scss';

export const ProductAccordionItem = ({id, title, content, accordionName}) => {
    const accordionButtonClassArray = ['accordion-button', 'collapsed', !content && 'no-content'].filter(Boolean);
    const accordionButtonClass = accordionButtonClassArray.join(' ');
    const accordionBody = content && (
        <div
            id={`collapse-accordion-item-${id}`}
            className='accordion-collapse collapse'
            aria-labelledby={`accordion-item-${id}`}
            data-bs-parent={`#${accordionName}`}>
            <div className='accordion-body'>
                <div className='row'>
                    {
                        content.map(({id: contentId, items}) => (
                            <div key={contentId} className={'col-lg py-3'}>
                                <ul className={'mb-0 accordion-collapse__list'}>
                                    {
                                        items?.map(({title, id: itemId}) => (
                                            <li key={itemId}
                                                className={'accordion-collapse__list-item'}>
                                                {title}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
    const additionalLabel = content && (
        <div className={'me-3 fw-bold'}>Poznaj produkty</div>
    )

    return (
        <div className='accordion-item mb-3'>
            <h2 className='accordion-header'
                id={`accordion-item-${id}`}>
                <button
                    className={accordionButtonClass}
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse-accordion-item-${id}`}
                    aria-expanded='false'
                    aria-controls={`collapse-accordion-item-${id}`}>
                    <div className={'d-flex flex-grow-1 justify-content-between'}>
                        <div className={'fw-bold text-uppercase'}>{title}</div>
                        {additionalLabel}
                    </div>
                </button>
            </h2>
            {accordionBody}
        </div>
    );
}
