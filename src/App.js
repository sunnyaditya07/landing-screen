import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./components/Form";
import Login from "./components/Login";
import Account from "./components/Account";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/account" element={<Account />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
