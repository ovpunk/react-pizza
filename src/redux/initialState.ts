type filterType = {
  search: string;
  sorting: {
    value: string;
    title: string;
    index: number;
  };
  category: {
    value: string;
    title: string;
    index: number;
  };
  pagination: number;
};

type cartType = {
  id: string;
  title: string;
  count: number;
  price: number;
  type: number;
  size: number;
  imageUrl: string;
};

type pizzasType = {
  pizzas: cartType[];
  totalPrice: number;
};

export interface initialDataInterface {
  filter: filterType;
  cart: pizzasType;
}

export const initialData: initialDataInterface = {
  filter: {
    search: "",
    sorting: { value: "rating", title: "популярности", index: 0 },
    category: { value: "all", title: "Все", index: 0 },
    pagination: 1,
  },
  cart: {
    pizzas: [],
    totalPrice: 0,
  },
};
