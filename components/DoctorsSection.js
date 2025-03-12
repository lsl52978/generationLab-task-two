import DoctorCard from './DoctorCard';

const doctors = [
    {
        name: 'Dr.James Pattinson, MD',
        title: 'Explore Longevity Clinic, Los Angeles',
        description: '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
        image: '/images/1.png',
    },
    {
        name: 'Dr.Clayton Anderwson, MD ',
        title: 'Peek Longevity Clinic, New York',
        description: '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
        image: '/images/2.png',
    },
    {
        name: 'Dr.James Pattinson, MD',
        title: 'Explore Longevity Clinic, Los Angeles',
        description: '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
        image: '/images/3.png',
    },
    {
        name: 'Dr.Clayton Anderwson, MD ',
        title: 'Peek Longevity Clinic, New York',
        description: '"Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices."',
        image: '/images/4.png',
    }

];

const DoctorsSection = () => {
    return (
        <section className="pb-8 bg-black">
            <div className="container mx-auto overflow-hidden">
                <div className="overflow-hidden relative w-full">
                    <div className="flex gap-[30px] animate-scrollLoop w-max">
                        {[...doctors, ...doctors].map((doctor, index) => (
                            <DoctorCard
                                key={index}
                                name={doctor.name}
                                title={doctor.title}
                                description={doctor.description}
                                image={doctor.image}
                                className="flex-shrink-0 w-[300px]"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;
