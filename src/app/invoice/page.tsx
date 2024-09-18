"use client";
import React, { useCallback, useState } from "react";
import PaymentMethodList from "../components/PaymentMethodList";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import CryptoList from "../components/CryptoList";

interface InvoiceComponentProps {}

const paymentItems = [
  {
    value: "coin-gate",
    title: "Pay With CoinGate Balance",
    description: "500.0 EUR⚡️ Instant payment, no confirmations",
    imageUrl: "/images/coingate-balance.svg",
  },
  {
    value: "binance",
    title: "Pay With Binance Pay",
    description: "",
    imageUrl: "/images/binance.png",
  },
  {
    value: "crypto",
    title: "Pay With Crypto",
    description: "500.0 EUR",
    imageUrl: "/images/coingate.svg",
  },
];

const cryptoItems = [
  {
    value: "usdt",
    title: "USDT",
    description: "556.4211 USDT",
    imageUrl: "/images/coingate-balance.svg",
  },
  {
    value: "binance",
    title: "Pay With Binance Pay",
    description: "",
    imageUrl: "/images/binance.png",
  },
  {
    value: "crypto",
    title: "Pay With Crypto",
    description: "500.0 EUR",
    imageUrl: "/images/coingate.svg",
  },
];

const InvoiceComponent: React.FC<InvoiceComponentProps> = ({}) => {
  const [selectedPaymentItem, setSelectedPaymentItem] = useState<string>(
    paymentItems[0].value
  );
  const [selectedCrypto, setSelectedCrypto] = useState<string>(
    cryptoItems[0].value
  );

  const handlePaymentMethod = (value: string) => {
    setSelectedPaymentItem(value);
  };

  const handleCrypto = (value: string) => {
    setSelectedCrypto(value);
  };

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    console.log("Search Term:", event.target.value);
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="min-h-[100vh] max-w-[694px] mx-auto py-[16px] ">
        <div>
          <Header/>
          <div className="bg-[#fafafa] mt-4 pb-[16px] shadow-inner rounded-3xl">
            <div className="w-[424px] mx-auto pt-[32px]">
              <div>
                <h2 className="text-[32px] font-semibold mb-[16px]">
                  Select Payment Method
                </h2>
              </div>
              <PaymentMethodList
                items={paymentItems}
                selectedValue={selectedPaymentItem}
                onChange={(val) => handlePaymentMethod(val)}
              />
              <div>
                <SearchInput value={searchTerm} onChange={handleSearchChange} />
              </div>
              <CryptoList items={cryptoItems} selectedValue={selectedCrypto} onChange={(val) => handleCrypto(val)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
