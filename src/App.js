import "./App.css";
import Header from "./Header";
import ProductList from "./Component/ProductList/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment, useState } from "react";
import img from "./Component/ProductList/Dress.png";
import ProductView from "./Component/ProductList/ProductView";
import Cart from "./Component/Cart/Cart";
import Checkout from "./Component/Checkout/Checkout";
import Footer from "./Footer";

function App() {
  const DUMMY_DATA = [
    {
      id: 1,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
    {
      id: 2,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
    {
      id: 3,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
    {
      id: 4,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
    {
      id: 5,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
    {
      id: 6,
      name: "Hoodie and Sweatshirt",
      description: "Explore Now",
      image: img,
      brand: "MATRIX BLACK LONG SLEEVE",
      price: 59999.99,
      details: `The Matrix Black Long Sleeve Luxuriously soft cotton, this round-neck long sleeve elevates your everyday. Layer it or wear it solo - ultimate comfort, endless style. 
      Available in different colors. 
      Add to cart and experience the difference.`,
    },
  ];

  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    setCartItem([...cartItem, product]);
  };

  const increaseQuantity = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (productId) => {
    setCartItem(
      cartItem.map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItem(cartItem.filter((item) => item.id !== productId));
  };

  const calculateTotal = () => {
    const subTotal = cartItem.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    const taxes = subTotal * 0.1;
    const deliveryFee = 20000.0;
    return {
      subTotal,
      taxes,
      deliveryFee,
      total: subTotal + taxes + deliveryFee,
    };
  };

  const checkoutHandler = () => {
    alert("Confirming Payment...");
  };

  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductList products={DUMMY_DATA} />} />
          <Route
            path="/product/:productId"
            element={<ProductView products={DUMMY_DATA} toCart={addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                items={cartItem}
                increase={increaseQuantity}
                decrease={decreaseQuantity}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="/checkout"
            element={
              <Checkout
                // items={cartItem}
                total={calculateTotal}
                checkout={checkoutHandler}
              />
            }
          />
        </Routes>
      </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
