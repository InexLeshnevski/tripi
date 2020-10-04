import React from 'react'
import SVGIcon from './SVGIcon'

import './Feature.css'

export default function Feature({iconID, heading, description}) {
	return (
		<>
			<div className='heading-wrapper'>
				{iconID &&
					<SVGIcon 
						className='feature-icon'
						iconID={iconID} 
					/>
				}
				<h3 className='feature-heading'>
					{heading}
				</h3>
			</div>	
			{description &&
				<p className='feature-description'>
					{description}
				</p>
			}
		</>
	)
}
