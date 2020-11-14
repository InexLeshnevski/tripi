import React from 'react'

import NavLinks from './NavLinks'
import Copyright from './Copyright'
import Logo from './Logo'
import ContactInfoBar from './ContactInfoBar'
import SVGIcon from './SVGIcon'
import Image from './Image'

import './Footer.css'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='section-content-wrapper align-center'>
				<ContactInfoBar/>
				<div className='footer-info'>
					<div className='about-company'>
						<Logo/>
						<ul className='taglines bulleted'>
							<li className='tagline'>
								Win to Win  cooperation
							</li>
							<li className='tagline'>
								Mobile and web development professionals
							</li>
							<li className='tagline'>
								Lead our customers to success
							</li>
						</ul>
						<ul className='social-media-links'>
							<li className='social-media-link'>
								<a href='https://www.linkedin.com/company/newsoft-ns/'>
									<SVGIcon iconID='linkedin'/>
								</a>
							</li>
							<li className='social-media-link'>
								<a href='https://www.instagram.com/newsoft_official/'>
									<SVGIcon iconID='instagram'/>
								</a>
							</li>
							<li className='social-media-link'>
								<a href='https://www.facebook.com/newsoftns/'>
									<SVGIcon iconID='facebook'/>
								</a>
							</li>
							<li className='social-media-link'>
								<a href='https://clutch.co/profile/newsoft'>
									<SVGIcon iconID='clutch'/>
								</a>
							</li>
							<li className='social-media-link'>
								<a href='https://www.behance.net/newsoft-ns'>
									<SVGIcon iconID='behance'/>
								</a>
							</li>
						</ul>
					</div>
					<nav className='global-nav'>
						<NavLinks/>
					</nav>
					<div className='award-badge'>
						<Image 
							relativePath='clutch-badges.png'
							alt='Clutch award.'
						/>
					</div>		
				</div>
				<Copyright/>
			</div>
		</footer>
	)
}
