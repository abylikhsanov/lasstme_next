import { Category } from "./Category"

export function CategoriesMobile() {
    return (
        <div className="flex flex-col w-full">
            <Category name="Clothing" />
            <Category name="Shoes" />
            <Category name="Bags" />
            <Category name="Accessories" />
            <Category name="Swimwear" />
            <Category name="Beauty" />
        </div>
    )
}