import React from "react";
import Select from "react-select";
interface DropDownSelect {
    title?: string;
    defaut?:string;
    options?:any;
    handelChange?:any;
    defaultvalue?:any
}
const DropDownSelect = ({ title, options, handelChange, defaultvalue }:DropDownSelect) => {
  console.log(defaultvalue)
  const customStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
    }),
  };
  return (
    <div style={{ position: "relative", height: 50 }}>
      <div
        style={{
          position: "absolute",
          left: 20,
          top: -7,
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
        value={{ label: defaultvalue, value: defaultvalue }}
        defaultValue={{ label: defaultvalue, value: defaultvalue }}
        searchable
        styles={customStyles}
        onChange={(e) => handelChange(e.value)}
      />
    </div>
  );
};

export { DropDownSelect };
