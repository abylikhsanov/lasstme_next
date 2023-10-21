'use client'
import AppHeader from "../components/AppHeader"
import ItemsGrid from "../components/ItemsGrid"

export default function Home() {
    const data = Array<any>(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    return (
        <div className="flex flex-col bg-white">
            <AppHeader />
            <ItemsGrid data={data}/>
        </div>
    )
}