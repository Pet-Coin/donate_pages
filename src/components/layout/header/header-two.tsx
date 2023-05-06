import LanguageSwitcher from '@components/ui/language-switcher'
import Logo from '@components/ui/logo'
import { ROUTES } from '@utils/routes'

import dynamic from 'next/dynamic'
import { useRef } from 'react'
const AuthMenu = dynamic(() => import('./auth-menu'), { ssr: false })


type DivElementRef = React.MutableRefObject<HTMLDivElement>

const HeaderTwo: React.FC = () => {


	return (
		<header id={'siteHeader'}  className={'relative z-20 h-16 w-full sm:h-20 lg:h-24'}>
			<div className={'innerSticky body-font fixed z-20 h-16 w-full bg-white px-4 text-gray-700 transition duration-200 ease-in-out sm:h-20 lg:h-24 lg:pe-6'}>
				<div className={'mx-auto flex h-full w-full max-w-[1920px] items-center'}>
					<button aria-label={'Menu'} className={'menuBtn hidden h-full shrink-0 flex-col items-center justify-center outline-none pe-5 focus:outline-none md:flex 2xl:pe-7'}>
						<span className={'menuIcon'}>
							<span className={'bar'} />
							<span className={'bar'} />
							<span className={'bar'} />
						</span>
					</button>
					<Logo />

					<div className={'flex w-full items-center justify-end md:me-5 xl:me-8 2xl:me-10'}>
						<LanguageSwitcher />
					</div>
					<div className={'hidden shrink-0 items-center justify-end ms-auto space-s-6 md:flex lg:space-s-5 xl:space-s-8 2xl:space-s-10'}>
						{/*<button className={'relative flex h-auto shrink-0 items-center justify-center focus:outline-none'} onClick={openSearch} aria-label={'search-button'}>
							<SearchIcon />
						</button>*/}
						<div className={'-mt-0.5 shrink-0'}>
							<AuthMenu
								href={ROUTES.ACCOUNT}
								className={'text-sm font-semibold text-heading xl:text-base'}
								btnProps={{
									className: 'text-sm xl:text-base text-heading font-semibold focus:outline-none',
									children: 'Sign In',
								}}
							>
								Account
							</AuthMenu>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default HeaderTwo
