import * as React from 'react';
import {Layout} from '../layout/layout';
import {LayoutHeader} from '../layout/layout-header';
import {LayoutSection} from '../layout/layout-section';
import Charwoman from '../images/charwoman@2x.png';
import CalgonLogo from '../images/calgon-logo.png';
import VanishLogo from '../images/vanish-logo.png';
import ArielLogo from '../images/ariel-logo.png';
import VizirLogo from '../images/vizir-logo.png';
import PersilLogo from '../images/persil-logo.png';
import PurLogo from '../images/pur-logo.png';
import {ButtonLink} from "../fragments/button-link";

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

const IndexPage = () => {
    return (
        <Layout>
            <LayoutHeader menu={menu}/>

            <LayoutSection
                bgColor={'white'}
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
                            <img src={Charwoman} className={'img-fluid'} alt={'Sprzątaczka'}/>
                        </div>
                    </div>

                    <div className={'row align-items-center py-5'}>
                        <div className={'fw-bold col-lg-auto'}>
                            Sprzedajemy <br/> artykuły takich firm:
                        </div>

                        <div className={'col-lg'}>
                            <div className={'row row-cols-6 align-items-center'}>
                                <div>
                                    <img src={ArielLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>

                                <div>
                                    <img src={VizirLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>

                                <div>
                                    <img src={PersilLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>

                                <div>
                                    <img src={CalgonLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>

                                <div>
                                    <img src={VanishLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>

                                <div>
                                    <img src={PurLogo} className={'img-fluid'} alt={'Sprzątaczka'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutSection>

            <LayoutSection
                bgColor={'transparent'}
                minHeight={'100vh'}>
            </LayoutSection>
        </Layout>
    )
}

export default IndexPage;
