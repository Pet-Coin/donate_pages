'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { RiHeartsFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@utils/routes'
import { SwiperSlide } from 'swiper/react'
import Carousel from '@components/ui/carousel/carousel'

export const DonateBox = ({}) => {
	const [donate, setDonate] = useState({
		amount: 25,
		recurring: false,
		from: '',
		shelterId: '',
		shelterName: '',
		purpose: '',
		petId: '',
		petName: '',
		campaignId: '',
		campaignTitle: '',
	})
	function handleAmountChange(e: any) {
		e.preventDefault()
		const amount = parseFloat(parseFloat(e?.currentTarget?.value).toFixed(2))
		console.log(amount)
		if (e?.currentTarget?.value) {
			setDonate((prevState) => ({
				...prevState,
				amount,
			}))
		}
	}


	const router = useRouter()

	function handleSubmit() {

		router.push(ROUTES.CHECKOUT)
	}
	return (
		<div>
			<>
				<div className={'from-main mx-auto w-full max-w-7xl border-x-2 bg-gradient-to-b to-blue-500 pb-32 pt-16 md:space-x-5 '}>
					{/*Title*/}

					{/*Donate boxes*/}
					<div className={' mx-5 grid grid-cols-1 gap-5 px-0  py-5  lg:grid-cols-3'}>
						{/*gift box*/}
						<div className={'shadow-xl shadow-md col-span-2 row-span-1 space-y-5  rounded-md bg-gray-100 p-5'}>
							<DonationHeader recurring={donate.recurring} amount={donate.amount} />
							<form
								className={'w-full space-y-4'}
								onSubmit={(e) => {
									e.preventDefault()
								}}
							>
								<div>{/*<input type={'text'} className={'w-full h-16  rounded-xs'} value={donate.purpose} onChange={handlePurposeChange} placeholder={'Specify Donation Purpose'} /> /!*Todo: drop down menu*!/*/}</div>
								<div className={'grid grid-cols-2 gap-2 lg:grid-cols-6 '}>
									<DonationButton value={19} currentAmount={donate.amount} onClick={handleAmountChange} />
									<DonationButton value={25} currentAmount={donate.amount} onClick={handleAmountChange} />
									<DonationButton value={36} currentAmount={donate.amount} onClick={handleAmountChange} />
									<DonationButton value={50} currentAmount={donate.amount} onClick={handleAmountChange} />
									<DonationButton value={100} currentAmount={donate.amount} onClick={handleAmountChange} />
									<input type={'number'} placeholder={'Other'} className={' h-16 h-full w-full rounded-md border-2 border-gray-400 p-4 text-2xl text-black'} onChange={handleAmountChange} />
								</div>
								<div className={'pt-5'}>
									<button className={'h-16 w-full bg-green-600 rounded-md text-3xl text-white text-shadow-md hover:bg-accent' + ' rounded-xs'} onClick={handleSubmit}>
										<p className={'text-white'}>Donate</p>
									</button>
								</div>
							</form>
							<div className={'float-right'}>
								<div className={'flex justify-center space-x-2 pt-10 lg:place-items-end lg:justify-end lg:pt-0'}>
									<div className={'h-6 w-6 rounded-2xl bg-green-400 p-1 text-white'}>
										<LockClosedIcon />
									</div>
									<p>Secure Donation</p>
								</div>
							</div>
						</div>

						<div className={'col-span-2 row-span-2 rounded-md bg-gray-100 p-5 md:col-span-1 md:row-span-2'}>
							<div className={'flex w-full justify-center'}>
								<Carousel
									navigation={false}
									autoplay={true}
									loop={true}
									breakpoints={{
										slidesPerView: 1,
									}}
									className={'flex w-full justify-center'}
								>
									<SwiperSlide className={'flex w-full justify-center'}>
										<Image src={'/store/19_donation_dog.png'} height={'300'} width={'300'} className={'items-center rounded-md object-fill '} alt={''} />
									</SwiperSlide>
									<SwiperSlide className={'flex w-full justify-center'}>
										<Image src={'/store/36_donation_cat.png'} height={'300'} width={'300'} className={'items-center rounded-md object-fill '} alt={''} />
									</SwiperSlide>
									<SwiperSlide className={'flex w-full justify-center'}>
										<Image src={'/store/100_donation_dog.png'} height={'300'} width={'300'} className={'items-center rounded-md object-fill '} alt={''} />
									</SwiperSlide>
								</Carousel>
							</div>

							<p className={'line py-5 text-lg leading-relaxed'}>Your generous donation to Pets.Love has the power to make a meaningful impact on the lives of vulnerable animals in need. Pets.Love is a devoted organization that tirelessly rescues and safeguards these furry friends, striving to put an end to their suffering. By contributing, you can help support their essential work and be a part of making a positive change in the world of animal welfare. Thank you for your generosity and for joining us in our mission to protect and care for these precious creatures.</p>
						</div>
						{/*How to box*/}

						<div className={' col-span-2 row-span-2 rounded-md bg-gray-100 md:col-span-2 md:row-span-2 '}>
							<div className={'shadow-xl flex flex-col justify-evenly p-5'}>
								<div className={'text-xl leading-relaxed '}>Thank you for your interest in supporting animal welfare! Are you looking for a way to make a positive impact on the lives of our furry friends? There are many reputable animal charities out there that could use your help. Whether you&apos;re passionate about rescuing dogs, rehabilitating wildlife, or protecting endangered species, your contribution can make a difference. Remember, every little bit counts. So, if you&apos;re ready to make a donation and help make the world a better place for animals, let&apos;s get started!</div>
								<div className={''}>
									<div className={'flex w-full justify-center'}>
										<Image src={'/pics/sad_dog_newspapers.png'} height={'100'} width={'400'} className={'items-center rounded-t-3xl object-fill '} alt={''} />
									</div>
									<h2 className={'text-gray font-semiBold mb-4 text-center text-xl tracking-tight'}>Join our mission to change pets&apos; lives by signing up.</h2>
									<Link href={'/signup'}>
										<button className={'h-16 w-full rounded-md bg-petBlue text-3xl text-white text-shadow-md hover:bg-blue-500' + ' rounded-xs'}>Sign Up</button>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		</div>
	)
}
function DonationHeader({ recurring, amount }: any) {
	return (
		<div className={'grid grid-cols-1 gap-4 lg:grid-cols-2'}>
			<div className={''}>
				<p className={' text-gray text-center text-2xl font-extrabold sm:text-5xl sm:tracking-tight lg:text-left lg:text-3xl'}>Send a {recurring ? 'monthly' : 'one-time'} gift</p>
			</div>

			<div className={'text-gray inline-block text-center align-text-bottom text-sm font-extrabold sm:text-5xl sm:tracking-tight lg:text-right lg:text-2xl'}>
				Your donation <span className={'text-main font-semibold text-shadow-sm'}>${amount}</span> {recurring ? '/mo' : ''} <RiHeartsFill className={'inline text-3xl text-pink-600'} />
			</div>
		</div>
	)
}

function DonationButton({ value, onClick, currentAmount }: { value: number; onClick: any; currentAmount: number }) {
	const buttonClasses = `rounded-md w-full p-2 text-3xl text-white text-shadow-md h-full hover:bg-petBlue ${value === currentAmount ? 'bg-petBlue' : 'bg-gray-400'}`
	return (
		<div>
			<button className={buttonClasses} value={value} type={'button'} onClick={onClick}>
				<p className={'text-white'}>{`$${value}`}</p>
			</button>
		</div>
	)
}
