import React from "react";

const CheckBox = (props) => {
  const { checked = false, onClick = () => {}, name = "" } = props;
  return (
    <div className="flex items-start gap-x-3">
      <div
        className={`inline-flex items-center p-1 text-white justify-center w-5 h-5 border rounded cursor-pointer ${
          checked ? "bg-primary border-primary" : "border-text-4 dark:border-text-3"
        }`}
        onClick={onClick}
      >
        <input
          type="checkbox"
          name={name}
          className="hidden select-none"
          onChange={() => {}}
        />
        <span className={`${checked ? "" : "opacity-0"}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </span>
      </div>
      {props.children && (
        <div className="cursor-pointer select-none" onClick={onClick}>
          {props.children}
        </div>
      )}
    </div>
  );
};

export default CheckBox;
