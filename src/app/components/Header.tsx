"use client";
import React, { useState, useCallback } from "react";
import { Button } from "@mui/material";
import IconDropDownButton from "../components/IconDropDownButton";
import ImageDropdown from "../components/ImageDropdown";
import BasicDialog from "../components/BasicDialog";

interface HeaderProps {}

const langItems = [
  {
    value: "english",
    title: "English",
    imageUrl: "/images/gb.svg", // Replace with actual image URLs
  },
  {
    value: "spain",
    title: "Spain",
    imageUrl: "/images/es.svg", // Replace with actual image URLs
  },
];

const Header: React.FC<HeaderProps> = ({}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedLangItem, setSelectedLangItem] = useState<string>(
    langItems[0].value
  );
  const handleImageDropDown = (value: string) => {
    setSelectedLangItem(value);
  };
  const proceedPayment = useCallback(() => {}, []);

  const cancelPayment = useCallback(() => {}, []);
  const handleModal = useCallback((action: boolean) => {
    setOpen(false);
    if (action) proceedPayment();
    else cancelPayment();
  }, []);
  return (
    <div className="flex justify-between items-center">
      <div>
        <h3 className="m-0 text-[24px] font-semibold">
          HostPalace Datacenters LTD
        </h3>
      </div>
      <div className="flex">
        <ImageDropdown
          items={langItems}
          selectedValue={selectedLangItem}
          onChange={handleImageDropDown}
        />
        <IconDropDownButton value="" items={[]} />
        <Button
          className="bg-white text-stone-700 font-semibold capitalize"
          onClick={() => {
            setOpen(true);
          }}
        >
          Cancel
        </Button>
        <BasicDialog open={open} onClose={(action) => handleModal(action)} />
      </div>
    </div>
  );
};

export default Header;
