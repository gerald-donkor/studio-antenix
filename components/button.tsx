import React from "react";

export default function Button({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`flex items-center p-1 cursor-pointer ${className}`}>
      {children}
    </button>
  );
}
