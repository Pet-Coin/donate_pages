import Copyright from './copyright'
import { footer } from './data'
import Widgets from './widgets'
const { widgets, payment } = footer


const Footer: React.FC = () => (
	<footer className={' w-full border-b-4 border-heading  pt-2.5 lg:pt-0 2xl:pt-2 mx-auto max-w-7xl '}>
		<Widgets widgets={widgets} />
		<Copyright payment={payment} />
	</footer>
)

// @ts-ignore
export default Footer
