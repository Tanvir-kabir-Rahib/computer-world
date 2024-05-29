import { useLoaderData } from "react-router-dom";
import SingleProductCard from "../component/SingleProductCard";
import { useEffect, useState } from "react";

const AllProducts = () => {
    const data = useLoaderData()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/laptops")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };
    return (
        <div className="flex flex-wrap gap-10 px-6 justify-center items-center my-20">
            {
                data.map((data) => (
                    <SingleProductCard key={data.id} data={data} onDelete={handleDeleteProduct} />
                ))
            }
        </div>
    );
};

export default AllProducts;