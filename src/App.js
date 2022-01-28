
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



  //for getting data from local storage
  const cartData = JSON.parse(localStorage.getItem("cartData"));


  //for adding item in cart
  const [cartItem, addToCard] = useState([]);

  //for changing quantity
  const [quantity, changeQuantity] = useState({});


  let counter;
  function manageQuantity(flag, id) {
    if (flag === "increase") {
      changeQuantity(() => {
        return cartData.map((value, i) => {
          if (value["id"] === id) {
            if (Number(cartData[i]["quantity"]) > cartData[i]["selectQuantity"]) {
              counter = cartData[i]["selectQuantity"] + 1;
            }
            else {
              alert("Limit Exceeds");
              counter = cartData[i]["quantity"]
            }
            cartData[i]["selectQuantity"] = counter;
            localStorage.setItem("cartData", JSON.stringify([...cartData]));
          }
        });
      })
    }
    else {
      changeQuantity(() => {
        return cartData.map((value, i) => {
          if (value["id"] === id) {
            if (cartData[i]["selectQuantity"] > 1) {
              counter = cartData[i]["selectQuantity"] - 1;
            }
            else {
              alert("Atlease Mini");
              counter = 1;
            }

            cartData[i]["selectQuantity"] = counter;
            localStorage.setItem("cartData", JSON.stringify([...cartData]));
          }
        });
      })
    }
  }


  function handleCart(item) {
    addToCard((oldTask) => {
      if (oldTask.length === 0) {
        alert("Product Added Successfully")
        localStorage.setItem("cartData", JSON.stringify([...oldTask, item]));
        return [...oldTask, item];
      }
      else {
        var data = cartData.find((value, i) => {
          return cartData[i.toString()]["id"] === item["id"];
        });
        if (data === undefined) {
          alert("Product Added Successfully")
          localStorage.setItem("cartData", JSON.stringify([...cartData, item]));
          return [...cartData, item];
        }
        else {
          alert("Product Already Added");
          localStorage.setItem("cartData", JSON.stringify([...cartData]));
          return [...cartData];
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
            <Route path="cart-page" element={<Cart cartData={cartData} changeQuantity={manageQuantity} />} />
            <Route path="my-orders-page" element={<MyOrder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;