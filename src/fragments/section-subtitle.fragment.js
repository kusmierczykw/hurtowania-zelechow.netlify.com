import * as React from 'react';
import './section-subtitle.fragment.scss';

export const SectionSubtitle = ({subtitle}) => {
    return (
        <div
            className={'section-subtitle display-6 fw-bold text-uppercase'}>
            {subtitle}
        </div>
    );
}
