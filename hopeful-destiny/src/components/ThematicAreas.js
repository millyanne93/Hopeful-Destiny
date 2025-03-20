const ThematicAreas = ({ title, gaps, interventions, achievements, evaluation }) => {
  return (
    <section className="py-12 bg-blue-600 text-white">
      <div className="container mx-6">
        <h2 className="text-3xl font-bold mb-4">Thematic Area</h2>
        <h2 className="text-3xl font-bold text-center mb-12">{title}</h2>
        <h2 className="text-3xl font-bold mb-4">Gaps</h2>
        <p className="mb-4">{gaps}</p>
        <h2 className="text-3xl font-bold mb-4">Interventions</h2>
        <p className="mb-4">{interventions}</p>
        <h2 className="text-3xl font-bold mb-4">Potential Achievements</h2>
        <p className="mb-4">{achievements}</p>
        <h2 className="text-3xl font-bold mb-4">Monitoring & Evaluation Plans</h2>
        <p className="mb-4">{evaluation}</p>
      </div>
    </section>
    )
};

export default ThematicAreas;