import { Pizzas } from "../../components/Pizzas";
import styles from "./products.module.scss";
import { CategoriesList } from "../../components/CategoriesList";
import { Sort } from "../../components/Sort";

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
