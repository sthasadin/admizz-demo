import React from "react";
import Select from "react-select";
interface DropDownSelect {
  title?: string;
  defaut?: string;
  options?: any;
  handleChange?: (e: any) => void;
  defaultvalue?: any;
  errorMessage?: any;
  error?: any;
  name?: any;
}
const DropDownSelect = ({
  title,
  options,
  handleChange,
  defaultvalue,
  errorMessage,
  error,
  name,
}: DropDownSelect) => {
  const customStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999, marginTop: "60px" }),
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      position: "absolute",
      left: 0,
      top: 3,
      right: 0,
      borderColor: error ? "red" : "#c4c4c4",
    }),
  };

  return (
    <div style={{ position: "relative", height: 50 }}>
      <div
        style={{
          position: "absolute",
          left: 20,
          top: -5,
          height: 15,
          background: "white",
          zIndex: 1,
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        <h4 style={{ fontSize: 13, fontWeight: 500, color: "#828282" }}>
          {" "}
          {title}{" "}
        </h4>
      </div>
      <Select
        options={options}
        searchable
        styles={customStyles}
        value={defaultvalue}
        error={error}
        onChange={handleChange}
      />
      {errorMessage && (
        <span
          style={{
            fontSize: 12,
            color: "#FF0000",
            position: "absolute",
            bottom: "-22px",
            left: "4px",
          }}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
};

export { DropDownSelect };
