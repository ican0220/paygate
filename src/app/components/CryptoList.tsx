"use client";
import React from "react";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

interface Item {
  value: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface CryptoListProps {
  items: Item[];
  selectedValue: string;
  onChange: (value: string) => void;
}

const CryptoList: React.FC<CryptoListProps> = ({
  items,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="max-h-[52vh] scroll-m-1 overflow-y-scroll my-scrollable-div">
      {items.map((_, index) => (
        <React.Fragment key={index}>
          {selectedValue == _.value ? (
            <div className="flex flex-row justify-between items-center bg-white rounded mb-2 p-3 border border-blue-500 hover:bg-blue-50 hover:cursor-pointer mr-2">
              <div className="flex flex-row items-center">
                <div className="mr-3 bg-[#ccc] rounded-lg overflow-hidden">
                  <Image
                    src={_.imageUrl}
                    alt={_.title}
                    width={50}
                    height={50}
                    style={{ aspectRatio: 1 }}
                  />
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold">{_.title}</h3>
                  <p className="text-[12px]">{_.description}</p>
                </div>
              </div>
              <div className="ml-3">
                <CheckIcon />
              </div>
            </div>
          ) : (
            <div
              className="flex flex-row items-center bg-white rounded mb-2 p-3 border border-white hover:border-[#e0e0e0] hover:cursor-pointer mr-2"
              onClick={() => onChange(_.value)}
            >
              <div className="mr-3 bg-[#ccc] rounded-lg overflow-hidden">
                <Image
                  src={_.imageUrl}
                  alt={_.title}
                  width={50}
                  height={50}
                  style={{ aspectRatio: 1 }}
                />
              </div>
              <div>
                <h3 className="text-[16px] font-semibold">{_.title}</h3>
                <p className="text-[12px]">{_.description}</p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CryptoList;
