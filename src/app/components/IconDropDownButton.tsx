"use client";
import React from "react";
import { IconButton, Menu, MenuItem } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Divider from '@mui/material/Divider';
import Link from "next/link";

interface IconDropDownButtonProps {
  items: Array<string>;
  value: string;
}

const IconDropDownButton: React.FC<IconDropDownButtonProps> = ({
  value,
  items,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        className="bg-white icon-drop-menu text-[#202020] mr-2"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className=""
      >
        <MenuItem onClick={handleClose}>Forward Invoice</MenuItem>
        <MenuItem onClick={handleClose}>Enable Notifications</MenuItem>
        <Divider className="mx-auto w-[80%]"/>
        <MenuItem onClick={handleClose} className="mt-2">
          Need Help
        </MenuItem>
        <Divider className="mx-auto w-[80%]"/>
        <MenuItem onClick={handleClose} className="mt-2 text-blue-500">
          <Link href="https://coingate.com/buy-and-sell?utm_source=invoice&utm_medium=invoice&utm_campaign=invoice">
            Buy crypto
            <ArrowOutwardIcon />
          </Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default IconDropDownButton;
