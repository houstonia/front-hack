import * as React from "react"
import { cn } from "@/lib/utils"
import SearchIcon from "@/assets/icons/search.svg";

const SearchInput = React.forwardRef(
    ({ className, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "flex w-96 h-10 items-center rounded-md bg-white pl-3 pr-2 text-sm background focus-within:ring-1 focus-within:ring-ring focus-within:ring-offset-2",
                    className,
                )}
            >
                <input
                    {...props}
                    type="search"
                    ref={ref}
                    className={cn("w-[90%] h-9 p-2 border-none hover:outline-none placeholder:text-muted-foreground text-zinc-400 text-base font-normal font-['Inter'] leading-normal focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                    className,)}
                />
                <img src={SearchIcon} alt="" srcSet="" />
            </div>
        );
    },
);

SearchInput.displayName = "Search";

export { SearchInput };