import { useState } from "react";
import styles from "./currentpizza.module.scss";

export const CurrentPizza = ({ pizza }) => {
  const [activeSize, setActiveSize] = useState(false);
  const isActiveSize = () => {
    setActiveSize(!activeSize);
  };
  return (
    <div className={styles.pizza_card}>
      <img src={pizza.imageUrl} alt={pizza.title} className={styles.image} />
      <b className={styles.title}>{pizza.title}</b>
      <div className={styles.settings}>
        <ul>
          {pizza.sizes.map((size) => (
            <li
              onClick={() => isActiveSize()}
              className={activeSize ? styles.active : ""}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
