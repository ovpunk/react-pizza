export const productsFetch = (sorting) => {
  return fetch(
    `https://649fd4f6ed3c41bdd7a6bf0e.mockapi.io/items?sortBy=${sorting}`
  );
};
