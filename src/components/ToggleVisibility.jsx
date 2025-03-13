import './ToggleVisibility.css'
import { useState } from 'react'

const ToggleVisibility = () => {
	const [isVisible, setIsVisible] = useState(true)

	// Alt. 1
	// let maybe = null
	// if( isVisible ) {
	// 	maybe = <p> Jag ska växla mellan synlig och osynlig. </p>
	// }
	// Alt. 2
	// {isVisible && (<p> Jag ska växla mellan synlig och osynlig. </p>)}
	// Alt. 3
	// {isVisible ?  (<p> Jag ska växla mellan synlig och osynlig. </p>) : null}


	return (
		<section className="toggle-visibility">
			<button onClick={() => setIsVisible(true)}> Visa </button>
			<button onClick={() => setIsVisible(false)}> Dölj </button>
			{isVisible ?  (<p> Jag ska växla mellan synlig och osynlig. </p>) : null}
			<p className={isVisible ? '' : 'be-gone'}> Jag döljs med hjälp av <code>display: none</code>.</p>
			<p className={isVisible ? '' : 'invisible'}> Jag döljs med hjälp av <code>opacity: 0</code>.</p>
		</section>
	)
}

export default ToggleVisibility

/*
Hur gör man saker osynliga?
1. inte ha med på sidan
2. display: none
3. visibility: invisible
4. opacity: 0
*/