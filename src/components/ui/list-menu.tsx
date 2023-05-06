import cn from 'classnames'

import Image from 'next/legacy/image'
import { IoIosArrowForward } from 'react-icons/io'
import Link from './link'
import MegaMenu from './mega-menu'

const ListMenu = ({ dept, data, hasSubMenu, hasMegaMenu, hasBrands, hasBanners, menuIndex }: any) => {
	return (
		<li className={cn(!hasMegaMenu ? 'group relative' : '')}>
			<a href={data.path} className={'flex items-center py-2 pe-3 ps-5 hover:bg-gray-300 hover:text-heading xl:ps-7 xl:pe-3.5'}>
				{data.icon && <span className={'inline-flex me-2'}>{data.icon}</span>}
				{(data.label)}
				{data.subMenu && (
					<span className={'mt-0.5 ml-auto shrink-0 text-sm'}>
						<IoIosArrowForward className={'text-body transition duration-300 ease-in-out group-hover:text-black'} />
					</span>
				)}
			</a>
			{hasSubMenu && <SubMenu dept={dept} data={data.subMenu} menuIndex={menuIndex} />}
			{(hasMegaMenu || hasBrands || hasBanners) && (
				<div className={'categoryMegaMenu absolute flex w-[630px] bg-white shadow-header start-full xl:w-[1000px] 2xl:w-[1200px]'}>
					<div className={'shrink-0'}>
						<MegaMenu columns={hasMegaMenu} />
					</div>
					<div className={'hidden xl:block'}>
						<div className={'grid grid-cols-3 justify-items-center gap-3 p-6 2xl:py-8 2xl:px-7 3xl:grid-cols-3'}>
							{hasBrands.map((brand: any) => (
								<Link href={brand.path} key={brand.id} className={'rounded-md border border-gray-300 bg-gray-200'}>
									<Image src={brand.icon.src} height={60} width={150} alt={brand.label} />
								</Link>
							))}
						</div>
						<div className={'grid grid-cols-2 gap-3 border-t border-gray-300 p-6 2xl:py-8 2xl:px-7 '}>
							{hasBanners.map((banner: any) => (
								<Link href={banner.path} key={banner.id}>
									<img className={''} src={banner.image.src} alt={banner.label} />
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</li>
	)
}

const SubMenu: React.FC<any> = ({ dept, data, menuIndex }) => {
	dept = dept + 1
	return (
		<ul className={'subMenuChild invisible absolute top-4 z-0 w-56 bg-gray-200 py-3 opacity-0 shadow-subMenu end-full 2xl:end-auto 2xl:start-full'}>
			{data?.map((menu: any, index: number) => {
				const menuName: string = `sidebar-submenu-${dept}-${menuIndex}-${index}`

				return <ListMenu dept={dept} data={menu} hasSubMenu={menu.subMenu} menuName={menuName} key={menuName} menuIndex={index} />
			})}
		</ul>
	)
}

export default ListMenu
