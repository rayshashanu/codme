// import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import React, { useState } from 'react';
// import image1 from '.'; // Adjust the path if necessary
// import image2 from './images/image2.png'; // Adjust the path if necessary

const image1 = '/kiddydresses1.png'; // Referencing an image directly in the public folder
const image2 = '/kiddydresses.png'; // Another image in the public folder

const Home = ({ addToCart }) => {
  const navigate = useNavigate();

  // Example product data
  const products = [
      { id: 1, name: 'Dress 1', price: 29.99, image: '/images/dress1.jpg' },
      { id: 2, name: 'Dress 2', price: 39.99, image: '/images/dress2.jpg' },
  ];
  const dispatch = useDispatch()
  const navigator = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0);

    // Array of image imports
    const images = [image1, image2];

    // Function to show the next image
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Function to show the previous image
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
//   const login = () => {
//     dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//     navigator('/login')
//   }
//   const menfash = () => {
//     dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//     navigator('/men')
//   }
//   const womenfash = () => {
//     dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//     navigator('/women')
//   }
  const kidfash = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/kid')
  }
  
// const fav = () => {
//   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//   navigator('/favourite')
// }
const cart = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/cart')
}
// const logout = () => {
//   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//   navigator('/')
// }
// const prof = () => {
//   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//   navigator('/profile')
// }
  // const user = useSelector((state) => state.user.user);

  return (
    <>
    <div style={{backgroundColor:'#ed54a4'}}>
      <center>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'white',flexDirection:'row',width:'1450px',height:'1600',padding:'20px'}}>
   {/* <input type='text' name='search' placeholder='search' style={{height:'30px',color:'yellow'}}/> */}
    <img src='kiddo.png' style={{width:'150px'}}/>
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5 onClick={cart}> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5>
   <h5> <FaRegUserCircle style={{fontSize:'20px'}}/>
          You
   </h5>
   <h5> <TbLogout2  style={{fontSize:'20px'}}  />
          Logout
   </h5>
        </div>
        </center>
        <center>
        <div style={{alignContent:'center',justifyContent:'space-evenly',display:'flex'}}>
        <select  style={{width:'100px',height:"50px",borderRadius:'30px'}}>
            <option  value='none' selected disabled hidden>BABIES</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option >Pants</option>
            <option>Trousers</option>
        </select>
        <select  style={{width:'100px',height:"50px",borderRadius:'30px'}}>
        <option  value='none' selected disabled hidden>BOYS</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option >Pants</option>
            <option>Trousers</option>
        </select>
        <select  style={{width:'100px',height:"50px",borderRadius:'30px'}}>
        <option  value='none' selected disabled hidden>GIRLS</option>
            <option>T-shirt</option>
            <option>Shirt</option>
            <option >Pants</option>
            <option>Trousers</option>
            </select>
            </div>
            </center>
            <br></br>
            <br></br>

            <div>
            {/* <h1>Homepage</h1> */}
            <div style={{ position: 'relative', width: '1400px',height:'400px', overflow: 'hidden', margin: 'auto' }}>
                {/* Previous button */}
                <button
                    style={{
                        position: 'absolute',
                        left: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                        zIndex: 1
                    }}
                    onClick={prevSlide}
                >
                    &#10094;
                </button>

                {/* Image */}
                <img
                    src={images[currentIndex]}
                    alt={`Slide ${currentIndex + 1}`}
                    style={{ width: '100%', display: 'block' }}
                />

                {/* Next button */}
                <button
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        border: 'none',
                        padding: '10px',
                        cursor: 'pointer',
                        zIndex: 1
                    }}
                    onClick={nextSlide}
                >
                    &#10095;
                </button>
            </div>
        </div>
        <div style={{display:'flex',color:'white',flexDirection:'row',padding:'20px',justifyContent:'space-evenly'}}>
          <h2>Our Top Catogories</h2>
          <h4>Sorted By:</h4>
          <input type='text' name='Sorted by' placeholder='All catogory'/>
        </div>
            <div style={{justifyContent:'space-around',display:'flex',backgroundColor:'#ed54a4'}}>
      
      <a href="#">
      <img src='c2.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}/>
      </a>
      <a>
      <img src='c1.png' style={{height:'500px'}} />
      <FaRegHeart style={{fontSize:'20px'}}/>
      </a>
      <a href="#">
      <img src='c3.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}}/>
      </a>
      <a href="#">
      <img src='c4.png' style={{height:'500px'}}/>
      <FaRegHeart style={{fontSize:'20px'}} />
      </a>
      </div>
      <div style={{justifyContent:'space-around',display:'flex'}}>
        <button  onClick={cart} value='Add to Cart' style={{width:'200px'}}>Add To cart</button>
        <button   onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        <button  onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        <button  onClick={cart} value='Add to Cart'  style={{width:'200px'}}>Add To cart</button>
        </div>
    

      <div >
      <div style={{alignContent:'start',display:'fl',justifyContent:"space-around",flexDirection:'column',width:'1450px',padding:'20px',color:'white'}}>
                            <h3>Contact Details</h3>
                            <p>
                                <span class="fa-phone">Telephone:</span>(212)888-77-88
                                <br/>   <span class="fa-envelope">Email:</span>
                                <br/>  <a href="mailto:info@joomla51.com">dhnr@gmail.com</a>
                                <br/>  <span class="fa-link">Website:</span>
                                <br/> <a href="http://www.joomla51.com">www.dreszone.com</a>
                            </p>
                            <p >The Dunes, Top Road,
                              <br/> Street12,
                              <br/> New York City
                                </p>
            </div>
            </div>
      
            {/* <div style={{alignContent:'start',display:'fl',justifyContent:"space-around",flexDirection:'column',width:'1450px',padding:'20px'}}>
                            <h3>Contact Details</h3>
                            <p>
                                <span class="fa-phone">Telephone:</span>(212)888-77-88
                                <br/>   <span class="fa-envelope">Email:</span>
                                <br/>  <a href="mailto:info@joomla51.com">dhnr@gmail.com</a>
                                <br/>  <span class="fa-link">Website:</span>
                                <br/> <a href="http://www.joomla51.com">www.dreszone.com</a>
                            </p>
                            <p >The Dunes, Top Road,
                              <br/> Street12,
                              <br/> New York City
                                </p> */}
                            {/* <h3 style={{alignContent:'space-between',display:'flex',justifyContent:'normal',flexDirection:'column'}}>Our Collection</h3>
                            <ul class="menu">
                                <li>
                                    <a class="fa-tasks" href="#">Men </a>
                                </li>
                                <li>
                                    <a class="fa-users" href="#">Women</a>
                                </li>
                                <li>
                                    <a class="fa-signal" href="#">Kids</a>
                                </li>
                            </ul>
      
                       <h3 class="color-gray margin-bottom-10">Join our Newsletter</h3>
                            <p>
                                Sign up for our newsletter for all the
                                latest news and information
                            </p>
                            <input type="email"/>
                            <button class="btn btn-primary btn-lg margin-top-20" type="button">Subscribe</button> */}
                      {/* </div> */}
                      </div>
                    
                       
               
                
           
        
    
    </>
  );
};

export default Home;
