import Image from 'next/image';

const DoctorCard = ({ name, title, description, image }) => {
    return (
    <div className="w-[400px] flex-none bg-black rounded-3xl p-10
        transition-shadow duration-300 border-2 border-[#FFEBCC]">
        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
            <Image
                src={image}
                alt={name}
                width={150}
                height={150}
                className="w-full h-full object-cover"
            />
        </div>

        <h3 className="text-xl font-bold text-[#FFEBCC] text-center mt-4">
            {name}
        </h3>

        <p className="text-sm text-[#EFDCBF] text-center mt-2">
            {title}
        </p>

        <p className="text-sm text-gray-300 mt-4 leading-relaxed text-center">
            {description}
        </p>
    </div>
);
};

export default DoctorCard;
