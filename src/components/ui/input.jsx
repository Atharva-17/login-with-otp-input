import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "mt-1 flex h-10 w-full font-medium rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-[#e6e6e6] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#a2a2a2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e6e6e6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-[#2e2e2e] dark:bg-[#000] dark:ring-offset-[#454545] dark:placeholder:text-[#222222] dark:focus-visible:ring-[#454545]",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }
