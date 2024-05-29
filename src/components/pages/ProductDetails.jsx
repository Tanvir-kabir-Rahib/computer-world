import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {
    const data = useLoaderData()
    return (
        <div className="flex justify-center">
            <div className="lg:flex gap-20 w-11/12 lg:w-10/12 shadow-xl p-16 rounded-3xl">
                <div>
                    <img className="h-[300px]" src={data.image_url} alt="product image" />
                </div>
                <div>
                    <div className="space-y-2">
                        <h1 className="text-xl font-bold">{data.name}</h1><hr />
                        <h3 className="text-xl font-semibold text-rose-600">$ {data.price}</h3><hr />
                        <h3 className="text-xl font-semibold">{data.brand}</h3><hr />
                        <p className="text-lg font-light">{data.description}</p>
                    </div>
                    <div className="flex justify-end">
                        <button>
                            <Link className="btn bg-yellow-500 text-white px-10 mt-14" to={`/dashboard/allProducts/edit/${data.id}`}>Edit</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;