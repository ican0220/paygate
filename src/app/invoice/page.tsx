"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import PaymentMethodList from "../components/PaymentMethodList";
import SearchInput from "../components/SearchInput";
import Header from "../components/Header";
import CryptoList from "../components/CryptoList";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import classnames from 'classnames';

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
  },
];

const InvoiceComponent: React.FC<InvoiceComponentProps> = ({}) => {
  const [openInfoDlg, setOpenInfoDlg] = useState<boolean>(false);
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
  };

  return (
    <div className="bg-[#F7F7F7]">
      <div className="min-h-[100vh] max-w-[694px] mx-auto py-[16px] ">
        <div>
          <Header />
          <div className="bg-[#fafafa] mt-4 pb-[16px] shadow-inner rounded-3xl">
            <div className="w-[424px] mx-auto pt-[32px] flex flex-col justify-between  min-h-[88vh]">
              <div className="">
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
                {selectedPaymentItem == "crypto" ? (
                  <>
                    <div>
                      <SearchInput
                        value={searchTerm}
                        onChange={handleSearchChange}
                      />
                    </div>
                    <CryptoList
                      items={cryptoItems}
                      selectedValue={selectedCrypto}
                      onChange={(val) => handleCrypto(val)}
                    />
                  </>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex justify-center items-center mt-5 mb-[50px]">
                <p className="mr-2 text-[#B2B6BC] text-[14px]">Powered by</p>
                <Image
                  src={"/images/logo.png"}
                  alt="footer logo"
                  width={94}
                  height={15}
                />
              </div>
            </div>
          </div>
          <footer className="fixed bottom-[-20px] z-10  bg-white w-[100vw] left-0 pt-[5px] pb-[24px]  rounded-[16px] overflow-visible">
            <div className="w-[694px] mx-auto flex justify-between items-center overflow-visible">
              <p>Add Funds (EUR) 500.0 EUR</p>
              <div className="flex">
                <Button color="primary" variant="contained">
                  Continue
                </Button>
                <button
                  type="button"
                  className="rounded-md bg-blue-200 p-2 w-[50px] h-[50px] ml-3"
                  onClick={() => setOpenInfoDlg(true)}
                >
                  i
                </button>
                <div className={classnames("fixed bottom-[100px] right-[200px] bg-white z-50 shadow-md p-5 rounded-t-[16px] rounded-br-[16px] w-[400px] ease-in transition-opacity opacity-0 duration-200", {"opacity-100": openInfoDlg})}>
                  <div className="flex justify-between items-center mb-4">
                  <h1 className="font-semibold text-[24px]">Additional Information</h1>
                  <CloseIcon className="hover:cursor-pointer" onClick={()=>{setOpenInfoDlg(false)}}/>
                  </div>
                  <div className="p-3">
                  <h2 className="font-semibold">Order Summary</h2>
                  <div className="flex justify-between mb-4">
                    <div>Order</div>
                    <div>Add Funds(EUR)</div>
                  </div>
                  <div className="flex justify-between mb-4">
                    <div>Order number</div>
                    <div>24087431</div>
                  </div>
                  <div className="flex justify-between">
                    <div>Price</div>
                    <div>4354.0 EUR</div>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default InvoiceComponent;
