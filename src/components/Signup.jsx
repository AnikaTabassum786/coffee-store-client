import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
    const {createUser} = use(AuthContext)
    console.log(createUser)

    const handleSignUp=(e)=>{
      e.preventDefault()

      const form = e.target;
      const formData = new FormData(form)
      const email = formData.get('email')
      const password = formData.get('password')

      console.log(email,password)

      createUser(email,password)
      .then(result=>{
        console.log(result.user)
      })
      .catch(error=>{
        console.log(error)
      })
    }
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-md">
                <form onSubmit={handleSignUp} className="fieldset p-6 border rounded-lg shadow-md">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input input-bordered w-full mb-4" placeholder="Email" />
                    
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input input-bordered w-full mb-2" placeholder="Password" />
                    
                    <div><a className="link link-hover text-sm">Forgot password?</a></div>
                    
                    <button className="btn btn-neutral mt-4 w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
