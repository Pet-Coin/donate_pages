import cn from 'classnames'
import { ButtonHTMLAttributes, forwardRef } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	variant?: 'flat' | 'slim' | 'smoke' | ''
	active?: boolean
	type?: 'submit' | 'reset' | 'button'
	loading?: boolean
	disabled?: boolean
	disableBorderRadius?: boolean
}

// eslint-disable-next-line react/display-name
const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	const { className, variant = 'flat', children, active, loading = false, disabled = false, disableBorderRadius = false, ...rest } = props

	const rootClassName = cn(
		'text-[13px] md:text-sm rounded-md leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent placeholder-white focus-visible:outline-none focus:outline-none',
		{
			'rounded-md ': !disableBorderRadius,
			'rounded-md  px-1 md:px-2 lg:px-3 py-4 md:py-3.5 lg:py-4  hover:shadow-cart': variant === 'flat',
			'rounded-md h-11 md:h-12 px-5  text-white py-2 transform-none normal-case hover:text-white': variant === 'slim',
			'rounded-md h-11 md:h-12 px-5 bg-gray-200 text-heading py-2 transform-none normal-case hover:bg-gray-300': variant === 'smoke',
			'rounded-md cursor-not-allowed': loading,
			'rounded-md cursor-not-allowed hover:cursor-not-allowed': disabled,
		},
		className,
	)

	return (
		<button aria-pressed={active} data-variant={variant} ref={ref} className={rootClassName} disabled={disabled} {...rest}>
			{children}
			{loading && (
				<svg className={'h-5 w-5 animate-spin text-white -me-1 ms-3'} xmlns={'http://www.w3.org/2000/svg'} fill={'none'} viewBox={'0 0 24 24'}>
					<circle className={'opacity-25'} cx={'12'} cy={'12'} r={'10'} stroke={'currentColor'} strokeWidth={'4'} />
					<path className={'opacity-75'} fill={'currentColor'} d={'M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'} />
				</svg>
			)}
		</button>
	)
})

export default Button
