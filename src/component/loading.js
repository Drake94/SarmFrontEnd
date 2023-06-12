import React from "react";
import { Waveform } from '@uiball/loaders'
import "../assets/css/profile.css";

const Loading = () =>{
    return(
        <div className="loading-page_2 justify-content-center">
            <Waveform className="center" size={70} color="#01AFEF" lineWeight={7.5} />
        </div>
    )
}
export default Loading