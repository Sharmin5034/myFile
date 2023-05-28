import { Link } from "react-router-dom"
import Cover from "../../Cover/Cover"
import Menuitems from "../../MenuItems/Menuitems"
import Buttons from "../../Button/Button"

const MenuCategory =({items, img, title, des})=>{
    return(
        <div className="pt-8">
            {title &&<Cover img={img} title={title} des={des} />}
 <div className="grid gap-12 md:grid-cols-2 mt-16">
                {
                    items.map(data=><Menuitems key={data._id} data={data}/>)
                }
            </div>
            <Link to={`/order/${title}`}>
            <Buttons text={'order now'}/>
            </Link>
        </div>
    )
}
export default MenuCategory