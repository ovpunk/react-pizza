type SortType = {
  value: string;
  title: string;
  index: number;
};

export const sorting: SortType[] = [
  { value: "rating", title: "популярности", index: 0 },
  { value: "price", title: "цене", index: 1 },
  { value: "title", title: "алфавиту", index: 2 },
];

export const typeNames: string[] = ["тонкое", "традиционное"];
