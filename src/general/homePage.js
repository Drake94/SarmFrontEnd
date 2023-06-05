import React  from "react";
import adminLayout from "../HOC/adminLayout";
import 'bootstrap/dist/css/bootstrap.css';
import ResultLayout from "./resultHome/resultHomeLayout"
import SampleHomeLayout from"./muestraHome/muestraHomeLayout";

class homePage extends React.Component {
  
    constructor(props){
        super(props);

        this.state = {
          auth: " "
        }
    }

    render(){
        
        return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-sm"> 
                    < SampleHomeLayout />
                </div>
                <div className="col-sm"> 
                    < ResultLayout />
                </div>
            </div>
        </div>
        </>
    )}

}

export default adminLayout(homePage);