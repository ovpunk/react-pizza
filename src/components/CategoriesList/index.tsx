import { useDispatch } from "react-redux";

import { changeCategory } from "../../redux/slices/filterSlice";
import styles from "./categorieslist.module.scss";
import { useSearchParams } from "react-router-dom";

import { FC, memo, useState } from "react";

type CategoriesType = {
  value: string;
  title: string;
  index: number;
};

const categories: CategoriesType[] = [
  { value: "all", title: "Все", index: 0 },
  { value: "meat", title: "Мясные", index: 1 },
  { value: "vegetarian", title: "Вегетарианская", index: 2 },
  { value: "grill", title: "Гриль", index: 3 },
  { value: "spicy", title: "Острые", index: 4 },
];

export const CategoriesList: FC = memo(() => {
  const [, setSearchParams] = useSearchParams();

  const [selected, setSelected] = useState(0);
  const dispatch = useDispatch();

  const handleClick = (i: number) => {
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
});
