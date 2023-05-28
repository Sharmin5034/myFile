
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import Menuitems from "../../Shared/MenuItems/Menuitems"
import Buttons from "../../Shared/Button/Button"
import useMenu from "../../../hooks/useMenu"

const PopularManu = () => {
    const [menu] =useMenu()
    const popular = menu.filter(item =>item.category ==='popular')
    return (
        <section className="my-16 mx-20">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR popular '} />
            <div className="grid gap-20  md:grid-cols-2">
                {
                    popular.map(data=><Menuitems key={data._id} data={data}/>)
                }
            </div>
            <div  className='text-center items-center justify-center'>

            <Buttons text={'View Full  Menu'}/>
            </div>
        </section>
    )
}
export default PopularManu