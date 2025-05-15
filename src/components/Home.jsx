import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {

    const coffee = useLoaderData()
    console.log(coffee)
    
    return (
        <div>
            
        </div>
    );
};

export default Home;