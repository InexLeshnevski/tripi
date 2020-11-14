import React from 'react'

import './Select.css'

export default function Select({label, options, selectID}) {
	const renderedOptions = options.map((option, index) => {
		const value = option.toLowerCase()

		return (
			<option key={index} value={value}>
				{option}
			</option>
		)
	})

	return (
		<div className='select-wrapper'>
			<label className='visually-hidden' htmlFor={selectID}>{label}</label>
			<select 
				id={selectID}
				className='select'
			>
				<option>
					{label}
				</option>
				{renderedOptions}
			</select>
		</div>
	)
}
