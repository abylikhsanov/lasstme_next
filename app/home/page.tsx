"use client";
import React from "react";
import AppHeader from "../components/AppHeader";
import ItemsGrid from "../components/ItemsGrid";
import { ItemContainerProps } from "../types/ItemContainerProps";

export default function Home() {
  const item: ItemContainerProps = {
    displayImage: "/home/sample_1.jpeg",
    hoverImage: "/home/sample_1_d.jpeg",
    description: "Arket - Collared Tweed Top, 100% organic",
    price: "300 kr",
  };
  const dataItems: Array<ItemContainerProps> = [];

  for (let i = 0; i < 15; i++) {
    dataItems.push(item);
  }
  return (
      <div className="flex flex-col bg-white">
        <AppHeader />
        <ItemsGrid data={dataItems} />
      </div>
  );
}
