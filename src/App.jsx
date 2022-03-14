import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import { createTheme, ThemeProvider } from "@material-ui/core";
import CoinsTable from "./components/coinsTable/coinsTable";
import OTCForm from "./components/otcForm/OTCForm";
import Layout from './sideBar/components/layout/Layout'
import Sidebar from "./sideBar/components/sidebar/Sidebar";
import TopNav from "./sideBar/components/topnav/TopNav";
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from './sideBar/redux/actions/ThemeAction'
import { useEffect } from "react";
import MRoutes from './sideBar/components/Routes'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import SignInSide from "./components/SigninSignup/SignInExperiemental";
import Register from "./components/SigninSignup/RegisterExperiemental";
import TradePage from "./pages/TradePage/TradePage";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./sideBar/pages/Dashboard";
import Customers from "./sideBar/pages/Customers";


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#fff",
//     },
    
//   },
// });




const App = () =>{
  const themeReducer = useSelector(state => state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() => {
      const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

      const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

      dispatch(ThemeAction.setMode(themeClass))

      dispatch(ThemeAction.setColor(colorClass))
  }, [dispatch])


return (
    <BrowserRouter>
     
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
        <Navbar />

        <Routes>

          
          <Route path="/dashboard/*" element=
          {
          <>
                <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                    <Sidebar/> 
                    <div className="layout-tailored pl-0 layout__content  md:bg-red">
                        <TopNav/>
                        <div className="layout__content-main w-11/12 max-w-screen-lg ">
                            <MRoutes/>
                        </div>
                    </div>
                </div>
              </>
            }/> 

          <Route path="/" element={
            <>
            
            <Welcome />
            <CoinsTable />
            <Services />
            </>

          } />

          <Route path="/signin" element={
            <>
            <SignInSide />
            </>
          }/>
          <Route path="/signup" element={
            <>
            <Register />
            </>
          }/>









{/* 
          <Route path="/dashboard" element={
            <>
            <Dashboard/>
            </>
          }/>
          <Route path="/dashboard" element={
            <>
            <Customers/>
            </>
          }/> */}

          {/* <Route path="/" element={<Navbar/>}  />
          <Route path="/" element={<Welcome/>}  />
          <Route path="/" element={<CoinsTable/>} />
          <Route path="/" element={<Services/>}  />
          <Route path="/" element={<Footer/>}  /> */}
          <Route path="/trade/:tradingPair" element={
            <>        
            <TradePage />
            </>
            }/>
          <Route path="*" element={<NotFound />}/>
      </Routes>
        {/* <Transactions /> */}
        <Footer />

        </div>
      </div>
     
      </BrowserRouter>
)};

export default App;
