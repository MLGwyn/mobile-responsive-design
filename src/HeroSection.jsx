const HeroSection = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl flex flex-col-reverse md:flex-row items-center justify-center py-36 px-4">
        <div className="text-violet-900 text-3xl md:text-4xl font-stint font-medium max-w-[450px]">
          <div>
            Something <span className="text-yellow-500">Catchy</span> and
            <span className="text-red-600"> Technological</span>
          </div>
          <button className="border-4 border-violet-800 text-xl font-medium px-10 py-3 mt-4 ">
            Learn More
          </button>
        </div>
        <img
          src="https://static-task-assets.react-formula.com/963190.png"
          className="md:w-[480px] my-16"
        />
      </div>
    </div>
  );
};

export default HeroSection;
