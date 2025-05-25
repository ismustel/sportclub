import useEmblaCarousel from 'embla-carousel-react';
import { DotButton, useDotButton } from './dotButton'
import {
    PrevButton,
    NextButton,
    usePrevNextButtons
} from './arrowButtons'
import '../embla.css'

function ContentRates() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">Слайд 1</div>
                <div className="embla__slide">Слайд 2</div>
                <div className="embla__slide">Слайд 3</div>
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
        </div>
    );
}

export default ContentRates;