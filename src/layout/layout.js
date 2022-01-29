import * as React from 'react';
import './layout.scss';

export const Layout = ({children}) => {
    return (
        <div className={'layout'}>
            <main>
                {children}
            </main>
        </div>
    );
}
