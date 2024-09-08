import { cn } from "@/lib/utils"


const MaxWidthWrapper = ({ children, className }) => {
    return (
        <div className={cn("h-full mx-auto w-full xl:max-w-screen-xl lg:max-w-screen-2xl px-2.5 md:px-10", className)}>
            {children}
        </div>
    )
}

export default MaxWidthWrapper