import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  id,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-primary"
      >
        {label}
      </label>
      <textarea
        id={id}
        className={`px-4 py-3 border-2 border-primary/20 focus:border-accent outline-none transition-colors resize-none ${className}`}
        {...props}
      />
    </div>
  );
}
