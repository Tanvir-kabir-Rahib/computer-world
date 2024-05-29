import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../component/SingleProductCard";

const AllProducts = () => {
    const data = useLoaderData()
    return (
        <div className="flex flex-wrap gap-10 px-6 justify-center items-center my-20">
            {
                data.map((data) => (
                    <SingleProductCard key={data.id} laptops={data} />
                ))
            }
        </div>
    );
};

export default AllProducts;