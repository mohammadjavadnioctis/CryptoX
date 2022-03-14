import React, { useContext, useRef, useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { GrVisa } from "react-icons/gr";
import DropDownSearch from "./dropdown/dropdown";
import { FcSimCardChip } from "react-icons/fc";

import { TransactionContext } from "../context/TransactionContext";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import { IconContext } from "react-icons";

import "../index.css"


const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// const Input = ({ placeholder, name, type, value, handleChange, ...props }) => (
//   <input
    
//     placeholder={placeholder}
//     type={type}
//     step="0.0001"
//     value={value}
//     onChange={(e) => handleChange(e, name)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism "
//   />
// );

const Welcome = () => {
  const { 
    currentAccount, 
    connectWallet, 
    handleQuantityChange, 
    sendTransaction, 
    formData, 
    isLoading, 
    selectedCoin, 
    setSelectedCoin, 
    SelectedQuantity, 
    setSelectedQuantity,
    selectedCoinInfo,
    setSelectedcoinInfo,
    priceInputRef,
    QuantityInputRef,
    calculatedPrice,setCalculatedPrice
  } = useContext(TransactionContext);


  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  // useEffect(() => {
    
  //   priceInputRef.current.value = `${calculatedPrice} $`;


  // }, [])

  // useEffect(() => {
    
  // console.log('the quanity changed here is the new value : ', SelectedQuantity )
  //  console.log('this is the priceinputref', priceInputRef)
  // }, [SelectedQuantity])
  

  

  return (
    <div className="flex w-11/12 justify-center items-center flex-row-reverse">
      <div className="w-full max-w-screen-lg flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4 border-1 border-yellow">
        <div className="flex flex-1 self-center justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient my-1 p-2 my-rem">
          CryptoX
                  </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
          دردنیای ارز دیجیتال به ماجراجویی بپرداز

          </p>
          {/* {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">
              اتصال کیف پول
              </p>
            </button>
          )} */}

          {/* <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Ethereum
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div> */}
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 ">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism translate-y-1/2 z-10">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                <GrVisa fontSize={17} color="#fff" />

                </div>
                <IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
                  <FcSimCardChip  className={'card-chip'}/>
                </IconContext.Provider>

              </div>
              <div>
                <p className="text-white font-light text-sm">
                  {shortenAddress(currentAccount)}
                </p>
                <p className="text-white font-semibold text-lg mt-1">
                  VisaCard
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism text-right ltr">
            <DropDownSearch/>
            <input
                ref={QuantityInputRef}
                // defaultValue={1}
                placeholder="مقدار " 
                name="amount"
                type="number"
                step="0.0001"
                onChange={(e) => handleQuantityChange(e)}
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism "
              />
              <input
                 ref={priceInputRef}
                  placeholder="قیمت"
                  name="message"
                  type="text"
                  step="0.0001"
                  
                  // onChange={(e) => handleChange(e, name)}
                  className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none white-glassmorphism "
                />
              
            
            {/* <Input placeholder="مقدار " name="amount" type="number" handleChange={handleChange} />
            <Input placeholder="قیمت" name="message" type="text" handleChange={handleChange} ref={quantityInputRef} /> */}

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading
              ? <Loader />
              : (
                <div className="flex flex-row justify-between align-center w-full">
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white w-2/5 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                    >
                     فروش
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="text-white w-2/5 mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                    >
                     خرید
                    </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
