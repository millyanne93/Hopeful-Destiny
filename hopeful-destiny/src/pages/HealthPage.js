import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import healthAndNutrition from "../assets/Health.png";
import DonateCTA from "../components/DonateCTA";

function HealthPage() {
  return (
		<>
			<Navigation />
			{/* Responsive Image */}
			<div className="mb-8 pt-20">
				<img
					src={healthAndNutrition}
					alt="Health & Nutrition"
					className="w-full h-96 object-cover"
				/>
      </div>
			<div className="container mx-auto p-4">
        {/* Text Block */}
        <div className="mb-8">
          <p className="text-lg leading-relaxed">
            Our commitment to water sanitation and hygiene is unwavering. We strive to
            ensure access to clean water and promote healthy practices within
            communities. Through our various initiatives, we aim to combat the
            challenges posed by water scarcity and inadequate sanitation,
            ultimately improving the quality of life for all.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            We believe that everyone deserves access to safe drinking water and
            proper sanitation facilities. We work tirelessly to implement
            sustainable solutions that address the root causes of these issues,
            fostering a healthier and more resilient future.
          </p>
        </div>
				<p className="mb-4 text-lg text-gray-700">
					Access to essential health and nutrition programs is often limited in our communities, particularly for disadvantaged households. This lack of access contributes to poor health outcomes and nutritional deficiencies, especially among children and vulnerable populations. Our organization is committed to bridging these gaps and ensuring that everyone has the opportunity to lead a healthy and fulfilling life.
				</p>
				<div className="my-8 flex justify-center">
					<div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-red-300 to-red-600 flex items-center justify-center">
						<div className="absolute w-56 h-56 rounded-full bg-white flex items-center justify-center">
							<span className="text-4xl font-bold text-red-700">
								80%
							</span>
						</div>
						<div className="absolute w-64 h-64 rounded-full border-4 border-red-700 animate-spin"></div>
					</div>
				</div>

				<p className="mb-4 text-lg text-gray-700">
					This visual represents the estimated percentage of households in our target communities that face significant barriers in accessing adequate health and nutrition programs.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					We collaborate closely with the departments of health to support and expand community health and nutrition programs. Our initiatives focus on increasing access to health and nutrition campaigns, reaching disadvantaged households through the dedicated efforts of community health workers. By supporting these campaigns, we aim to significantly increase the number of households, children, and youths reached with vital health and nutrition information.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					Addressing nutritional deficiencies is a key priority. We provide essential nutrition supplements and food to disadvantaged households, ensuring that children and families have access to the nutrients they need to thrive. Through these efforts, we track and monitor the number of children and households supported with these vital supplements.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					Preventive healthcare is equally important. We supply and deliver essential health items, such as mosquito nets and preventive drugs, to protect our communities from preventable diseases. By ensuring access to these critical health products, we aim to reduce the incidence of illness and improve overall health outcomes. We diligently record and monitor the number of children and households supported through the supply of these health items.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					To ensure our programs are effective and impactful, we have established comprehensive monitoring and evaluation plans. We track the number of households, children, and youths reached during campaigns, the number of children and households supported with nutrition supplements, and the number of children and households supported through the supply of health items. This data allows us to assess our progress, identify areas for improvement, and ensure that our interventions are making a real difference in the lives of our communities.
				</p>
				<h2 className="text-lg text-center font-bold m-8">Health and Nutrition</h2>
				<table className="min-w-full border border-collapse">
					<thead>
						<tr>
							<th className="border p-2">Gaps</th>
							<th className="border p-2">Interventions</th>
							<th className="border p-2">Potential Achievements</th>
							<th className="border p-2">Monitoring and Evaluation Plans</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="border p-2">
                Communities have limited access to community health and nutrition programs.
							</td>
							<td className="border p-2">
                Supporting health and nutrition programs with the departments of health.
							</td>
							<td className="border p-2">
                Increased access to health/nutrition campaign and reaching disadvantaged households through supporting community health workers
							</td>
							<td className="border p-2">
                Number of households/children/ youths reached during campaigns
							</td>
						</tr>
						<tr>
							<td className="border p-2"></td>
							<td className="border p-2">
                Supply of Nutrition suppliments and food to disadvantaged households
							</td>
							<td className="border p-2">
                Supplying household with suppliments and food
							</td>
							<td className="border p-2">
                Number of children/households supported with nutrition suppliments
							</td>
						</tr>
						<tr>
							<td className="border p-2"></td>
							<td className="border p-2">
                Supply of health items like nets and preventive drugs
							</td>
							<td className="border p-2">
                Supply and delivery of health products
							</td>
							<td className="border p-2">
                Number of children/households supported through the supply of health items
							</td>
						</tr>
					</tbody>
				</table>
    	</div>
			<DonateCTA />
			<Footer />
		</>
  );
}

export default HealthPage;