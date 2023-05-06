import Link from '@components/ui/link'
import ListMenu from '@components/ui/list-menu'
import MegaMenu from '@components/ui/mega-menu'
import classNames from 'classnames'
import { FaChevronDown } from 'react-icons/fa'

interface MenuProps {
	data: any
	className?: string
}

const HeaderMenu: React.FC<MenuProps> = ({ data, className }) => {
	return (
		<nav className={classNames(` flex w-full relative justify-evenly max-w-7xl mx-auto`, className)}>
			{data?.map((item: any) => (
				<div className={`  border-b  border-gray-300  hover:border-petBlue   ${item.subMenu ? 'relative' : ''}`} key={item.id}>
					<Link href={item.path} className={'relative mb-1 mt-1.5 inline-flex items-center px-3 pb-2 text-lg font-semibold text-heading group-hover:text-black xl:px-4 xl:text-base'}>
						{(item.label)}
						{(item?.columns || item.subMenu) && (
							<span className={'mt-1 flex w-4 justify-end text-xs opacity-30 xl:mt-0.5'}>
								<FaChevronDown className={'transition duration-300 ease-in-out group-hover:-rotate-180'} />
							</span>
						)}
					</Link>

					{item?.columns && Array.isArray(item.columns) && <MegaMenu columns={item.columns} />}

					{item?.subMenu && Array.isArray(item.subMenu) && (
						<div className={'subMenu invisible absolute bg-gray-200 opacity-0  start-0 group-hover:visible group-hover:opacity-100'}>
							<ul className={' text-sm text-body'}>
								{item.subMenu.map((menu: any, index: number) => {
									const dept: number = 1
									const menuName: string = `sidebar-menu-${dept}-${index}`

									return <ListMenu dept={dept} data={menu} hasSubMenu={menu.subMenu} menuName={menuName} key={menuName} menuIndex={index} />
								})}
							</ul>
						</div>
					)}
				</div>
			))}
		</nav>
	)
}

export default HeaderMenu
