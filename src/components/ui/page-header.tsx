

interface HeaderProps {
	pageSubHeader?: string
	pageHeader: string
}

const PageHeader: React.FC<HeaderProps> = ({ pageSubHeader = 'text-page-explore', pageHeader = 'text-page-header' }) => {
	return (
		<div
			className={'relative flex justify-center bg-cover bg-center bg-no-repeat p-6 md:p-10 2xl:p-8'}
			// style={{
			// 	backgroundImage: "url(/assets/images/page-header.webp)",
			// }}
		>
			<div className={'absolute top-0 h-full w-full bg-black opacity-50 transition-opacity duration-500 start-0 group-hover:opacity-80'} />
			<div className={'relative z-10 flex w-full items-center justify-center py-10 md:py-14 lg:py-20 xl:py-24 2xl:py-32'}>
				<h2 className={'text-center text-xl font-bold text-white md:text-2xl lg:text-3xl'}>
					<span className={'mb-3 block font-satisfy font-normal'}>{(`${pageSubHeader}`)}</span>
					{(`${pageHeader}`)}
				</h2>
			</div>
		</div>
	)
}

export default PageHeader
