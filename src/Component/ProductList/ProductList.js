import ProductItem from "./ProductItem";
import style from "./Product-List.module.css";


const ProductList = (props) => {
  return (
    <div>
      <h2 className={style.category}>Clothing</h2>
      <div className={style.product}>
        <h2 className={style.title}>NEW ARRIVALS</h2>
        <hr />
        <div className={style.list}>
          {props.products.map((product) => (
            <ProductItem product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
