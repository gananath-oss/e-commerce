import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "Electronics",
    title: "Electronics",
  },
  {
    id: "Clothing&Shoes&Accessorie",
    title: "Clothing, Shoes & Accessorie",
  },
  {
    id: "Collectibles&Art",
    title: "Collectibles & Art",
  },
  {
    id: "Health&Beauty",
    title: "Health & Beauty",
  },
  {
    id: "SportingGoods",
    title: "Sporting Goods",
  },
  {
    id: "Home&Garden",
    title: "Home & Garden",
  },
  {
    id: "Toys&Hobbies",
    title: "Toys & Hobbies",
  },
  {
    id: "Books&Movies&Musics",
    title: "Books, Movies & Musics",
  },
  {
    id: "Business&Industrial",
    title: "Business & Industrial",
  },
  {
    id: "PetSupplies",
    title: "Pet Supplies",
  },
  {
    id: "BabyEssentials",
    title: "Baby Essentials",
  },
];

const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {},
});

export const categorySelector = createSelector(
  [(store) => store.category],
  (category) => category
);

export default categorySlice.reducer;
