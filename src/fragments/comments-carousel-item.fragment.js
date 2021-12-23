import * as React from 'react';
import {Icon} from '../core/icons/icon';
import {QUOTE} from '../core/icons/consts/icon.const';
import './comments-carousel-item.fragment.scss';

export const CommentsCarouselItem = ({comments, interval = 0, active = false}) => {
    const classArray = ['carousel-item', active && 'active'].filter(Boolean);
    const classString = classArray.join(' ');

    return (
        <div
            className={classString}
            data-bs-interval={interval}>
            <div className='row justify-content-center'>
                {
                    comments.map(({id, content}) => (
                        <div
                            className='col-lg-4 px-5'
                            key={id}>
                            <div className='text-center'>
                                <Icon size={'2rem'} name={QUOTE}/>
                            </div>

                            <p className='text-center'>
                                {content}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
