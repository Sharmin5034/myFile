import { useEffect, useState } from "react"
import SectionTitle from "../../../Components/SectionTitle/SectionTitle"
import Menuitems from "../../Shared/MenuItems/Menuitems"
import Buttons from "../../Shared/Button/Button"

const PopularManu = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(menu => menu.category === 'popular')
                setItems(popular)
            })
    }, [])
    return (
        <section className="my-16 mx-20">
            <SectionTitle subHeading={'Check it out'} heading={'FROM OUR popular '} />
            <div className="grid gap-10 grid-cols-1 md:grid-cols-2">
                {
                    items.map(data=><Menuitems key={data._id} data={data}/>)
                }
            </div>
            <div  className='text-center items-center justify-center'>

            <Buttons text={'View Full  Menu'}/>
            </div>
        </section>
    )
}
export default PopularManu