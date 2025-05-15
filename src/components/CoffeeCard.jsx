import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
    const { _id, name, photo } = coffee

    const handleDelete = (id) => {
        console.log('deleted', id)

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            fetch(`http://localhost:3000/coffee/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                
                if(data.deletedCount){
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Coffee has been deleted.",
                    icon: "success"
                });
                   const remainCoffee = coffee.filter(coffee=> coffee._id !== id)
                   console.log(remainCoffee)
                }
            })

           

            // if (result.isConfirmed) {
            //     Swal.fire({
            //         title: "Deleted!",
            //         text: "Your file has been deleted.",
            //         icon: "success"
            //     });
            // }
        });
    }
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                </div>
                <div className='flex gap-2 items-center'>
                    <Link to={`/coffee/${_id}`}>
                    <button className='btn'>View</button>
                    </Link>
                    <button className='btn'>Edit</button>
                    <button onClick={() => handleDelete(_id)} className='btn'>X</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;