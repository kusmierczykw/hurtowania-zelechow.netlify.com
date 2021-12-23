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
        content: [
            [
                {
                    title: 'świeczki urodzinowe',
                },
                {
                    title: 'bańki mydlane',
                },
                {
                    title: 'pistolety na wodę',
                },
                {
                    title: 'zimne ognie',
                },
                {
                    title: 'balony gumowe',
                },
                {
                    title: 'styropianowe kule, choinki itp.',
                },
            ],
            [
                {
                    title: 'torebki ozdobne na prezent',
                },
                {
                    title: 'wstążki',
                },
                {
                    title: 'flety do gry',
                },
                {
                    title: 'karty do gry',
                },
                {
                    title: 'gry planszowe, puzzle',
                },
                {
                    title: 'rakietki do ping-ponga',
                }
            ]
        ],
    },
    {
        id: '3f646840-7f82-40d6-80ef-bd91a13ca590',
        title: 'Kosmetyki i środki higieny',
        content: [
            [
                {
                    title: 'dezodoranty męskie, damskie',
                },
                {
                    title: 'antyperspiranty',
                },
                {
                    title: 'perfumy',
                },
                {
                    title: 'wsuwki do włosów',
                },
                {
                    title: 'grzebienie, szczotki do włosów',
                },
                {
                    title: 'szampony, lakiery, pianki do włosów',
                },
                {
                    title: 'żele, odżywki do włosów',
                },
                {
                    title: 'gumki do włosów',
                },
                {
                    title: 'płyny do kąpieli',
                },
                {
                    title: 'żele pod prysznic',
                },
                {
                    title: 'gąbki do kąpieli',
                },
                {
                    title: 'płyny do higieny intymnej',
                },
                {
                    title: 'mydła, mydelniczki',
                },
                {
                    title: 'sole do kąpieli',
                },
                {
                    title: 'płyny, kremy, balsamy po goleniu ',
                },
                {
                    title: 'wody kolońskie',
                },
                {
                    title: 'pianki, żele do golenia',
                },
                {
                    title: 'maszynki, żyletki do golenia',
                },
                {
                    title: 'lusterka',
                },
                {
                    title: 'płyny do jamy ustnej',
                },
            ],
            [
                {
                    title: 'pasty do zębów',
                },
                {
                    title: 'patyczki kosmetyczne, płatki kosmetyczne',
                },
                {
                    title: 'kremy',
                },
                {
                    title: 'lakiery, zmywacze do paznokci',
                },
                {
                    title: 'pomadki do ust',
                },
                {
                    title: 'pumeksy kosmetyczne, tarki do pięt',
                },
                {
                    title: 'prezerwatywy',
                },
                {
                    title: 'pampersy',
                },
                {
                    title: 'pieluchy dla dorosłych',
                },
                {
                    title: 'pieluchy tetrowe',
                },
                {
                    title: 'podpaski',
                },
                {
                    title: 'tampony',
                },
                {
                    title: 'wkładki higieniczne',
                },
                {
                    title: 'chustki higieniczne, chustki nawilżające',
                },
                {
                    title: 'papiery toaletowe',
                },
                {
                    title: 'ręczniki papierowe',
                },
                {
                    title: 'rajstopy',
                },
                {
                    title: 'podkolanówki',
                },
                {
                    title: 'skarpety',
                },
                {
                    title: 'zestawy krawieckie',
                }
            ],
        ],
    },
    {
        id: '9dc0e0c5-4427-4123-b89f-f703d699b3b0',
        title: 'Artykuły kuchenne',
        content: [
            [
                {
                    title: 'druciaki, gąbki do mycia naczyń',
                },
                {
                    title: 'preparaty do odkamieniania zmywarek',
                },
                {
                    title: 'serwetki',
                },
                {
                    title: 'świece stołowe',
                },
                {
                    title: 'papiery do pieczenia, rękawy do pieczenia',
                },
                {
                    title: 'ceraty na stół',
                },
                {
                    title: 'zmywaki kuchenne',
                },
                {
                    title: 'reklamówki',
                }
            ],
            [
                {
                    title: 'folie stretch',
                },
                {
                    title: 'woreczki strunowe, śniadaniowe',
                },
                {
                    title: 'folie aluminiowe',
                },
                {
                    title: 'herbaty',
                },
                {
                    title: 'kawy',
                },
                {
                    title: 'wykałaczki',
                },
                {
                    title: 'miski na zupę',
                },
                {
                    title: 'mieszadełka',
                }
            ]
        ]
    },
    {
        id: '7457c485-426a-499e-9fba-493ee3b57df8',
        title: 'Artykuły do grilla',
        content: [
            [
                {
                    title: 'węgiel drzewny',
                },
                {
                    title: 'podpałki do grilla',
                },
                {
                    title: 'zapałki',
                }
            ],
            [
                {
                    title: 'patyczki do szaszłyków',
                },
                {
                    title: 'plastikowe widelce, noże, łyżki, łyżeczki, talerze',
                },
                {
                    title: 'plastikowe kieliszki, kubki',
                }
            ]
        ]
    },
    {
        id: 'dc46e2c2-f70c-4e37-a78e-5338ff368948',
        title: 'Środki czyszczące',
        content: [
            [
                {
                    title: 'odrdzewiacze, odtłuszczacze',
                },
                {
                    title: 'odkamieniacze do zmywarek',
                },
                {
                    title: 'płyny do naczyń',
                },
                {
                    title: 'płyny do czyszczenia zmywarki',
                },
                {
                    title: 'tabletki do zmywarki',
                },
                {
                    title: 'żele, mleczka, spraye do czyszczenia łazienki i kuchni',
                },
                {
                    title: 'żele, płyny do kamienia i rdzy',
                },
                {
                    title: 'płyny do czyszczenia pralki',
                },
                {
                    title: 'płyny do płukania',
                },
                {
                    title: 'żele i płyny do czyszczenia WC',
                },
                {
                    title: 'kostki i koszyczki do WC',
                },
                {
                    title: 'wybielacze do prania',
                },
                {
                    title: 'proszki do prania',
                },
                {
                    title: 'krochmale',
                }
            ],
            [
                {
                    title: 'odplamiacze',
                },
                {
                    title: 'proszki do firan',
                },
                {
                    title: 'pianki do dywanów',
                },
                {
                    title: 'płyny do czyszczenia dywanów',
                },
                {
                    title: 'preparaty do mycia mebli, paneli, drewna, szyb, kamienia, glazury, terakoty, PCV',
                },
                {
                    title: 'płyny do szyb',
                },
                {
                    title: 'środki do czyszczenia nagrobków',
                },
                {
                    title: 'pasty BHP',
                },
                {
                    title: 'pasty do butów',
                },
                {
                    title: 'mleczka do czyszczenia powierzchni skórzanych',
                },
                {
                    title: 'środki do dezynfekcji',
                },
                {
                    title: 'preparaty do rur',
                },
                {
                    title: 'preparaty do szamba',
                }
            ]
        ],
    },
    {
        id: 'e91df5f8-17ca-4cdb-80bd-66e1961efddb',
        title: 'Akcesoria i sprzęt do sprzątania',
        content: [
            [
                {
                    title: 'rękawice robocze, kuchenne, foliowe, nitrylowe, gumowe, lateksowe, gospodarcze, ochronne',
                },
                {
                    title: 'ochraniacze na buty',
                },
                {
                    title: 'linki i spinacze do bielizny',
                },
                {
                    title: 'mopy i kije do mopa',
                },
                {
                    title: 'trzonki do grabi',
                },
                {
                    title: 'ścierki',
                },
                {
                    title: 'miotły',
                }
            ],
            [
                {
                    title: 'zmiotki i szufelki',
                },
                {
                    title: 'kosze i worki na śmieci',
                },
                {
                    title: 'wiadra',
                },
                {
                    title: 'pompki do umywalki',
                },
                {
                    title: 'rolki czyszczące do ubrań',
                },
                {
                    title: 'odświeżacze samochodowe',
                },
                {
                    title: 'odświeżacze powietrza',
                }
            ]
        ]
    },
    {
        id: '259e4d1c-5fa8-479c-b380-4ab7a647aba1',
        title: 'Znicze i wkłady do zniczy',
    },
    {
        id: 'dcfae348-b041-4bf1-8bfb-598cf7483e6d',
        title: 'Artykuły ogrodnicze',
        content: [
            [
                {
                    title: 'nawóz do trawy i kwiatów',
                },
                {
                    title: 'ziemia uniwersalna',
                },
                {
                    title: 'spraye na owady, muchy, kleszcze, mole, mszyce',
                }
            ],
            [
                {
                    title: 'preparaty na myszy, szczury, krety, nornice',
                },
                {
                    title: 'pułapki na krety, myszy',
                }
            ]
        ]
    },
    {
        id: '61ef886d-3ea7-4b6a-a439-9948f8f41dca',
        title: 'Artykuły lecznicze',
        content: [
            [
                {
                    title: 'plastry opatrunkowe',
                },
                {
                    title: 'tabletki przeciwbólowe',
                },
                {
                    title: 'woda utleniona',
                }
            ],
            [
                {
                    title: 'wata',
                },
                {
                    title: 'spirytus salicylowy',
                }
            ]
        ]
    },
    {
        id: 'ba2448e9-72b0-4c00-a83c-80d47f40ee42',
        title: 'Pozostałe produkty',
        content: [
            [
                {
                    title: 'gaz w butli',
                },
                {
                    title: 'żarówki',
                },
                {
                    title: 'woda destylowana ',
                },
                {
                    title: 'denaturat ',
                },
                {
                    title: 'wycieraczki gumowe',
                }
            ],
            [
                {
                    title: 'latarki',
                },
                {
                    title: 'gazy do zapalniczek',
                },
                {
                    title: 'płaszcze przeciwdeszczowe',
                },
                {
                    title: 'płyny do spryskiwaczy',
                }
            ]
        ]
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
