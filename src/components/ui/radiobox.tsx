
import React from 'react'
interface RadioBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
	labelKey: string | React.ReactElement
}
export const RadioBox = React.forwardRef<HTMLInputElement, RadioBoxProps>(({ labelKey, ...rest }, ref) => {
	return (
		<label className={'group flex cursor-pointer items-center text-sm text-heading'}>
			<input type={'radio'} className={'form-radio h-5 w-5 cursor-pointer rounded-full border border-gray-300 text-heading transition duration-500 ease-in-out checked:bg-heading hover:border-heading focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:outline-none'} ref={ref} {...rest} />
			<span className={'relative text-sm text-heading ms-2'}>{(`${labelKey}`)}</span>
		</label>
	)
})
