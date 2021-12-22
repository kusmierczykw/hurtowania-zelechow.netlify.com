import * as React from 'react';
import {Layout} from '../layout/layout';
import {LayoutHeader} from '../layout/layout-header';
import {LayoutSection} from '../layout/layout-section';
import CalgonLogo from '../images/calgon-logo.png';
import VanishLogo from '../images/vanish-logo.png';
import ArielLogo from '../images/ariel-logo.png';
import VizirLogo from '../images/vizir-logo.png';
import PersilLogo from '../images/persil-logo.png';
import PurLogo from '../images/pur-logo.png';
import {Divider} from '../fragments/divider.fragment';
import {SectionTitle} from '../fragments/section-title.fragment';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';
import {ContactSection} from '../fragments/contact-section.fragment';
import {AboutCompanySection} from '../fragments/about-company-section.fragment';
import {CompaniesSection} from '../fragments/companies-section.fragment';
import {MainSection} from '../fragments/main-section.fragment';
import {OfferSection} from '../fragments/offer-section.fragment';

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

const companies = [
    {
        alt: 'Ariel',
        src: ArielLogo,
        key: '68fe95b9-c629-4cc7-bb06-a318ad2a753f'
    },
    {
        alt: 'Vizir',
        src: VizirLogo,
        key: '7ff656a8-c77c-41d1-868e-a98c3368b355'
    },
    {
        alt: 'Persil',
        src: PersilLogo,
        key: 'ec75275f-8801-4ce7-8e73-9f892fe594ef'
    },
    {
        alt: 'Calgon',
        src: CalgonLogo,
        key: 'b7963bed-64bf-4f03-aede-8e84a0b94123'
    },
    {
        alt: 'Vanish',
        src: VanishLogo,
        key: 'f540acee-b38a-4551-a47a-f83dbf0d003e'
    },
    {
        alt: 'Pur',
        src: PurLogo,
        key: '63976937-a3f5-4483-802f-a41c0cceed5d'
    }
];

