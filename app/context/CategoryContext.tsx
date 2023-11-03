
import React, { createContext, useState, useContext } from 'react';

interface CategoryContextType {
    category: string,
    subCategory: string,
    changeCategory: (newCategory: string) => void,
    changeSubCategory: (newSubCategory: string) => void
}

const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

interface CategoryProviderProps {
    children: React.ReactNode
}

export const CategoryProvider: React.FC<CategoryProviderProps> = ({children}) => {
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');

    const changeCategory = (newCategory: string): void => {
        setCategory(newCategory)
    }

    const changeSubCategory = (newSubCategory: string): void => {
        setSubCategory(newSubCategory);
    }
    return (
        <CategoryContext.Provider value={{category, subCategory, changeCategory, changeSubCategory}}>
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategory = () => {
    const context = useContext(CategoryContext);
    if (!context) {
        throw new Error('useCategory must be used within a CategoryProvider');
      }
      return context;
}