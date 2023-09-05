import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "../src/Components/Navbar";
import Login from "../src/Pages/Login";
import Register from "../src/Pages/Register";
import TicketBooking from "../src/Pages/TicketBooking";
// import {Qrcode} from "../src/Pages/qrcode"
import axios from "axios";
import {Toaster} from  'react-hot-toast'

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{duration: 2000}} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/TicketBooking" element={<TicketBooking />} />
        {/* <Route path="/Qrcode" element={<Qrcode />} /> */}
      </Routes>
    </>
  );
}

export default App;