const products = [
    {
        id: '0503aa1a-318a-45e1-9a2c-49ed267235f7',
        title: 'Artykuły papiernicze',
        content: [
            [
                {
                    title: 'książeczki do kolorowania'
                },
                {
                    title: 'podkłady pod biurko z kalendarzem'
                },
                {
                    title: 'kartki świąteczne, okolicznościowe i pocztówki'
                },
                {
                    title: 'zaproszenia na uroczystości'
                },
                {
                    title: 'kalendarze',
                },
                {
                    title: 'koperty',
                },
            ],
            [
                {
                    title: 'notesy',
                },
                {
                    title: 'brystole',
                },
                {
                    title: 'zeszyty',
                },
                {
                    title: 'bloki',
                },
                {
                    title: 'dzienniczki ucznia',
                }
            ],
        ],
    },
    {
        id: '09444e5d-48ab-44a9-97db-6669dc1753c7',
        title: 'Artykuły szkolne i biurowe',
        content: [
            [
                {
                    title: 'tablice korkowe',
                },
                {
                    title: 'sprężone powietrze',
                },
                {
                    title: 'ściereczki do monitora',
                },
                {
                    title: 'spraye do czyszczenia monitorów',
                },
                {
                    title: 'płyty CD, DVD',
                },
                {
                    title: 'segregatory, przekładki do segregatora',
                },
                {
                    title: 'teczki, skoroszyty',
                },
                {
                    title: 'koszulki na dokumenty',
                },
                {
                    title: 'papier xero',
                },
                {
                    title: 'papier foto',
                },
                {
                    title: 'niszczarka do dokumentów',
                },
                {
                    title: 'pendrive USB',
                },
                {
                    title: 'rolki kasowe',
                },
                {
                    title: 'tusze do drukarki',
                },
                {
                    title: 'gumki recepturki',
                },
                {
                    title: 'spinacze biurowe',
                },
                {
                    title: 'dziurkacze',
                },
                {
                    title: 'zszywacze, zszywki',
                },
                {
                    title: 'poduszki do pieczątek',
                },
                {
                    title: 'baterie alkaiczne i zwykłe',
                },
            ],
            [
                {
                    title: 'breloki do kluczy',
                },
                {
                    title: 'długopisy, ołówki, korektory, zakreślacie, flamastry, pióra, kredki',
                },
                {
                    title: 'wkłady do długopisu, ołówka, pióra',
                },
                {
                    title: 'farby plakatowe, akrylowe',
                },
                {
                    title: 'pędzle',
                },
                {
                    title: 'piórniki',
                },
                {
                    title: 'taśmy klejące',
                },
                {
                    title: 'kleje',
                },
                {
                    title: 'kredy do pisania po tablicy',
                },
                {
                    title: 'modelina, plastelina',
                },
                {
                    title: 'kalkulatory',
                },
                {
                    title: 'linijki, ekierki, kątomierze',
                },
                {
                    title: 'cyrkle',
                },
                {
                    title: 'nożyczki',
                },
                {
                    title: 'temperówki',
                },
                {
                    title: 'gumki do ścierania',
                },
                {
                    title: 'szpilki',
                },
                {
                    title: 'pisaki do tablicy',
                },
                {
                    title: 'kleje do pistoletu',
                }
            ],
        ]
    },
    {
        id: '23ee5fcf-8215-4561-9e6e-e094d478a265',
        title: 'Artykuły kreatywne i do gry',
    },
    {
        id: '3f646840-7f82-40d6-80ef-bd91a13ca590',
        title: 'Kosmetyki i środki higieny',
    },
    {
        id: '9dc0e0c5-4427-4123-b89f-f703d699b3b0',
        title: 'Artykuły kuchenne',
    },
    {
        id: '7457c485-426a-499e-9fba-493ee3b57df8',
        title: 'Artykuły do grilla',
    },
    {
        id: 'dc46e2c2-f70c-4e37-a78e-5338ff368948',
        title: 'Środki czyszczące',
    },
    {
        id: 'e91df5f8-17ca-4cdb-80bd-66e1961efddb',
        title: 'Akcesoria i sprzęt do sprzątania',
    },
    {
        id: '259e4d1c-5fa8-479c-b380-4ab7a647aba1',
        title: 'Znicze i wkłady do zniczy',
    },
    {
        id: 'dcfae348-b041-4bf1-8bfb-598cf7483e6d',
        title: 'Artykuły ogrodnicze',
    },
    {
        id: '61ef886d-3ea7-4b6a-a439-9948f8f41dca',
        title: 'Artykuły lecznicze',
    },
    {
        id: 'ba2448e9-72b0-4c00-a83c-80d47f40ee42',
        title: 'Pozostałe produkty',
    }
];

const IndexPage = () => {
    return (
        <Layout>
            <LayoutHeader menu={menu}/>

            <LayoutSection backgroundColor={'white'}>
                <div className={'container'}>
                    <MainSection/>
                </div>

                <Divider/>

                <div className={'container'}>
                    <CompaniesSection companies={companies}/>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'transparent'}>
                <div className={'container'}>
                    <AboutCompanySection/>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'white'}>
                <div className={'container'}>
                    <ContactSection/>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'transparent'}>
                <div className={'container'}>
                    <OfferSection products={products}/>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'white'}>
                <div className={'container'}>
                    <ContactSection/>
                </div>
            </LayoutSection>

            <LayoutSection backgroundColor={'transparent'}>
                <div className={'container'}>
                    <div className={'text-center py-5'}>
                        <SectionTitle title={'Opinie klientów'}/>
                        <SectionSubtitle subtitle={'Co mówią o nas klienci?'}/>
                    </div>
                </div>
            </LayoutSection>
        </Layout>
    )
}

export default IndexPage;
