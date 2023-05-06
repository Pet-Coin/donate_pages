import Container from '@components/ui/container'
import Divider from '@components/ui/divider'
import WidgetLink from '@components/widgets/widget-link'
import cn from 'classnames'

interface WidgetsProps {
	widgets: {
		id: number
		widgetTitle?: string
		lists: any
		isCompanyIntroduction?: boolean
		logo?: any
	}[]

	variant?: 'contemporary'
}

const Widgets: React.FC<WidgetsProps> = ({ widgets, variant }) => {
	return (
<>
		{/* Hacky.. */}
		<div className={"py-2"} />
		<Divider className={"py-2"} />

		<Container>
			
			<div
				className={cn(' p-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-9 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1', {
					'xl:grid-cols-4': variant !== 'contemporary',
					'xl:grid-cols-6': variant === 'contemporary',
				})}
			>
				{widgets?.map((widget) => (
					<WidgetLink key={`footer-widget--key${widget.id}`} data={widget} className={'pb-3 md:pb-0'} variant={'contemporary'} />
				))}
			</div>
		</Container>
</>
	)
}

export default Widgets
