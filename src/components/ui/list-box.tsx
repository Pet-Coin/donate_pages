import { Listbox, Transition } from '@headlessui/react'

import { useRouter } from 'next/router'
import { Fragment, useEffect, useState } from 'react'
import { HiCheck, HiOutlineSelector } from 'react-icons/hi'
type Option = {
	name: string
	value: string
}

export default function ListBox({ options }: { options: Option[] }) {
	const router = useRouter()
	const { pathname, query } = router
	const currentSelectedItem = query?.sort_by ? options.find((o) => o.value === query.sort_by)! : options[0]
	const [selectedItem, setSelectedItem] = useState<Option>(currentSelectedItem)
	useEffect(() => {
		setSelectedItem(currentSelectedItem)
	}, [query?.sort_by])
	function handleItemClick(values: Option) {
		setSelectedItem(values)
		const { sort_by, ...restQuery } = query
		router.push(
			{
				pathname,
				query: {
					...restQuery,
					...(values.value !== options[0].value ? { sort_by: values.value } : {}),
				},
			},
			undefined,
			{ scroll: false },
		)
	}

	return (
		<Listbox value={selectedItem} onChange={handleItemClick}>
			{({ open }) => (
				<div className={'relative z-10 min-w-[180px] ms-2 lg:ms-0'}>
					<Listbox.Button className={'shadow-md relative  w-full cursor-pointer rounded-lg border  border-gray-300 bg-white py-2 text-[13px] font-semibold text-heading ps-3 pe-10 text-start focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm md:text-sm'}>
						<span className={'block truncate'}>{(selectedItem.name)}</span>
						<span className={'pointer-events-none absolute inset-y-0 flex items-center pe-2 end-0'}>
							<HiOutlineSelector className={'h-5 w-5 text-gray-400'} aria-hidden={'true'} />
						</span>
					</Listbox.Button>
					<Transition show={open} as={Fragment} leave={'transition ease-in duration-100'} leaveFrom={'opacity-100'} leaveTo={'opacity-0'}>
						<Listbox.Options static className={'shadow-lg absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-sm ring-1 ring-black ring-opacity-5 focus:outline-none'}>
							{options?.map((option, personIdx) => (
								<Listbox.Option
									key={personIdx}
									className={({ active }) =>
										`${active ? 'text-amber-900 bg-gray-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 ps-10 pe-4`
									}
									value={option}
								>
									{({ selected, active }) => (
										<>
											<span className={`${selected ? 'font-medium' : 'font-normal'} block truncate`}>{(option.name)}</span>
											{selected ? (
												<span
													className={`${active ? 'text-amber-600' : ''}
                                check-icon absolute inset-y-0 flex items-center ps-3 start-0`}
												>
													<HiCheck className={'h-5 w-5'} aria-hidden={'true'} />
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			)}
		</Listbox>
	)
}
