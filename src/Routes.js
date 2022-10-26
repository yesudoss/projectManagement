import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Dashboard from "./Components/Base/views/Dashboard";
import Users from "./Components/Base/views/Users";
import About from "./Components/Base/views/About";
import SignIn from "./Components/User/views/SignIn";
import Master from "./Components/Master/views/Master";
import BloodGroup from "./Components/Ancillary/BloodGroup/views/BloodGroup";
import AutocompleteExample from "./Components/Ancillary/BloodGroup/views/AutoCompleteExample";
// import BloodGroup from "./Components/Ancillary/views/BloodGroup/BloodGroup";


function Routers() {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<SignIn />} />
                <Route exact path="/a" element={<AutocompleteExample />} />
                <Route exact path="/dashboard" element={<Dashboard />} />
                <Route exact path="/users" element={<Users />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/master" element={<Master />} />
                <Route exact path="/bloodgroup" element={<BloodGroup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;
