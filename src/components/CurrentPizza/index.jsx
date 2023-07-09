import { useState } from "react";
import styles from "./currentpizza.module.scss";

export const CurrentPizza = ({ pizza }) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(0);
  const typeNames = ["тонкое", "традиционное"];

  return (
    <div className={styles.wrapper}>
      <div className={styles.pizza_card}>
        <img src={pizza.imageUrl} alt={pizza.title} className={styles.image} />
        <b className={styles.title}>{pizza.title}</b>
        <div className={styles.settings}>
          <ul className={styles.types}>
            {pizza.types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? styles.active : ""}
              >
                <p>{typeNames[typeId]}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.sizes}>
            {pizza.sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? styles.active : ""}
              >
                <p>{size} см.</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
