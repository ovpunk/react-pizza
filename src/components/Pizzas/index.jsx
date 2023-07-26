import styles from "./pizzas.module.scss";
import { CurrentPizza } from "../CurrentPizza";
import { Skeleton } from "../CurrentPizza/skeleton";
import { useQuery } from "@tanstack/react-query";
import { productsFetch } from "../../api/products";
import { Pagination } from "../Pagination/index";
import { useSelector } from "react-redux";

////////////////////////////////////////////////////////////////////////////////
export const Pizzas = () => {
  const { sorting, category, pagination, search } = useSelector(
    (state) => state.filter
  );

  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getCardProducts", sorting, category, pagination, search],
    queryFn: async () => {
      window.scrollTo(0, 0);

      const res = await productsFetch(
        sorting.value,
        category.index,
        pagination
      );
      const responce = await res.json();
      if (!!search) {
        return responce.filter((el) =>
          el.title.toLowerCase().includes(search.toLowerCase())
        );
      }

      return responce;
    },
  });

  if (isError) return error;

  const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />);
  //const allPizzas = data.map((pizza)=> <CurrentPizza key={pizza.id}/> )
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>Все пиццы</h2>
      <div className={styles.cards}>
        {isLoading
          ? skeletons
          : data.map((pizza) => <CurrentPizza key={pizza.id} pizza={pizza} />)}
      </div>
      <Pagination />
    </div>
  );
};
