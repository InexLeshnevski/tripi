import React from 'react'
import {Link} from 'gatsby'

import Logo from './Logo'
import ArrowIcon from '../icons/Arrow'

import './Header.css'

function Header() {
	const navLinks = [
		{
			category: 'Services',
			links: [
				{
					title: 'Android development',
					to: '/',
				},
				{
					title: 'iOS development',
					to: '/',
				},
				{
					title: 'Web development',
					to: '/',
				},
				{
					title: 'Quality control',
					to: '/',
				},
				{
					title: 'UI/UX design',
					to: '/',
				},
				{
					title: 'Dedicated team',
					to: '/',
				},
			]
		},
		{
			category: 'Technologies',
			links: [
				{
					title: 'Android',
					to: '/',
				},
				{
					title: 'iOS',
					to: '/',
				},
				{
					title: 'JS',
					to: '/',
				},
				{
					title: 'Java',
					to: '/',
				},
				{
					title: 'Python',
					to: '/',
				},
				{
					title: '.NET',
					to: '/',
				},
			]
		},
		{
			category: 'Company',
			links: [
				{
					title: 'Cooperation models',
					to: '/',
				},
				{
					title: 'Cooperation methodologies',
					to: '/',
				},
				{
					title: 'Projects',
					to: '/',
				},
				{
					title: 'Blog',
					to: '/',
				},
				{
					title: 'FAQs',
					to: '/',
				},
			]
		}
	]
	
	const renderedNavLinks = navLinks.map(({category, links}) => (
		<li key={category} className='nav-links-category'>
			{category}
			<ArrowIcon/>
			<ul className='nav-links-list'>
				{links.map(({title, to}) => (
					<li key={title}>
						<Link to={to}>{title}</Link>
					</li>
				))}
			</ul>
		</li>
	))

	return (
		<header className='header'>
			<nav className='global-nav'>
				<Link className='home-link' to='/'>
					<Logo/>
				</Link>
				<ul className='categories-list'>
					{renderedNavLinks}
				</ul>
				<a className='contacts-link button' href='#contact-us'>
					Contact us
				</a>
			</nav>
		</header>
	)
}

export default Header
