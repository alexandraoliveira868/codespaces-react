import { Link } from "react-router";
import styles from "./Header.module.css";
import { ShoppingBasket } from "lucide-react";

export function Header({ cart }) {
  const cartItemCount = cart.length;
  const totalPrice = cart.reduce((total, product) => total + product.price, 0).toFixed(2);


  return (
    <header className={styles.header}>
      <Link to="/"><h1>TRJ Megastore</h1></Link>
      <div>
        <Link to="/cart"><ShoppingBasket size={24} />
        <span className={styles.cartCount}>{cartItemCount}</span>
        </Link>
        <p>
          Total $: {cart.reduce((total, product) => total + product.price, 0).toFixed(2)}
        </p>
      </div>
    </header>
  );
}