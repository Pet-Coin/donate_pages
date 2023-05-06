import Logo from '@components/ui/logo'

import Link from 'next/link'
import type { FC } from 'react'

interface Props {
	className?: string
	data: {
		widgetTitle?: string
		lists: {
			id: string
			path?: string
			title: string
			icon?: any
			email: {
				title: string
				path: string
				icon: any
			}
			phone: {
				title: string
				path: string
				icon: any
			}
		}[]
		logo?: any
		description?: string
		isCompanyIntroduction?: boolean
	}
	variant?: 'contemporary'
}

const WidgetLink: FC<Props> = ({ className, data }) => {
	const { widgetTitle, lists } = data
	const { logo, description } = data

	return (
		<div className={`${className} `}>
			{!data?.isCompanyIntroduction ? (
				<>
					<h4 className={'mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7'}>{(`${widgetTitle}`)}</h4>
					<ul className={'flex flex-col space-y-3 text-xs text-body lg:space-y-3.5 lg:text-sm'}>
						{lists.map((list, index) => (
							<li key={`widget-list--key${index}`} className={'flex flex-col'}>
								<div className={'flex items-baseline'}>
									{list.icon && <span className={'relative top-0.5 text-sm me-3 lg:top-1 lg:text-base'}>{list.icon}</span>}
									<Link href={list.path ? list.path : '#!'} className={'font-semibold transition-colors duration-200 hover:text-black'}>
										{(`${list.title}`)}
									</Link>
								</div>

								<div className={'flex flex-col'}>
									{list.email && (
										<div  className={'flex items-baseline'}>
											{list.email.icon && <span className={'relative top-0.5 text-sm me-3 lg:top-1 lg:text-base'}>{list.email.icon}</span>}
											<Link href={list.email.path ? list.email.path : '#!'} className={'transition-colors duration-200 hover:text-black'}>
												{(`${list.email.title}`)}
											</Link>
										</div>
									)}
									{list.phone && (
										<div className={'flex items-baseline'}>
											{list.phone.icon && <span className={'relative top-0.5 text-sm me-3 lg:top-1 lg:text-base'}>{list.phone.icon}</span>}
											<Link href={list.phone.path ? list.phone.path : '#!'} className={'transition-colors duration-200 hover:text-black'}>
												{(`${list.phone.title}`)}
											</Link>
										</div>
									)}
								</div>
							</li>
						))}
					</ul>
				</>
			) : (
				<div className={'lg:space-y-7.5 flex flex-col space-y-7 me-4'}>
					<Logo className={''} />
					<p className={'max-w-[334px] text-sm font-normal leading-6 text-[#1D1E1F] '}>{description}</p>
					<ul className={'flex items-center space-x-3 text-xs text-body lg:space-x-3.5 lg:text-sm'}>
						{lists.map((list, index) => (
							<li key={`widget-list--key${index}`} className={'flex items-baseline'}>
								{list.icon && <span className={'relative top-0.5 text-sm me-3 lg:top-1 lg:text-base'}>{list.icon}</span>}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	)
}

export default WidgetLink
