import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Input({ label, id, className = "", ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-primary"
      >
        {label}
      </label>
      <input
        id={id}
        className={`px-4 py-3 border-2 border-primary/20 focus:border-accent outline-none transition-colors ${className}`}
        {...props}
      />
    </div>
  );
}
