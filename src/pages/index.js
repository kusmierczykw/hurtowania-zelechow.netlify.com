import * as React from 'react';
import {Layout} from '../layout/layout';
import {LayoutHeader} from '../layout/layout-header';
import {LayoutSection} from '../layout/layout-section';
import Charwoman from '../images/charwoman.png';
import CalgonLogo from '../images/calgon-logo.png';
import VanishLogo from '../images/vanish-logo.png';
import ArielLogo from '../images/ariel-logo.png';
import VizirLogo from '../images/vizir-logo.png';
import PersilLogo from '../images/persil-logo.png';
import PurLogo from '../images/pur-logo.png';
import {ButtonLink} from "../fragments/button-link";
import {CompanyLogo} from "../fragments/company-logo.fragment";
import {Divider} from "../fragments/divider.fragment";
import Biuro from '../images/biuro.png'
import Hurtownia from '../images/hurtownia.png'
import {SectionTitle} from "../fragments/section-title.fragment";
import {SectionSubtitle} from "../fragments/section-subtitle.fragment";
import {ContactSection} from "../fragments/contact-section.fragment";

const menu = [
    {
        label: 'Start',
        link: '#start',
        key: '429d4124-69ad-4472-a7e3-adf6e27b0487',
    },
    {
        label: 'O nas',
        link: '#o-nas',
        key: '2d9a0cf2-6c70-4fcd-a12b-17db232936b0',
    },
    {
        label: 'Oferta',
        link: '#oferta',
        key: 'c10d8206-3ac4-4855-bcc1-63e50c91e1a1',
    },
    {
        label: 'Kontakt',
        link: '#kontak',
        key: '742d882d-f271-485a-8d14-a2ca0f696b4e',
    }
];

const companyLogo = [
    {
        alt: 'Ariel',
        src: ArielLogo,
    },
    {
        alt: 'Vizir',
        src: VizirLogo,
    },
    {
        alt: 'Persil',
        src: PersilLogo,
    },
    {
        alt: 'Calgon',
        src: CalgonLogo,
    },
    {
        alt: 'Vanish',
        src: VanishLogo,
    },
    {
        alt: 'Pur',
        src: PurLogo,
    }
];

const IndexPage = () => {
    return (
        <Layout>
            <LayoutHeader menu={menu}/>

            <LayoutSection
                backgroundColor={'white'}
                minHeight={'100vh'}>
                <div className={'container'}>
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
                </div>

                <Divider/>

                <div className={'container'}>
                    <div className={'row align-items-center py-3'}>
                        <div className={'fw-bold col-lg-auto py-3'}>
                            Sprzedajemy <br/> artykuły takich firm:
                        </div>

                        <div className={'col-lg'}>
                            <div className={'row row-cols-6 align-items-center'}>
                                {
                                    companyLogo.map(({src, alt}) =>
                                        (<CompanyLogo src={src} alt={alt}/>))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutSection>

            <LayoutSection
                backgroundColor={'transparent'}>
                <div className={'container'}>
                    <div className={'row align-items-center'}>
                        <div className={'col-lg-5 py-5'}>
                            <SectionTitle title={'O firmie'}/>
                            <SectionSubtitle subtitle={'30 lat doświadczenia'}/>

                            <p className={'fw-bold mt-3'}>
                                Nasza firma działa w branży chemiczno-papierniczej dokładnie od 13 grudnia 1990 roku na
                                terenie województwa mazowieckiego i lubelskiego.
                            </p>

                            <p className={'text-justify'}>
                                W ofercie mamy artykuły szkolne, papiernicze, biurowe, kosmetyki i środki higieny,
                                artykuły kuchenne, środki czyszczące,akcesoria i sprzęt do sprzątania, znicze oraz wiele
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

                        <div className={'col-lg-7 py-5 text-center'}>
                            <img
                                src={Biuro}
                                alt={'Nasze biuro'}
                                className={'img-fluid'}
                            />
                            <img
                                src={Hurtownia}
                                alt={'Nasza hurtownia'}
                                className={'img-fluid'}
                                style={{marginLeft: '-4rem', marginTop: '-4rem'}}/>
                        </div>
                    </div>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'white'}>
                <div className={'container'}>
                    <ContactSection/>
                </div>
            </LayoutSection>
        </Layout>
    )
}

export default IndexPage;
