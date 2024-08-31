import { useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { useState } from 'react';
import { useEffect } from 'react';  
import { useDispatch } from 'react-redux';
import { BiHomeAlt2 } from "react-icons/bi";
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

const Cart= () => {
  const [productId, setProductId] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');      
  const [total, setTotal] = useState('');


  
  const navigator = useNavigate();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [discountCode, setDiscountCode] = useState('');
    

    const handleCodeChange = (e) => {
        setDiscountCode(e.target.value);
    };

    const handleApplyDiscount = (e) => {
        e.preventDefault();
        // Redirect to discount validation page with discount code as a query parameter
        navigate(`/discount?code=${encodeURIComponent(discountCode)}`);
    };

  const pay = () => {
  dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  navigator('/payment')
}
// const fav = () => {
//   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//   navigator('/favourite')
// }
// const home = () => {
//   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
//   navigator('/mainhome')
// }
const handleSubmit = async (e) => {

  try {
    console.log(productId,'123');
    console.log(productName,'123');
    console.log(price,'123');
    console.log(quantity,'123');
    console.log(total,'123');
    const response = await axios.post('http://localhost:1000/cart', { 
    
    productId,
    productName,
    price,
    quantity,
    total,
    },
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    // const { productId } = response.data;
    // dispatch({ type: 'SET_USER', payload: productId }); 
  
     if(response) {
      navigator('/');
     }       
  } catch (error) {
    console.error(' failed', error);
  }
};
  return (
    <>
    <div style={{backgroundColor:'#ed54a4'}}>
    <div style={{display:'flex',justifyContent:'space-evenly',color:'black',flexDirection:'row',width:'1450px',padding:'20px',color:"white"}}>
   <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <img src='kiddo.png' style={{width:'150px'}}/>
    <h5><BiHomeAlt2  style={{fontSize:'20px'}} />
          Home
   </h5>
     <h5> <FaRegHeart style={{fontSize:'20px'}} /> 
           Favorites
    </h5>
   
   <h5 on onClick={pay}><RiMoneyRupeeCircleLine style={{fontSize:'20px'}} />
         Payment
    </h5>
    </div>



    <div>
    <div style={{justifyContent:'space-between',display:'flex',border:'solid',borderRadius:'15px', borderColor:'white',backgroundColor:'#ed54a4',color:'white'}}>
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Quantity</h4>
        <h4>Total</h4>
        <h4>Order</h4>
        <h4>Remove</h4>    
     </div>
     {/* <div style={{justifyContent:'space-between',display:'flex'}}>
      <img src="k1.jpg" style={{width:'80px',height:'80px'}} />
      <img src="k1.jpg" alt='Kids Combo' style={{width:'80px',height:'80px'}}></img>
      <span>Kids Combo</span>
      <span>Rs.4999</span>

     </div> */}





<div style={{justifyContent:'space-between',display:'flex',padding:'10px',backgroundColor:'#ed54a4'}}>
<img  src="k1.jpg" style={{width:'120px',height:'100px'}} ></img>
{/* <span >T-Shirt</span> */}
<span >₹ 12000</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button>

</div>

<div style={{justifyContent:'space-between',display:'flex',padding:'10px'}}>
<img  src="k2.jpg" style={{width:'120px',height:'100px'}} ></img>
{/* <span >T-Shirt</span> */}
<span >₹ 2400</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button>

</div>
{/* <div style={{justifyContent:'space-between',display:'flex',padding:'10px'}}>
<img  src="w4.jpg" style={{width:'120px',height:'100px'}} ></img> */} 
{/* <span >T-Shirt</span> */}
{/* <span >₹ 8000</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button> */}

{/* </div> */}
{/* <div style={{justifyContent:'space-between',display:'flex',padding:'10px'}}>
<img  src="m3.jpg" style={{width:'120px',height:'100px'}} ></img> */}
{/* <span >T-Shirt</span> */}
{/* <span >₹ 2000</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button>

</div> */}
{/* <div style={{justifyContent:'space-between',display:'flex',padding:'10px'}}>
<img  src="w3.jpg" style={{width:'120px',height:'100px'}} ></img> */}
{/* <span >T-Shirt</span> */}
{/* <span >₹ 3299</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button>
</div>
<div style={{justifyContent:'space-between',display:'flex',padding:'10px'}}>
<img  src="b1.png" style={{width:'120px',height:'100px'}} ></img> */}
{/* <span >T-Shirt</span> */}
{/* <span >₹ 2999</span> 
<input style={{width:'150px',height:'40px'}} type="number" id="quantity" name="quantity" min="1" max="10"/>
<input style={{width:'180px',height:'40px'}} placeholder='Total' />
<button onClick={pay} style={{width:'100px',height:'40px'}} type="button">ORDER</button>
<button  style={{width:'100px',height:'40px'}} type="button">REMOVE</button> */}
<div className="cart-page"  style={{backgroundColor:'#ed54a4'}}>
  <center>
<div style={{alignContent:'center',justifyContent:'center',border:'solid',borderRadius:'15px', borderColor:'white',color:'white',height:'100px',width:'300px'}}>
            <h2>DISCOUNT:</h2>
            {/* Cart items display here */}

            <form onSubmit={handleApplyDiscount}>
                <input
                    type="text"
                    value={discountCode}
                    onChange={handleCodeChange}
                    placeholder="Enter discount code"
                />
                <button type="submit">Apply Discount</button>
            </form>
        </div>
        </center>

</div>
</div>
  </div> 
    </>
  );
};

export default Cart;