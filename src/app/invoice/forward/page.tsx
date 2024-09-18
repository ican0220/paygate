"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import Header from "../../components/Header";
import { Button, TextField, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import classnames from 'classnames';

interface FormDataType {
  name: string;
  email: string;
}

interface ForwardComponentProps {}
const ForwardComponent: React.FC<ForwardComponentProps> = ({}) => {

  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
  });

  const [openInfoDlg, setOpenInfoDlg] = useState<boolean>(false);


  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    },
    [formData]
  );

  const onSubmit = () => {

  }

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
                    Forward Invoice
                  </h2>
                  <Button onClick={() => {}} className="mb-5 p-0">
                  <KeyboardArrowLeftIcon />
                  Back
                </Button>
                <Box component={"form"} onSubmit={onSubmit}>
                <TextField
                  label="User Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  className="mb-5"
                />
                <TextField
                  label="Receiver Email"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  margin="normal"
                  className="mb-[30px]"
                />
                <Button
                  type="button"
                  variant="contained"
                  color="primary"
                  className="w-full"
                  disabled={formData.email && formData.name ? false : true}
                  onClick={() => {}}
                >
                  Forward Invoice
                </Button>
                </Box>
                </div>
                
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

export default ForwardComponent;
