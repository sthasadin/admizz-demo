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
  icon?: any;

}
const DropDownSelect = ({
  title,
  options,
  handleChange,
  defaultvalue,
  errorMessage,
  error,
  name,
  icon
}: DropDownSelect) => {
  const customStyles = {
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
      marginTop: "60px",
      textTransform: "capitalize",
    }),
    control: (base, state) => ({
      ...base,
      height: 53,
      minHeight: 50,
      position: "absolute",
      textTransform: "capitalize",
      left: 0,
      // top: 0,
      right: 0,
      border: state.isFocused ? "2px solid #3f51b5" : "",
      borderColor: state.isFocused ? "#3f51b5" : "#c4c4c4",
      boxShadow: state.isFocused ? "#3f51b5" : 0,
      "&:hover": {
        borderColor: state.isFocused ? "#3f51b5" : "black",
      },
    }),
  };

  return (
    <div style={{ position: "relative", height: 50 }}>
      <div
        style={{
          position: "absolute",
          left: 9,
          top: -7,
          height: 15,
          background: "white",
          zIndex: 1,
          padding: "0 4px",
          // paddingRight: 10,
        }}
      >
        <h4 style={{ fontSize: 13, fontWeight: 400, color: "#828282" }}>
          {" "}
          {title}{" "}
        </h4>
      </div>
      <Select
        name={name}
        options={options}
        searchable
        styles={customStyles}
        value={defaultvalue}
        error={error}
        onChange={handleChange}
        icon={icon}
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
