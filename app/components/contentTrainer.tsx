import React from 'react'
import type {EmblaOptionsType} from 'embla-carousel'
import { DotButton, useDotButton } from './dotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './arrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import TrainerCard from "~/components/trainerCard";


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
        <section className="trainer-embla">
            <div className="trainer-embla__viewport" ref={emblaRef}>
                <div className="trainer-embla__container">
                    <div className="trainer-embla__slide" key={1}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"СТЕПАНЫЧ"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={2}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"КИРЮХа"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={3}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"КАТЮХА"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={4}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"НАСТЮХА"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={1}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"ИВАНЫЧ"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={2}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер'} nameTrainer={"ПАВЛИК"} image={'app/img/trainer_1.jpg'} />.

                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={3}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер7'} nameTrainer={"ПАВЛИК"} image={'app/img/trainer_1.jpg'} />
                        </div>
                    </div>
                    <div className="trainer-embla__slide" key={4}>
                        <div className="trainer-embla__slide__number">
                            <TrainerCard title={'Тренер8'} nameTrainer={"ПАВЛИК"} image={'app/img/trainer_1.jpg'} />
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