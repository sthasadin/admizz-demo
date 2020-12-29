import React from "react";

const Input = (props: any) => {
  return (
    <input
      type={props.type}
      className={props.className}
      value={props.value}
      placeholder={props.placeholder}
    />
  );
};

export { Input };
