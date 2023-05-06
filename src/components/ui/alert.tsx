interface AlertProps {
	message?: string
}

const Alert: React.FC<AlertProps> = ({ message }) => {
	return <div className={'flex h-full items-center justify-center rounded border border-red-200 py-4 px-5 text-sm font-semibold text-red-600'}>{message}</div>
}

export default Alert
