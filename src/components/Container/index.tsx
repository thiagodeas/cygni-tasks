import { ReactNode } from "react"

interface ContainerProps {
    children: ReactNode;
}

export const Container = ({ children } : ContainerProps) => {
    return (
        <div className="flex items-center justify-center bg-[url('/assets/bg-galaxy.jpeg')] bg-cover w-screen h-screen">
            {children}
        </div>
    )
}