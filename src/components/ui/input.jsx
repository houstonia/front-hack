import * as React from "react"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex bg-[#222631] font-['Raleway'] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:text-white file:font-medium  focus-visible:outline-none focus-visible:none focus-visible:none focus-visible:none disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "text-white text-base font-semibold font-['Raleway'] leading-tight rounded-md",
        bot: "text-white text-base font-semibold font-['Raleway'] leading-tight rounded-l-md"
      },
      size: {
        default:"h-[52px]  w-full px-3 py-2 ",
        task:"my-3 w-[521px] h-[52px] px-[18px] py-3.5 text-zinc-500 text-base font-semibold  leading-tight placeholder:text-zinc-500 text-base font-semibold font-['Raleway'] leading-tight"
      },
      border:{
        success:"border border-[#67C23A]",
        red:"border border-red-500"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Input = React.forwardRef(({ className,placeholder="",variant,size,border, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      placeholder={placeholder}
      className={cn(inputVariants({ variant, size, className,border }))}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
