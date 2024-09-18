"use client";
import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import Image from "next/image";
import CheckIcon from '@mui/icons-material/Check';


interface LangDropDownButtonProps {
  onSelect: (lang: number) => void,
  value: {
    countryCode: string;
  };
}

const LangDropDownButton: React.FC<LangDropDownButtonProps> = ({
  value,
  onSelect,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (v: number | null) => {
    if(v){
      console.log(v)
    }
  };

  return (
    <>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="bg-white icon-drop-menu mr-2"
      >
        {value.countryCode == "gb" ? (
          <Image
            src={"/images/gb.svg"}
            alt="british country code"
            width={20}
            height={20}
            className="rounded-full"
          />
        ) : (
          <Image
            src={"/images/es.svg"}
            alt="british country code"
            width={20}
            height={20}
            className="rounded-full"
          />
        )}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={()=>handleClose(null)}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={()=>handleClose(0)}>
        <div className="flex justify-end w-full">
        {value.countryCode == "gb"?(<CheckIcon  className="mr-2"/>):<></>}
          <div className="w-[150px] flex">
          <Image
            src={"/images/gb.svg"}
            alt="british country code"
            width={20}
            height={20}
            className="rounded-full mr-3"
          />English
          </div>
        </div>
        </MenuItem>
        <MenuItem onClick={()=>handleClose(1)}>
        <div className="flex justify-end w-full">{value.countryCode == "es"?(<CheckIcon className="mr-2"/>):<></>}
          <div className="w-[150px] flex">
          <Image
            src={"/images/es.svg"}
            alt="spain country code"
            width={20}
            height={20}
            className="rounded-full mr-3"
          />Spain
          </div>
        </div></MenuItem>
      </Menu>
    </>
  );
};

export default LangDropDownButton;
