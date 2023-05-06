'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { RiHeartsFill } from 'react-icons/ri'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@utils/routes'
import { SwiperSlide } from 'swiper/react'
import Carousel from '@components/ui/carousel/carousel'
import Lottie from "react-lottie"
import * as dog from "../../../public/corgi_run.json"

// Campaign Data from the database
//{"_id":"vDx32YFVQpGz8hDWMSwLARVo","photos":[null],"tags":[null],"beneficiary":{"shelterId":"fl1497","petId":"55943247","shelterData":{"organization":{"id":"FL1497","name":"Florida Coastal Cocker Rescue","email":"coastalcocker@gmail.com","phone":"(239) 220-7763","address":{"address1":null,"address2":null,"city":"Cape Coral","state":"FL","postcode":"33914","country":"US"},"hours":{"monday":null,"tuesday":null,"wednesday":null,"thursday":null,"friday":null,"saturday":null,"sunday":null},"url":"https://www.petfinder.com/member/us/fl/cape-coral/florida-coastal-cocker-rescue-fl1497/?referrer_id=16f51077-2b1b-4af5-ae68-1fb2ff7eb29d","website":"http://www.floridacockerrescue.org","mission_statement":"Florida Coastal Cocker Rescue (FCCR) is a non-profit organization located in SW Florida. We are dedicated to rescuing, rehabilitating, and...","adoption":{"policy":"www.floridacockerrescue.org\r\n\r\n\r\nhttps://www.facebook.com/coastalcocker/\r\n\r\n\r\n \r\n\r\n\r\n \r\n\r\n\r\n \r\n\r\n\r\n ","url":"https://www.floridacockerrescue.org/adoption.html"},"social_media":{"facebook":"https://www.facebook.com/coastalcocker/","twitter":null,"youtube":null,"instagram":null,"pinterest":null},"photos":[{"small":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/2/?bust=1511944059&width=100","medium":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/2/?bust=1511944059&width=300","large":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/2/?bust=1511944059&width=600","full":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/2/?bust=1511944059"},{"small":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/1/?bust=1497546149&width=100","medium":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/1/?bust=1497546149&width=300","large":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/1/?bust=1497546149&width=600","full":"https://dl5zpyw5k3jeb.cloudfront.net/organization-photos/47276/1/?bust=1497546149"}],"distance":null,"_links":{"self":{"href":"/v2/organizations/fl1497"},"animals":{"href":"/v2/animals?organization=fl1497"}}}},"petData":{"id":{"$numberInt":"55943247"},"organization_id":"FL1497","url":"https://www.petfinder.com/dog/jack-55943247/fl/cape-coral/florida-coastal-cocker-rescue-fl1497/?referrer_id=16f51077-2b1b-4af5-ae68-1fb2ff7eb29d","type":"Dog","species":"Dog","breeds":{"primary":"Cocker Spaniel","secondary":null,"mixed":false,"unknown":false},"colors":{"primary":"Yellow / Tan / Blond / Fawn","secondary":null,"tertiary":null},"age":"Young","gender":"Male","size":"Medium","coat":null,"attributes":{"spayed_neutered":true,"house_trained":false,"declawed":null,"special_needs":true,"shots_current":true},"environment":{"children":false,"dogs":true,"cats":null},"tags":[],"name":"Jack","description":"Meet Jack, a sweet 3 year old, ~28 pound dark buff cocker spaniel. His family can no longer care for...","organization_animal_id":null,"photos":[{"small":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=100","medium":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=300","large":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=600","full":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700"},{"small":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/2/?bust=1655379701&width=100","medium":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/2/?bust=1655379701&width=300","large":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/2/?bust=1655379701&width=600","full":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/2/?bust=1655379701"}],"primary_photo_cropped":{"small":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=300","medium":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=450","large":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700&width=600","full":"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55943247/1/?bust=1655379700"},"videos":[],"status":"adoptable","status_changed_at":"2022-06-16T11:41:42+0000","published_at":"2022-06-16T11:41:42+0000","distance":null,"contact":{"email":"coastalcocker@gmail.com","phone":"(239) 220-7763","address":{"address1":null,"address2":null,"city":"Cape Coral","state":"FL","postcode":"33914","country":"US"}},"_links":{"self":{"href":"/v2/animals/55943247"},"type":{"href":"/v2/types/dog"},"organization":{"href":"/v2/organizations/fl1497"}}}},"description":"Meet Jack, a beautiful, playful, 3 yr old Cocker Spaniel. Jack had multiple ear infections at a very young age and is now deaf. He is a sweet and curious pup with lots of love to give. He is seeking a family with other dogs but no children. His hearing impairment doesn’t stop him from being a wonderful pet for an experienced Cocker owner. He needs special care on walks and meeting new people.<br />His current owner can no longer keep him and he needs a forever place to call home. Could you help Jack, today?","endDate":"2022-08-21T17:37:10+0000","goalDecimal":{"$numberInt":"100"},"goal":{"$numberInt":"10000"},"title":"Jack is looking for a loving, patient home!","raised":{"$numberInt":"8000"},"raisedDecimal":{"$numberInt":"80"},"campaignType":"ANIMAL","_created_at":{"$date":{"$numberLong":"1656005776608"}},"_updated_at":{"$date":{"$numberLong":"1658784509645"}},"featured":false}
const campaign = {
	raisedDecimal: 1234,
	goalDecimal: 5000,
	title: 'Giblet, saved by ARC for a special person… like you!',
	image: 'https://petslovecdn.s3.amazonaws.com/05-amazon-9-Powerful-Ways-to-Give-to-Charity-Without-Breaking-the-Bank_527124532-Pongsatorn-Singnoy.jpg',
}
export const CampaignDonationBox = () => {
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
	let handleAmountChange;

	function handleSubmit() {

	}

	return (
		<div>
			<>
				<div className={'from-main mx-auto w-full max-w-7xl border-x-2 bg-gradient-to-b to-blue-500 pb-32  md:space-x-5 '}>
					{/*Title*/}

					{/*Donate boxes*/}
					<div className={' mx-5 grid grid-cols-1 gap-5 px-0  py-5  lg:grid-cols-3'}>
						<div className={'shadow-xl shadow-md col-span-2 row-span-1 space-y-2  rounded-md bg-gray-100'}>
							<div>
								<Image src={campaign.image} width={960} height={576} alt={campaign.title} className={'rounded-t-md object-cover'} />
							</div>
							<div className={''}>
								<h1 className={'text-gray px-5 pb-2 text-center text-lg font-extrabold sm:tracking-tight lg:text-left lg:text-2xl'}>{campaign.title}</h1>
								<Bar />
							</div>
						</div>


						{/*gift box*/}
						<div className={'shadow-xl shadow-md col-span-2 row-span-1 space-y-2  rounded-md bg-gray-100 p-2'}>
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
									<input type={'number'} placeholder={'Other'} className={' h-6 h-full w-full rounded-md border-2 border-gray-400 p-2 text-2xl text-black'} onChange={handleAmountChange} />
								</div>
								<div className={''}>
									<button className={'h-12 w-full bg-green-600 rounded-md text-3xl text-white text-shadow-md hover:bg-accent' + ' rounded-xs'} onClick={handleSubmit}>
										<p className={'text-white'}>Donate</p>
									</button>
								</div>
							</form>
							<div className={'float-right'}>
								<div className={'flex justify-center space-x-2 lg:place-items-end lg:justify-end '}>
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
	const buttonClasses = `rounded-md w-full p-1 text-2xl text-white text-shadow-md h-full hover:bg-petBlue ${value === currentAmount ? 'bg-petBlue' : 'bg-gray-400'}`
	return (
		<div>
			<button className={buttonClasses} value={value} type={'button'} onClick={onClick}>
				<p className={'text-white'}>{`$${value}`}</p>
			</button>
		</div>
	)
}

const Bar = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: dog,
	}

	return (
		<div className={'p-3'}>

			<div className={'relative'} data-tip={`Currently at ` + (campaign.raisedDecimal / campaign.goalDecimal) * 100 + `% of our goal`}>
				<div className={'shadow relative mt-2 w-full overflow-hidden rounded-full bg-green-100'}>
					<div className={'rounded-l-full bg-green-500 py-1 text-center text-xs leading-none text-white '} style={{ width: (campaign.raisedDecimal / campaign.goalDecimal) * 100 + '%' }}/>
				</div>
				<div className={`absolute -top-[42px]`} style={{
					left: `calc(${(campaign.raisedDecimal / campaign.goalDecimal) * 100}% - 40px)` }}>
					<div
						style={{
							transform: 'scaleX(-1)',
						}}
					>
						<Lottie options={defaultOptions} height={75} width={75} isClickToPauseDisabled={true} />
					</div>
				</div>

				{/*Percentage display*/}
				{/*<div className={'text-primary-white absolute bottom-0 left-1/2 top-1'}>
		{parseInt(((campaign.raisedDecimal / campaign.goalDecimal) * 100).toFixed(0)) <= 9 ? (
			<span className={'text-xs'}>
				<span>{((campaign.raisedDecimal / campaign.goalDecimal) * 100).toFixed(0)}%</span>
			</span>
		) : (
			<span className={'text-xs'}>{((campaign.raisedDecimal / campaign.goalDecimal) * 100).toFixed(0)}%</span>
		)}
	</div>*/}
			</div>
			<div className={'flex justify-center justify-items-center pt-3 text-center'}>
				<span className={'pr-1 font-bold'}>${campaign.raisedDecimal}</span>
				<p> raised of ${campaign.goalDecimal}</p>
			</div>
		</div>
		)

}
