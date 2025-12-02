import React from "react";

// w: chiều rộng, h: chiều cao, color: màu fill của SVG
const Logo = ({ w = "200", h = "80", color = "currentColor" }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 200 80" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>
          {`
            .logo-text {
              font-family: Arial, sans-serif;
              font-weight: 900;
              text-transform: uppercase;
            }
          `}
        </style>
      </defs>

      {/* Chữ 2LV, căn giữa */}
      <text
        x="50%"
        y="60%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize="50"
        className="logo-text"
        fill={color} 
      >
        2LV
      </text>

      {/* Đường gạch chân */}
      <line 
        x1="20" 
        y1="70" 
        x2="180" 
        y2="70" 
        stroke={color} 
        strokeWidth="2"
      />
    </svg>
  );
};

export default Logo;