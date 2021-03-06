import * as React from 'react';
import './layout-section.scss';

export const LayoutSection = ({children, backgroundColor, minHeight}) => {
    const stylesObject = {
        backgroundColor: backgroundColor,
        minHeight: minHeight,
    };

    return (
        <div
            className='layout-section'
            style={stylesObject}>
            {children}
        </div>
    );
}
