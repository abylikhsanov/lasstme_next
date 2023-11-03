import { createAction, createReducer } from '@reduxjs/toolkit';

interface CategoryState {
    name: string
};

const setCategory = createAction<string>('category/set');

const initialState = {name: ''} as CategoryState;

export const categoryReducer = createReducer(initialState, (builder) => {
    builder
    .addCase(setCategory, (state, action) => {
        state.name = action.payload;
    })

})