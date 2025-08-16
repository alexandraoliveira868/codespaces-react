import "./styles/theme.css";
import "./styles/global.css";
import { Header } from "./components/Header";
import { Routes, Route } from "react-router";
import { CartProvider } from "./service/CartContext";
import { Cart } from "./components/Cart";
import { ProductList } from "./components/ProductList";
import { Login } from "./components/E2/Login";
import { Signup } from "./components/E2/Register";
import { Estoque } from "./components/E2/Estoque";


export default function App() {
  return (

    <>
    <CartProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/stock" element={<Estoque/>} />
      </Routes>
    </CartProvider>
    </>
  );
  }
  
