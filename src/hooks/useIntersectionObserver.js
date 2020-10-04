import {useEffect, useState} from 'react';

const defaultOptions = {

}

export function useIntersectionObserver(target, options) {
	const [isIntersecting, setIsIntersecting] = useState(false)

	function handleIntersection(entries) {
		entries.forEach(entry => {
			setIsIntersecting(entry.isIntersecting)
		})
	}

	useEffect(() => {
		const observer = new IntersectionObserver(handleIntersection, options)
		const targetEl = target.current

		observer.observe(targetEl)

		return () => observer.unobserve(targetEl)
	})

	return isIntersecting
}