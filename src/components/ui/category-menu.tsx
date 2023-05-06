import ListMenu from '@components/ui/list-menu'
import cn from 'classnames'

import { HiMenu } from 'react-icons/hi'

interface CategoryMenuProps {
	className?: string
	categoryMenu: any
}

const CategoryMenu: React.FC<CategoryMenuProps> = ({ className, categoryMenu }) => {

	return (
		<div className={cn('relative flex-shrink-0 categoryMenu', className)}>
			<div className={'relative flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-heading px-3.5 text-sm font-semibold text-white transition-colors before:absolute before:-bottom-2.5 before:z-10 before:h-2.5 before:w-full hover:bg-black xl:px-4'}>
				<HiMenu className={'text-xl'} />
				All Categories
			</div>
			{categoryMenu && Array.isArray(categoryMenu) && (
				<div className={'subMenu invisible absolute bg-white opacity-0 shadow-header start-0'}>
					<ul className={'relative py-5 text-sm text-body'}>
						{categoryMenu.map((menu: any, index: number) => {
							const dept: number = 1
							const menuName: string = `sidebar-menu-${dept}-${index}`
							return <ListMenu dept={dept} data={menu} hasSubMenu={menu.subMenu} hasMegaMenu={menu.columns} hasBrands={menu.brands} hasBanners={menu.banners} menuName={menuName} key={menuName} menuIndex={index} />
						})}
					</ul>
				</div>
			)}
		</div>
	)
}

export default CategoryMenu
