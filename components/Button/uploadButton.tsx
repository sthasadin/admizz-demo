import React from "react";
import Button from "@material-ui/core/Button";

const UploadButton = ({ children, startIcon, className }) => {
  return (
    <Button className={`uploadButton ${ className}`} variant="contained" component="span" >
      {/* {startIcon ? <>  {startIcon}&nbsp;{children}  </> : {children}} */}
      {startIcon}&nbsp;{children}
     {/* {startIcon}&nbsp; */}
    </Button>
  );
};

export { UploadButton };
