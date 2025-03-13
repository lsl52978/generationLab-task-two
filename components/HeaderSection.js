const HeaderSection = () => {
  return (
    <section className="bg-gradient-to-b from-[#1D1D1C] to-[#6F6A5B] py-12 flex items-center justify-center">
      <div className="container mx-auto px-4 md:px-[30px]">
        <div className="md:text-left text-center mb-8 md:mb-12">
          <p className="text-4xl md:text-5xl font-light text-white leading-tight">
            Measure Aging
            <span className="block text-2xl md:text-3xl italic text-[#E0E0E0] mt-3 md:mt-4">
              with golden standard
            </span>
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="bg-[#79776E] mt-6 md:mt-8 px-6 py-3 md:px-8 md:py-4 border-1 hover:border-2 text-white text-base md:text-xl rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center">
              <span className="mr-2">←</span> Learn about our test
            </button>
          </div>
        </div>

        <div className="md:text-right text-center mt-8 md:mt-12">
          <p className="text-4xl md:text-5xl font-light text-white leading-tight">
            Intervene Health
            <span className="block text-2xl md:text-3xl italic text-[#E5E7EB] mt-3 md:mt-4">
              with scientific confidence
            </span>
          </p>
          <div className="flex justify-center md:justify-end">
            <button className="bg-[#79776E] mt-6 md:mt-8 px-6 py-3 md:px-8 md:py-4 border-1 hover:border-2 text-white text-base md:text-xl rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center">
              Learn about action plan <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
