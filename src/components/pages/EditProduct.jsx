import { useLoaderData, useNavigate } from "react-router-dom";

const EditProduct = () => {
    const navigate = useNavigate()
    const product = useLoaderData()
    const {id, name, price, brand, description, image_url} = product

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const id = form.productID.value;
        const name= form.productName.value;
        const brand = form.brand.value;
        const price = form.price.value;
        const description = form.description.value;
        const image_url = form.image_url.value;

        const data = { id, name, brand, price, description, image_url };

        await fetch(`http://localhost:3000/laptops/${id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                navigate(`/dashboard/allproducts/products/${product.id}`)
            });
    };

    return (
        <div className='w-11/12 lg:w-8/12 mb-12' >
            <div className='shadow-xl p-10 rounded-xl flex justify-center items-center'>
                <form onSubmit={handleSubmit} className="w-full">
                    <h1 className='text-2xl text-center mb-5'>Add a New Product</h1>
                    <div className='form-contorl'>
                        <label className='label label-text'>Product ID</label>
                        <input type='text' placeholder="ID" className='input input-bordered w-full' name="productID" defaultValue={id} required />
                    </div>
                    <div className='form-contorl'>
                        <label className='label label-text'>Product Name</label>
                        <input type='text' placeholder="Name" className='input input-bordered w-full' name="productName" defaultValue={name} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Price</label>
                        <input type='text' placeholder="Price" className='input input-bordered w-full' name="price" defaultValue={price} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Brand</label>
                        <input type='text' placeholder="Brand" className='input input-bordered w-full' name="brand" defaultValue={brand} required />
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Description</label>
                        <textarea className="textarea textarea-bordered" placeholder="Product Description" defaultValue={description} name="description"></textarea>
                    </div>
                    <div className='form-control'>
                        <label className='label label-text'>Product Photo</label>
                        <input type="text" name="image_url" defaultValue={image_url} placeholder="Photo URL" className="input input-bordered w-full" />
                    </div>
                    <div className='form-control mb-3'>
                        <input type="submit" value='Update Product' className='btn bg-rose-500 mt-5 text-white' />
                    </div>
                </form >
            </div >
        </div >
    );
};

export default EditProduct;