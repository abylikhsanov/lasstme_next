'use client';

import { useEffect } from "react";

import { Category } from "./Category"
import { getCategories } from "../api/BackendAPI"

// Temp data
const categories = [
    {
        name: "Clothing",
        level: 1,
        subcategories: [
            {
                name: "All clothing",
                level: 2,
                subcategories: [

                ]
            },
            {
                name: "Knitwear",
                level: 2,
                subcategories: [

                ]
            },
            {
                name: "Jackets & Coats",
                level: 2,
                subcategories: [

                ]
            }
        ]
    },
    {
        name: "Shoes",
        level: 1,
        subcategories: [
            {
                name: "All shoes",
                level: 2,
                subcategories: [
                    
                ]
            },
            {
                name: "Boots",
                level: 2,
                subcategories: [
                    
                ]
            },
            {
                name: "Loafers",
                level: 2,
                subcategories: [
                    
                ]
            }
        ]
    },
    {
        name: "Bags",
        level: 1,
        subcategories: [
            {
                name: "Shoes",
                level: 2,
                subcategories: [
                    
                ]
            }
        ]
    },
    {
        name: "Accessories",
        level: 1,
        subcategories: [
            {
                name: "Shoes",
                level: 2,
                subcategories: [
                    
                ]
            }
        ]
    },
]

export function CategoriesMobile() {
    useEffect(() => {
        console.log('a')
        const getData = async() => {
            try {
                const dataJson = await getCategories();
                return dataJson;
            } catch (error) {
                console.error('Error');
            }
        }

        getData();
    }, [])
    return (
        <div className="flex flex-col w-full">
            {
                categories.map((category, id) => {
                    return <Category name={category.name} key={category.name} subcategories={category.subcategories}/>
                })
            }
        </div>
    )
}