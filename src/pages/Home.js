import React from "react";
import LogoNM from "../LogoNM.js";
import "../App.css";

function Home() {
    return (
        <div className="AppHome">
            <LogoNM />
            <p className="AppParagraph">welcome!</p>
            <p className="AppParagraph">
                hi I am 
                <h1 className="AppLogoHeading">popeye</h1>
            </p>
        </div>
    );
}

export default Home;