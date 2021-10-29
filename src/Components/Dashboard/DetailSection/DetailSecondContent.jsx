import ReadMoreComp from "./ReadMoreComp";

const SecondSection = () => {
  return (
    <div className="relative rounded-xl w-full lg:w-[38%]  detail-second-content">
      <span className="absolute inset-0 w-full h-full bg-gray-700 opacity-50 rounded-xl"></span>
      <div className="relative p-4">
        <h3 className="text-xl font-bold text-white">Work with the rockets</h3>
        <p className="max-w-sm mt-6 text-base font-semibold text-white">
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </p>
        <ReadMoreComp colorText="text-white" />
      </div>
    </div>
  );
};

export default SecondSection;
