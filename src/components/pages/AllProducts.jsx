import SingleProductCard from "../component/SingleProductCard";
import { useEffect, useState } from "react";

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/laptops")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [products]);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };
    return (
        <div className="flex flex-wrap gap-10 px-6 justify-center items-center my-20">
            {
                products.map((product) => (
                    <SingleProductCard key={product.id} laptop={product} onDelete={handleDeleteProduct} />
                ))
            }
        </div>
    );
};

export default AllProducts;