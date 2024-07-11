import { useState } from 'react';
import img from './alpridephoto-9uxRcupG36I-unsplash.jpg';
import style from './Checkout.module.css'; // Assuming you have a CSS module

const Checkout = (props) => {
  const total = props.total();

  const [shippingDetails, setShippingDetails] = useState({
    street: '',
    email: '',
    phone: '',
    saveDetails: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setShippingDetails((prevDetails) => ({
      ...prevDetails,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className={style.checkout}>
      <h2>SHIPPING ADDRESS</h2>
      <div className={style.formGroup}>
        <div className={style.formControl}>
          <label htmlFor="street">Street Address</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="Street Address"
            value={shippingDetails.street}
            onChange={handleChange}
            aria-label="Street Address"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Your Email eg.example@gmail.com"
            value={shippingDetails.email}
            onChange={handleChange}
            aria-label="Email"
          />
        </div>
        <div className={style.formControl}>
          <label htmlFor="phone">Phone number</label>
          <input
            type="number"
            id="phone"
            name="phone"
            placeholder="Input your Phone number"
            value={shippingDetails.phone}
            onChange={handleChange}
            aria-label="Phone number"
          />
        </div>
        <div className={style.formControl}>
          <input
            type="checkbox"
            id="saveDetails"
            name="saveDetails"
            checked={shippingDetails.saveDetails}
            onChange={handleChange}
          />
          <label htmlFor="saveDetails">Save my Shipping details</label>
        </div>
        <button
          className={style.payButton}
          onClick={() => props.checkout()}
          aria-label={`Pay ${total.total}`}
        >
          PAY #{total.total.toFixed(2)}
        </button>
      </div>
      <img src={img} alt="payment" className={style.paymentImg} />
    </div>
  );
};

export default Checkout;
