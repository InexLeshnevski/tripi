import React from 'react'

import './Copyright.css'

export default function Copyright() {
	const currentYear = new Date().getFullYear()

	return (
		<span className='copyright'>
			© 2018-{currentYear} Newsoft | All Rights Reserved
		</span>
	)
}
