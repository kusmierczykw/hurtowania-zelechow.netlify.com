import * as React from 'react';

export const ProductAccordionItem = ({id, title, children}) => {
    return (
        <div className='accordion-item mb-3'>
            <h2 className='accordion-header'
                id={`accordion-item-${id}`}>
                <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target={`#collapse-accordion-item-${id}`}
                    aria-expanded='false'
                    aria-controls={`collapse-accordion-item-${id}`}>
                    <div className={'d-flex flex-grow-1 justify-content-between'}>
                        <div className={'fw-bold text-uppercase'}>{title}</div>
                        <div className={'me-3 fw-bold'}>Poznaj produkty</div>
                    </div>
                </button>
            </h2>
            <div
                id={`collapse-accordion-item-${id}`}
                className='accordion-collapse collapse'
                aria-labelledby={`accordion-item-${id}`}
                data-bs-parent={`#accordion-item-${id}`}>
                <div className='accordion-body'>
                    {children}
                </div>
            </div>
        </div>
    );
}
