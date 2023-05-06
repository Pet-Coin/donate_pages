import HeaderMenu from '@components/layout/header/header-menu'
import Button from '@components/ui/button'
import { siteSettings } from '@settings/site-settings'
import { SearchBar } from "@components/ui/search-bar"


type DivElementRef = React.MutableRefObject<HTMLDivElement>
const { site_header } = siteSettings
const Header = ({ site }: {
	site: {
		logoUrl: string,
		width: number,
		height: number,
		url: string
	}
}) => {
	const SignInButtons = () => {
		return (
			<div className={'flex'}>
				<div className={'inline-flex space-x-1 text-base font-medium md:items-center md:justify-center md:gap-x-3 md:space-y-0 md:whitespace-nowrap md:py-0'}>
					<div className={'shrink-0  '}>
						<Button
							variant={'flat'}
							disableBorderRadius={true}
							className={'h-11 w-20 bg-white text-petBlue hover:text-petBlue/60 md:h-12'}
						>
							<p className={'text-petBlue'}>
								Logout
							</p>
						</Button>
					</div>
					<div className={'shrink-0 '}>
						<Button
							variant={'flat'}
							disableBorderRadius={true}
							className={'h-11 w-20 bg-white text-petBlue hover:text-petBlue/60 md:h-12 '}
							onClick={async () => {
							}}
						>
							<p className={'text-petBlue'}>
								Account
							</p>
						</Button>
					</div>
				</div>
			</div>
		)
	}


	return (
		<>

			<header id={'siteHeader'} className={'w-7xl h-30 relative sticky top-0 z-50 '}>

				<div className={' innerSticky body-font relative z-20 h-20 w-full  bg-petBlue px-4 text-gray-700 transition duration-200 ease-in-out  md:px-8 lg:px-6'}>
					<div className={'w-7xl mx-auto flex h-full max-w-7xl flex-col items-center justify-center'}>
						<div className={'flex w-full items-center justify-center py-2'}>




							<div className={' w-full md:px-10 '}>
								{/* <SearchBar setSearch={setSearch} search={search} onSubmit={onSubmit} placeHolder={'Search in PetStore for Purina, Pedigree, Royal Canin, etc.'} /> */}
								<SearchBar  />
							</div>
							<div className={'hidden shrink-0  ms-auto md:flex'}>
								<SignInButtons />
								{/* <LanguageSwitcher /> */}
							</div>
							<div className={'hidden shrink-0 items-center justify-end ms-auto space-s-6 lg:flex lg:space-s-5 xl:space-s-8 2xl:space-s-10'}>
								<div className={'-mt-0.5 shrink-0'}></div>
							</div>
						</div>


					</div>
				</div>

				<div className={''}>
					<div className={'innerSticky body-font relative z-0 hidden h-8 w-full  bg-white pt-0 py-2 text-gray-700  transition duration-200 ease-in-out sm:h-5 lg:flex lg:h-10 '}>
						<HeaderMenu data={site_header.menu} className={''} />

					</div>
				</div>


			</header>
		</>
	)
}

export default Header