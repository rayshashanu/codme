import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useDispatch } from 'react-redux';
import { BiHomeAlt2 } from "react-icons/bi";
const Payment= () => {
  
  const navigator = useNavigate()
  const dispatch = useDispatch()
  const home = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/mainhome')
  }
  const pay = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/success')
  }
  const Car = () => {
    dispatch({ type: 'SET_USER', payload: 'user not found' }); 
    navigator('/cart')
  }
  return (
    <>
    <div style={{backgroundColor:'#ed54a4'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='kiddo.png' style={{width:'100px'}}/>
    <h5 onClick={home}><BiHomeAlt2  style={{fontSize:'20px'}} />
         Home
    </h5>
     {/* <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
    <h5> <AiOutlineShoppingCart style={{fontSize:'20px'}}  />
          Cart
   </h5> */}
   </div>
   </div>
   <div>
      <div style={{backgroundColor:'#ed54a4'}}>
        <center>
        <br/>
        <br/>
        <h4>Cash on Delivery</h4>
        <br/>
        
      
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Shipping Address*'
          required
        />
         <br/>
        <br/>
        <div style={{display:'flex',padding:'10px',gap:'20px', justifyContent:'center',display:'flex'}}>
        <button onClick={pay} style={{backgroundColor:'black',height:'50px',flexDirection:'',padding:'10px',color:'white' }}><b>Confirm Purchase</b></button>
        <button onClick={Car} style={{backgroundColor:'black',height:'50px',width:'100px',flexDirection:'',padding:'10px',color:'white' }}><b>Cancel</b></button>
        </div>
        </center>
      </div>

</div>

    </>
  );
};

export default Payment;