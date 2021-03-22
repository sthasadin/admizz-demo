import React from "react";
import Select from "react-select";

interface Props {
  title?: string;
  options?: any;
  handleChange?: (e: any) => void;
  name?: string;
  error?: boolean;
  errorMessage?: string;
}

const DropDownSelect = (props: Props) => {
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
    <>
      <div style={{ position: "relative", height: 55 }}>
        <div
          style={{
            position: "relative",
            height: 50,
          }}
        >
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
              {props.title}{" "}
            </h4>
          </div>
          <Select
            options={props.options}
            searchable
            styles={customStyles}
            name={props.name}
            error={props.error}
            onChange={(e) => props.handleChange(e.value)}
          />
        </div>
        {props.errorMessage && (
          <span
            style={{
              fontSize: "12",
              color: "#FF0000",
              position: "absolute",
              bottom: "-16px",
              left: "4px",
            }}
          >
            {props.errorMessage}
          </span>
        )}
      </div>
    </>
  );
};

export { DropDownSelect };
