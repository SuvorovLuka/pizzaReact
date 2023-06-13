import React from "react";
import './scss/app.scss';
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Bascet from "./pages/Bascet";
import { Routes, Route } from 'react-router-dom';

export const AppContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <AppContext.Provider value={{searchValue,setSearchValue}}>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue} />}></Route>
            <Route path="/bascet" element={<Bascet />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
