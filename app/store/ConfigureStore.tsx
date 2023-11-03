import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./CategoryState";
import { subCategoryReducer } from "./SubCategoryState";

const reducer = {
    categoryReducer,
    subCategoryReducer
};

export const store = configureStore({
    reducer
});