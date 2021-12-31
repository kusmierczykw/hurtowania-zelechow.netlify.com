import * as React from 'react';
import {CommentsCarouselItem} from './comments-carousel-item.fragment';
import './comments-carousel.fragment.scss';

export const CommentsCarousel = ({items}) => {
    const carouselName = 'comments-carousel';

    const indicators = (
        <div className='carousel-indicators'>
            {
                items.map((_, index) => {
                    const classArray = [index === 0 && 'active'].filter(Boolean);
                    const classString = classArray.join(' ');

                    return (
                        <button
                            type='button'
                            data-bs-target={`#${carouselName}`}
                            data-bs-slide-to={index}
                            className={classString}
                            key={index}
                            aria-current='true'
                            aria-label={`Slide ${index + 1}`}
                        />
                    )
                })
            }
        </div>
    );
    const controls = (
        <>
            <button
                className='carousel-control-prev'
                type='button'
                data-bs-target={`#${carouselName}`}
                data-bs-slide='prev'>
                <span className='carousel-control-prev-icon' aria-hidden='true'/>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                className='carousel-control-next'
                type='button'
                data-bs-target={`#${carouselName}`}
                data-bs-slide='next'>
                <span className='carousel-control-next-icon' aria-hidden='true'/>
                <span className='visually-hidden'>Next</span>
            </button>
        </>
    );

    return (
        <>
            <div
                id={carouselName}
                className='carousel slide'
                data-bs-ride='carousel'>
                <div className='carousel-inner'>
                    {
                        items.map((comments, index) => (
                            <CommentsCarouselItem
                                key={index}
                                interval={10000}
                                comments={comments}
                                active={index === 0}
                            />
                        ))
                    }
                </div>
                {indicators}
                {controls}
            </div>
        </>
    );
}
