import * as React from 'react';
import {SectionSubtitle} from './section-subtitle.fragment';
import {ButtonLink} from './button-link';
import Supplies from '../images/supplies.png';

export const ContactSection = () => {
    return (
        <div className={'row align-items-center'}>
            <div className={'col-lg-5'}>
                <img
                    src={Supplies}
                    className={'img-fluid'}
                    alt={'Środki'}/>
            </div>

            <div className={'col-lg-7'}>
                <span className={'text-uppercase'}>Masz pytanie? Chcesz złożyć zamówienie?</span>
                <SectionSubtitle subtitle={'Skontaktuj się z nami!'}/>

                <div className={'mt-5'}>
                    <ButtonLink label={'Przejdź do kontaktu'} href={''}/>
                </div>
            </div>
        </div>
    );
}
