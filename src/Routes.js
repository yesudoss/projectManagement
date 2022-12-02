import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./Components/User/views/SignIn";
import Master from "./Components/Master/views/Master";
import BloodGroup from "./Components/Ancillary/BloodGroup/views/BloodGroup";
import Users from "./Components/User/views/Users";
import Company from "./Components/Master/views/Company/Company";
import Department from "./Components/Master/views/Department/Department";
import Dashboard from "./Components/Dashboard/views/Dashboard";

function Routers() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/master" element={<Master />} />
                <Route exact path="/bloodgroup" element={<BloodGroup />} />
                <Route exact path="/company" element={<Company />} />
                <Route exact path="/department" element={<Department />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
