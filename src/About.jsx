import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Common from "./Common";
import Web from "./images/img2.svg";

const About = () => {

    return(
        <>
            <Common name="Welcome to about page of" imgsrc={Web} visit='/contact' btname="Contact Now" />
        </>
    )
}

export default About;