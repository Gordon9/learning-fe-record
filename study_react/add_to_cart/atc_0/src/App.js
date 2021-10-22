import "./App_tw.css";
import Cart from "./Cart";
import Home from "./Home";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <>
      <CartProvider>
        <Home />
        <Cart />
      </CartProvider>
    </>
  );
}

export default App;
