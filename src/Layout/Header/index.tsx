import styles from "./header.module.scss";
import logo_img from "../../assets/icons/pizza-logo.svg";
import cart_img from "../../assets/icons/cart.svg";
import { Link, useLocation } from "react-router-dom";
import { Search } from "../../components/Search";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

export const Header = () => {
  const location = useLocation();
  const { pizzas, totalPrice } = useSelector((state: RootState) => state.cart);
  const totalCount = pizzas.reduce(
    (sum: number, obj: any) => sum + obj.count,
    0
  );

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
        {location.pathname !== "/cart" && <Search />}
        {location.pathname !== "/cart" && (
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
        )}
      </header>
      <div className={styles.header__line}></div>
    </>
  );
};
