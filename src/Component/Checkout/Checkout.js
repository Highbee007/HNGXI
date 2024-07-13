import { Fragment, useState } from "react";
import img from "./alpridephoto-9uxRcupG36I-unsplash.jpg";
import style from "./Checkout.module.css";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const total = props.total();

  const [cardDetails, setcardDetails] = useState({
    cardNumber: "",
    securityCode: "",
    phone: "",
    saveDetails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setcardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Fragment>
      <Link to="/HNGXI">
        <button className={style.back}>{`<- Back to Shop`}</button>
      </Link>
      <h2>Pay With Credit Card</h2>
      <div className={style.checkout}>
        <div className={style.formGroup}>
          <div>
            <div className={style.card}>
              <label for="cardNumber">Card Number</label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="Card Number"
                value={cardDetails.cardNumber}
                onChange={handleChange}
                aria-label="cardNumber"
              />
            </div>
            <div className={style.others}>
              <div className={style.control}>
                <label for="expireDate">Expire Date</label>
                <input
                  type="date"
                  id="expireDate"
                  name="expireDate"
                  value={cardDetails.expireDate}
                  onChange={handleChange}
                />
              </div>
              <div className={style.control}>
                <label for="securityCode">Security Code</label>
                <input
                  type="password"
                  id="securityCode"
                  name="securityCode"
                  value={cardDetails.securityCode}
                  onChange={handleChange}
                  aria-label="Security Code"
                />
              </div>
            </div>
            <div className={style.pay}>
              <input
                type="checkbox"
                id="saveDetails"
                name="saveDetails"
                checked={cardDetails.saveDetails}
                onChange={handleChange}
              />
              <label for="Details">
                Save my card details for Future Purchase
              </label>
              <button className={style.button} onClick={() => props.checkout()}>
                PAY #{total.total}
              </button>
            </div>
          </div>
        </div>
        <img src={img} alt="payment" className={style.paymentImg} />
      </div>
    </Fragment>
  );
};

export default Checkout;
