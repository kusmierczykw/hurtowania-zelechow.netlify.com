import * as React from 'react';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';
import {ButtonLink} from '../fragments/button-link';
import Supplies from '../images/supplies.png';

export const ContactSection = () => {
    return (
        <div className={'row align-items-center'}>
            <div className={'col-lg-4 order-last order-lg-first'}>
                <img
                    src={Supplies}
                    className={'img-fluid'}
                    alt={'Środki'}/>
            </div>

            <div className={'col-lg-7 offset-lg-1 order-first order-lg-last py-5'}>
                <span className={'text-uppercase'}>Masz pytanie? Chcesz złożyć zamówienie?</span>
                <SectionSubtitle subtitle={'Skontaktuj się z nami!'}/>

                <div className={'mt-5'}>
                    <ButtonLink label={'Przejdź do kontaktu'} href={''}/>
                </div>
            </div>
        </div>
    );
}
