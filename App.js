// import React, { useState } from 'react'
// import Navbar from './Component/Navbar'
// import Product from './Component/Product'
// import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import ProductDetail from './Component/ProductDetail'
// import SearchItem from './Component/Searchitem'
// import Cart from './Component/Cart'
// import { items } from './Component/Data'
// import Footer from './Component/Footer'
// import LoginPage from './Component/SignUpPage'
// import Welcomepage from './Component/Welcomepage'
// import Signup from './Component/SignUpPage'

// const App = () => {
//   const [data, setData] = useState([...items])
//   const [cart, setCart] = useState([])
//   return (
//     <>
//     {/* <Router> */}
//     {/* n */}
    
//     <Navbar cart={cart} setData={setData} />
//     {/* <Welcomepage/> */}
//     <Routes>
//       <Route path='/' element={<Signup/>} />
//       <Route path="/home" element={<Product cart={cart} setCart={setCart} items={data} />} />
//       <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
//       <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
//       <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
//     </Routes> 
//     {/* < Footer/> */}
  
//     {/* </Router> */}
//     </>
//   )
// }

// export default App


// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './Component/Navbar';
// import Product from './Component/Product';
// import ProductDetail from './Component/ProductDetail';
// import SearchItem from './Component/Searchitem';
// import Cart from './Component/Cart';
// import { items } from './Component/Data';
// import Footer from './Component/Footer';
// import Signup from './Component/SignUpPage';
// import Frontpage from './Component/Frontpage';
// import { getDatabase } from "firebase/database";
// import Loginpage from './Component/Loginpage';
// // import { app } from "./firebase";



// // const db = getDatabase(app);




// const App = () => {
//   const [data, setData] = useState([...items]);
//   const [cart, setCart] = useState([]);

//   const location = useLocation(); // Hook to get the current location

//   return (
//     <>
//        <h1>Firebase React App</h1>
//       {/* Conditionally render the Navbar, hide it on the signup page */}
//       {location.pathname !== '/' && <Navbar cart={cart} setData={setData} />}
//         {/* <Frontpage/> */}
//         {/* <Loginpage/> */}
//       <Routes>
//         <Route path='/' element={<Signup />} />
//         <Route path="/home" element={<Product cart={cart} setCart={setCart} items={data} />} />
//         <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
//         <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
//         <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
//       </Routes>
//       {location.pathname !== '/' && <Footer cart={cart} setData={setData} />}
//     </>
//   );
// };

// // const AppWrapper = () => {
// //   return (
// //     <Router>
// //       <App />
// //     </Router>
// //   );
// // };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import ProductDetail from './Component/ProductDetail';
import SearchItem from './Component/Searchitem';
import Cart from './Component/Cart';
import { items } from './Component/Data';
import Footer from './Component/Footer';
import Signup from './Component/SignUpPage';
import Frontpage from './Component/Frontpage';
import Login from './Component/Loginpage';  // Import the Login component

const App = () => {
  const [data, setData] = useState([...items]);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state

  const location = useLocation();
  const navigate = useNavigate();

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    navigate('/home'); // Redirect to home page after successful login
  };

  return (
    <>
      {/* <h1>Firebase React App</h1> */}
      {/* Conditionally render the Navbar, hide it on the signup page */}
      {location.pathname !== '/' && <Navbar cart={cart} setData={setData} isLoggedIn={isLoggedIn} />}
      <Routes>
        <Route path='/' element={<Signup />} />
        <Route path="/home" element={<Product cart={cart} setCart={setCart} items={data} />} />
        <Route path="/product/:id" element={<ProductDetail cart={cart} setCart={setCart} />} />
        <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} /> {/* Add Login route */}
      </Routes>
      {location.pathname !== '/' && <Footer cart={cart} setData={setData} />}
    </>
  );
};

export default App;

