import React from 'react'

import './Arrow.css'

export default function Arrow() {
	return (
		<svg 
			className='arrow-icon-wrapper'
			width='15' 
			height='15' 
			viewBox='0 0 15 15' 
			fill='none' 
			xmlns='http://www.w3.org/2000/svg'
		>
			<path 
				className='arrow-icon'
				d='M5 13.5L11 7.5L5 1.5' 
				strokeLinecap='round'
				strokeLinejoin='round'
				vectorEffect='non-scaling-stroke'
			/>
		</svg>
	)
}