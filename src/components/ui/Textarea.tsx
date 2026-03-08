import { forwardRef } from "react";
import { cn } from "@/lib/cn";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block font-syne text-sm font-medium text-nane-yesili mb-2"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            "w-full px-4 py-3 rounded-xl font-poppins text-sm text-white",
            "bg-orman-yesili/50 border border-mat-yesil/30",
            "placeholder:text-nane-yesili/40",
            "focus:border-hardal-sarisi focus:outline-none focus:ring-1 focus:ring-hardal-sarisi/50",
            "transition-colors duration-200 resize-y min-h-[120px]",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500/50",
            className
          )}
          {...props}
        />

        {error && (
          <p className="mt-1.5 text-xs text-red-400 font-poppins">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
