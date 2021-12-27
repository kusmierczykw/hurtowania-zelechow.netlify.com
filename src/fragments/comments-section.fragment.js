import * as React from 'react';
import {CommentsCarousel} from './comments-carousel.fragment';
import {SectionTitle} from './section-title.fragment';
import {SectionSubtitle} from './section-subtitle.fragment';

export const CommentsSection = ({comments}) => {
    return (
        <>
            <div className={'text-center py-5'}>
                <SectionTitle title={'Opinie klientów'}/>
                <SectionSubtitle subtitle={'Co mówią o nas klienci?'}/>
            </div>

            <CommentsCarousel items={comments}/>
        </>
    );
}
