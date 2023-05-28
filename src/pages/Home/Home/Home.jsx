import { Helmet } from "react-helmet-async"
import Frist from "../../../MySection/Frist"
import Testimonials from "../../Testimonials/Testimonials"
import Banner from "../Banner/Banner"
import PopularManu from "../PopularMenu/PopularMenu"
import Category from "./Category/Category"
import Featured from "./Featured/Featured"

const Home = () => {


  return (
    <div className="items-center justify-center">
         <Helmet>
                <title>Bistro Boss || Home</title>
            </Helmet>
      <Banner />
      <Category />
      <Frist />
      <PopularManu />
      <Featured/>
      <Testimonials/>
    </div>
  )
}

export default Home