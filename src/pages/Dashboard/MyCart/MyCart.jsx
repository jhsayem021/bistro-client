import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";
import { FaTrashAlt } from 'react-icons/fa';
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Link } from "react-router-dom";

const MyCart = () => {
    const [ cart, refetch] = useCart();
  console.log(cart)
    const total = cart.reduce((sum,item)=> item.price+sum, 0 );

    const handleDelete = item =>{

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
        fetch(`https://bistro-server-olive.vercel.app/carts/${item._id}`,{
          method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0){
            refetch();
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
        }
      })
    }
    
   
    return (
        <div className="w-5/6">
            <SectionTitle 
            subHeading={"My Cart"}
            heading={"Wanna Add More"}
            ></SectionTitle>
            <div className="flex justify-evenly items-center h-[80px]">
            <h1 className="text-2xl">Total item: {cart.length}</h1>
            <h1 className="text-2xl">Total: ${total.toFixed(2)}</h1>
            <Link to="dashboard/payment"><button className="btn btn-warning btn-sm">Pay</button></Link>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>Food</th>
        <th>Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
 
      {
        cart.map((item,index)=><tr
        key={index}
        >
        <td>
          {index+1}
        </td>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
              </div>
          </div>
        </td>
        <td>
          {item.name}
        </td>
        <td> ${item.price}</td>
        <td>
        <button onClick={()=>handleDelete(item)} className="btn btn-sm"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
      }
    
    </tbody>
   
    
  </table>
</div>
        </div>
    );
};

export default MyCart;