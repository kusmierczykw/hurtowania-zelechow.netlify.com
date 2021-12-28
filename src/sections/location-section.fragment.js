import * as React from 'react';
import {SectionTitle} from '../fragments/section-title.fragment';
import {SectionSubtitle} from '../fragments/section-subtitle.fragment';
import {Icon} from '../core/icons/icon';
import {CLOCK_FILL, ENVELOPE_FILL, GEO_PIN_LOCATION, PHONE_FILL} from '../core/icons/consts/icon.const';

export const LocationSection = () => {
    const styleObject = {
        width: '100%',
        height: '100%',
        minHeight: '450px',
        border: 0,
    };

    return (
        <>
            <div className={'row py-5'}>
                <div className={'col-lg-5'}>
                    <SectionTitle title={'Kontakt'}/>
                    <SectionSubtitle subtitle={'Skontaktuj się'}/>

                    <div className={'d-flex mt-5 mb-3'}>
                        <div className={'me-3'}>
                            <Icon name={PHONE_FILL}/>
                        </div>
                        <div>
                            <span className={'fw-bold'}>
                                Tel. <a href={'tel:257541400'}
                                        className={'text-black text-link'}>(25) 754 14 00</a>
                            </span>
                        </div>
                    </div>

                    <div className={'d-flex mb-3'}>
                        <div className={'me-3'}>
                            <Icon name={ENVELOPE_FILL}/>
                        </div>
                        <div>
                            <span className={'fw-bold'}>
                                <a href={'mailto:muchawitold@wp.pl'}
                                   className={'text-black text-link'}>muchawitold@wp.pl</a>
                            </span>
                        </div>
                    </div>

                    <div className={'d-flex mb-3'}>
                        <div className={'me-3'}>
                            <Icon name={CLOCK_FILL}/>
                        </div>
                        <div>
                            <span className={'fw-bold'}>Godziny otwarcia:</span>
                            <div>
                                poniedziałek – piątek: 8:00 – 17:00<br/>
                                sobota: 8:00 – 14:00
                            </div>
                        </div>
                    </div>

                    <div className={'d-flex mb-3'}>
                        <div className={'me-3'}>
                            <Icon name={GEO_PIN_LOCATION}/>
                        </div>
                        <div>
                            <span className={'fw-bold'}>Adres:</span>
                            <div>
                                Zakład Handlowy Mucha Witold<br/>
                                ul. Długa 105 08-430 Żelechów
                            </div>
                        </div>
                    </div>
                </div>

                <div className={'col-lg-7'}>
                    <iframe
                        style={styleObject}
                        title={'Mapa dojazdu'}
                        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21594.49086600445!2d21.873657611229838!3d51.81135850728276!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718bad852d8bea7%3A0x9c9d546e6d73ef0a!2sMucha%20Witold.%20ZH.%20Sprzeda%C5%BC%20hurtowa%20i%20detaliczna%20art.%20przemys%C5%82owych!5e0!3m2!1spl!2spl!4v1640722422360!5m2!1spl!2spl'
                        loading='lazy'/>
                </div>
            </div>
        </>
    );
}
