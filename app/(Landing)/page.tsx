"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

const RootPage = () => {
    const router = useRouter()
    return(
        <div>
            <h1 className="text-pink-500 text-9xl">
                Hey Jucas
            </h1>
            <Button onClick={() => router.push("/home")}>Go to home page</Button>
        </div>
    )
}

export default RootPage