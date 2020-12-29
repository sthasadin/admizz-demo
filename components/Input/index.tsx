import React from "react";

const Input = (props: any) => {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      value={props.value}
      name={props.name}
      disabled={props.disabled}
      className={props.className}
    />
  );
};

export { Input };
