import React from 'react'
import "../src/App.css"
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import HomeScreen from './components/HomeScreen/HomeScreen'
import Private from './Private';
import LoginScreen from './components/LoginScreen/LoginScreen.js';
import SignupScreen from './components/SignupScreen/SignupScreen';
import PersonalScreen from './components/PersonalScreen/PersonalScreen';
import AccountScreen from './components/AccountScreen/AccountScreen';
import ProductDetails from './components/ProductDetails/ProductDetails.js';
import ScrollToTop from './components/ScrollTop.js';
import { Provider } from 'react-redux';
import { store } from './components/redux/app/store.js';
import CartScreen from './components/CartScreen/CartScreen.js';
import ErrorScreen from './components/ErrorScreen/ErrorScreen.js';
import FaviourtScreen from './components/FaviourtScreen/FaviourtScreen.js';

const App = () => {
    const loggedin = window.localStorage.getItem("loggeduser")
    return (
        <div>
            <Provider store={store}>
                <BrowserRouter>
                    <ScrollToTop>
                        <Routes>
                            <Route path="/" element={loggedin ? <PersonalScreen /> : <HomeScreen />} />
                            <Route path='/signup' element={<SignupScreen />} />
                            <Route path="/login" element={<LoginScreen />} />
                            <Route path='/ProductDetails/:productId' element={<ProductDetails />} />
                            <Route path='*' element={<ErrorScreen />} />
                            <Route path='/' element={<Private />}>
                                <Route path="/auth" element={<PersonalScreen />} />
                                <Route path='/account' element={<AccountScreen />} />
                                <Route path='/ProductDetails/:productId' element={<ProductDetails />} />
                                <Route path='/cart' element={<CartScreen />} />
                                <Route path='/faviourt' element={<FaviourtScreen />} />
                                <Route path='*' element={<ErrorScreen />} />
                            </Route>
                        </Routes>
                    </ScrollToTop>
                </BrowserRouter>
            </Provider>
        </div>
    )
}

export default App