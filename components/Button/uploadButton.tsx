import React from "react";
import Button from '@material-ui/core/Button';

const UploadButton = ({children}) => {
  return (
    <Button className="uploadButton" variant="contained" component="span">{children}</Button>
  );
};

export { UploadButton };
