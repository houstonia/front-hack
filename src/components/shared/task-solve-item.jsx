import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"
import { Link, useLocation } from "react-router-dom";
const buttonStatus = cva(
    "flex w-1/2 text-white justify-center items-center",{
        variants:{
            variant:{
                selected:"bg-red-500 ",
                default:"bg-[#171B26]",
            },
        },
        defaultVariants: {
            variant: "default",
          },
    }
)

export const TaskSolveItem = ({adress, variant, text, className}) => {
    return(<Link to={adress} className={cn(buttonStatus({variant}), className)}>{text}</Link>)
}