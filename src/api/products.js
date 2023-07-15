export const productsFetch = (sorting, category, pagination, search) => {
  return fetch(
    `https://649fd4f6ed3c41bdd7a6bf0e.mockapi.io/items?page=${pagination}&limit=4&sortBy=${sorting}&category=${category}&search=${search}`
  );
};
