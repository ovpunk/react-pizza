import styles from "./header.module.scss";
import logo_img from "../../assets/icons/pizza-logo.svg";
import cart_img from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";
import { Search } from "../../components/Search";
import { useSelector } from "react-redux";

export const Header = () => {
  const { pizzas, totalPrice } = useSelector((state) => state.cart);
  const totalCount = pizzas.reduce((sum, obj) => sum + obj.count, 0);
  return (
    <>
      <header className={styles.header}>
        <Link to="/" className={styles.logo}>
          <img src={logo_img} alt="Pizza" className={styles.logo_img} />
          <div className={styles.logo_text}>
            <h1 className={styles.logo_title}>REACT PIZZA</h1>
            <p className={styles.logo_description}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </Link>
        <Search />
        <div className={styles.header__cart}>
          <Link to="/cart" className={styles.button__cart}>
            <span>{totalPrice ? totalPrice : 0} ₽</span>
            <div className={styles.button__delimiter}></div>
            <div>
              <img src={cart_img} alt="" className={styles.cart__img} />
              <span>{totalCount}</span>
            </div>
          </Link>
        </div>
      </header>
      <div className={styles.header__line}></div>
    </>
  );
};
