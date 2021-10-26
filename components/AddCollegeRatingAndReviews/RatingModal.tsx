import React from "react";
import RatingStar from "./RatingStar";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function ratingModal({
  isRatingModal,
  handleAlertModal,
  handleChange,
  onSend,
  review,
}) {
  return (
    <div>
      <Dialog
        open={isRatingModal}
        onClose={() => handleAlertModal(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Your Reviews will helps other students"}
        </DialogTitle>
        <DialogContent>
          <div>
            <RatingStar
              handleChange={handleChange}
              title="Academics"
              review={review}
            />
            <RatingStar
              handleChange={handleChange}
              title="Accomodation"
              review={review}
            />
            <RatingStar
              handleChange={handleChange}
              title="Faculty"
              review={review}
            />
            <RatingStar
              handleChange={handleChange}
              title="Infrastructures"
              review={review}
            />
            <RatingStar
              handleChange={handleChange}
              title="Placements"
              review={review}
            />
            <RatingStar
              handleChange={handleChange}
              title="Social"
              review={review}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={onSend} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
