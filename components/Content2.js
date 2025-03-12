import Image from 'next/image';
import { useState } from 'react';
import Form from './Form';

const papers = [
    '/images/p1.jpg',
    '/images/p2.jpg',
    '/images/p1.jpg',
    '/images/p2.jpg',
]

const Content2 = () => {
    const [showForm, setShowForm] = useState(false);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleButtonClick = () => {
        setShowForm(true);
        setIsButtonClicked(true);
    };

    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <div className="flex flex-col md:flex-row items-stretch pt-10 pb-8 bg-gradient-to-b
      from-[#F6F4F2] to-[#9F9588]">
            <div className="md:border-1 md:border-l-0 border-black md:rounded-r-[60px]
          flex pt-4 md:pt-20 px-3 relative overflow-hidden pr-6 justify-center md:justify-start">
                <span className="text-4xl md:text-6xl relative z-10">2</span>
            </div>

            <div className="flex-1">
                <div className="flex-1 flex flex-col md:pl-6 pt-8 md:pt-20 px-4 md:px-0">
                    <h1 className="text-4xl md:text-6xl mb-6 md:mb-10 font-light text-center md:text-left">
                        MOST ADVANCED ANALYSIS
                    </h1>

                    <div className="flex flex-col md:flex-row flex-1 items-center gap-6">
                        <div className="w-full md:w-[500px] text-center md:text-left">
                            <p className="mb-4 text-2xl md:text-4xl">Go Beyond Just A Number</p>
                            <p className="text-base md:text-xl font-light mt-6 md:mt-10">
                                <strong>BioNoise Level:</strong> consectetur adipiscing elit,sed do elusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="text-base md:text-xl font-light mt-6 md:mt-10">
                                <strong>Aging Trajectory:</strong> Duis aute irure dolor in reprehenderit in
                                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </p>

                            <button
                                className={`bg-[#FFEBCC] text-black px-6 py-3 md:px-8 md:py-4 text-lg md:text-2xl 
                              mt-6 md:mt-10 rounded-[30px] hover:bg-[#AA7F3F] hover:text-white 
                              transition-colors duration-300 mx-auto md:mr-20 block
                              ${isButtonClicked ? '!bg-[#533305] !text-white' : ''}`}
                                onClick={handleButtonClick}
                            >
                                Read more in our white paper
                            </button>
                            {showForm && (
                                <div
                                    className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
                                    onClick={handleCloseForm}
                                >
                                    <div onClick={(e) => e.stopPropagation()}>
                                        <Form onClose={handleCloseForm} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="md:ml-10 w-full md:w-1/2 px-4 md:px-0">
                            <div className="flex justify-center">
                                <Image
                                    src="/images/21.jpg"
                                    alt="Measure"
                                    width={350}
                                    height={350}
                                    className="object-cover w-[280px] md:w-[350px]"
                                />
                            </div>
                            <p className="text-xl mt-6 md:mt-10 font-bold italic text-center md:text-left">
                                Read our papers:
                            </p>
                            <div className="overflow-hidden max-w-[100vw]">
                                <div className="overflow-hidden w-full mt-6 md:mt-10">
                                    <div className="flex gap-[15px] md:gap-[30px] animate-scrollLoop">
                                        {[...papers, ...papers].map((p, index) => (
                                            <Image
                                                key={index}
                                                src={p}
                                                alt="Paper"
                                                width={200}
                                                height={200}
                                                className="flex-shrink-0 w-[150px] md:w-[200px] object-cover"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-auto md:h-screen flex flex-col md:flex-row mt-8 md:mt-0">
                    {/* 左侧系统信息 */}
                    <div className="w-full md:w-1/2 h-[600px] md:h-full overflow-hidden relative">
                        <div className="h-full overflow-y-auto scrollbar-hide pr-5">
                            <div className="relative min-h-full space-y-8 md:space-y-16">
                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-4 ml-[150px] mt-[100px] content-bg-cycle1">

                                        <div className="rounded-xl flex items-center justify-center border-2 border-[#DE6430] w-[130px] h-[30px]">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-[#DE6430] rounded-full"/>
                                                <span className="text-[#DE6430] font-medium">Attention</span>
                                            </div>
                                        </div>

                                        <h2 className="font-light text-3xl">
                                            Cardiac System
                                        </h2>

                                        <p className=" text-m w-[330px] text-left font-light ">
                                            38.2 years old, 8.2 years older than expected. contributing 28.6% to your overall aging process
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-4 ml-[150px] mt-[180px] content-bg-cycle2">

                                        <div className="rounded-xl flex items-center justify-center border-2 border-[#DE6430] w-[130px] h-[30px]">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-[#DE6430] rounded-full"/>
                                                <span className="text-[#DE6430] font-medium">Attention</span>
                                            </div>
                                        </div>

                                        <h2 className="font-light text-3xl">
                                            Reproductive System
                                        </h2>

                                        <p className=" text-m w-[330px] text-left font-light ">
                                            36.2 years old, 6.2 years older than expected,contributing 20.1% to your overall aging process                                      </p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-4 ml-[150px] mt-[150px] content-bg-cycle3">

                                        <div className="rounded-xl flex items-center justify-center border-2 border-[#DE6430] w-[130px] h-[30px]">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-[#DE6430] rounded-full"/>
                                                <span className="text-[#DE6430] font-medium">Attention</span>
                                            </div>
                                        </div>

                                        <h2 className="font-light text-3xl">
                                            Immune System
                                        </h2>

                                        <p className=" text-m w-[330px] text-left font-light ">
                                            36.1 years old, 6.1 years older than expected,contributing 19.8% to your overall aging process
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-4 ml-[150px] mt-[120px] content-bg-cycle4">

                                        <div className="rounded-xl flex items-center justify-center border-2 border-green-400 w-[130px] h-[30px]">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-green-400 rounded-full"/>
                                                <span className="text-green-400 font-medium">Average</span>
                                            </div>
                                        </div>

                                        <h2 className="font-light text-3xl">
                                            Digestive System
                                        </h2>

                                        <p className=" text-m w-[330px] text-left font-light ">
                                            33.8 years old, 3.8 years older than expected, contributing 8.7% to your overall aging process
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-4 ml-[150px] mt-[90px] content-bg-cycle5">

                                        <div className="rounded-xl flex items-center justify-center border-2 border-green-400 w-[130px] h-[30px]">
                                            <div className="flex items-center space-x-2">
                                                <div className="w-4 h-4 bg-green-400 rounded-full"/>
                                                <span className="text-green-400 font-medium">Attention</span>
                                            </div>
                                        </div>

                                        <h2 className="font-light text-3xl">
                                            Neurodegeneration
                                        </h2>

                                        <p className=" text-m w-[330px] text-left font-light ">
                                            31.0 years old, 1.0 years older than expected,contributing 2.1% to your overall aging process
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 右侧描述 */}
                    <div className="w-full md:w-1/2 h-auto md:h-full p-6 md:p-12 flex flex-col relative">
                        <div className="space-y-6 md:space-y-8 max-w-[600px]">
                            <h1 className="text-2xl md:text-3xl font-light text-gray-900
                          text-center md:text-left">
                                Identify Top Aging Factors
                            </h1>

                            <div className="space-y-4 md:space-y-6">
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed
                              text-justify">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex
                                    ea commodity consequat. Duis aute irure
                                    dolor in reprehenderit in voluptate velit esse
                                    cillum dolore eu fugiat nulla pariatur.
                                    Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia desertunt
                                    molitt anim id est laborum.
                                </p>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed
                              text-justify">
                                    Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse illum dolore eu fugiat
                                    nulla pariatur.Excepteur sint occaecat
                                    cupidatak non proident,sunt in culpa qui
                                    official deserunt moll hit anim id est laborum.
                                </p>
                            </div>
                        </div>

                        <button className="bg-[#FFEBCC] text-black px-4 py-2 md:px-6 md:py-3
                      text-lg md:text-2xl rounded-[30px] hover:bg-[#AA7F3F] hover:text-white
                      transition-colors duration-300 mt-6 md:mt-0 md:absolute
                      md:bottom-8 md:right-8 mx-auto md:mx-0">
                            View sample report
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content2;




