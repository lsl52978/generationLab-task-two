import Image from 'next/image';

const Content1 = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-stretch pt-0 pb-8 bg-gradient-to-b from-[#FEFEFE] to-[#F6F4F2]">
            <div className="md:border-1 md:border-l-0 border-black md:rounded-r-[40px] flex pt-4 md:pt-20 px-3 md:px-3 relative overflow-hidden">
                <span className="text-4xl md:text-6xl relative z-10">1</span>
            </div>

            <div className="flex-1 flex flex-col md:pl-6 pt-8 md:pt-20 px-4 md:px-0">
                <h1 className="text-4xl md:text-6xl mb-6 md:mb-10 font-light text-center md:text-left">
                    SAMPLE PROCESSING
                </h1>

                <div className="flex flex-col md:flex-row flex-1 items-center gap-6">
                    {/* 文字内容 */}
                    <div className="w-full md:w-[400px] text-center md:text-left">
                        <p className="mb-4 text-2xl md:text-4xl">Measure with Precision</p>
                        <p className="text-base md:text-xl font-light">
                            Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our
                            SystemAge Test, leveraging Illumina's sequencing and Tempus' CLIA-certified lab for precise
                            aging insights.
                        </p>
                    </div>

                    {/* 图片 */}
                    <div className="flex justify-center items-center w-full md:w-1/2">
                        <Image
                            src="/images/1-1.jpg"
                            alt="Measure"
                            width={350}
                            height={350}
                            className="object-cover w-[300px] md:w-[350px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content1;