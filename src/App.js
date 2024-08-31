import './App.css';
// import LoginPage from './pages/loginPage';
// import RegisterPage from './pages/registerPage';
import {store, persistor} from './redux/store';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
// import HomePage from './pages/home';
import { PersistGate } from 'redux-persist/integration/react';
// import Forgetpage from './pages/forgot';
// import ProductPage from './pages/productPage';
// import AdminPage from './pages/adminpage';
// import ProductmenPage from './pages/productmenPage';
// import ProductkidPage from './pages/productkidPage';
// import AddproductPage from './pages/addproPage';
// import FavouritePage from './pages/favouritePage';
// import Productlist from './components/productlist';
import CartPage from './pages/cartPage';
import MainhomePage from './pages/mainhomePage';
import PaymentPage from './pages/paymentPage';
// import ChartPage from './pages/chartPage';
import SuccessPage from './pages/succesPage';
// import ProfilePage from './pages/profilePage';
// import DiscountForm from './pages/DiscountValidationForm';
// import Checkout from './pages/Checkout';
import DiscountPage from './pages/DiscountPage';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';





function App() {
  return (
    <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>

    <Router> 
      <Routes>
        <Route path="/mainhome" element={<MainhomePage />} />  
        {/* <Route path="/login" element={<LoginPage />} />  */}
        {/* <Route path="/Forget" element={<Forgetpage/>} /> */}
        {/* <Route path="/register" element={<RegisterPage />} />   */}
        {/* <Route path="/*" element={<RegisterPage />} />   */}
        {/* <Route path="/women" element={<ProductPage />} />  */}
        {/* <Route path="/admin" element={<AdminPage />} />    */}
        {/* <Route path="/men" element={<ProductmenPage />} />   */}
        {/* <Route path="/kid" element={<ProductkidPage />} />   */}
        {/* <Route path="/addproduct" element={<AddproductPage />} />   */}
        {/* <Route path="/productlist" element={<Productlist />} /> */}
        {/* <Route path="/favourite" element={<FavouritePage />} /> */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/discount" element={<DiscountPage />}/>
        <Route path="/" element={<MainhomePage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/success" element={<SuccessPage />} /> 
        {/* <Route path="/profile" element={<ProfilePage />} />  */}
        {/* <Route path="/" exact component={DiscountForm} />
        <Route path="/checkout" component={Checkout} /> */}
        
      
      </Routes> 
    </Router> 
    </PersistGate>

    </Provider> 
  );
}

export default App;
