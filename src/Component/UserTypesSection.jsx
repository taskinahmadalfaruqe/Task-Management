/* eslint-disable react/prop-types */
const UserCard = ({ userType, benefits }) => {

    return (
        <div className="bg-secondoryColor dark:bg-lightdarkbg rounded-lg shadow-md p-6 m-4">
            <h2 className="text-xl font-semibold mb-4">{userType}</h2>
            <ul className="list-disc pl-5">
                {benefits?.map((benefit, index) => (
                    <li key={index} className="mb-2">{benefit}</li>
                ))}
            </ul>
        </div>
    );
};

const UserTypesSection = () => {
    const userTypes = [
        {
            userType: 'Developers',
            benefits: ['Access to latest tools and resources', 'Community support for problem-solving'],
        },
        {
            userType: 'Corporate Professionals',
            benefits: ['Networking opportunities', 'Insights into industry trends'],
        },
        {
            userType: 'Bankers',
            benefits: ['Financial news and analysis', 'Updates on regulatory changes'],
        },

    ];

    return (
        <div className="container">
            
            <div>
                <h2 className="text-center mt-10 text-3xl font-bold text-primaryColor">
                    How will get benefit?
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                {userTypes.map((user, index) => (
                    <UserCard data-aos="fade-right" key={index} userType={user.userType} benefits={user.benefits} />
                ))}
            </div>
        </div>
    );
};

export default UserTypesSection;
