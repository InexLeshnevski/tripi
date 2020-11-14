import React from 'react'

import SVGIcon from './SVGIcon'

import './ContactInfoBar.css'

export default function ContactInfoBar() {
	return (
		<address className='contact-info-bar'>
			<ul className='contact-info'>
				<li className='contact-info-item'>
					<SVGIcon 
						className='icon' 
						iconID='phone'
					/>
					<ul className='phone-numbers'>
						<li>
							<a href='tel:+380 73 200 79 22'>
								+380 73 200 79 22
							</a>
						</li>
						<li>
							<a href='tel:+380 93 102 56 00'>
								+380 93 102 56 00
							</a>
						</li>
					</ul>
				</li>
				<li className='contact-info-item'>
					<SVGIcon 
						className='icon' 
						iconID='mail'
					/>
					<ul className='emails'>
						<li>
							<a href='mailto:info@newsoft-ns.com'>
								info@newsoft-ns.com
							</a>
						</li>
						<li>
							<a href='mailto:sales@newsoft-ns.com'>
								sales@newsoft-ns.com
							</a>
						</li>
					</ul>
				</li>
				<li className='contact-info-item'>
					<SVGIcon 
						className='icon' 
						iconID='location'
					/>
					<a href='https://goo.gl/maps/Vq2xb24cyUekfujV7'>
						109 Zelena Street 
						<br/>
						Lviv 79035,  Ukraine
					</a>
				</li>
			</ul>
		</address>
	)
}
