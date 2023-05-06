import HeaderMenu from '@components/layout/header/header-menu'
import Button from '@components/ui/button'
import { siteSettings } from '@settings/site-settings'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import {ROUTES} from "@utils/routes"
import cn from "classnames"
import Image from "next/legacy/image"
import Link from "@components/ui/link"


type DivElementRef = React.MutableRefObject<HTMLDivElement>
const { site_header } = siteSettings
const Header = ({site}: {site: {
	logoUrl: string,
		width: number,
		height: number,
		url: string
}}) => {
	const SignInButtons = () => {
		return (
			<div className={'flex'}>
				<div className={'text-primary-white inline-flex space-x-1 text-base font-medium md:items-center md:justify-center md:gap-x-3 md:space-y-0 md:whitespace-nowrap md:py-0'}>
					<div className={'shrink-0  '}>
						<Button
							variant={'flat'}
							disableBorderRadius={true}
							className={'h-11 w-20 bg-petBlue md:h-12'}

						>
							Logout
						</Button>
					</div>
					<div className={'shrink-0 '}>
						<Button
							variant={'flat'}
							disableBorderRadius={true}
							className={'h-11 w-20 bg-petBlue md:h-12 '}

						>
							Account
						</Button>
					</div>
				</div>
			</div>
		)
	}

	return (
		<>

			<header id={'siteHeader'} className={'w-7xl relative sticky top-0 z-20 z-50 h-16 sm:h-20 lg:h-24'}>
				<script type={'module'} src={'../../../lib/payments'} defer></script>

				<div className={' innerSticky body-font relative z-20 h-16 w-full border-b  border-gray-300 bg-white px-4 text-gray-700 drop-shadow transition duration-200 ease-in-out sm:h-20 md:px-8 lg:h-24 lg:px-6'}>
					<div className={'w-7xl flex h-full  max-w-7xl items-center justify-center'}>
						<Link href={site.url} className={cn('inline-flex focus:outline-none')} >
							<div className={'hidden sm:flex sm:flex-col'}>
								<div>
									<Image src={site.logoUrl} alt={''} height={site.height} width={site.width} layout={'fixed'} loading={'eager'} />
								</div>
							</div>

							<div className={'mt-2 p-2 sm:hidden'}>
								<div>
									<Image src={site.logoUrl} alt={''} height={site.height} width={site.width} layout={'fixed'} loading={'eager'} />
								</div>
							</div>
						</Link>

						<HeaderMenu data={site_header.menu} className={'hidden md:ms-6 lg:flex xl:ms-10'} />

						<div className={'shrink-0 ms-auto '}>
							<SignInButtons />
						</div>
						<div className={'hidden shrink-0 items-center justify-end ms-auto space-s-6 lg:flex lg:space-s-5 xl:space-s-8 2xl:space-s-10'}>
							<div className={'-mt-0.5 shrink-0'}></div>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}

export default Header
