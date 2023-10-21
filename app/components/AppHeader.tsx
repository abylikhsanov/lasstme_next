"use client";

import { useEffect, useState } from "react";
import { SearchOutlined, ShoppingOutlined, 
         UserOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";

import { CategoriesMobile } from "./CategoriesMobile";

export default function AppHeader() {
  const [searchPressed, setSearchPressed] = useState(false);
  const [menuPressed, setMenuPressed] = useState(false);

  return (
    <div className="bg-white">
      <div className="flex flex-row bg-white justify-between items-center p-12">
        <div className="flex flex-row">
          <div>
            {
              menuPressed ? (
                <CloseOutlined 
                className="icon"
              onClick={() => setMenuPressed(!menuPressed)} />
              ) : (
                <MenuOutlined 
                className="icon"
              onClick={() => setMenuPressed(!menuPressed)} />
              )
            }
          </div>
          <div className="ml-8">
            <SearchOutlined
              className="icon"
              onClick={() => setSearchPressed(!searchPressed)}
            />
          </div>
        </div>

        <div className="ml-8">
          <h1 className="text-xl md:text-5xl text-black">lasst.me</h1>
        </div>
        <div className="flex flex-row items-center">
          <div className="ml-8">
            <UserOutlined className="icon" />
          </div>
          <div className="ml-8">
            <ShoppingOutlined className="icon" />
          </div>
        </div>
      </div>
      {searchPressed && (
        <div className="flex ml-4 mr-4 border-t-4 border-black ">
          <input
            type="text"
            placeholder="Search products"
            className="w-full bg-blue focus:outline-none text-black text-xl md:text-3xl"
            onBlur={() => setSearchPressed(false)}
            autoFocus
          />
        </div>
      )}
       {
          menuPressed && (<CategoriesMobile />)
      }
    </div>
  );
}
