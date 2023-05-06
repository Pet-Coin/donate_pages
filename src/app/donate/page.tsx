import Image from 'next/image'
import { DonateBox } from '@components/donations/DonateBox'
import {Metadata} from "next"
import {ROUTES} from "@utils/routes"


export async function generateMetadata({ params }: any): Promise<Metadata> {
	return {
		title: 'Support Nearby Pet Rescues: Donate Today!',
		description: 'Help pets in need by donating to local rescues. Your support can make a difference in their lives. Give today and make a positive impact in your community.',
		openGraph: {
			type: 'website',
			url: `https://www.pets.love/${ROUTES.DONATE}}`,
			title:'Support Nearby Pet Rescues: Donate Today!',
			description:'Help pets in need by donating to local rescues. Your support can make a difference in their lives. Give today and make a positive impact in your community.'
		}
	}
}
export default async function Page() {
	return (
		<div>
			<div className={'h-50 w-full bg-petBlue pb-32 pt-10'}>
				<h1 className={'text-center text-6xl font-semibold text-white'}>Be the hero pets need today</h1>
				<div className={'relative'}>
					<Image src={'/store/donate_pup.png'} width={240} height={240} alt={''} className={'absolute -top-[29px]'} />
					<Image src={'/store/donate_kitten.png'} width={140} height={140} alt={''} className={'absolute -top-[-23px] right-5'} />
				</div>
			</div>

			<DonateBox />
		</div>
	)
}
