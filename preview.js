import React,{useState} from 'react';
import {Helmet} from "react-helmet";
import Loader from './preLoader';
import "../styles/preview.scss";
const FirstPage = ()=>{
    const [isLoaded,setisLoaded] = useState(true);
    window.addEventListener("load", () => {setisLoaded(false);console.log(isLoaded)})
    return (
        <>
        {isLoaded ? (
            <Loader/>
        ) :
        (
        <div id="container">
        <Helmet>
        <link href='https://fonts.googleapis.com/css?family=Vibur:400' rel='stylesheet' type='text/css'/>
        </Helmet>
        <div className="D first">
        <pre id="BRtext">BLOCKROOM</pre>
        </div>
        <div className="D second">
        loremipsome
        </div>
        <div className="D third">
        loremipsome
        </div>
        </div>
        )}
        </>
    )
}
export default FirstPage;
