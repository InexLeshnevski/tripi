import React from 'react'
import SVGIcon from './SVGIcon'
import Image from './Image'

import './MapIllustration.css'

export default function MapIllustration({
	className = '',
	isGuide = false,
	userName = 'John',
	distance = '100',
	mapSrc = 'map1.png'
}) {
	return (
		<div className={`map-illustration-wrapper ${className}`}>
			<Image relativePath={mapSrc} alt='Map illustration'/>
			<div className={`user-location-wrapper ${isGuide 
				? 'guide'
				: 'tourist'
			}`}>
				{!isGuide &&
					<div className='info-box'>
						<span className='distance'>
							{distance} m
						</span>
						<span>
							away from the guide
						</span>
					</div>
				}
				<SVGIcon 
					className='user-location-icon' 
					iconID={isGuide ? 'guide' : 'location'}
				/>
				<div className='user-info'>
					<span className='user-label'>
						{isGuide ? 'guide' : 'tourist'}
					</span>
					<span className='user-name'>
						{userName}
					</span>
				</div>
			</div>
		</div>
	)
}
