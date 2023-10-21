'use client'

import { useState } from "react"
import { MinusOutlined } from "@ant-design/icons"
import { ArrowRightOutlined } from "@ant-design/icons"

export function Category({name}:{name: string}) {
    const [categoryOpened, setCategoryOpened] = useState(false);

    return (
        <div className="flex flex-row justify-between border-y-2 border-grey w-full h-16 items-center p-4">
            <span className="text-black font-bold text-xl">{name}</span>
            {
                categoryOpened ? (
                    <div>
                        <ArrowRightOutlined className="icon"/>
                    </div>
                    
                ) : (
                    <ArrowRightOutlined className="icon"/>
                )
            }
        </div>
    )
}