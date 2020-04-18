import * as React from "react";

function Add(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-plus"
      {...props}
    >
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export default Add;
