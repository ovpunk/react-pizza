import styles from "./cart.module.scss";
import mini_cart from "../../assets/icons/mini_cart.svg";
import trash_cart from "../../assets/icons/trash-cart.svg";
import { PizzaInCart } from "../../components/PizzaInCart";
import { useSelector } from "react-redux";

export const Cart = () => {
  const { pizzas, totalPrice } = useSelector((state) => state.cart);
  const totalCount = pizzas.reduce((sum, obj) => sum + obj.count, 0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.cart_top}>
        <div className={styles.cart_title}>
          <img src={mini_cart} alt="" />
          <h2>Корзина</h2>
        </div>
        <div className={styles.clear_cart}>
          <img src={trash_cart} alt="" />
          <p>Очистить корзину</p>
        </div>
      </div>
      <PizzaInCart />
      <div className={styles.cart_bottom}>
        <div className={styles.total}>
          <p>
            Всего пицц: <span>{totalCount} шт.</span>
          </p>
          <p>
            Сумма заказа:
            <span className={styles.total_price}>{totalPrice} ₽</span>
          </p>
        </div>
        <div className={styles.buttons}>
          <a href="/"> &#60; Вернутся назад </a>
          <a href="/" className={styles.payment}>
            Оплатить сейчас
          </a>
        </div>
      </div>
    </div>
  );
};
