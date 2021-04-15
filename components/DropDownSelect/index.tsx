import React from "react";
import Select from "react-select";
<<<<<<< HEAD
interface DropDownSelect {
    title?: string;
    defaut?:string;
    options?:any;
    handleChange?: (e: any) => void;
    defaultvalue?:any;
}
const DropDownSelect = ({ title, options, handleChange, defaultvalue }:DropDownSelect) => {
  // console.log(defaultvalue)
=======

interface Props {
  title?: string;
  options?: any;
  handleChange?: (e: any) => void;
  name?: string;
  error?: boolean;
  errorMessage?: string;
  defaultvalue?:string
}

const DropDownSelect = (props: Props) => {
>>>>>>> 0f464a20bcd45f5ca08d5537253c9c6de8934dc9
  const customStyles = {
    menu: (provided) => ({ ...provided, zIndex: 9999 }),
    control: (base) => ({
      ...base,
      height: 50,
      minHeight: 50,
      position: "absolute",
      left: 0,
      top: 7,
      right: 0,
    }),
  };

  return (
<<<<<<< HEAD
    <div style={{ position: "relative", height: 50 }}>
      <div
        style={{
          position: "absolute",
          left: 20,
          top: 0,
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
         name={name}
       //  defaultvalue={defaultvalue}
        //  error={error}
         onChange={(e) => handleChange(e.value)}
      />
    </div>
=======
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
          value={{ label: props.defaultvalue, value: props.defaultvalue }}
        defaultValue={{ label: props.defaultvalue, value: props.defaultvalue }}
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
>>>>>>> 0f464a20bcd45f5ca08d5537253c9c6de8934dc9
  );
};

export { DropDownSelect };
