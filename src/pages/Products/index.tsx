import styles from "./products.module.scss";
import { CategoriesList } from "../../components/CategoriesList";
import { Sort } from "../../components/Sort";
import { FC } from "react";
import { Pizzas } from "../../components/Pizzas";

export const Products: FC = () => {
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
