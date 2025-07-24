import styles from "./Cart.module.css";

export function Cart({ cart }) {
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    const discount = 222.22; // Exemplo de desconto no pagamento via PIX
    const totalWithDiscount = totalPrice - discount;

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
      <div className={styles.cartDetails}>
        <ul>
          {cart.map((product, index) => (
            <li key={index}> 
              <img src={product.thumbnail} alt={product.title} />
              <div className={styles.productDetails}>
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>
         <div className={styles.summary}>
            <p><strong>Subtotal:</strong> ${totalPrice.toFixed(2)}</p>
            <p><strong>Discount (PIX):</strong> -${discount.toFixed(2)}</p>
            <p className={styles.total}><strong>Total:</strong> ${totalWithDiscount.toFixed(2)}</p>
            <div className={styles.paymentOption}>
              <label>
                <input type="radio" name="guarantee" /> No Guarantee
              </label>
              <label>
                <input type="radio" name="guarantee" /> 12 Months Extended Warranty (+$51.83)
              </label>
              <label><input type="radio" name="guarantee" /> 12 Months Extended Warranty (+$51.83)
              </label>
              <label>
                <input type="radio" name="guarantee" /> 24 Months Extended Warranty (+$103.66)
              </label>
               </div>
            <button className={styles.checkoutButton}>Continue to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
}