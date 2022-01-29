import {ButtonLink} from '../fragments/button-link';
import ProduktyNaSprzedaz from '../images/produkty_na_sprzedaz.png';
import * as React from 'react';

export const MainSection = () => {
    return (
        <div className={'row align-items-center'}>
            <div className={'col-lg-5 py-5'}>
                <div className={'display-6 text-uppercase fw-lighter'}>
                    Sprzedaż hurtowa i detaliczna
                </div>

                <div className={'display-6 text-uppercase fw-bold'}>
                    Art. przemysłowych i chemii gospodarczej
                </div>

                <p className={'mt-3 mb-5'}>
                    Artykuły szkolne, biurowe, kuchenne, do grilla, lecznicze, ogrodnicze, środki czyszczące, akcesoria
                    do sprzątania, kosmetyki i środki higieny oraz znicze
                </p>

                <ButtonLink
                    href={'#oferta'}
                    label={'Dowiedz się więcej'}/>
            </div>

            <div className={'col-lg-7 px-5'}>
                <img
                    src={ProduktyNaSprzedaz}
                    className={'img-fluid'}
                    alt={'Produkty na sprzedaż'}/>
            </div>
        </div>
    )
}
