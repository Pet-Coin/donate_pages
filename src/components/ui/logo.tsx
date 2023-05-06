import Link from '@components/ui/link'
import { siteSettings } from '@settings/site-settings'
import cn from 'classnames'
import Image from 'next/legacy/image'

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({ className, ...props }) => {
	return (
		<Link href={siteSettings.logo.href} className={cn('inline-flex focus:outline-none', className)} {...props}>
			<div className={'hidden sm:flex sm:flex-col'}>
				<div>
					<Image src={siteSettings.logo.url} alt={siteSettings.logo.alt} height={siteSettings.logo.height} width={siteSettings.logo.width} layout={'fixed'} loading={'eager'} />
				</div>
				{/*<div className=" text-center text-sm -mt-1">Every pet deserves .Love <FaHeart className="text-red-500 inline" /></div>*/}
			</div>

			<div className={'sm:hidden'}>
				<div>
					<Image src={siteSettings.logo.url} alt={siteSettings.logo.alt} height={siteSettings.logo.mobileHeight} width={siteSettings.logo.mobileWidth} layout={'fixed'} loading={'eager'} />
				</div>
				{/*<div className=" text-center text-xs -mt-1">Every pet deserves .Love <FaHeart className="text-red-500 inline" /></div>*/}
			</div>
		</Link>
	)
}

export default Logo
