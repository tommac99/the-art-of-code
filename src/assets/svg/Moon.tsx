import * as React from "react";

export const MoonSVG = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 720 503.999"
    >
      <path
        fill="#F4DFBB"
        d="M607.775 213.605c0 16.341-13.247 29.587-29.588 29.587s-29.588-13.246-29.588-29.587 13.247-29.588 29.588-29.588c16.341.001 29.588 13.248 29.588 29.588z"
      />
      <path
        fill="#E0CEB6"
        d="M594.021 197.887a5.077 5.077 0 11-10.153-.001 5.077 5.077 0 0110.153.001zM599.025 207.649a2.511 2.511 0 11-5.022-.002 2.511 2.511 0 015.022.002zM589.104 212.639a3.223 3.223 0 01-6.446 0 3.223 3.223 0 016.446 0z"
      />
    </svg>
  );
};
