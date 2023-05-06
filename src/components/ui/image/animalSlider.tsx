import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

function ThumbnailPlugin(mainRef: any) {
	return (slider: any) => {
		function removeActive() {
			slider.slides.forEach((slide: any) => {
				slide.classList.remove('active')
			})
		}
		function addActive(idx: any) {
			slider.slides[idx].classList.add('active')
		}

		function addClickEvents() {
			slider.slides.forEach((slide: any, idx: any) => {
				slide.addEventListener('click', () => {
					if (mainRef.current) mainRef.current.moveToIdx(idx)
				})
			})
		}

		slider.on('created', () => {
			if (!mainRef.current) return
			addActive(slider.track.details.rel)
			addClickEvents()
			mainRef.current.on('animationStarted', (main: any) => {
				removeActive()
				const next = main.animator.targetIdx || 0
				addActive(main.track.absToRel(next))
				slider.moveToIdx(Math.min(slider.track.details.maxIdx, next))
			})
		})
	}
}

export default function AnimalSlider(animal: any, hideThumbnails: boolean = false) {
	const [sliderRef, instanceRef] = useKeenSlider({
		initial: 0,
	})
	const [thumbnailRef] = useKeenSlider(
		{
			initial: 0,
			slides: {
				perView: 4,
				spacing: 10,
			},
		},
		[ThumbnailPlugin(instanceRef)],
	)

	console.log(animal)
	console.log(animal.animal.photos)

	return (
		<>
			<div ref={sliderRef} className={'keen-slider h-[400px] bg-black  md:h-[600px]'}>
				{animal?.animal?.photos?.map((item: any, index: number) => (
					<>
						<div className={`keen-slider__slide number-slide${index} flex items-center`}>
							<img src={item ?? '/assets/placeholder/products/product-gallery.svg'} alt={`${index}--${index}`} className={'w-full object-cover'} />
						</div>
					</>
				))}
			</div>

			{!hideThumbnails ? (
				<></>
			) : (
				<>
					<div ref={thumbnailRef} className={'keen-slider thumbnail py-4 '}>
						{animal?.animal?.photos?.map((item: any, index: number) => (
							<>
								<div className={`keen-slider__slide keen-slider__slide_thumbnail number-slide${index} min-h-0 min-w-0`}>
									<img src={item ?? '/assets/placeholder/products/product-gallery.svg'} alt={`${index}--${index}`} className={'h-[85px]  w-[85px] object-cover md:h-[100px] md:w-[100px]'} />
								</div>
							</>
						))}
					</div>
				</>
			)}
		</>
	)
}
