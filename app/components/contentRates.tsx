import React from 'react'
import type {EmblaOptionsType} from 'embla-carousel'
import { DotButton, useDotButton } from './dotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './arrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import RatesCard from "~/components/ratesCard";




type PropType = {

    options?: EmblaOptionsType
}

function ContentRates(props: PropType): React.ReactElement {
    const { options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <section className="rates-embla">
            <div className="rates-embla__viewport" ref={emblaRef}>
                <div className="rates-embla__container">
                    <div className="rates-embla__slide" key={1}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={123} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={2}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={124} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={3}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={125} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={4}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={126} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={1}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={127} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={2}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={128} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={3}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={129} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="rates-embla__slide" key={4}>
                        <div className="rates-embla__slide__number">
                            <RatesCard title={'бокс'} price={1210} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rates-embla__controls">
                <div className="rates-embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    );
}

export default ContentRates;