const CoreContent = () => {
    return (
        <section className="pt-8 md:pt-16 pb-8 bg-black">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center p-8 md:p-16 bg-black text-white">
                <div className="text-3xl md:text-4xl font-light text-center md:text-left mx-4 md:ml-20 mb-4 md:mb-0">
                    Elevate Your Practice
                </div>

                <button className="bg-[#FFEBCC] text-black px-4 py-3 md:px-8 md:py-4
                text-xl md:text-2xl rounded-[30px] hover:bg-[#AA7F3F] hover:text-white
                transition-colors duration-300 mx-4 md:mr-20 mt-4 md:mt-0
                max-w-xs md:max-w-none w-full md:w-auto text-center">
                    Become a Provider
                </button>
            </div>
        </section>
    );
};

export default CoreContent;