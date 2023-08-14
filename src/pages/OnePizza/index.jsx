import { useQuery } from "@tanstack/react-query";
import { currentPizzaFetch } from "../../api/products";
import { Link, useNavigate, useParams } from "react-router-dom";
import styles from "./onepizza.module.scss";
import { useState } from "react";
import { typeNames } from "../../constants";
import { Spinner } from "../../components/Spinner";
import { useDispatch } from "react-redux";
import { addPizzas } from "../../redux/slices/cartSlice";

//type Props = {
//  isOpen: boolean;
//  onClose: () =>void;
//};
export const OnePizza = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, error, isError, isLoading } = useQuery({
    queryKey: ["getCurrentPizza", id],
    queryFn: async () => {
      const res = await currentPizzaFetch(id);
      const responce = await res.json();
      return responce;
    },
  });
  const [activeSize, setActiveSize] = useState(0);

  const [activeType, setActiveType] = useState(
    !!data && data.types.length < 2 && data.types.includes(1) ? 1 : 0
  );

  const navigate = useNavigate();
  const handleClick = () => {
    const item = {
      id: data.id,
      title: data.title,
      imageUrl: data.imageUrl,
      price: data.price,
      type: typeNames[activeType],
      size: data.sizes[activeSize],
    };
    dispatch(addPizzas(item));
    navigate("/cart");
  };
  if (isError) return <>{error}</>;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.modal}>
      <h2 className={styles.title}>{data.title}</h2>

      <Link to={-1}>
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.close}
        >
          <defs>
            <style>.cls-1 fill:#101820</style>
          </defs>
          <title />
          <g data-name="Layer 50" id="Layer_50">
            <path
              className="cls-1"
              d="M30,29a1,1,0,0,1-.81-.41l-2.12-2.92A18.66,18.66,0,0,0,15,18.25V22a1,1,0,0,1-1.6.8l-12-9a1,1,0,0,1,0-1.6l12-9A1,1,0,0,1,15,4V8.24A19,19,0,0,1,31,27v1a1,1,0,0,1-.69.95A1.12,1.12,0,0,1,30,29ZM14,16.11h.1A20.68,20.68,0,0,1,28.69,24.5l.16.21a17,17,0,0,0-15-14.6,1,1,0,0,1-.89-1V6L3.67,13,13,20V17.11a1,1,0,0,1,.33-.74A1,1,0,0,1,14,16.11Z"
            />
          </g>
        </svg>
      </Link>
      <div className={styles.content}>
        <img src={data.imageUrl} alt={data.title} className={styles.img} />

        <p className={styles.description}>
          <span>Описание: </span> {data.description}
        </p>
        <div className={styles.settings}>
          <ul className={styles.types}>
            {data.types.map((typeId) => (
              <li
                key={typeId}
                onClick={() => setActiveType(typeId)}
                className={activeType === typeId ? styles.active : ""}
              >
                <p>{typeNames[typeId]}</p>
              </li>
            ))}
          </ul>
          <ul className={styles.sizes}>
            {data.sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? styles.active : ""}
              >
                <p>{size} см.</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.bottom_right}>
          <p className={styles.price}>{data.price} ₽</p>
          <button className={styles.button} onClick={handleClick}>
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};
