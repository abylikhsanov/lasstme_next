import { createAction, createReducer } from "@reduxjs/toolkit";

interface SubCategoryState {
    name: string
};

const setSubCategory = createAction<string>('subcategory/set');

const initialState = {name: ''} as SubCategoryState;

export const subCategoryReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setSubCategory, (state, action) => {
        state.name = action.payload;
    }) 
})