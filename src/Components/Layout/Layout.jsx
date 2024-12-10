import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footor from "../Footor/Footor";


export default function Layout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footor/>
    </div>
  )
}
