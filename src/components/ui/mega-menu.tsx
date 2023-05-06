import Link from '@components/ui/link'

import React from 'react'

interface MenuItem {
	id: number | string
	path: string
	label: string
	columnItemItems?: MenuItem[]
}
type MegaMenuProps = {
	columns: {
		id: number | string
		columnItems: MenuItem[]
	}[]
}

const MegaMenu: React.FC<MegaMenuProps> = ({ columns }) => {
	return (
		<div className={'megaMenu absolute bg-gray-200 shadow-header -start-28 xl:start-0'}>
			<div className={'grid grid-cols-5'}>
				{columns?.map((column) => (
					<ul className={'pt-6 pb-7 even:bg-gray-150 2xl:pb-8 2xl:pt-7'} key={column.id}>
						{column?.columnItems?.map((columnItem) => (
							<React.Fragment key={columnItem.id}>
								<li className={'mb-1.5'}>
									<Link href={columnItem.path} className={'block py-1.5 px-5 text-sm font-semibold text-heading hover:bg-gray-300 hover:text-heading xl:px-8 2xl:px-10'}>
										{(columnItem.label)}
									</Link>
								</li>
								{columnItem?.columnItemItems?.map((item: any) => (
									<li key={item.id} className={columnItem?.columnItemItems?.length === item.id ? 'mb-3 border-b border-gray-300 pb-3.5' : ''}>
										<Link href={item.path} className={'block py-1.5 px-5 text-sm text-body hover:bg-gray-300 hover:text-heading xl:px-8 2xl:px-10'}>
											{(item.label)}
										</Link>
									</li>
								))}
							</React.Fragment>
						))}
					</ul>
				))}
			</div>
		</div>
	)
}

export default MegaMenu
