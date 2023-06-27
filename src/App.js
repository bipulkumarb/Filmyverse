import Header from "./components/header";
import Cards from "./components/cards";
import { Route, Routes } from "react-router-dom";
import AddMovie from "./components/addMovie";
import Detail from "./components/detail";
import { createContext, useState , useEffect } from "react";
import Login from "./components/login";
import Signup from "./components/signup";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] =useState("");

  return (
    <Appstate.Provider value={{login,userName, setLogin, setUserName}}>
    <div className="App relative">
      <Header />
      <Routes>
        <Route exact path="/" element={<Cards/>} />
        <Route path="/addMovie" element={<AddMovie/>} />
        <Route path="/detail/:id" element={<Detail/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
    </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate}
