import { Pizzas } from "../../components/Pizzas";
import styles from "./products.module.scss";
import arrow from "../../assets/icons/arrow.svg";
import { sortingValues } from "../../constants";
import { useState } from "react";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

//sortingValues.map(({ value, index }) => console.log(index, value));
const CategoriesList = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const onClickCategory = (index) => {
    setActiveIndex(index);
  };
  return (
    <ul className={styles.categories}>
      {categories.map((value, i) => (
        <li
          onClick={() => onClickCategory(i)}
          key={i}
          className={activeIndex === i ? styles.active : styles.category}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};
const Sort = () => {
  return (
    <div className={styles.sort}>
      <img src={arrow} alt="" />
      <p>Сортировать по:</p>
      <select className={styles.select}>
        {sortingValues.map(({ value, title }) => (
          <option key={value} value={value}>
            <span>{title}</span>
          </option>
        ))}
      </select>
    </div>
  );
};
export const Products = () => {
  return (
    <>
      <div className={styles.top}>
        <CategoriesList />
        <Sort />
      </div>
      <Pizzas />
    </>
  );
};
