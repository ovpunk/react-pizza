import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";
import clear from "../../assets/icons/close.svg";
import { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/slices/filterSlice";
import { useDebounce } from "../../hooks/useDebounce";
import { useSearchParams } from "react-router-dom";

export const Search: FC = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(() => {
    const search = searchParams.get("search");
    return search ? search : "";
  });

  const debounceValue = useDebounce(searchValue, 500);
  useEffect(() => {
    dispatch(changeSearchValue(debounceValue));
  }, [dispatch, debounceValue]);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);

    if (value) {
      return setSearchParams((prev) => {
        prev.set("search", value);
        return prev;
      });
    }

    return setSearchParams((prev) => {
      prev.delete("search");
      return prev;
    });
  };

  const inputRef = useRef<HTMLInputElement>(null);
  const clearClick = () => {
    inputRef.current?.focus();
    setSearchValue("");
    setSearchParams((prev) => {
      prev.delete("search");
      return prev;
    });
  };
  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        placeholder="Поиск пиццы..."
        className={styles.search}
        value={searchValue}
        onChange={(event) => handleChange(event)}
      />
      <img src={search} alt="" className={styles.search_icon} />
      {searchValue && (
        <img
          src={clear}
          alt=""
          className={styles.clear_icon}
          onClick={() => clearClick()}
        />
      )}
    </div>
  );
};
