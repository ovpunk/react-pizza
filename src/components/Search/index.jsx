import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";
import clear from "../../assets/icons/close.svg";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeSearchValue } from "../../redux/slices/filterSlice";
export const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    dispatch(changeSearchValue(searchValue));
  }, [dispatch, searchValue]);

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Поиск пиццы..."
        className={styles.search}
        value={searchValue}
        onChange={(event) => handleSearchValue(event)}
      />
      <img src={search} alt="" className={styles.search_icon} />
      {searchValue && (
        <img
          src={clear}
          alt=""
          className={styles.clear_icon}
          onClick={() => setSearchValue("")}
        />
      )}
    </div>
  );
};
