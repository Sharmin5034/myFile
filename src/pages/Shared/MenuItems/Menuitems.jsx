
const Menuitems = ({ data }) => {
    const { name, recipe, image, price } = data;
    return (
        <div className="md:flex  gap-5  space-x-4"> 
            <img style={{borderRadius:'0 200px 200px 200px'}} className="w-[90px]" src={image} alt="" />
            <div className="mt-3">
                <h3 className="uppercase">{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <h5 className="text-yellow-500 font-bold">${price}</h5>
        </div>
    )
}
export default Menuitems