import Link from '@components/ui/link'
import Logo from '@components/ui/logo'
import { siteSettings } from '@settings/site-settings'
import { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Button from "@components/ui/button"
import {ROUTES} from "@utils/routes"
import {useRouter} from "next/navigation"
import {Scrollbar} from "swiper";

export default function MobileMenu() {
	const SubMenu = ({ dept, data, toggle, menuIndex }: any) => {
		if (!toggle) {
			return null
		}

		dept = dept + 1

		return (
			<ul className={'pt-0.5'}>
				{data?.map((menu: any, index: number) => {
					const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

					// eslint-disable-next-line no-use-before-define
					return <ListMenu dept={dept} data={menu} hasSubMenu={menu.subMenu} menuName={menuName} key={menuName} menuIndex={index} className={dept > 1 && 'ps-4'} />
				})}
			</ul>
		)
	}
	const ListMenu = ({ dept, data, hasSubMenu, menuName, menuIndex, className = '' }: any) =>
		data.label && (
			<li className={`mb-0.5 ${className}`}>
				<div className={'relative flex items-center justify-between'}>
					<Link href={data.path} className={'menu-item relative w-full py-3 text-[15px] transition duration-300 ease-in-out pe-4 ps-5 md:ps-6'}>
						<span className={'block w-full'} >
							{(`${data.label}`)}
						</span>
					</Link>
					{hasSubMenu && (
						<div className={'absolute top-0 flex h-full w-full cursor-pointer items-center justify-end text-lg pe-5 start-0'} >
							<IoIosArrowDown className={`text-heading transition duration-200 ease-in-out`} />
						</div>
					)}
				</div>
			</li>
		)



	const router = useRouter()
	const SignInButtons = () => {
		if (status === 'authenticated') {
			return (
				<div className={'flex'}>
					<div className={'text-primary-white inline-flex space-x-1 text-base font-medium md:items-center md:justify-center md:gap-x-3 md:space-y-0 md:whitespace-nowrap md:py-0'}>
						<div className={'shrink-0  '}>
							<Button
								variant={'flat'}
								disableBorderRadius={true}
								className={'h-11 w-20 bg-white text-petBlue hover:text-petBlue/60 md:h-12'}
							>
								Logout
							</Button>
						</div>
						<div className={'shrink-0 '}>
							<Button
								variant={'flat'}
								disableBorderRadius={true}
								className={'h-11 w-20 bg-white text-petBlue hover:text-petBlue/60 md:h-12 '}
								onClick={async () => {
									await router.push('/profile')
								}}
							>
								Account
							</Button>
						</div>
					</div>
				</div>
			)
		} else {
			return (
				<div className={'flex '}>
					<div className={'text-primary-white inline-flex space-x-1 text-base font-medium md:items-center md:justify-center md:gap-x-3 md:space-y-0 md:whitespace-nowrap md:py-0'}>
						<div className={'shrink-0 '}>
							<Button
								variant={'flat'}
								disableBorderRadius={true}
								className={'h-11 w-20 bg-white text-petBlue hover:text-petBlue/60 md:h-12 '}
								onClick={async () => {
									await router.push(ROUTES.SIGN_UP)
								}}
							>
								Sign Up
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
								Login
							</Button>
						</div>
					</div>
				</div>
			)
		}
	}

	const { site_header } = siteSettings


	return (
		<>
			<div className={'flex h-full w-full flex-col justify-between'}>
				<div className={'relative flex w-full shrink-0 items-center justify-between border-b border-gray-100 py-0.5 md:ps-7'}>
					<div className={"mx-auto pt-2 pb-1"}>
					<Logo />
					</div>

					{/*<button className={'flex items-center justify-center px-4 py-6 text-2xl text-gray-500 transition-opacity hover:opacity-60 focus:outline-none md:px-6 lg:py-8'} onClick={closeSidebar} aria-label={'close'}>
						<IoClose className={'mt-1 text-black md:mt-0.5'} />
					</button>*/}
				</div>



				<div className={'flex hidden shrink-0 items-center justify-center border-t border-gray-100 bg-white px-7 space-s-1'}>
					{/* <button onClick={toggleDrawer(false)}>
					<ImMenu3 className='text-4xl my-2'/>
					</button> */}
					{/* {siteSettings.socials?.map((item, index) => (
						<a href={item.path} className={`p-5 text-heading opacity-60 transition duration-300 ease-in first:-ms-4 hover:opacity-100 ${item.className}`} target={'_blank'} key={index} rel={'noreferrer'}>
							<span className={'sr-only'}>{(`${item.title}`)}</span>
							{item.icon}
						</a>
					))} */}
				</div>
			</div>
		</>
	)
}
