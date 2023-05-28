import { Parallax } from 'react-parallax';
const Cover =({img, title, des})=>{
    return(
        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the Menu"
        strength={-200}
    >
        <div className="hero h-[500px]">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[700px] py-10 h-1/2 bg-gray-800 opacity-50">
            <h1 className="mb-5  text-5xl font-bold uppercase text-white">{title}</h1>
            <p className="mb-5 text-white px-24">{des}</p>
          </div>
        </div>
      </div>
    </Parallax>
        
    )
}
export default Cover