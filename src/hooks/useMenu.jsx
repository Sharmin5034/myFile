import { useEffect, useState } from "react"

const useMenu =()=>{
    const [menu, setMenu] = useState([])
    const [lodding, setLodding]= useState(true)
    useEffect(() => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                setLodding()
                setMenu(data)
            })
    }, [])
    return [menu,lodding]
}
export default useMenu