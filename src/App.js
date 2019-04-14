import React from 'react';
import { WhatIsThis } from './components/WhatIsThis.js';
import { useStateValue } from './hooks/useStateValue.js';

export function App() {
	const counter = useStateValue(0);

	return (
		<div>
			<WhatIsThis />
			<p>Change me:</p>
			<p class="count-controls">
				<button onClick={decrement}>-</button>
				<span className="count-display">{counter.value}</span>
				<button onClick={increment}>+</button>
			</p>
			<pre>counter.value: {JSON.stringify(counter.value)}</pre>
			<pre>String(counter): {JSON.stringify(String(counter))}</pre>
			<pre>Number(counter): {JSON.stringify(Number(counter))}</pre>
		</div>
	);

	function decrement() {
		return counter.set(count => count - 1);
	}

	function increment() {
		return counter.set(count => count + 1);
	}
}
