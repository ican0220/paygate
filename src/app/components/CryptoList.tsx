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
    <div>
      {items.map((_, index) => (
        <React.Fragment key={index}>
          {selectedValue == _.value ? (
            <div className="flex flex-row justify-between items-center bg-white rounded mb-2 p-5 border border-blue-500 hover:bg-blue-50 hover:cursor-pointer">
              <div className="flex flex-row items-center">
                <div className="mr-3 bg-blue-600 rounded-lg overflow-hidden">
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
              className="flex flex-row items-center bg-white rounded mb-2 p-5 border border-white hover:border-[#e0e0e0] hover:cursor-pointer"
              onClick={() => onChange(_.value)}
            >
              <div className="mr-3 bg-blue-600 rounded-lg overflow-hidden">
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
