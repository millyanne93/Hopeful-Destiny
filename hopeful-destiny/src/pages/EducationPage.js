import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ThematicAreas from "../components/ThematicAreas";

const ThematicPage = () => (
	<>
		<Navigation />
		<ThematicAreas
			title="EDUCATION AND CHILD PROTECTION"
			gaps="Children from poor households fail to attain education due to a lack of basic needs and learning materials"
			interventions="Payment of school fees and subsidiar payments, Supplying children with school uniforms, books, and learning items."
			achievements="Increased number of school enrollments in the county."
			evaluation="Number of children supported with school fees, backpacks, stationery"
		/>
		<Footer />
	</>
);

export default ThematicPage;