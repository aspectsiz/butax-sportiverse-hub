// RightArrowIcon.tsx
import React from 'react';

interface IconProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
}

export const RightArrowIcon: React.FC<IconProps> = ({ fill = "currentColor", size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 5l7 7-7 7"
        stroke={fill}
      />
    </svg>
  );
};