const SectionTitle =({heading, subHeading})=>{
    return(
        <div className="mx-auto text-center my-12 md:w-3/12">
            <h3 className="text-yellow-500">--------{subHeading}--------</h3>
         <h2 className="text-3xl uppercase border-y-2 my-3 py-3">{heading}</h2>
        </div>
    )
}
export default SectionTitle