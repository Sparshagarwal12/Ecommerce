// import React from 'react';

// const [quantity, changeQuantity] = useState({});

// function manageQuantity(flag, id) {
//     if (flag === "increase") {
//         changeQuantity(() => {
//             return cartData.map((value, i) => {
//                 if (value["id"] === id) {
//                     if (Number(cartData[i]["quantity"]) > cartData[i]["selectQuantity"]) {
//                         counter = cartData[i]["selectQuantity"] + 1;
//                     }
//                     else {
//                         alert("Limit Exceeds");
//                         counter = cartData[i]["quantity"]
//                     }
//                     cartData[i]["selectQuantity"] = counter;
//                     // localStorage.setItem("cartData", JSON.stringify([...cartData]));
//                     saveData([...cartData]);
//                 }
//             });
//         })
//     }
//     else {
//         changeQuantity(() => {
//             return cartData.map((value, i) => {
//                 if (value["id"] === id) {
//                     if (cartData[i]["selectQuantity"] > 1) {
//                         counter = cartData[i]["selectQuantity"] - 1;
//                     }
//                     else {
//                         alert("Atlease Mini");
//                         counter = 1;
//                     }

//                     cartData[i]["selectQuantity"] = counter;
//                     // localStorage.setItem("cartData", JSON.stringify([...cartData]));
//                     saveData([...cartData]);
//                 }
//             });
//         })
//     }
// }


// const storageData = JSON.parse(localStorage.getItem("cartData"));

// const [cartItem, addToCard] = useState([]);

// function handleCart(item) {
//     addToCard((oldTask) => {
//         if (oldTask.length === 0) {
//             alert("Product Added Successfully")
//             // localStorage.setItem("cartData", JSON.stringify([...oldTask, item]));
//             saveData([...oldTask, item]);
//             return [...oldTask, item];
//         }
//         else {
//             var data = cartData.find((value, i) => {
//                 return cartData[i.toString()]["id"] === item["id"];
//             });
//             if (data === undefined) {
//                 alert("Product Added Successfully")
//                 // localStorage.setItem("cartData", JSON.stringify([...cartData, item]));
//                 saveData([...cartData, item]);
//                 return [...cartData, item];
//             }
//             else {
//                 alert("Product Already Added");
//                 // localStorage.setItem("cartData", JSON.stringify([...cartData]));
//                 saveData([...cartData]);
//                 return [...cartData];
//             }
//         }
//     });
// }

// function saveData(data) {
//     localStorage.setItem("cartData", JSON.stringify(data));
// }
