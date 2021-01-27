//these functions may be redundant predecessors to the ones in local-storage-utils.js

// import { findById } from '../hunter/hunter-app.js';


// const CART = 'CART';
// const defaultEmptyCart = [];


// export function getCart() {

//     const stringyCart = localStorage.getItem(CART);

//     if (stringyCart) {
//         const parsedCart = JSON.parse(stringyCart);
//         return parsedCart;
//     } else {
//         const stringyDefaultCart = JSON.stringify(defaultEmptyCart);
//         localStorage.setItem(CART, stringyDefaultCart);
//         return defaultEmptyCart;
//     }
// }

// export function addToCart(id) {

//     const cart = getCart();
//     const cartItem = findById(id, cart);

//     if (cartItem) {
//         cartItem.quantity++;

//     } else {
//         const lineItem = {
//             id: id,
//             quantity: 1
//         };

//         cart.push(lineItem);
//     }

//     localStorage.setItem(CART, JSON.stringify(cart));
// }


// export function clearCart() {
//     const stringyDefaultCart = JSON.stringify(defaultEmptyCart);

//     localStorage.setItem(CART, stringyDefaultCart);
// }