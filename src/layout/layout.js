import * as React from 'react';

export const Layout = ({children}) => {
    return (
        <div>
            <main>
                {children}
            </main>
        </div>
    );
}
