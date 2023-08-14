import styles from "./currentpizza.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { addPizzas } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

import { typeNames } from "../../constants";
import { useState } from "react";

//type PizzaType = {
//  id: string;
//  title: string;
//  imageUrl: string;
//  price: number;
//  types: number[];
//  sizes: number[];
//};

export const CurrentPizza = ({ pizza }) => {
  const [activeSize, setActiveSize] = useState(0);
  const [activeType, setActiveType] = useState(
    pizza.types.length < 2 && pizza.types.includes(1) ? 1 : 0
  );

  const [added, setAdded] = useState(false);
  const dispatch = useDispatch();
  const clickAdd = () => {
    const item = {
      id: pizza.id,
      title: pizza.title,
      imageUrl: pizza.imageUrl,
      price: pizza.price,
      type: typeNames[activeType],
      size: pizza.sizes[activeSize],
    };
    dispatch(addPizzas(item));
    setAdded(true);
  };
  const addedCount = useSelector((state) =>
    state.cart.pizzas.find((el) => el.id === pizza.id)
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.pizza_card}>
        <Link to={`pizzas/${pizza.id}`} className={styles.link}>
          <img
            src={pizza.imageUrl}
            alt={pizza.title}
            className={styles.image}
          />
          <b className={styles.title}>{pizza.title}</b>
        </Link>
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
        <div className={styles.bottom}>
          <p className={styles.price}>от {pizza.price}₽</p>

          <button
            className={styles.button}
            type="button"
            onClick={() => clickAdd()}
          >
            <svg
              baseProfile="tiny"
              height="24px"
              id="Layer_1"
              version="1.2"
              viewBox="0 0 24 24"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18,10h-4V6c0-1.104-0.896-2-2-2s-2,0.896-2,2l0.071,4H6c-1.104,0-2,0.896-2,2s0.896,2,2,2l4.071-0.071L10,18  c0,1.104,0.896,2,2,2s2-0.896,2-2v-4.071L18,14c1.104,0,2-0.896,2-2S19.104,10,18,10z" />
            </svg>
            Добавить
            {added && <span>{addedCount && addedCount.count}</span>}
          </button>
        </div>
      </div>
    </div>
  );
};
