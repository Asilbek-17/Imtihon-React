import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { GlobalStyles } from "./globalStyle";
import { AddAuthor } from "./Pages/AddAuthor/AddAuthor";
import { AddBook } from "./Pages/AddBook/AddBook";
import { Books } from "./Pages/Books/Books";
import { Home } from "./Pages/Home/Home";
import { MainAuthor } from "./Pages/MainAuthor/MainAuthor";
import { MainBook } from "./Pages/MainBook/MainBook";
import { Profile } from "./Pages/Profile/Profile";

function App() {
  const state = useSelector((state) => state)
  console.log(state);
  if (state.token.token) {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home/Main-Author" element={<MainAuthor />} />
          <Route path="/Books/Main-Book" element={<MainBook />} />
          <Route path="/Books" element={<Books />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Add-author" element={<AddAuthor />} />
          <Route path="/Add-books" element={<AddBook />} />
        </Routes>
        <GlobalStyles />
      </>
    );
  } else {
    return (
      <>
        <Login />
        <Routes>
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </>
    )
  }


}

export default App;