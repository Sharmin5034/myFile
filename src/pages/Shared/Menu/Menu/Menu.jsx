import { Helmet } from "react-helmet-async"
import Cover from "../../Cover/Cover"
import img from "../../../../assets/menu/banner3.jpg"
import dessertimg from "../../../../assets/menu/dessert-bg.jpeg"
import saladimg from "../../../../assets/menu/salad-bg.jpg"
import pizzaimg from "../../../../assets/menu/pizza-bg.jpg"
import soupimg from "../../../../assets/menu/soup-bg.jpg"
import useMenu from "../../../../hooks/useMenu"
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle"
import MenuCategory from "../MenuCategory/MenuCategory"

const Menu = () => {
    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    const soup = menu.filter(item => item.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss || Menu</title>
            </Helmet>

            {/* main cover */}
            <Cover img={img} title={'OUR MENU'} des={'Would you like to try a dish?'} />
            <SectionTitle subHeading={"Don't Miss"} heading={'TODAYS OFFER'} />
            <MenuCategory items={offered} />
            {/* dessert menu items */}
            <MenuCategory items={dessert} title={'dessert'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={dessertimg} />



            <MenuCategory items={pizza} title={'pizzs'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={pizzaimg} />

            <MenuCategory items={salad} title={'salad'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={saladimg} />

            <MenuCategory items={soup} title={'soup'} des={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} img={soupimg} />

        </div>
    )
}
export default Menu