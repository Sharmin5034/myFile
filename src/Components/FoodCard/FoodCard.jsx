const FoodCard =({item})=>{
    const { name, recipe, image, price } = item;
    return(
        <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="" /></figure>
        <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-4">${price}</p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-outline border-orange-500 btn-ghost border-0 border-b-4 mt-4">Add to Cart</button>
          </div>
        </div>
      </div>
    )
}
export default FoodCard