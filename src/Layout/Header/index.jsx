import styles from "./header.module.scss";
import logo_img from "../../assets/icons/pizza-logo.svg";
import cart_img from "../../assets/icons/cart.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logo_img} alt="Pizza" className={styles.logo_img} />
          <div className={styles.logo_text}>
            <h1 className={styles.logo_title}>REACT PIZZA</h1>
            <p className={styles.logo_description}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </div>
        <div className={styles.header__cart}>
          <Link href="#" className={styles.button__cart}>
            <span>500 ₽</span>
            <div className={styles.button__delimiter}></div>
            <div>
              <img src={cart_img} alt="" className={styles.cart__img} />
              <span>4</span>
            </div>
          </Link>
        </div>
      </header>
      <div className={styles.header__line}></div>
    </>
  );
};
