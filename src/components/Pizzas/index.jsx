import styles from "./pizzas.module.scss";
import pizzas from "../../assets/pizzas.json";
import { CurrentPizza } from "../CurrentPizza";

export const Pizzas = () => {
  return (
    <div className={styles.wrapper}>
      <h2>Все пиццы</h2>
      <div className={styles.cards}>
        {pizzas.map((pizza) => (
          <CurrentPizza key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};
