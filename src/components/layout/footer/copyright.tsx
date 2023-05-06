import Link from 'next/link'
import { AiOutlineArrowUp } from 'react-icons/ai'

interface CopyrightProps {
	payment?: {
		id: string | number
		path?: string
		name: string
		image: string
		width: number
		height: number
	}[]
	variant?: 'contemporary'
}
const year = new Date().getFullYear()
const Copyright: React.FC<CopyrightProps> = ({ payment, variant }) => {
	return (
		<div className={'mb-2 border-t border-gray-300 pt-5 pb-16 sm:mb-0 md:pb-5'}>
			<div
				className={'flex items-center justify-center text-center align-middle'}
			>
				<div
					className={'m-0 flex flex-col items-center justify-center p-0 text-center align-middle text-xs leading-6 text-body md:flex-row lg:text-sm'}
				>
					<div className={'pr-1 text-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'} >
						Pet Store LLC
					</div>

					<div className={'pr-1 text-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'} >
						EIN: 88-3325251
					</div>
					<div className={'m-0 hidden px-1 md:block'}>|</div>
					<div className={'pr-1 text-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'} >
						PetRescue Inc. 501c3 nonprofit
					</div>
					<div className={'pr-1 text-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'} >
						EIN: 87-3962559
					</div>
					<div className={'m-0 hidden  px-1 md:block'}>|</div>

					<div className={'pr-1 text-center text-gray-700 transition-colors duration-200 ease-in-out hover:text-body'} >
						All rights reserved Copyright &copy; {year}&nbsp;
					</div>

				</div>

				{variant === 'contemporary' && (
					<div className={'cursor-pointer text-sm font-semibold leading-[19px] text-[#212121]'}>
						<Link href={'#siteHeader'}>Scroll to top</Link>

						<AiOutlineArrowUp className={'inline ms-3'} />
					</div>
				)}
			</div>
		</div>
	)
}

export default Copyright
