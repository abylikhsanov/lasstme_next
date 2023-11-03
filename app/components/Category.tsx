"use client";

import { useState } from "react";
import { MinusOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";
import React from "react";

import { useCategory } from "../context/CategoryContext";

function SubCategory({ name, onSubCategoryClick }: { name: string; onSubCategoryClick: (name: string) => (void)}) {

  return (
      <div className="flex px-8 h-12 items-center hover:bg-blue-100 cursor-pointer">
        <span className="text-black font-bold text-xl" onClick={() => onSubCategoryClick(name)}>
          {name}
        </span>
      </div>
  );
}

export function Category({ name, subcategories }: { name: string; subcategories: Array<any> }) {
  const [categoryOpened, setCategoryOpened] = useState(false);
  const { changeCategory, changeSubCategory } = useCategory();

  function onSubCategoryClick(name: string) {
    console.log(`Changing sub category to ${name}`);
    changeSubCategory(name);
  }

  function onCategoryClick() {
    console.log(`Changing category to ${name}`);
    changeCategory(name);
    setCategoryOpened(!categoryOpened);
  }

  return (
    <div className="flex flex-col">
      <div
        className="flex flex-row justify-between border-y-2 border-grey w-full h-16 items-center p-4 hover:bg-blue-100 cursor-pointer"
        onClick={onCategoryClick}
      >
        <span
          className="text-black font-bold text-xl"
          onClick={onCategoryClick}
        >
          {name}
        </span>
        {categoryOpened ? (
          <div>
            <MinusOutlined className="icon" />
          </div>
        ) : (
          <ArrowRightOutlined className="icon" />
        )}
      </div>
      {categoryOpened &&
        subcategories.map((subcategory) => {
          return (
            <Link href={`/category/${subcategory.name.toLowerCase().replaceAll(" ", "-")}`} key={subcategory.name}>
            <SubCategory
              name={subcategory.name}
              onSubCategoryClick={onSubCategoryClick}
            />
            </Link>
          );
        })}
    </div>
  );
}
