import * as React from 'react';
import {ButtonLink} from "../fragments/button-link";

const NotFoundPage = () => {
    return (
        <main className={'container'}>
            <div className={'row min-vh-100 align-items-center'}>
                <div className={'col text-center'}>
                    <h1 className={'display-1 fw-lighter'}>404</h1>
                    <h2 className={'h5 mt-3'}>Strona nie została znaleziona</h2>
                    <p className={'mt-3 mb-5'}>Strona której szukasz nie istnieje lub wystąpił inny błąd.</p>

                    <ButtonLink
                        href={'/'}
                        label={'Wróć do strony głównej'}/>
                </div>
            </div>
        </main>
    )
}

export default NotFoundPage;
