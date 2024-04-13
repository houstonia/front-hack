import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: { 
        standart:"font-['Raleway'] text-white  rounded-lg justify-center items-center gap-2.5 inline-flex",
        default: "bg-[#282A3E] text-primary-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        download:"bg-gray-800 rounded-lg flex justify-center items-start text-white font-['Raleway']",

      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        lg2: "h-13 rounded-md px-8",
        icon: "h-10 w-10",
        standart:"w-[119px] h-[52px] px-8 py-3.5 text-base font-semibold  leading-tight",
        download:"h-[42px] px-3.5 py-2.5  text-[15px] font-semibold leading-tight",
        full:"w-full h-11 rounded-md px-8"

      },
      bg:{
        red:"bg-[#9A66F4] ",
        disabled:"bg-[#222631]",
        success:"bg-[#67C23A]",
        background3:"bg-[#9A66F4  ]",
        purple: "bg-[#9A66F4]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size,bg, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size,bg, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }
