// src/components/ui/darkIcons.tsx

import React from "react";

interface IconProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  className?: string;
}

export const MoonIcon: React.FC<IconProps> = ({ fill = "currentColor", size = 24, height = 24, width = 24, className = "", ...props }) => {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      height={height}
      role="presentation"
      viewBox="0 0 24 24"
      width={width}
      fill="none"
      stroke={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};