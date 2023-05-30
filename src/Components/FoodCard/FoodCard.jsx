import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price, _id} = item;
  const { user } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation()
  const handleAddToCart = item => {
    console.log(item)
    if (user && user.email) {
      const orderItem ={foodId: _id, name, price, image, email:user.email}
      fetch('http://localhost:5000/carts', {
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify()
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {

            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
          }
          else {
            Swal.fire({
              title: 'Please login to order the food',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now'
            }).then((result) => {
              if (result.isConfirmed) {
                navigate('/login', {state:{from:location}})
              }
            })
          }
        })
    }
  }
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image} alt="" /></figure>
      <p className="absolute right-0 mr-4 mt-4 bg-slate-900 text-white px-4">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-orange-500 btn-ghost border-0 border-b-4 mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  )
}
export default FoodCard