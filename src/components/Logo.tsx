import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = 32 }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 40 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} logo-subtle-glow transition-all duration-300`}
    >
      {/* Outer Vertical Bars */}
      <path 
        d="M6 4V36" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      <path 
        d="M34 4V36" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      
      {/* Inner Stylized A / Peak - Sharp & Minimal */}
      <path 
        d="M6 36L20 8L34 36" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Curved Precision Crossbar */}
      <path 
        d="M14 26C16 24.5 24 24.5 26 26" 
        stroke="currentColor" 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
    </svg>
  );
};
