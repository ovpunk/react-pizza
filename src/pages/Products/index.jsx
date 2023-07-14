import { Pizzas } from "../../components/Pizzas";
import styles from "./products.module.scss";
import arrow from "../../assets/icons/arrow.svg";
import { sortingValues } from "../../constants";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changeSorting } from "../../redux/slices/filterSlice";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

const CategoriesList = () => {
  const dispatch = useDispatch();
  const onClickCategory = (index) => {
    dispatch(changeCategory(index));
  };
  const selectedCategory = useSelector((state) => state.filter.category);

  return (
    <ul className={styles.categories}>
      {categories.map((value, i) => (
        <li
          onClick={() => onClickCategory(i)}
          key={i}
          className={selectedCategory === i ? styles.active : styles.category}
        >
          {value}
        </li>
      ))}
    </ul>
  );
};
const Sort = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const handleChoice = (i) => {
    const sortingValue = sortingValues[i];

    dispatch(changeSorting(sortingValue));
    setOpen(false);
  };

  const selected = useSelector((state) => state.filter.sorting);

  return (
    <div className={styles.sort_wrapper}>
      <div className={styles.sort}>
        <img src={arrow} alt="" />
        <p>Сортировать по:</p>
        <span onClick={() => setOpen(!open)} className={styles.choice}>
          {selected.title}
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
                  selected.index === i
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
