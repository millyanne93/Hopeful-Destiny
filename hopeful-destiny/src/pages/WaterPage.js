import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import waterAndSanitation from "../assets/Water.png";
import DonateCTA from "../components/DonateCTA";

const WaterPage = () => (
  <>
    <Navigation />
    {/* Responsive Image */}
    <div className="mb-8 pt-15">
      <img
        src={waterAndSanitation}
        alt="Water Hygiene"
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
        Access to clean water and adequate sanitation facilities is essential for the health and well-being of our communities. However, many households face significant challenges due to the lack of clean water within a reasonable distance and the absence of proper sanitation facilities. Our organization is committed to addressing these critical gaps and ensuring that everyone has access to safe water and sanitation.
      </p>

      <div className="my-8 flex justify-center">
        <div className="relative w-64 h-64 rounded-full bg-gradient-to-r from-blue-200 to-blue-500 flex items-center justify-center">
          <div className="absolute w-56 h-56 rounded-full bg-white flex items-center justify-center">
            <span className="text-4xl font-bold text-blue-600">
              70%
            </span>
          </div>
          <div className="absolute w-64 h-64 rounded-full border-4 border-blue-600 animate-spin"></div>
        </div>
      </div>

      <p className="mb-4 text-lg text-gray-700">
        This visual represents the estimated percentage of households in our target communities that lack access to clean water and adequate sanitation facilities.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        To address the lack of clean water, we focus on drilling boreholes and supporting water catchment and supply systems. These initiatives aim to increase the number of households with access to clean water, significantly improving the health and quality of life for community members. We track the number of people who access clean water through these projects to ensure our efforts are effective.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        Sanitation is equally important. We conduct sensitization campaigns on the importance of sanitation facilities and toilets, encouraging households to build and maintain latrines. Through these efforts, we aim to increase the number of households with latrines, reducing the risk of waterborne diseases. We monitor the number of people with access to latrines to measure our progress.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        In schools and markets, where sanitation facilities are often inadequate, we construct latrines to provide safe and hygienic environments. This ensures that children and community members have access to proper sanitation, especially in public spaces. We track the number of children with access to latrines to ensure our efforts are impactful.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        During emergencies, we provide water treatment sachets to ensure households have access to safe drinking water. This helps prevent the spread of waterborne diseases during critical times. We monitor the number of households with water treatment sachets to ensure adequate distribution.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        Hygiene education and supplies are essential for maintaining good health. We provide hygiene items, such as sanitary pads, and support hygiene lessons to promote healthy practices. This increases access to hygiene lessons and supplies, benefiting children, youth, and women. We track the number of individuals accessing these lessons and supplies to assess our reach.
      </p>

      <p className="mb-4 text-lg text-gray-700">
        Our monitoring and evaluation plans are designed to track our progress and ensure accountability. We monitor the number of people who access clean water through our projects, the number of people with access to latrines, the number of children with access to latrines in schools, the number of households with water treatment sachets, and the number of individuals accessing hygiene lessons and supplies. Through these measures, we aim to demonstrate our commitment to improving water and sanitation conditions within our communities.
      </p>

      <h2 className="text-lg text-center font-bold m-8">Water Sanitation and Hygiene</h2>
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
              Lack of clean water within a reasonable distance.
            </td>
            <td className="border p-2">
              Drilling boreholes and supporting water catchment, supply.
            </td>
            <td className="border p-2">
              Increased number of households with clean water.
            </td>
            <td className="border p-2">
              Number of people who access clean water through water projects done.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of sanitation facilities in households.
            </td>
            <td className="border p-2">
              Sensitization on sanitation facilities/toilets.
            </td>
            <td className="border p-2">
              Increased number of households with latrines.
            </td>
            <td className="border p-2">
              Number of people with access to latrines.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of enough sanitation facilities in schools/market.
            </td>
            <td className="border p-2">
              Construction of latrines in schools.
            </td>
            <td className="border p-2">
              Increased number of children with access to latrines.
            </td>
            <td className="border p-2">
              Number of children with access to latrines.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of water treatment sachets.
            </td>
            <td className="border p-2">
              Supply of water treatment sachets during emergency.
            </td>
            <td className="border p-2">
              Increased number of households with water treatment sachets.
            </td>
            <td className="border p-2">
              Number of households with water treatment sachets.
            </td>
          </tr>
          <tr>
            <td className="border p-2">
              Lack of hygiene lessons and supplies.
            </td>
            <td className="border p-2">
              Supply of hygiene items like sanitary pads and supporting hygiene lessons.
            </td>
            <td className="border p-2">
              Increased access to hygiene lessons and supplies.
            </td>
            <td className="border p-2">
              Number of children/youth/women accessing hygiene lessons and supplies.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <DonateCTA />
    <Footer />
  </>
);

export default WaterPage;