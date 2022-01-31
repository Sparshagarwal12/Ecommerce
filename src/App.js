
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
  const [deleteItem, deleteCartItem] = useState([]);
  const [increaseValue, increaseState] = useState([]);
  const [decreaseValue, decreaseState] = useState([]);

  //Add to cart functionality working
  function handleCart(item) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));

    if (cartData === null) {
      localStorage.setItem("cartData", JSON.stringify([item]));
      addToCard([item]);
      alert("Item Added Successfully");
    }
    else {
      var idArray = cartData.map((value) => {
        return value["id"];
      });
      var isFind = idArray.find((value) => {
        return item["id"] === value
      });
      if (isFind === undefined) {
        localStorage.setItem("cartData", JSON.stringify([...cartData, item]));
        addToCard([...cartData, item]);
        alert("Item Added Successfully");
      }
      else {
        alert("Item Already Available in Cart");
      }
    }
  }


  //handle functionality working
  function handleDelete(id) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    var newArray = cartData.filter((value) => {
      return value["id"] !== id;
    });
    console.log(newArray, "New Array");
    localStorage.setItem("cartData", JSON.stringify([...newArray]));
    deleteCartItem([...newArray]);
  }

  function handleIncrease(id) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    cartData.forEach((value) => {
      if (value["id"] === id) {
        if (value["selectQuantity"] < value["quantity"]) {
          value["selectQuantity"] += 1;
          value["price"] = Number(value["actualPrice"]) * Number(value["selectQuantity"]);
        }
        else {
          alert("Limit Exceeds");
        }
      }
    });
    increaseState([...cartData]);
    localStorage.setItem("cartData", JSON.stringify([...cartData]));
  }

  function handleDecrease(id) {
    const cartData = JSON.parse(localStorage.getItem("cartData"));
    cartData.forEach((value) => {
      if (value["id"] === id) {
        if (value["selectQuantity"] > 1) {
          value["selectQuantity"] -= 1;
          value["price"] = Number(value["actualPrice"]) * Number(value["selectQuantity"]);
        }
        else {
          alert("Limit Exceeds");
        }
      }
    });
    decreaseState([...cartData]);
    localStorage.setItem("cartData", JSON.stringify([...cartData]));
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
            <Route path="cart-page" element={<Cart cartData={cartData} delete={handleDelete} increase={handleIncrease} decrease={handleDecrease} />} />
            <Route path="my-orders-page" element={<MyOrder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;