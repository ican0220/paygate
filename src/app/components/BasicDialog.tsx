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

interface BasicDialogProps {
  open: boolean;
  onClose: (value: boolean) => void;
}

const BasicDialog: React.FC<BasicDialogProps> = ({ open, onClose }) => {
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
        {"Are you sure you want to cancel your payment?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          All progress will be lost if you cancel this payment process.
        </DialogContentText>
      </DialogContent>
      <DialogContent>
        <Button
          onClick={() => handleClose(false)}
          variant="outlined"
          color="primary"
          className="w-full mb-2"
        >
          Yes, cancel payment process
        </Button>
        <Button
          onClick={() => handleClose(true)}
          autoFocus
          variant="contained"
          color="primary"
          className="w-full"
        >
          No, proceed with payment
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BasicDialog;
