import { Link, useParams } from "react-router-dom";
import Button from "../../UI/Button/Button";
import style from "./ProductView.module.css";
import { Fragment } from "react";

const ProductView = (props) => {
  const { productId } = useParams();
  const product = props.products.find((p) => p.id === Number(productId));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Fragment>
      <p>{`< BACK`}</p>
      <div className={style.preview}>
        <div className={style.img}>
          <img src={product.image} alt={product.name} />
        </div>
        <div className={style.details}>
          <h3>{product.brand}</h3>
          <p>#{product.price}</p>
          <div>
            <h4>COLOR</h4>
            <div className={style.colors}>
              <div className={`${style.color} ${style.red}`}></div>
              <div className={`${style.color} ${style.black}`}></div>
              <div className={`${style.color} ${style.blue}`}></div>
              <div className={`${style.color} ${style.yellow}`}></div>
              <div className={`${style.color} ${style.pink}`}></div>
            </div>
          </div>
          <div>
            <h4>DESCRIPTION</h4>
            <p>{product.details}</p>
          </div>
          <div>
            <h4>SIZE</h4>
            <div className={style.sizes}>
              <div className={style.size}>M</div>
              <div className={style.size}>L</div>
              <div className={style.size}>XL</div>
              <div className={style.size}>XXL</div>
            </div>
          </div>
          <Link to="/checkout">
            <button
              className={style.button}
              onClick={() => props.toCart(product)}
            >
              BUY NOW
            </button>
          </Link>
          <Button onClick={() => props.toCart(product)}>ADD TO CART</Button>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductView;
