import React from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='wrapper1'>
        <h2>Welcome to Yoga Classes</h2>
        <p>Join our yoga classes and experience the benefits of healthy lifestyle</p>
       <div className='register'>
        <Link to = "/register">
            <button>Register</button>
        </Link>
        </div>
    </div>
  )
}

export default Home
