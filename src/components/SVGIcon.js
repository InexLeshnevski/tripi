import React, {useState} from 'react'

export default function SVGIcon({iconID, className}) {
	const [src, setSrc] = useState('')
	
	import(`../icons/sprite.svg`).then(module => {
		setSrc(`${module.default}#${iconID}`)
	}).catch(err => {
		console.error(err)
	})

	return (
		<svg className={`svg-icon ${className}`}>
			<use href={src}></use>
		</svg>
	)
}
