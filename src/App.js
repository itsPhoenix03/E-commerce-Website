import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Navbar, Products, Cart, Checkout } from "./components";
import { commerce } from "./lib/commerce";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => setCart(await commerce.cart.retrieve());

  const addToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    setCart(cart);
  };

  const handleOnUpdateCartItemQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });

    setCart(cart);
  };

  const handleRemoveCartItem = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);

    setCart(cart);
  };

  const emptyCart = async () => {
    const { cart } = await commerce.cart.empty();

    setCart(cart);
  };

  const refreshCart = async () => {
    const newCart = commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaputerCheckout = (checkoutTokenId, newOrder) => {
    setOrder(newOrder);
    refreshCart();
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div>
      <Navbar totalItems={cart.total_items} />
      <Switch>
        <Route exact path="/">
          <Products products={products} onAddToCart={addToCart} />
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            handleOnUpdateCartItemQty={handleOnUpdateCartItemQty}
            handleRemoveCartItem={handleRemoveCartItem}
            emptyCart={emptyCart}
          />
        </Route>
        <Route excat to="/checkout">
          <Checkout
            cart={cart}
            order={order}
            onCaptureCheckout={handleCaputerCheckout}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
