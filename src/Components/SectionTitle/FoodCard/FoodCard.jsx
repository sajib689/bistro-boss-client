import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders/AuthProviders";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart/useCart";
const FoodCard = ({item}) => {
    const {_id ,name, image, price, recipe} = item
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const [,refetch] = useCart()
    const handleAddToCart = () => {
      if(user && user?.email) {
        const cartItem = {foodId: _id, name, image, price, email: user?.email}
        fetch('http://localhost:3000/carts',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
        body: JSON.stringify(cartItem)
        })
        .then(res => res.json())
        .then( data => {
          if(data.insertedId) {
            refetch()
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Food added on cart',
              showConfirmButton: false,
              timer: 1500
            })
            
          } 
        })
      }
      else {
        Swal.fire({
          title: 'Please login to order the food',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Login now!'
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state: {from : location}})
          }
        })
      }
    }
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe.slice(0,70)}...</p>
          <p className="text-yellow-600 text-xl">${price} USD</p>
          <div className="card-actions">
          <Link onClick={() => handleAddToCart(item)} className="font-[500] text-[17px] uppercase border-b-4 border-yellow-900 text-yellow-800 rounded-lg p-2 hover:bg-black">
              add to cart
            </Link>
          </div>
        </div>
      </div>
      
    </div>
    
  );
};

export default FoodCard;
