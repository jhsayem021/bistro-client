import Swal from 'sweetalert2'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../Hooks/useCart";
import useAuth from '../../hooks/useAuth';


const FoodCard = ({item}) => {
    const {name, recipe, image , price, _id} = item
    const {user} = useAuth();
    const location = useLocation()
    const navigate = useNavigate();
    const [, refetch ] = useCart();
    const handleAddCart = (item) =>{
      console.log(item);
      
      if(user && user.email){
        const orderItem = {menuItemId:_id,name,image,price,user:user.displayName , email: user.email}
        fetch('https://bistro-server-olive.vercel.app/carts',{
          method:"POST",
          headers:{
            'content-type':'application/json'
          },
          body: JSON.stringify(orderItem)

        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data)
          if(data.insertedId){
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart',
              showConfirmButton: false,
              timer: 1500
            })}
            else {
              Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate('/login',{state: {from:location}})
                }
              })

            
          }
        })
      }
    }
    return (
        <div className="card w-4/5 bg-base-100 shadow-xl mx-auto">
  <figure className="p-4">
    <img src={image} alt="food" className="rounded-xl" />
    <p className="bg-slate-500 text-white  px-4 rounded-3xl  mt-4 mr-4 absolute right-0 top-0" >{price}</p>
  </figure>
 
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={()=>handleAddCart(item)} className="text-center btn btn-outline border-0 border-b-4  mt-5 bg-slate-100 border-orange-400 ">Add to Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCard;