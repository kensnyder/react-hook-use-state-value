import React from 'react';
import './PopOver.css';

export function PopOver({ top, left }) {
	return (
		<div
			className="Component PopOver"
			style={{ top: top + 'px', left: left + 'px' }}
		>
			zIndex: <span>?</span>
		</div>
	);
}
