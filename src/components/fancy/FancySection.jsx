import Fancy from "./Fancy.jsx"
import './FancySection.css'

const FancySection = () => (
	<section className="fancy-section">
		<p>
			Färger:
			<Fancy color={'#2e86c1'} text={'#2e86c1 blå'} />,
			<Fancy color={'#A04000'} text={'#A04000 brun'} />,
			<Fancy color={'#839192'} text={'#839192 grå'} />,
			<Fancy color={'#9b59b6'} text={'#9b59b6 lila'} />.
		</p>
	</section>
)

export default FancySection
