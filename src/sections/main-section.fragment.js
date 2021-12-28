import {ButtonLink} from '../fragments/button-link';
import Charwoman from '../images/charwoman.png';
import * as React from 'react';

export const MainSection = () => {
    return (
        <div className={'row align-items-center'}>
            <div className={'col-lg-5 py-5'}>
                <div className={'display-6 text-uppercase fw-lighter'}>
                    Sprzedaż hurtowa
                </div>

                <div className={'display-6 text-uppercase fw-bold'}>
                    Art. przemysłowych i chemii gospodarczej
                </div>

                <p className={'mt-3 mb-5'}>
                    Artykuły biurowe, kosmetyki, środki higieny, środki czystości, akcesoria i sprzęt do
                    sprzątania
                </p>

                <ButtonLink
                    href={'#oferta'}
                    label={'Dowiedz się więcej'}/>
            </div>

            <div className={'col-lg-7 px-5'}>
                <img
                    src={Charwoman}
                    className={'img-fluid'}
                    alt={'Sprzątaczka'}/>
            </div>
        </div>
    )
}
