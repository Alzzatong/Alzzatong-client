import React, { SVGProps } from "react";

const CircleM: React.FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    width="333"
    height="165"
    viewBox="0 0 333 165"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g opacity="0.6">
      <mask
        id="mask0_49_315"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="333"
        height="165"
      >
        <rect width="333" height="165" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_49_315)">
        <circle
          opacity="0.3"
          cx="166"
          cy="4"
          r="101"
          stroke="white"
          strokeWidth="40"
        />
      </g>
    </g>
  </svg>
);
export default CircleM;
