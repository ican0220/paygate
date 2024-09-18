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
    imageUrl: "/images/cryptos/usdt.svg",
  },
  {
    value: "bitcoin",
    title: "Bitcoin",
    description: "0.00924402 BTC",
    imageUrl: "/images/cryptos/btc.svg",
  },
  {
    value: "ethereum",
    title: "Ethereum",
    description: "0.241081 ETH",
    imageUrl: "/images/cryptos/eth.svg",
  },
  {
    value: "litecoin",
    title: "Litecoin",
    description: "8.742787 LTC",
    imageUrl: "/images/cryptos/ltc.svg",
  },
  {
    value: "tron",
    title: "TRON",
    description: "3714.7103 TRX",
    imageUrl: "/images/cryptos/trx.svg",
  },
  {
    value: "binance-coin",
    title: "Binance Coin",
    description: "1.026062 BNB",
    imageUrl: "/images/cryptos/bnb.svg",
  },
  {
    value: "xrp",
    title: "XRP",
    description: "968.9922 XRP",
    imageUrl: "/images/cryptos/xrp.svg",
  },
  {
    value: "dogecoin",
    title: "Dogecoin",
    description: "5530.97 DOGE",
    imageUrl: "/images/cryptos/doge.svg",
  },
  {
    value: "usdc",
    title: "USDC",
    description: "556.3592 USDC",
    imageUrl: "/images/cryptos/usdc.svg",
  },
  {
    value: "dai",
    title: "Dai",
    description: "555.4321 DAI",
    imageUrl: "/images/cryptos/dai.svg",
  },
  {
    value: "shiba",
    title: "SHIBA INU",
    description: "42229730.0 SHIB",
    imageUrl: "/images/cryptos/shib.svg",
  },
  {
    value: "bitcoin-cash",
    title: "Bitcoin Cash",
    description: "1.782785 BCH",
    imageUrl: "/images/cryptos/bch.svg",
  }
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
              {selectedPaymentItem == 'crypto' ? (
                <>
                <div>
                <SearchInput value={searchTerm} onChange={handleSearchChange} />
              </div>
              <CryptoList items={cryptoItems} selectedValue={selectedCrypto} onChange={(val) => handleCrypto(val)}/></>
              ):(<></>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
