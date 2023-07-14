import styles from "./search.module.scss";
import search from "../../assets/icons/search.svg";
import clear from "../../assets/icons/close.svg";
import { useState } from "react";
export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <input
        placeholder="Поиск пиццы..."
        className={styles.search}
        value={searchValue}
        onChange={(event) => changeSearchValue(event)}
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
