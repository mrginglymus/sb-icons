import * as React from 'react';
import { IconProps } from '../types';

export const Passed = /* @__PURE__ */ React.forwardRef<
  SVGSVGElement,
  IconProps
>(({ color = 'currentColor', size = 14, ...props }, forwardedRef) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={forwardedRef}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 14A7 7 0 107 0a7 7 0 000 14zm3.854-9.354a.5.5 0 010 .708l-4.5 4.5a.5.5 0 01-.708 0l-2.5-2.5a.5.5 0 11.708-.708L6 8.793l4.146-4.147a.5.5 0 01.708 0z"
        fill={color}
      />
    </svg>
  );
});
