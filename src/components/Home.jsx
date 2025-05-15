import React from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const coffee = useLoaderData()
    console.log(coffee)
    
    return (
        <div className='grid grid-cols-2'>
           {
            coffee?.map((coffee)=>{
                return(
                    <CoffeeCard coffee= {coffee}>
                   
                    </CoffeeCard>
                )
            })
           }
        </div>
    );
};

export default Home;