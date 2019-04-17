import React, { useState } from 'react';
import { WhatIsThis } from './components/WhatIsThis.js';
import { PopOver } from './components/PopOver.js';
import { ZIndexTop } from './components/ZIndexTop.js';

export function App() {
	const [isShown1, show1] = useState(false);
	const [isShown2, show2] = useState(false);

	return (
		<div>
			<label>
				<input type="checkbox" onChange={click1} /> Show Popover 1
			</label>
			<br />
			<label>
				<input type="checkbox" onChange={click2} /> Show Popover 2
			</label>
			<div style={{ position: 'absolute' }}>
				{isShown1 && (
					<ZIndexTop>
						<PopOver top={90} left={90} />
					</ZIndexTop>
				)}
				{isShown2 && (
					<ZIndexTop>
						<PopOver top={120} left={120} />
					</ZIndexTop>
				)}
			</div>
			<WhatIsThis />
		</div>
	);

	function click1(event) {
		return show1(event.target.checked);
	}

	function click2(event) {
		return show2(event.target.checked);
	}
}
