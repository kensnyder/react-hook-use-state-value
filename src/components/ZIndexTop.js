import React, { useRef, useLayoutEffect } from 'react';

let z = 1001;

export function ZIndexTop({ tag, children, ...props }) {
	const ref = useRef();
	const Tag = tag || 'div';
	useLayoutEffect(() => {
		ref.current.style.position = 'absolute';
		ref.current.style.zIndex = z++;
		// FOR DEMONSTRATION ONLY
		ref.current.querySelector('span').textContent = z;
	}, [ref]);

	return (
		<Tag className="Component ZIndexTop" ref={ref} {...props}>
			{children}
		</Tag>
	);
}
