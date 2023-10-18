import { useEffect } from "react";
import { SearchOutlined, ShoppingOutlined } from "@ant-design/icons";

export default function AppHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-row bg-white justify-between items-center p-12">
      <SearchOutlined style={{ color: "black", fontSize: 30 }} />
      <div className="flex flex-row items-center">
        <div className="ml-8">
          <ShoppingOutlined style={{ color: "black", fontSize: 30 }} />
        </div>
        <div className="ml-8">
          <h1 className="text-xl md:text-5xl text-black">lasst.me</h1>
        </div>
      </div>
    </div>
  );
}
