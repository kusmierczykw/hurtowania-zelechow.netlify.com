import * as React from 'react';
import {Layout} from '../layout/layout';
import {LayoutHeader} from '../layout/layout-header';
import {LayoutSection} from '../layout/layout-section';
import {Divider} from '../fragments/divider.fragment';
import {ContactSection} from '../sections/contact-section.fragment';
import {AboutCompanySection} from '../sections/about-company-section.fragment';
import {CompaniesSection} from '../sections/companies-section.fragment';
import {MainSection} from '../sections/main-section.fragment';
import {OfferSection} from '../sections/offer-section.fragment';
import {CommentsSection} from '../sections/comments-section.fragment';
import {LocationSection} from '../sections/location-section.fragment';
import {comments, companies, menu, products} from '../content';
import {Helmet} from 'react-helmet';

const IndexPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Witold Mucha | Sprzedaż hurtowa art. przemysłowych i chemii gospodarczej</title>
            </Helmet>

            <Layout>
                <LayoutHeader menu={menu}/>

                <LayoutSection
                    backgroundColor={'white'}>
                    <div
                        id={'start'}
                        className={'container'}>
                        <MainSection/>
                    </div>

                    <Divider/>

                    <div className={'container'}>
                        <CompaniesSection companies={companies}/>
                    </div>
                </LayoutSection>

                <LayoutSection backgroundColor={'transparent'}>
                    <div
                        id={'o-nas'}
                        className={'container'}>
                        <AboutCompanySection/>
                    </div>
                </LayoutSection>

                <LayoutSection backgroundColor={'white'}>
                    <div className={'container'}>
                        <ContactSection/>
                    </div>
                </LayoutSection>

                <LayoutSection backgroundColor={'transparent'}>
                    <div
                        id={'oferta'}
                        className={'container'}>
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
                        <CommentsSection comments={comments}/>
                    </div>
                </LayoutSection>

                <LayoutSection backgroundColor={'white'}>
                    <div
                        id={'kontakt'}
                        className={'container'}>
                        <LocationSection/>
                    </div>
                </LayoutSection>

                <LayoutSection backgroundColor={'transparent'}>
                    <div className={'container'}>
                        <div className={'row my-5 pt-5'}>
                            <div className={'col-lg'}>
                                Copyright © 2010-{new Date().getFullYear()} Witold Mucha
                            </div>

                            <div className={'col-lg'}>
                                <span className={'me-1'}>Projekt:</span>
                                <span className={'fw-bold '}>Daniel Włodarczyk</span>
                            </div>

                            <div className={'col-lg'}>
                                <span className={'me-1'}>Realizacja:</span>
                                <span className={'fw-bold'}>
                                <a href={'http://wojciech-kusmierczyk.pl/'}
                                   target={'_blank'}
                                   rel="noreferrer"
                                   className={'text-black text-link'}>Wojciech Kuśmierczyk</a>
                            </span>
                            </div>
                        </div>
                    </div>
                </LayoutSection>
            </Layout>
        </>
    )
}

export default IndexPage;
