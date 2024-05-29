import { Link, useLoaderData } from "react-router-dom";
import Accordian from "../component/Accordian";
import Banner from "../component/Banner";
import HomeViewProducts from "../component/HomeViewProducts";

const Home = () => {
    const data = useLoaderData();
    return (
        <div className="min-h-[calc(100vh-136px)] mb-20">
            <div className="flex justify-center mt-10">
                <Banner></Banner>
            </div>
            <div className="mt-20">
                <h1 className="my-8 text-3xl font-bold text-center">Our Products</h1>
                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-10 px-6 justify-center items-center w-11/12">
                        {
                            data.slice(0, 3).map((data) => (
                                <HomeViewProducts key={data.id} laptops={data} />
                            ))
                        }
                    </div>
                </div>
                <div className="text-center mt-12">
                    <Link className="btn bg-rose-500 text-white" to={'/dashboard/allProducts'}>See All Products</Link>
                </div>
            </div>
            <div className="flex justify-center mt-10">
                <Accordian></Accordian>
            </div>
        </div>
    );
};

export default Home;