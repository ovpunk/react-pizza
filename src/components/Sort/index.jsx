import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sorting } from "../../constants";
import { changeSorting } from "../../redux/slices/filterSlice";
import arrow from "../../assets/icons/arrow.svg";

import styles from "./sort.module.scss";
import { useSearchParams } from "react-router-dom";

export const Sort = () => {
  const isMounting = useRef(false);
  const sortRef = useRef();

  const [, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  ///////////////////////////////

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClick = (i) => {
    const newSorting = sorting[i];
    const value = sorting[i].value;
    dispatch(changeSorting(newSorting));
    setOpen(false);
    isMounting.current = true;
    if (isMounting.current) {
      return setSearchParams((prev) => {
        prev.set("sorting", value);
        return prev;
      });
    }
  };

  const selected = useSelector((state) => state.filter.sorting);

  return (
    <div className={styles.sort_wrapper} ref={sortRef}>
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
            {sorting.map((el, i) => (
              <li
                key={i}
                onClick={() => handleClick(i)}
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
