import * as React from 'react';
import {SectionTitle} from '../fragments/section-title.fragment';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';
import Biuro from '../images/biuro.png';
import Hurtownia from '../images/hurtownia.png';

export const AboutCompanySection = () => {
    return (
        <div className={'row align-items-center'}>
            <div className={'col-lg-5 py-5'}>
                <SectionTitle title={'O firmie'}/>
                <SectionSubtitle subtitle={'30 lat doświadczenia'}/>

                <p className={'fw-bold mt-3'}>
                    Nasza firma działa w branży chemiczno-papierniczej dokładnie od 1 grudnia 1990 roku na
                    terenie województwa mazowieckiego i lubelskiego.
                </p>

                <p className={'text-justify'}>
                    W ofercie mamy artykuły szkolne, papiernicze, biurowe, kosmetyki i środki higieny,
                    artykuły kuchenne, środki czyszczące, akcesoria i sprzęt do sprzątania, znicze oraz wiele
                    innych. Współpracujemy z importerami z całego kraju, dlatego posiadamy w ofercie
                    produkty różnych marek. Dzięki zdobytemu przez lata doświadczeniu poznaliśmy oczekiwania
                    i potrzeby naszych Klientów. Nasi pracownicy chętnie pomogą w wyborze odpowiedniego
                    produktu do potrzeb każdego. Obsługujemy zarówno osoby prywatne, jak i firmy, sklepy,
                    szkoły, urzędy czy banki. Przy większych zamówieniach oferujemy bezpłatną dostawę
                    towaru. Zapraszamy do zapoznania się z naszą ofertą oraz do odwiedzenia siedziby Zakładu
                    Handlowego w Żelechowie, gdzie można bezpośrednio dokonać zakupów. Zamówienia można
                    składać również telefonicznie i mailowo.
                </p>
            </div>

            <div className={'col-lg-7 py-lg-5 text-center'}>
                <img
                    src={Hurtownia}
                    alt={'Nasza hurtownia'}
                    className={'img-fluid'}/>

                <img
                    src={Biuro}
                    alt={'Nasze biuro'}
                    className={'img-fluid'}
                    style={{marginLeft: '-4rem', marginTop: '-4rem'}}/>
            </div>
        </div>
    );
}
