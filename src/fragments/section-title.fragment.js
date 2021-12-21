import * as React from 'react';
import './section-title.fragment.scss';

export const SectionTitle = ({title, color = '#F2724A'}) => {
    const styleObject = {
        color,
    };
    return (
        <div
            className={'section-title'}
            style={styleObject}>
            {title}
        </div>
    );
}
