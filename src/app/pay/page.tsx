"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, TextField, Slider, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
interface PayComponentProps {}

interface FormDataType {
  customer: string;
  amount: number;
}
const MAX = 10000;
const MIN = 500;
const marks = [
  {
    value: MIN,
    label: "",
  },
  {
    value: MAX,
    label: "",
  },
];

const PayComponent: React.FC<PayComponentProps> = ({}) => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormDataType>({
    customer: "",
    amount: 500,
  });
  const [isSecondForm, setIsSecondForm] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const amountChange = useCallback(
    (_: Event, newValue: number | number[], __: number) => {
      setFormData({
        ...formData,
        amount: newValue as number,
      });
    },
    [formData]
  );

  console.log(formData);
  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }, []);

  return (
    <div className="flex flex-col items-center mx-[16px] py-[48px] h-dvh">
      <div className="w-full max-w-[1000px] mb-[16px] md:mb-[24px]">
        <Image
          src={"/images/logo.png"}
          width={155}
          height={40}
          alt="pay page logo"
          style={{ aspectRatio: "auto 155/40" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full max-w-[1000px] pay-form-container py-[32px] px-[10px] md:px-0 ">
        <div className="bg-white p-[24px] rounded-[16px]">
          <h3 className="text-[1.5rem] font-semibold text-left w-full">
            Add Funds (EUR)
          </h3>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            {!isSecondForm ? (
              <>
                <label>HostPalace Email ID or Customer ID: *</label>
                <TextField
                  label="Email or Customer"
                  variant="outlined"
                  name="customer"
                  value={formData.customer}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className="w-full"
                  disabled={formData.customer ? false : true}
                  onClick={() => setIsSecondForm(true)}
                >
                  Continue
                </Button>
              </>
            ) : (
              <>
                <Button onClick={() => setIsSecondForm(false)} className="mb-5">
                  <KeyboardArrowLeftIcon />
                  Back
                </Button>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        amount: MIN,
                      })
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {MIN} EUR
                  </Typography>
                  <Typography
                    variant="body2"
                    onClick={() =>
                      setFormData({
                        ...formData,
                        amount: MAX,
                      })
                    }
                    sx={{ cursor: "pointer" }}
                  >
                    {MAX} EUR
                  </Typography>
                </Box>
                <Slider
                  marks={marks}
                  step={10}
                  value={formData.amount}
                  valueLabelDisplay="auto"
                  min={MIN}
                  max={MAX}
                  onChange={amountChange}
                ></Slider>
                <label>Amount in Euro</label>
                <TextField
                  label="Euro"
                  variant="outlined"
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  className="mb-5"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="w-full"
                  onClick={() => router.push('/invoice')}
                >
                  Checkout
                </Button>
              </>
            )}
          </Box>
        </div>
      </div>
      <footer className="mb-0 mt-[auto]">
        <div className="flex justify-center items-center mb-5">
          <p className="mr-2 text-[#B2B6BC] text-[14px]">Powered by</p>
          <Image
            src={"/images/logo.png"}
            alt="footer logo"
            width={94}
            height={15}
          />
        </div>
        <p className="text-[#B2B6BC] text-[12px] max-w-[456px] text-center">
          The payment is processed on behalf of the merchant that referred you
          to this invoice by UAB Decentralized.{" "}
          <a
            href="https://coingate.com/legal-documents/other-countries-supported/purchaser/disclaimer-for-purchasers"
            className="text-blue-500 underline"
          >
            Disclaimer applies
          </a>
        </p>
      </footer>
    </div>
  );
};

export default PayComponent;
