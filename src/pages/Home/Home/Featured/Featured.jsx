import SectionTitle from "../../../../Components/SectionTitle/SectionTitle"
import featuredImg from '../../../../assets/home/featured.jpg'
import Buttons from "../../../Shared/Button/Button"
import './featured.css'
const Featured = () => {
    return (
        <div className="featured-img bg-fixed  pt-6 my-20">
            <SectionTitle subHeading={'Check it out'} heading={'featured items'} />
            <div className="md:flex justify-center bg-gray-400 bg-opacity-20 items-center pt-8 pb-20 px-36 gap-10 text-white">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>May 29, 2023</p>
                    <p className="uppercase"> WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, labore, earum mollitia sed hic porro excepturi amet similique itaque voluptas tempore perspiciatis numquam dolorum officiis ullam facilis? Libero quia eos consequuntur natus, ea, architecto accusamus quaerat amet odit deleniti dolorum ut. Ab architecto deserunt consequuntur quos dolore, a itaque libero?</p>
                    <Buttons text={'Read More'}/>
                </div>
            </div>
        </div>
    )
}
export default Featured