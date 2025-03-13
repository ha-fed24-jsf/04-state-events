import { useState } from 'react'
import './App.css'

const App = () => {
	// State-variabler
	// const temp = useState(0)
	// const clicks = temp[0]
	// const setClicks = temp[1]
	const [clicks, setClicks] = useState(0)

	// Eventuella events
	const handleClick = () => {
		setClicks(clicks + 1)  // motsvarar:  clicks = clicks + 1
	}

	// Eventuella variabler för JSX
	let message
	if( clicks > 0 ) {
		message = clicks + ' klick'
	} else {
		message = 'Inget har hänt'
	}
	// Alternativ metod (med conditional operator)
	message = clicks > 0 ? clicks + ' klick' : 'Inget har hänt'

	return (
		<>
		<header>
			<h1> Demo React </h1>
		</header>
		<main>
			<button onClick={handleClick}> Klicka här </button>
			<p> {message} </p>
		</main>
		</>
	)
}

export default App
