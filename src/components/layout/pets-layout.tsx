"use client"

import Footer from '@components/layout/footer/footer'
import Header from '@components/layout/header/header'
import MobileNavigation from '@components/layout/mobile-navigation/mobile-navigation'
import Button from '@components/ui/button'
import {ROUTES} from "@utils/routes"


export const SITE = {
	STORE: {
		logoUrl: '/petstore.love.webp',
		width: 180,
		height: 42,
		url: ROUTES.STORE,
	},
	PETS: {
		logoUrl: '/invertedlogo.webp',
		width: 180,
		height: 59,
		url: ROUTES.HOME,

	},
}
export default function PetsLayout({ children }: React.PropsWithChildren<{}>) {
	return (
		<div className={'mx-auto min-h-screen w-full flex-col'}>
		{/* <div className={'mx-auto min-h-screen max-w-7xl flex-col'}> */}
			<div
				id={"searchOverlay"}
				className={`fixed top-0 left-0 z-50 flex h-full h-screen w-full w-screen items-center justify-center bg-black opacity-0 transition-all duration-300 ease-in-out`}
			/>
			<Header site={SITE.PETS} />
			<main
				className={'lpt-5 relative mx-auto max-w-7xl grow '}
				// className={'lpt-5 relative max-w-7xl grow '}
				data-theme={'petslove'}
				style={{
					WebkitOverflowScrolling: 'touch',
				}}
			>
				{children}
			</main>
			<Footer />
			<MobileNavigation />
		</div>
	)
}
