import React from "react";
import { Preloader, Bars } from "react-preloader-icon"

const Loading = () =>{
    return(
        <div className="loading-page_2 justify-content-center">
        <Preloader use={Bars} size={80} strokeWidth={15} strokeColor="orange" duration={1000} />
        </div>
    )
}
export default Loading