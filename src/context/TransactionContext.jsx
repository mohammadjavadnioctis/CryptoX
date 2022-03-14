import React, { useEffect, useState, useContext,useRef } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";
import axios from 'axios';

export const TransactionContext = React.createContext();

const { ethereum } = window;
import { CoinList } from '../components/config/api'



export const TransactionsProvider = ({ children }) => {
  // const [formData, setformData] = useState({  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [Loading, setLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions, setTransactions] = useState([]);
  const [selectedCoin, setSelectedCoin ] = useState('')
  const [coins, setCoins] = useState([]);
  const [ selectedQuantity, setSelectedQuantity ] = useState(1)
  let [selectedCoinInfo, setSelectedCoinInfo] = useState('')
  const[calculatedPrice, setCalculatedPrice ] = useState(0)
  const priceInputRef = useRef();
  const QuantityInputRef = useRef();


  const handleQuantityChange = (e, name) => {
   
    setSelectedQuantity(e.target.value)
    // setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };


  
  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList('usd'));
    
    setCoins(data)
    setLoading(false)
    console.log('this is fetched data' ,data);
    
}
  




useEffect(async () => {
  await fetchCoins();

  }, []);

useEffect(async () => {
 


  }, [coins]);





useEffect(()=>{


  console.log('this is teh second useeffect and the info is ', selectedCoinInfo)
  console.log('this is the selected quanity', selectedQuantity)

  if (selectedCoinInfo[0]){
  setCalculatedPrice(selectedQuantity * selectedCoinInfo[0].current_price)
  }
  console.log('this si teh priceinput ref after the coininfo is updated',priceInputRef)
  if(priceInputRef.current){
  priceInputRef.current.value = `${calculatedPrice} $`;
  }
}, [selectedCoinInfo])



  useEffect(() => {
    console.log('this is the new quantity ', selectedQuantity)
    // priceInputRef.current.value = selectedQuantity * selectedCoin.current_price 
    if (selectedCoinInfo.length == 1){
      console.log('this is the pricecalculated price ', selectedQuantity * selectedCoinInfo[0].current_price)
      setCalculatedPrice(selectedQuantity * selectedCoinInfo[0].current_price)
      console.log('this is the selectedquantity useeffect', calculatedPrice)
    }
    console.log('this is the unitprice')
    // console.log('here is the ref', priceInputRef.current.value)
    
  }, [selectedQuantity])
  








useEffect(() => {
  console.log("the calculated price state just changed", calculatedPrice)
if(priceInputRef.current){

  priceInputRef.current.value = `${calculatedPrice} $`;

}
}, [calculatedPrice])


// useEffect( async () => {
//   setSelectedCoinInfo(coins.filter((coin) => coin.id == selectedCoin ))
  
//   console.log('this is selectedcoin from context:', selectedCoin )

// if(priceInputRef.current){
//   priceInputRef.current.value = calculatedPrice;
// }

// }, [selectedCoin])




  return (
    <TransactionContext.Provider
      value={{
        transactionCount,
        transactions,
        currentAccount,
        Loading,
        setLoading,
        handleQuantityChange,
        selectedCoin,
        setSelectedCoin,
        coins,setCoins,
        selectedCoinInfo,setSelectedCoinInfo,
        selectedQuantity,setSelectedQuantity,
        calculatedPrice, setCalculatedPrice,
        priceInputRef,
        QuantityInputRef
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
