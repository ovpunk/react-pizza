import styles from "./cart.module.scss";
import mini_cart from "../../assets/icons/mini_cart.svg";
import trash_cart from "../../assets/icons/trash-cart.svg";
import { PizzaInCart } from "../../components/PizzaInCart";
import { useDispatch, useSelector } from "react-redux";
import { EmptyCart } from "./emptyCart";
import { clearCart } from "../../redux/slices/cartSlice";
import { RootState } from "../../redux/store";

export const Cart = () => {
  const dispatch = useDispatch();
  const { pizzas, totalPrice } = useSelector((state: RootState) => state.cart);
  const totalCount = pizzas.reduce((sum, obj) => sum + obj.count, 0);
  if (!pizzas.length) {
    return <EmptyCart />;
  }
  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.cart_top}>
        <div className={styles.cart_title}>
          <img src={mini_cart} alt="" />
          <h2>Корзина</h2>
        </div>
        <div className={styles.clear_cart} onClick={handleClear}>
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
            <span className={styles.total_price}> {totalPrice} ₽</span>
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
