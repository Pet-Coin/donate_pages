
import React from 'react'
interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelKey?: string
	label?: string | any
}
export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(({ labelKey, label, ...rest }, ref) => {
	return (
		<label className={'group flex cursor-pointer items-center text-sm text-heading'}>
			<input type={'checkbox'} className={'form-checkbox h-5 w-5 cursor-pointer rounded border border-gray-300 transition duration-500 ease-in-out checked:bg-heading hover:border-heading checked:hover:bg-heading focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:bg-heading focus-visible:outline-none'} ref={ref} {...rest} />
			<span className={'-mt-0.5 ms-4'}>{labelKey ? (labelKey) : label}</span>
		</label>
	)
})
