import * as React from 'react';
import {CommentsCarousel} from '../fragments/comments-carousel.fragment';
import {SectionTitle} from '../fragments/section-title.fragment';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';

export const CommentsSection = ({comments}) => {
    return (
        <>
            <div className={'text-center py-5'}>
                <SectionTitle title={'Opinie klientów'}/>
                <SectionSubtitle subtitle={'Co mówią o nas klienci?'}/>
            </div>

            <div className={'pb-5'}>
                <CommentsCarousel items={comments}/>
            </div>
        </>
    );
}
