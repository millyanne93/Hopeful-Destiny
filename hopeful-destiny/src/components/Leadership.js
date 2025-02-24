import { Users } from "lucide-react";

const Leadership = () => {
  const roles = [
    { title: "Chairperson", description: "Oversees the organization's overall strategy, governance, and decision-making." },
    { title: "Vice-chairperson", description: "Assists the Chairperson and steps in when necessary to provide leadership." },
    { title: "Secretary", description: "Maintains records, documents meetings, and manages organizational correspondence." },
    { title: "Treasurer", description: "Manages the organization's finances, budget, and financial reporting." },
    { title: "Vice Secretary", description: "Supports the Secretary in administrative and record-keeping tasks." },
    { title: "Committee Members", description: "Participate in decision-making, project oversight, and community engagement." }
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Our Leadership</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
            <div className="bg-yellow-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-yellow-700" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 text-center">{role.title}</h3>
            <p className="text-gray-600 text-center mt-2">{role.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
