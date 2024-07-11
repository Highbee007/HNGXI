import style from "./Product-Item.module.css";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  return (
    <div className={style.item}>
      <Link to={`/product/${product.id}`} className={style.link}>
        <img src={product.image} alt={product.name} />
        <div className={style.detail}>
          <h3 className={style.name}>{product.name}</h3>
          <p className={style.description}>{product.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
