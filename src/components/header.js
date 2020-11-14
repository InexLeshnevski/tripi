import React from 'react'
import {Link} from 'gatsby'

import Logo from './Logo'
import NavLinks from './NavLinks'

import './Header.css'
	
export default function Header() {
	return (
		<header className='header'>
			<nav className='global-nav'>
				<Link className='home-link' to='/'>
					<Logo/>
				</Link>
				<NavLinks
					dropdown={true}
				/>
				<a className='contacts-link button' href='#contact-us'>
					Contact us
				</a>
			</nav>
		</header>
	)
}
