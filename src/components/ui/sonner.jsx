import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"



const Toaster = ({color="#67C23A",
  ...props
}) => {
  const { theme = "system" } = useTheme()

  return (<div>
    (<Sonner
      theme={theme}
      className="toaster group "
      toastOptions={{
        classNames: {
          toast:
            `group toast group-[.toaster]:bg-[${color}] group-[.toaster]:text-white text-white text-base font-semibold font-['Raleway'] leading-tight group-[.toaster]:border-border group-[.toaster]:shadow-lg`,
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props} />)
 </div> );
}

export { Toaster }
