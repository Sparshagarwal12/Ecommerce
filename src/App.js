
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
  const cartData = JSON.parse(localStorage.getItem("cartData"));


  //for getting data from local storage

  //for adding item in cart
  const [cartItem, addToCard] = useState([]);
  const [deleteItem, deleteCartItem] = useState([]);

  // function handleCart(item) {
  //   addToCard((oldTask) => {
  //     if (oldTask && !oldTask.length) {
  //       console.log(cartData);

  //       alert("Product Added Successfully")
  //       localStorage.setItem("cartData", JSON.stringify([...oldTask, item]));
  //       return [...oldTask, item];
  //     }
  //     else {
  //       var data = cartData.find((value, i) => {
  //         return cartData[i.toString()]["id"] === item["id"];
  //       });
  //       if (data === undefined) {
  //         console.log(cartData);
  //         alert("Product Added Successfully")
  //         localStorage.setItem("cartData", JSON.stringify([...cartData, item]));
  //         return [...cartData, item];
  //       }
  //       else {
  //         alert("Product Already Added");
  //         localStorage.setItem("cartData", JSON.stringify([...cartData]));
  //         return [...cartData];
  //       }
  //     }
  //   });
  // }

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

  function handleDelete(id) {

    const cartData = JSON.parse(localStorage.getItem("cartData"));
    var idArray = cartData.map((value) => {
      return value["id"];
    });
    var isFind = idArray.find((value) => {
      return id === value
    });
    var newArray = cartData.filter((value) => {
      return value["id"] !== id;
    });

    console.log(newArray, "New Array");
    localStorage.setItem("cartData", JSON.stringify([...newArray]));
    deleteCartItem([...newArray]);
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
            <Route path="cart-page" element={<Cart cartData={cartData} delete={handleDelete} />} />
            <Route path="my-orders-page" element={<MyOrder />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;