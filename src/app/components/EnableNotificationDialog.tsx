"use client";
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface EnableNotificationDialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

const EnableNotificationDialog: React.FC<EnableNotificationDialogProps> = ({
  open,
  onClose,
}) => {
  const handleClose = (selectedValue: boolean = false) => {
    onClose(selectedValue);
  };
  return (
    <Dialog
      open={open}
      onClose={() => handleClose()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      className="max-w-[424px] mx-auto"
    >
      <DialogTitle className="p-0 pt-[5px] pr-[5px] flex justify-end">
        <CloseIcon
          className="hover:cursor-pointer"
          onClick={() => handleClose()}
        />
      </DialogTitle>
      <DialogTitle id="alert-dialog-title">
        {"Do you want to enable notifications?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Push notifications will be sent to this device each time a payment
          status changes. No marketing messages: notifications inform about
          transactional updates only.
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Button
              onClick={() => handleClose(false)}
              variant="outlined"
              color="primary"
              className="w-full mb-2"
            >
              Cancel
            </Button>
          </div>
          <div className="col-md-6 col-sm-12">
            <Button
              onClick={() => handleClose(true)}
              autoFocus
              variant="contained"
              color="primary"
              className="w-full"
            >
              Enable
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnableNotificationDialog;
