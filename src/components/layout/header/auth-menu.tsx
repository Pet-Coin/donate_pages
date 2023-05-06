import Link from '@components/ui/link'
interface Props {
	href: string
	className?: string
	btnProps: React.ButtonHTMLAttributes<any>
	redirectUrl?: string
}

export default function AuthMenu({ href, className, btnProps, children, redirectUrl }: React.PropsWithChildren<Props>) {
	return status === 'authenticated' ? (
		<Link href={href} className={className}>
			{children}
		</Link>
	) : (
		<button
			{...btnProps}
			className={className}
		/>
	)
}
