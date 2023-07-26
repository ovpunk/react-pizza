import { Link } from "react-router-dom";
import cart from "../../assets/icons/empty-basket.svg";
import styles from "./cart.module.scss";
export const Cart = () => {
  return (
    <div className={styles.empty_wrapper}>
      <h2 className={styles.title}>Корзина пустая 😕</h2>
      <p className={styles.text}>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={cart} alt=":(" className={styles.image} />
      <Link to="/" className={styles.button}>
        Вернуться назад
      </Link>
    </div>
  );
};
