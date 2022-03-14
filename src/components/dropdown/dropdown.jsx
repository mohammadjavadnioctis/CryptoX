import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { TransactionContext } from '../../context/TransactionContext';
import { CoinList } from "../config/api";
import axios from 'axios';
import './style.css'
import { createTheme, makeStyles, ThemeProvider } from '@material-ui/core';





const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiInputLabel-outlined:not(.MuiInputLabel-shrink)": {
      // Default transform is "translate(14px, 20px) scale(1)""
      // This lines up the label with the initial cursor position in the input
      // after changing its padding-left.
      transform: "translate(34px, 20px) scale(1);"
    }
  },
  inputRoot: {
    color: "white !important",
    // This matches the specificity of the default styles at https://github.com/mui-org/material-ui/blob/v4.11.3/packages/material-ui-lab/src/Autocomplete/Autocomplete.js#L90
    '&[class*="MuiOutlinedInput-root"] .MuiAutocomplete-input:first-child': {
      // Default left padding is 6px
      paddingLeft: 26
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "rgba(61, 79, 124, var(--tw-border-opacity)) !important"
    },
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#94a2c7 !important"
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#1976d2 !important"
    }
  }
}));











export default function DropDownSearch() {

    // const [selectedCoin , setSelectedCoin] = useState('Bitcoin')
    // const [coins, setCoins] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const context = useContext(TransactionContext)
    const {
       selectedCoin,
       setSelectedCoin,
       loading,
       setLoading,
       coins,
       setCoins,
       selectedCoinInfo, 
       setSelectedCoinInfo,
       selectedQuantity, 
       setSelectedQuantity,
       priceInputRef,
       calculatedPrice,setCalculatedPrice,
      } = useContext(TransactionContext);
    const classes = useStyles();
    const theme = createTheme({
      palette: {
        primary: {
          main: "#fff939",
        },
        secondary: {
          light: '#ecff58',
          main: '#ecff58',
          // dark: will be calculated from palette.secondary.main,
          contrastText: '#ffcc00',
        },
        
        type: "dark",
      },
    });
 
    


  //   const fetchCoins = async () => {
  //     setLoading(true);
  //     const { data } = await axios.get(CoinList('usd'));
  //     setCoins(data)
  //     setLoading(false)
  //     console.log('htis is fetched data' ,data);

   
  // }
    
    
const handleChange = async (e, newInputValue) => {
    setSelectedCoin(newInputValue)  
   }

   
  useEffect( async () => {
    console.log('this is selectedCoin' , selectedCoin)
    await setSelectedCoinInfo(coins.filter((coin) => coin.id == selectedCoin ))
    
    if (selectedCoinInfo.length == 1){
      

      priceInputRef.current.value = `${calculatedPrice} $`;
    }


   }, [selectedCoin])



  return (
     <>

    <Autocomplete
      classes={classes}
      fullWidth={true}
      id="country-select-demo"
      // inputValue={selectedCoin}
      onInputChange={handleChange}
      sx={{
         width: "100%",
         color:"white",
         marginTop: "5rem"
    }}
    inputprops={{
      autocomplete: 'new-password',
      form: {
        autocomplete: 'off',
      },
    }}
      options={coins}
      autoHighlight
      getOptionLabel={(option) => option.id}
      renderOption={(props, option) => (
        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >
          <img
            loading="lazy"
            width="20"
            src={option.image}
            srcSet={``}
            alt=""
          />
          {option.name} ({option.symbol}) +{option.current_price}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
         
        
          color='primary'
          id="dropdown-text-field"
          {...params}
          label="انتخاب ارز"
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
    </>
  );
}



