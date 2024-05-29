import useAuth from "../../hooks/useAuth";
import userPicture from "../../assets/defaultUserPic.png"

const Dashboard = () => {
    const { user } = useAuth();

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-1/2 mx-auto mt-10">
            <div className="flex justify-center items-center mb-6 ">
                {
                    user?.photoURL ?
                        <img src={`${user?.photoURL}`} alt="Profile" className="rounded-full max-h-[120px]" />
                        :
                        <img src={userPicture} alt="Profile" className="rounded-full max-h-[120px]" />
                }
            </div>
            <h2 className="text-2xl font-semibold mb-6 text-center">My Profile</h2>
            <div className="mb-10">
                <label className="block text-gray-700 font-semibold">Name</label>
                {user?.displayName ?
                    <p className="border p-2 rounded-lg bg-gray-50 mt-2">{user?.displayName}</p>
                    :
                    <p className="border p-2 rounded-lg bg-gray-50 mt-2">No Name</p>
                }
            </div>
            <div className="mb-10">
                <label className="block text-gray-700 font-semibold">Email</label>
                <p className="border p-2 rounded-lg bg-gray-50 mt-2">{user?.email}</p>
            </div>
            <div className="mb-10">
                <label className="block text-gray-700 font-semibold">Email Varification Status</label>
                <div className="w-[140px] text-center">
                    {
                        user?.emailVerified === true ?
                        <p className={`mt-2 rounded-lg py-4 bg-blue-500 text-white font-semibold`}>Verified</p>
                        :
                        <p className={`mt-2 rounded-lg py-4 bg-red-500 text-white font-semibold`}>Not Verified</p>

                    }
                </div>
            </div>


        </div>
    );
};

export default Dashboard;