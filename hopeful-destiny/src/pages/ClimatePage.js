import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import climatePic from "../assets/Climate.png";
import DonateCTA from "../components/DonateCTA";

const ClimatePage = () => (
  <>
    <Navigation />
    {/* Responsive Image */}
    <div className="pt-20 mb-8">
      <img
        src={climatePic}
        alt="Water Hygiene"
        className="w-full h-96 object-cover"
      />
    </div>
    <div className="container mx-auto p-4">
      {/* Text Block */}
      <div className="mb-8">
        <p className="text-lg text-gray-700">
          Our commitment to water sanitation and hygiene is unwavering. We strive to
          ensure access to clean water and promote healthy practices within
          communities. Through our various initiatives, we aim to combat the
          challenges posed by water scarcity and inadequate sanitation,
          ultimately improving the quality of life for all.
        </p>
        <p className="text-lg text-gray-700 mt-4">
          We believe that everyone deserves access to safe drinking water and
          proper sanitation facilities. We work tirelessly to implement
          sustainable solutions that address the root causes of these issues,
          fostering a healthier and more resilient future.
        </p>
        <p className="mb-4 text-lg text-gray-700 mt-4">
          Climate change is no longer a distant threat; it's a present reality that profoundly impacts our communities. We witness its effects daily, from the devastating floods that displace families and destroy livelihoods to the increasingly erratic climatic patterns that disrupt agricultural cycles and threaten food security. Our county is particularly vulnerable, with rising temperatures and unpredictable rainfall posing significant challenges to our environment and our people.
        </p>

        <div className="my-8 flex justify-center">
          <div className="relative w-56 h-56 rounded-full bg-gradient-to-r from-green-300 to-green-600 flex items-center justify-center">
            <div className="absolute w-48 h-48 rounded-full bg-white flex items-center justify-center">
              <span className="text-4xl font-bold text-green-700">
                75%
              </span>
            </div>
            <div className="absolute w-56 h-56 rounded-full border-4 border-green-700 animate-spin"></div>
          </div>
        </div>

        <p className="mb-4 text-lg text-gray-700">
          This visual represents the estimated percentage of our community that has already experienced direct impacts from climate change-related events.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          To address these critical issues, our Community-Based Organization (CBO) is committed to implementing a multi-pronged approach. We recognize the urgent need to support tree planting initiatives, not just as a symbolic gesture, but as a crucial step in curbing global warming. We aim to empower our youth and women by providing them with the necessary training and awarding grants for start-up businesses focused on tree nursery and recycling. This will not only increase the number of individuals participating in these vital initiatives but also equip them with sustainable skills for the future.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          Furthermore, we understand that a lack of information on weather forecasting and climate change exacerbates the challenges faced by our communities. Therefore, we are dedicated to sensitizing and training residents on weather patterns and the effects of climate change. By improving access to accurate information, we can help our communities better prepare for and mitigate the impacts of these changes. We are also committed to supporting research on climate change effects within our county, ensuring that our strategies are informed by the latest scientific findings. Disseminating this research will further increase access to vital information, enabling our communities to make informed decisions and take proactive measures.
        </p>

        <p className="mb-4 text-lg text-gray-700">
          Through these initiatives, we aim to increase the number of youth and women trained in tree planting and other climate change mitigation measures, enhance access to information on weather patterns and climate change, and ensure that research findings are readily available to all. By working together, we can build a more resilient and sustainable future for our county.
        </p>
      </div>
      <h2 className="text-lg text-center font-bold m-8">Climate Change</h2>
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
              Effects of climate change like floods and disrupted climatic patterns.
            </td>
            <td className="border p-2">
              Supporting tree planting initiatives to curb global warming through training and awarding grants for start up businesses.
            </td>
            <td className="border p-2">
              Increased Number of youth/women participating in tree planting initiatives.
            </td>
            <td className="border p-2">
              Number of youth/women participating in tree planting initiatives.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of skills in climate change mitigation measures.
            </td>
            <td className="border p-2">
              Training youth/women in tree nursery and recycling businesses.
            </td>
            <td className="border p-2">
              Increased number of youth/women trained in tree planting and other climate change mitigation measures.
            </td>
            <td className="border p-2">
              Number of youth/women trained in tree planting and other climate change mitigation measures.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of information in weather forecasting and climate change.
            </td>
            <td className="border p-2">
              Sensitizing and training communities on weather forecasting and climate change effects.
            </td>
            <td className="border p-2">
              Increased access to information on weather patterns and climate change.
            </td>
            <td className="border p-2">
              Number of residents with access to weather patterns and climate change.
            </td>
          </tr>
          <tr>
            <td className="border p-2"></td>
            <td className="border p-2">
              Supporting research on climate change effects in the county.
            </td>
            <td className="border p-2">
              Increased access of information on climate change.
            </td>
            <td className="border p-2">
              Number of people who access research findings on climate change.
            </td>
          </tr>
          <tr>
            <td className="border p-2"></td>
            <td className="border p-2">
              Supporting dissemination of climate change and weather pattern issues.
            </td>
            <td className="border p-2">
              Increased access of information on climate change.
            </td>
            <td className="border p-2">
              Number of people who access research findings on climate change.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DonateCTA />
    <Footer />
  </>
);

export default ClimatePage;