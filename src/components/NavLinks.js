import React from 'react'
import {Link, useStaticQuery} from 'gatsby'

import ArrowIcon from '../icons/Arrow'

export default function NavLinks({dropdown = false}) {
	const {allNavItemsJson: {edges: navItems}} = useStaticQuery(graphql`
		query NavLinksQuery {
			allNavItemsJson {
				edges {
					node {
						category
						id
						links {
							title
							to
						}
					}
				}
			}
		}
	`)

	const renderedNavLinks = navItems.map((navItem) => {
		const {
			node: {
				category, 
				id, 
				links,
			},
		} = navItem;

		return (
			<li key={id} className='nav-links-category'>
				<h4 className='category-name'>
					{category}
				</h4>
				{dropdown && <ArrowIcon/>}
				<ul className='nav-links-list'>
					{links.map(({title, to}) => (
						<li key={title}>
							<Link to={to}>{title}</Link>
						</li>
					))}
				</ul>
			</li>
		)
	})

	return (
		<ul 
			className={`categories-list ${dropdown ? 'dropdown' : ''}`}
		>
			{renderedNavLinks}
		</ul>
	)
}
