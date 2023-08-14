import ReactPaginate from "react-paginate";
import styles from "./pagination.module.scss";
import { useDispatch } from "react-redux";
import { switchPagination } from "../../redux/slices/filterSlice";
export const Pagination = () => {
  const dispatch = useDispatch();
  return (
    <ReactPaginate
      className={styles.pagination}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => dispatch(switchPagination(event.selected + 1))}
      pageRangeDisplayed={4}
      pageCount={3}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
