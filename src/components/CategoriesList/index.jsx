import { useDispatch } from "react-redux";

import { changeCategory } from "../../redux/slices/filterSlice";
import styles from "./categorieslist.module.scss";
import { useSearchParams } from "react-router-dom";

import { useState } from "react";

const categories = [
  { value: "all", title: "Все", index: 0 },
  { value: "meat", title: "Мясные", index: 1 },
  { value: "vegetarian", title: "Вегетарианская", index: 2 },
  { value: "grill", title: "Гриль", index: 3 },
  { value: "spicy", title: "Острые", index: 4 },
  { value: "closed", title: "Закрытые", index: 5 },
];

export const CategoriesList = () => {
  const [, setSearchParams] = useSearchParams();

  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (i) => {
    const value = categories[i].value;
    dispatch(changeCategory(categories[i]));
    setSelected(i);

    if (categories[i].index) {
      return setSearchParams((prev) => {
        prev.set("category", value);
        return prev;
      });
    }
    return setSearchParams((prev) => {
      prev.delete("category");
      return prev;
    });
  };

  return (
    <ul className={styles.categories}>
      {categories.map((el, i) => (
        <li
          onClick={() => handleClick(i)}
          key={i}
          className={selected === i ? styles.active : styles.category}
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
};
