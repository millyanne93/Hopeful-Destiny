const ValueCard = ({ title }) => {
    return (
      <div className="p-6 hover:bg-yellow-700 transition-colors rounded-lg">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <div className="w-12 h-1 bg-yellow-500 mx-auto mb-4"></div>
      </div>
    );
  };

  export default ValueCard;