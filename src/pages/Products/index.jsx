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
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const handleChoice = (i) => {
    setSelected(i);
    setOpen(false);
  };
  return (
    <div className={styles.sort_wrapper}>
      <div className={styles.sort}>
        <img src={arrow} alt="" />
        <p>Сортировать по:</p>
        <span onClick={() => setOpen(!open)} className={styles.choice}>
          {sortingValues[selected].title}
        </span>
      </div>
      {open && (
        <div className={styles.sort_list}>
          <ul>
            {sortingValues.map((el, i) => (
              <li
                key={i}
                onClick={() => handleChoice(i)}
                className={
                  selected === i
                    ? styles.active_sort + " " + styles.sort__list_item
                    : styles.sort__list_item
                }
              >
                {el.title}
              </li>
            ))}
          </ul>
        </div>
      )}
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
