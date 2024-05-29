import { Link } from "react-router-dom";

const HomeViewProducts = (laptops) => {
    console.log(laptops)
    const { id, name, price, description, image_url } = laptops.laptops;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="max-h-[300px] min-h-[300px]" src={image_url} alt="laptop" />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h3 className="text-xl font-semibold text-rose-600">$ {price}</h3>
                <div className="card-actions justify-end">
                    <button>
                        <Link className="btn bg-blue-700 text-white" to={`/dashboard/allproducts/products/${id}`}>See details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeViewProducts;