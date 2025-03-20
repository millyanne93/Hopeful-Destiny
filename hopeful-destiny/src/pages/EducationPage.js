import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import childInClass from "../assets/Child in class.jpg";
import DonateCTA from "../components/DonateCTA";

function EducationPage() {
  return (
		<>
			<Navigation />
			{/* Responsive Image */}
			<div className="mb-8 pt-20">
				<img
					src={childInClass}
					alt="Child In Class"
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
        Education is the cornerstone of a thriving community, yet many children from poor households face significant barriers to accessing quality education. The lack of basic needs and learning materials often prevents these children from achieving their full potential. Our organization is dedicated to bridging these gaps and ensuring that every child has the opportunity to learn and succeed.
				</p>

				<div className="my-8 flex justify-center">
					<div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-blue-300 to-blue-600 flex items-center justify-center">
						<div className="absolute w-56 h-56 rounded-full bg-white flex items-center justify-center">
							<span className="text-4xl font-bold text-blue-700">
								90%
							</span>
						</div>
						<div className="absolute w-64 h-64 rounded-full border-4 border-blue-700 animate-spin"></div>
					</div>
				</div>

				<p className="mb-4 text-lg text-gray-700">
					This visual represents the estimated percentage of children in our target communities who face significant educational barriers due to poverty.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					Our interventions are designed to address these challenges head-on. We are committed to paying school fees and providing subsidiary payments to alleviate the financial burden on families. Additionally, we supply children with essential school uniforms, books, and learning items, ensuring they have the tools they need to succeed. Through these efforts, we aim to significantly increase school enrollments within our county.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					Recognizing the importance of skills development, we also support vocational training for youth, empowering them to engage in income-generating activities. Furthermore, we implement mentorship programs for enrolled children, providing guidance and support to help them pursue their educational goals. These initiatives will increase the number of youth with technical skills and the number of children who continue with their education, fostering long-term self-sufficiency and success.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					Child protection is another critical area of focus. We address the challenges faced by street children by supporting their reintegration into their homes and providing seasonal rescue centers. These centers offer a safe haven for children before they are reintegrated with their families. By supporting these efforts, we aim to reintegrate street children with existing family unions and provide crucial support at rescue centers.
				</p>

				<p className="mb-4 text-lg text-gray-700">
					To ensure accountability and measure our impact, we have developed comprehensive monitoring and evaluation plans. We track the number of children supported with school fees, backpacks, and stationery, as well as the number of youth and women who acquire technical skills. We also monitor the number of children supported by our programs who continue with their education and the number of children and institutions involved in our youth mentorship programs. Furthermore, we track the number of children reintegrated with households and supported at rescue centers. Through these measures, we aim to demonstrate our commitment to improving educational outcomes and child protection within our community.
				</p>
				<h2 className="text-lg text-center font-bold m-8">Education and Child Protection</h2>
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
								Children from poor households fail to attain education due to a lack of basic needs and learning materials.
								<br />
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Payment of school fees and subsidiary payments.</li>
									<li>Supplying children with school uniforms, books, and learning items.</li>
								</ul>
							</td>
							<td className="border p-2">
								Increased number of school enrollments in the county.
							</td>
							<td className="border p-2">
								Number of children supported with school fees, backpacks, stationery.
							</td>
						</tr>
						<tr>
							<td className="border p-2">
								Lack of skills among youth that can support income-generating activities.
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Supporting vocational training of youth.</li>
									<li>Supporting mentorship programs for enrolled children.</li>
								</ul>
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Increased number of youth/women with technical skills.</li>
									<li>Increased number of mentored children in pursuing education.</li>
								</ul>
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Number of youth/women who are supported in acquiring skills.</li>
									<li>Number of children supported by the CBO programs who continue with education.</li>
									<li>Number of children and institutions in youth mentorship programs.</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td className="border p-2">
								Child protection issues arising from cases of street children.
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Supporting the reintegration of children into their homes.</li>
									<li>Supporting seasonal rescue centers.</li>
								</ul>
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Reintegration of street children with existing family unions.</li>
									<li>Children being hosted at rescue centers before reintegration.</li>
								</ul>
							</td>
							<td className="border p-2">
								<ul className="list-disc list-inside">
									<li>Number of children reintegrated with households.</li>
									<li>Number of children supported at rescue centers.</li>
								</ul>
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

export default EducationPage;