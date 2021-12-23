import * as React from 'react';

export const Icon = ({name, size = '1rem'}) => {
    const classArray = ['icon', name];
    const classString = classArray.join(' ');

    return (
        <i style={{fontSize: size}} className={classString}/>
    )
}
