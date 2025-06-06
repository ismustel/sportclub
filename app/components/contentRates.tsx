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
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    <div className="embla__slide" key={1}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={123} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={2}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={124} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={3}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={125} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={4}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={126} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={1}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={127} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={2}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={128} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={3}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={129} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                    <div className="embla__slide" key={4}>
                        <div className="embla__slide__number">
                            <RatesCard title={'бокс'} price={1210} image={"app/img/rates_1.jpg"}
                                       description_1={'Описание'} description_2={'Описание'} description_3={'Описание'} description_4={'Описание'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={'embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : ''
                            )}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ContentRates;