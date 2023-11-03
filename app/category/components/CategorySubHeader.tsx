import Link from "next/link";
import { useCategory } from "@/app/context/CategoryContext";

export default function CategorySubHeader() {
    const { category, subCategory } = useCategory();
    console.log(`Category is ${category}`);

  return (
    <div className="flex flex-col justy-center items-center">
        <div className="flex flex-row my-4 justify-center items-center">
            <Link href="/home">
                <span className="text-center text-grey-500 mr-4">Home</span>
            </Link>
            <Link href="/home">
                <span className="text-center text-grey-500 mr-4">{category}</span>
            </Link>
            <Link href="/home">
                <span className="text-center text-grey-500">{subCategory}</span>
            </Link>
        </div>
    </div>
  )
}
