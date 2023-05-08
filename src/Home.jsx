import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common";
import Web from "./images/img.svg";

const Home = () => {

    return(
        <>
            <Common name="Grow your business with" imgsrc={Web} visit='/service' btname="Get Started" />
        </>
    )
}

export default Home;