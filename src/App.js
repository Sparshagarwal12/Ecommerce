
//Imports for library
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

//Imports for Components
import LoginPage from './screens/auth/signinPage/signin.jsx';
import ProtectedRoute from './ProtectedRoute';
import NavBar from './component/navBar/NavBar.jsx';
import Category from './screens/category/Category.jsx';
import Cart from './screens/cart/Cart.jsx';
import HomePage from './screens/homepage/HomePage';
import MyOrder from './screens/myorder/MyOrder';



//Imports for Styling
import './screens/auth/signinPage/signin.css';
const App = () => {

  const [cartItem, addToCard] = useState([]);

  function handleCart(item) {
    addToCard((oldTask) => {
      if (oldTask.length === 0) {
        alert("Product Added Successfully")
        localStorage.setItem("cartData", JSON.stringify([...oldTask, item]));
        return [...oldTask, item];
      }
      else {
        var data = oldTask.find((value, i) => {
          return oldTask[i.toString()]["id"] === item["id"];
        });
        console.log(data, "data");
        if (data === undefined) {
          alert("Product Added Successfully")
          localStorage.setItem("cartData", JSON.stringify([...oldTask, item]));
          return [...oldTask, item];
        }
        else {
          alert("Product Already Added");
          localStorage.setItem("cartData", JSON.stringify([...oldTask]));
          return [...oldTask];
        }
      }
    });
  }

  useEffect(() => {
  });


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<NavBar />} >
            <Route path="home-page" element={<HomePage handleCart={handleCart} />} />
            <Route path="category-page" element={<Category />} />
            <Route path="cart-page" element={<Cart/>} />
            <Route path="my-orders-page" element={<MyOrder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;