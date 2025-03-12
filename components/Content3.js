import Image from 'next/image';

const Content3 = () => {
    return (
        <div className="flex flex-col md:flex-row items-stretch pt-0 pb-8 bg-gradient-to-b
      from-[#9F9588] to-[#33210C]">
            <div className="md:border-1 border-white md:rounded-r-[50px]
          border-l-0 flex pt-8 md:pt-20 px-3 justify-center md:justify-start
          relative overflow-hidden pr-6">
                <span className="text-4xl md:text-6xl relative z-10 text-white">3</span>
            </div>

            <div className="flex-1">
                <div className="flex-1 flex flex-col md:pl-6 pt-8 md:pt-20 px-4 md:px-0">
                    <h1 className="text-4xl md:text-6xl mb-6 md:mb-10 font-light text-white
                  text-center md:text-left">
                        Intervene with Confidence
                    </h1>

                    <div className="flex justify-center md:justify-end mb-8 md:mb-0">
                        <button className="bg-[#FFEBCC] text-black px-6 py-3 text-lg md:text-2xl
                      rounded-[30px] hover:bg-[#AA7F3F] hover:text-white transition-colors
                      duration-300 w-full md:w-auto md:mr-20">
                            Try it
                        </button>
                    </div>

                    <div className="mt-6 md:mt-0">
                        <h2 className="text-2xl md:text-4xl mb-4 md:mb-6 font-light text-white
                      text-center md:text-left">
                            Intelligent Interventions
                        </h2>
                    </div>

                    <div className="space-y-4 mb-8 md:mb-12">
                        <p className="text-base md:text-xl text-white leading-relaxed font-light
                      text-center md:text-left">
                            <strong>Intelligent Recommendations: </strong>
                            Tailored for each test taker and for each report, we generate a
                            clinically-relevant action plan powered by our XXX algorithm.
                        </p>

                        <p className="text-base md:text-xl text-white leading-relaxed font-light
                      text-center md:text-left">
                            <strong>Tracking: </strong>
                            Send the action plan to your clients and track their completion rates.
                            Make informed adjustment each cycle to dynamically achieve the health goals.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row h-auto md:h-[400px] p-4 md:p-5 gap-4 md:gap-5">
                    <div className="flex flex-col flex-[2] h-full overflow-y-auto scrollbar-hide
                  space-y-4 md:space-y-5">
                        {[31, 32, 33].map((num) => (
                            <div key={num} className="relative h-[200px] md:h-[400px] w-full">
                                <Image
                                    src={`/images/${num}.jpg`}
                                    alt={`Image ${num}`}
                                    height={400}
                                    width={800}
                                    className="object-cover rounded-xl"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="flex-[1] h-[300px] md:h-full relative mt-4 md:mt-0">
                        <Image
                            src="/images/3-1.jpg"
                            alt="Right Image"
                            width={300}
                            height={200}
                            className="object-cover rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content3;