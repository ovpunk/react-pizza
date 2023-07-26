import { useDispatch, useSelector } from "react-redux";
import styles from "./pizzaincart.module.scss";
import delete_from_cart from "../../assets/icons/delete_from_cart.svg";
import decrement from "../../assets/icons/decrement.svg";
import increment from "../../assets/icons/increment.svg";
import {
  addPizzas,
  decrementPizza,
  deletePizza,
} from "../../redux/slices/cartSlice";

export const PizzaInCart = () => {
  const pizzas = useSelector((state) => state.cart.pizzas);

  const dispatch = useDispatch();

  const handleDecrement = (id) => {
    dispatch(decrementPizza(id));
  };

  const handleIncrement = (id) => {
    dispatch(addPizzas({ id }));
  };

  const clickDelete = (id) => {
    dispatch(deletePizza(id));
  };

  return (
    <ul>
      {pizzas.map((pizza) => (
        <li key={pizza.id}>
          <div className={styles.line}></div>

          <div className={styles.pizza}>
            <div className={styles.left}>
              <img src={pizza.imageUrl} alt="" className={styles.image} />
              <div className={styles.info}>
                <p className={styles.tittle}>{pizza.title}</p>
                <p className={styles.description}>
                  {pizza.type}, {pizza.size}см.
                </p>
              </div>
            </div>
            <div className={styles.count}>
              <img
                src={decrement}
                alt="Удалить"
                className={styles.buttons}
                onClick={() => handleDecrement(pizza.id)}
              />
              <b>{pizza.count}</b>
              <img
                src={increment}
                alt="Добавить"
                className={styles.buttons}
                onClick={() => handleIncrement(pizza.id)}
              />
            </div>
            <p className={styles.price}>{pizza.price * pizza.count} ₽</p>

            <img
              src={delete_from_cart}
              alt="Удалить"
              className={styles.buttons}
              onClick={() => clickDelete(pizza.id)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
