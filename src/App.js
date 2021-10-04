import React, {Fragment, useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {

  //Create product List
  const [products, setProducts] = useState([
    {id: 1, name: 'Fallout 3', price: 350},
    {id: 2, name: 'Fallout 2', price: 70},
    {id: 3, name: 'Fallout 76', price: 1521},
    {id: 4, name: 'Fallout 4', price: 550},
  ]);

  //State for cart
  const [cart, setCart] = useState([]);

  //Date
  const date = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
      title='Tienda Virtual'
      />

      <h1>Lista de Productos</h1>
      {products.map(product => (
        <Product 
          key = {product.id}
          products = {products}
          product = {product}
          cart = {cart}
          setCart = {setCart}
        />
      ))}

      <Cart 
      cart = {cart}
      setCart = {setCart}
      />

      <Footer 
      date={date}
      />
    </Fragment>
  );
}

export default App;
