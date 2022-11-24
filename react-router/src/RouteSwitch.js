import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import Profile from "./Profile";

function RouteSwitch(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/" element = {<App />} />
                <Route path = "/profile" element = {<Profile />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RouteSwitch;