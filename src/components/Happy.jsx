import { useState } from 'react'

const HAPPY = 'happy', EXCITED = 'excited', SATISFIED = 'satisfied'

const Happy = () => {
	const [feeling, setFeeling] = useState(EXCITED)

	const handleHappyClick = () => {
		setFeeling(HAPPY)
	}
	const handleExcitedClick = () => {
		setFeeling(EXCITED)
	}
	const handleSatisfiedClick = () => {
		setFeeling(SATISFIED)
	}

	return (
		<section>
			<button onClick={handleHappyClick} disabled={feeling === HAPPY}> Happy </button>
			<button onClick={handleExcitedClick} disabled={feeling === EXCITED}> Excited </button>
			<button onClick={handleSatisfiedClick} disabled={feeling === SATISFIED}> Satisfied </button>
			<p> I am {feeling}! </p>
		</section>
	)
}
export default Happy
