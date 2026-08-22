import React from 'react';

export default function FLogo({ className = "w-9 h-9", variant = "yellow" }) {
  if (variant === "plain") {
    return (
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path
          d="M8 6H24C24.5523 6 25 6.44772 25 7V11C25 11.5523 24.5523 12 24 12H13.5V15H21C21.5523 15 22 15.4477 22 16V20C22 20.5523 21.5523 21 21 21H13.5V25C13.5 25.5523 13.0523 26 12.5 26H9C8.44772 26 8 25.5523 8 25V6Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <div className={`relative flex items-center justify-center rounded-xl bg-yellow-400 text-black font-black font-['Poppins'] shadow-sm select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-[60%] h-[60%]"
      >
        <path
          d="M7 6H25C25.5523 6 26 6.44772 26 7V11C26 11.5523 25.5523 12 25 12H13.5V15H21.5C22.0523 15 22.5 15.4477 22.5 16V20C22.5 20.5523 22.0523 21 21.5 21H13.5V25C13.5 25.5523 13.0523 26 12.5 26H8C7.44772 26 7 25.5523 7 25V6Z"
          fill="#050505"
        />
      </svg>
    </div>
  );
}
