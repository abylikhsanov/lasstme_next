"use client";
import { Button } from "antd";
import Image from "next/image";
import { useState } from "react";

export default function ItemContainer() {
  const [isHoovered, setIsHoovered] = useState(false);

  return (
    <div
      className="flex flex-col justify-around items-center w-full h-full"
      onMouseEnter={() => setIsHoovered(true)}
      onMouseLeave={() => setIsHoovered(false)}
    >
      {isHoovered ? (
        <Image src="/home/sample_1_d.jpeg" alt="Sample 1 d" height={200} width={200} />
      ) : (
        <Image src="/home/sample_1.jpeg" alt="Sample 1" height={200} width={200} />
      )}
      <div className="w-3/4 m-2">
      <p className="text-center text-black">Arket - Collared Tweed Top, 100% organic</p>
      <p className="text-center text-gray-500">300 kr</p>
      </div>
      <div className="flex flex-row justify-around items-around w-3/4">
        <Button size="small">Buy</Button>
        <Button size="small" style={{color: 'black'}}>Offer</Button>
      </div>
    </div>
  );
}
