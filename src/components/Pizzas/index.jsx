import styles from "./pizzas.module.scss";
import { CurrentPizza } from "../CurrentPizza";
import { Skeleton } from "../CurrentPizza/skeleton";
import { useQuery } from "@tanstack/react-query";
import { productsFetch } from "../../api/products";
import { Pagination } from "../Pagination/index";
import { useSelector } from "react-redux";

export const Pizzas = () => {
  const sorting = useSelector((state) => state.filter.sorting.value);

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getCardProducts", sorting],
    queryFn: async () => {
      window.scrollTo(0, 0);
      const res = await productsFetch(sorting);
      const responce = await res.json();

      return responce;
    },
  });
  if (isError) return error;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.cards}>
        {isLoading
          ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
          : data.map((pizza) => <CurrentPizza key={pizza.id} pizza={pizza} />)}
      </div>
      <Pagination />
    </div>
  );
};
