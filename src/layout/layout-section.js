import * as React from 'react';
import './layout-section.scss';

export const LayoutSection = ({children, bgColor, minHeight}) => {
    const stylesObject = {
        backgroundColor: bgColor,
        minHeight: minHeight,
    };

    return (
        <div style={stylesObject}>
            {children}
        </div>
    );
}
