import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const notify =()=> toast.success("Deleted")

const SingleProductCard = (laptop, onDelete) => {
    const { id, name, price, description, image_url } = laptop.laptop;
    const handleDelete = async () => {
        await fetch(`http://localhost:3000/laptops/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                notify()
                onDelete(id);
            });
    };
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure>
                <img className="max-h-[300px] min-h-[300px]" src={image_url} alt="laptop" />
            </figure>
            <div className="card-body space-y-4">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <h3 className="text-xl font-semibold text-rose-600">$ {price}</h3>
                <div className="card-actions justify-between">
                    <button>
                        <Link  className="btn bg-yellow-500 text-white" to={`/dashboard/allProducts/edit/${id}`}>Edit</Link>
                    </button>
                    <button>
                        <Link className="btn bg-blue-700 text-white" to={`/dashboard/allProducts/products/${id}`}>See details</Link>
                    </button>
                    <button onClick={handleDelete} className="btn bg-red-600 text-white">
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
};

export default SingleProductCard;