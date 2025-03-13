// useState är en "hook"
import { useState } from 'react'

const Counter = () => {
	const [count, setCount] = useState(0)

	const increase = () => {
		setCount(count + 1)
	}
	const increaseBy5 = () => {
		console.log('Du klickade på +5')
		setCount(count + 5)
	}

	return (
		<section>
			<button onClick={increase}> +1 </button>
			<button onClick={increaseBy5}> +5 </button>
			<button onClick={() => setCount(count + 10)}> +10 </button>
			Du har klickat {count} gånger.
		</section>
	)
}

export default Counter
