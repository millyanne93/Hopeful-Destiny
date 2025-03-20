import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import foodSecurity from "../assets/Food.png";
import DonateCTA from "../components/DonateCTA";

function FoodSecurityPage() {
  return (
    <>
      <Navigation />
      {/* Responsive Image */}
      <div className="mb-8 pt-15">
        <img
          src={foodSecurity}
          alt="Food Security"
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
          Food security is a fundamental human right, yet high levels of poverty in our communities prevent many from accessing adequate food. The lack of land and the inability to hire land for food production exacerbate this issue. Our organization is dedicated to empowering individuals and households to achieve food security through sustainable agricultural practices and income-generating opportunities.
        </p>

        <div className="my-8 flex justify-center">
          <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 flex items-center justify-center">
            <div className="absolute w-56 h-56 rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-yellow-700">
                65%
              </span>
            </div>
            <div className="absolute w-64 h-64 rounded-full border-4 border-yellow-700 animate-spin"></div>
          </div>
        </div>

        <p className="mb-4 text-lg text-gray-700">
          This visual represents the estimated percentage of households in our target communities that experience food insecurity due to poverty and lack of resources.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          To address this, we support food production at the household level, providing youth and households with grants and essential resources. We aim to increase the number of youth and women supported to start agricultural income-generating activities, fostering self-sufficiency and resilience. We also support animal farming, including poultry, dairy, and beekeeping, providing grants to youth and women to establish their own animal-keeping ventures.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          Kitchen gardening is another key intervention, enabling households to grow their own fresh produce. We provide grants to youth and women to start kitchen gardens, promoting healthy eating habits and reducing reliance on external food sources. Furthermore, we support agribusiness and commercial farming, empowering youth and women to participate in larger-scale agricultural activities through grants and the supply of implements.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          High rates of unemployment contribute significantly to food insecurity. We address this by awarding grants to youth and women to start income-generating activities, such as businesses. We also provide training on modern skills, including content creation, talent development, music, and film, enabling youth and women to engage in contemporary economic activities.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          To foster financial inclusion and community development, we support loan groups through training and the provision of loans and grants. This empowers youth and women to participate in loan groups and development projects, promoting economic empowerment and sustainable growth.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          Our monitoring and evaluation plans are designed to track our progress and ensure accountability. We monitor the number of youth and women supported in starting agricultural, animal farming, and kitchen gardening ventures, as well as those participating in agribusiness. We also track the number of youth and women awarded grants for income-generating activities, trained in modern skills, and participating in loan groups. Through these measures, we aim to demonstrate our commitment to enhancing food security and economic empowerment within our communities.
        </p>
        <h2 className="text-lg text-center font-bold m-8">
          Food Security and Livelihoods
        </h2>
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
                High levels of poverty where people do not have land and ability to hire land and produce food.
              </td>
              <td className="border p-2">
                Supporting food production at the household level.
              </td>
              <td className="border p-2">
                Supporting youth and households with grants and food production requirements.
              </td>
              <td className="border p-2">
                Number of youth/women supported to start agricultural income-generating activities.
              </td>
            </tr>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2">
                Supporting animal farming like poultry, dairy, beekeeping.
              </td>
              <td className="border p-2">
                Supporting youth/women with grants to start animal keeping.
              </td>
              <td className="border p-2">
                Number of youth/women supported in starting animal farming.
              </td>
            </tr>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2">
                Supporting Kitchen gardening.
              </td>
              <td className="border p-2">
                Supporting youth/women with grants to start kitchen gardening.
              </td>
              <td className="border p-2">
                Number of youth/women supported in starting Kitchen gardening.
              </td>
            </tr>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2">
                Supporting agribusiness/commercial farming.
              </td>
              <td className="border p-2">
                Supporting youth/women to participate in agribusiness through award of grants and supply of implements.
              </td>
              <td className="border p-2">
                Number of youth/women supported in starting agribusiness.
              </td>
            </tr>
            <tr>
              <td className="border p-2">High rates of unemployment.</td>
              <td className="border p-2">
                Awarding grants to youth/women to start income-generating activities like business.
              </td>
              <td className="border p-2">
                Supporting youth/women to start up self-employment and income-generating activities like businesses.
              </td>
              <td className="border p-2">
                Number of youth/women awarded with grants to start income generating activities.
              </td>
            </tr>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2">
                Training youths/women on modern skills of income-generating activities like content creation, talent development, music, film etc.
              </td>
              <td className="border p-2">
                Increased youth/women participation in modern economic activities.
              </td>
              <td className="border p-2">
                Number of youth/women trained and supported in starting and developing modern income generating activities.
              </td>
            </tr>
            <tr>
              <td className="border p-2"></td>
              <td className="border p-2">
                Supporting loan groups through training and awarding loans/grants.
              </td>
              <td className="border p-2">
                Increased number of youth/women participating in loan groups and development projects.
              </td>
              <td className="border p-2">
                Number of youth/women trained in loan groups and awarded grants/loans.
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

export default FoodSecurityPage;