import { useState } from 'react';

/**
 * @return {Object}  An object with keys `value` and `set()`
 */
export function useStateValue(initialValue) {
	const [state, setState] = useState(initialValue);

	return {
		value: state,
		toString,
		toValue,
		set: setState,
	};

	function toString() {
		return state && state.toString ? state.toString() : String(state);
	}

	function toValue() {
		return state && state.toValue ? state.toValue() : Number(state);
	}
}
