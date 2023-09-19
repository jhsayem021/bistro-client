import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaTrashAlt, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {

    const {data: users=[] , refetch} = useQuery(['users'], async ()=>{
        const res = await fetch('https://bistro-server-olive.vercel.app/users')
        return res.json();
    })



    const handleDelete = user =>{

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
          fetch(`https://bistro-server-olive.vercel.app/users/${user._id}`,{
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
    
    const handleMakeAdmin = user =>{
        fetch(`https://bistro-server-olive.vercel.app/users/admin/${user._id}`,{
              method: 'PATCH'
            })
            .then(res => res.json())
            .then(data => {
              if(data.modifiedCount){
                refetch();
                Swal.fire(
                  
                  `${user.name} make admin successful`
                  
                )
              }
            })

    }

    return (
        <div>
            <h1>All Users : {users.length}</h1>


<table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>IMAGE</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>ROLE</th>
        <th>ACTION</th>
      </tr>
    </thead>
    <tbody>
 
      {
        users.map((user,index)=><tr
        key={index}
        >
        <td>
          {index+1}
        </td>
        <td>
          
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={user?.photoURL} alt="Avatar Tailwind CSS Component" />
              </div>
          </div>
        </td>
        <td>
          {user.name}
        </td>
        <td> {user.email}</td>
        <td>{
            (user.role='admin')? 'admin' :<button onClick={()=>handleMakeAdmin(user)} className="btn btn-sm bg-yellow-500"><FaUserShield></FaUserShield></button>
            } </td>
        <td>
        <button onClick={()=>handleDelete(user)} className="btn btn-sm bg-red-500"><FaTrashAlt></FaTrashAlt></button>
        </td>
      </tr>)
      }
    
    </tbody>
   
    
  </table>

        </div>
    );
};

export default AllUsers;