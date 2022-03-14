import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import { TransactionContext } from '../../context/TransactionContext';
import "./style.css"
import { useNavigate } from "react-router-dom";
import {
  Container,
  createTheme,
  TableCell,
  LinearProgress,
  ThemeProvider,
  Typography,
  TextField,
  TableBody,
  TableRow,
  TableHead,
  TableContainer,
  Table,
  Paper,
} from "@material-ui/core";
import axios from "axios";
import { CoinList } from "../config/api";
// import { useHistory } from "react-router-dom";

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default function CoinsTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const context = useContext(TransactionContext)
  const navigate = useNavigate();
  const { selectedCoin, setSelectedCoin, loading, setLoading, coins, setCoins } = useContext(TransactionContext);
  const { symbol } = coins

  const useStyles = makeStyles({
    row: {
      backgroundColor: "#16171a",
      cursor: "pointer",
      "&:hover": {
        backgroundColor: "#131111",
      },
      fontFamily: "Montserrat",
    },
    pagination: {
      "& .MuiPaginationItem-root": {
        color: "white",
        direction:"ltr",
      },
    },
  });

  const classes = useStyles();
//   const history = useHistory();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

//   const fetchCoins = async () => {
//     setLoading(true);
//     const { data } = await axios.get(CoinList(currency));
//     console.log(data);

//     setCoins(data);
//     setLoading(false);
//   };


  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search)
    );
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center", direction:"rtl"}}>
        <Typography
            className="text-gradient"
          variant="h4"
          style={{ margin: 18, fontFamily: "Montserrat" }}
        >
           مارکت 
        </Typography>
        <TextField
        
          id="coin-search-box"
          label="اسم ارز یا اسم شبکه ارز ...  "
          variant="outlined"
          style={{ marginBottom: 20, width: "100%" }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table" direction="ltr">
              <TableHead style={{ backgroundColor: "#EEBC1D" }} className= 'text-gradient'>
                <TableRow>
                  {["نام ارز", "قیمت لحظه ای", "تغییر در 24 ساعت اخیر", "ارزش کل"].map((head) => (
                    <TableCell
                    className="white-text"
                      style={{
                        color: "white !important",
                      
                        fontWeight: "bolder",
                        fontFamily: "Halvetica",
                      }}
                      key={head}
                      align={head === "Coin" ? "" : "right"}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row) => {
                    const profit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => {
                          setSelectedCoin(row.id)
                         console.log('this is the row bitch',row)
                          navigate(`/trade/${row.id}`)
                        }}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 15,
                          }}
                        >
                          <img
                          style={{
                            // width:"15%",
                            // height:"auto"
                           
                          }}
                            src={row?.image}
                            alt={row.name}
                            height="50"
                            style={{ 
                                marginBottom: 10,
                                maxWidth:'230px',
                                maxHeight:'95px',
                                Width: 'auto',
                                Height: 'auto',
                            }}
                          />
                          <div
                            style={{ display: "flex", flexDirection: "column" }}
                          >
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>
                              {row.name}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(row.current_price.toFixed(2))}
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: profit > 0 ? "rgb(14, 203, 129)" : "#ff3030",
                            fontWeight: profit > 0 ? "bolder" : 900,
                          }}
                        >
                          {profit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          {symbol}{" "}
                          {numberWithCommas(
                            row.market_cap.toString()
                          )}
                           
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        {/* Comes from @material-ui/lab */}
        <Pagination
          count={(handleSearch()?.length / 10).toFixed(0)}
          style={{
            
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            direction:"ltr",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
}





















































