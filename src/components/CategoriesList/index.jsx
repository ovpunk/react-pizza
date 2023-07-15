import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../../redux/slices/filterSlice";
import styles from "./categorieslist.module.scss";
const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
export const CategoriesList = () => {
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
