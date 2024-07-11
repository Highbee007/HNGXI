import Button from "../../UI/Button/Button";
import style from "./Cart.module.css";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const totals = props.total;

  return (
    <div className={style.cart}>
      {props.items.length === 0 ? (
        <h3>Your Cart is Empty</h3>
      ) : (
        <ul>
          {props.items.map((item) => (
            <li key={item.id} className={style.item}>
              <div>{item.name}</div>
              <div>#{item.price}</div>
              <button
                onClick={() => props.decrease(item.id)}
                className={style.quantity}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => props.increase(item.id)}
                className={style.quantity}
              >
                +
              </button>
              <button
                onClick={() => props.removeFromCart(item.id)}
                className={style.remove}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      {props.items.length > 0 && (
        <div className={style.summary}>
          <p>
            SUBTOTAL <span>#{totals.subTotal.toFixed(2)}</span>
          </p>
          <p>
            TAXES <span>#{totals.taxes.toFixed(2)}</span>
          </p>
          <p>
            DELIVERY <span>#{totals.deliveryFee.toFixed(2)}</span>
          </p>
          <hr />
          <p>
            TOTAL
            <span>#{totals.total.toFixed(2)}</span>
          </p>
          <Link to="/checkout">
            <Button>BUY NOW</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
