import HomeIcon from '@components/icons/home-icon'
import MenuIcon from '@components/icons/menu-icon'
import UserIcon from '@components/icons/user-icon'
import Link from 'next/link'
import { ROUTES } from '@utils/routes'
import dynamic from 'next/dynamic'
import {useState} from "react"
import {BsCart4} from "react-icons/bs"

const Login = () => {
	return (
		<button
			className={' flex-shrink-0 focus:outline-none'}
		>
			<UserIcon width={'24'} height={'24'} color={'white'}/>,
		</button>
	)
}

const BottomNavigation: React.FC = () => {
	const [state, setState] = useState(false)


	const toggleDrawer =
		( open: boolean) =>
			(event: React.KeyboardEvent | React.MouseEvent) => {
				if (
					event &&
					event.type === 'keydown' &&
					((event as React.KeyboardEvent).key === 'Tab' ||
						(event as React.KeyboardEvent).key === 'Shift')
				) {
					return
				}
				console.log(open)
				setState(open)
			}

	return (
		<>
			<div className={'body-font fixed bottom-0 z-10 flex h-14 w-full items-center justify-between bg-petBlue px-4 text-gray-700 shadow-bottomNavigation sm:h-16 md:px-8 lg:hidden'}>
				<Link href={'/'} className={'shrink-0'}>
					<HomeIcon color={'white'} width={"24"} height={"24"}/>
				</Link>
				<Login />
				<button className={'relative flex h-auto shrink-0 items-center justify-center focus:outline-none'} aria-label={'cart-button'}>
					<BsCart4 className={'h-7 w-7 text-white'} />

					<span className={'cart-counter-badge absolute -top-2.5 -right-3 flex items-center justify-center rounded-full bg-white font-bold text-petBlue -end-2.5 xl:-top-3 xl:-end-3'}>5</span>
				</button>

				<button aria-label={'Menu'} className={'menuBtn flex shrink-0 flex-col items-center justify-center outline-none focus:outline-none'} onClick={toggleDrawer(!state)}>
					<MenuIcon color={'white'}  width={24} height={24}/>
				</button>
			</div>
		</>
	)
}

export default BottomNavigation
