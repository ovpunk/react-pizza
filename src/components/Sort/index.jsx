import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sortingValues } from "../../constants";
import { changeSorting } from "../../redux/slices/filterSlice";
import arrow from "../../assets/icons/arrow.svg";

import styles from "./sort.module.scss";

export const Sort = () => {
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
