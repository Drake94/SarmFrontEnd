import React from "react";
import Header from '../common/header';
import Sidebar from '../common/sidebar';
import "../assets/css/profile.css";
import { Preloader, Bars } from 'react-preloader-icon';

import 'bootstrap/dist/css/bootstrap.css';

const adminLayout = (ChildComponent) => {
    class AdminLayout extends React.Component {
        constructor(props){
            super(props);
    
            this.state = {
                pageLoaded: false,
                saveLeadClickEvent: ""
            };
        }

        componentDidMount(){
            setTimeout(() => {
                this.setState(() => ({
                    pageLoaded: true
                }))
            }, 1000);
        }

        renderHtml(){
            if(!this.state.pageLoaded){
                return <div className="loading-page">
                    <div className="center">
                        <Preloader use={Bars} size={60} strokeWidth={10} strokeColor="#01AFEF" duration={600} />
                    </div>
              </div>
            }

            return <div className="d-flex" id="wrapper">
                {/* <!-- Sidebar--> */}
                <Sidebar/>
                {/* <!-- Page content wrapper--> */}
                <div className="main" id="page-content-wrapper">
                    {/* <!-- Top navigation--> */}
                    <Header />
                    {/* <!-- Page content--> */}
                  
                    <div className="container-fluid content-container-bef">  
                        <div className="container-fluid content-container">
                            <ChildComponent {...this.props} />
                            <div className="d-flex flex-row-reverse bd-highlight col-md-12 ">
                                <div className=" row ">
                                    <div className="bottom-1 col-md-6">
                                    </div>
                                    <div className="column">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        
        addLeadModalFooterContent(){ 
            return <>
                <div style={{width:"100%"}}>
                    <button onClick={() => this.setState(() => ({saveLeadClickEvent: (Math.random() + 1).toString(36).substring(7)}))} className="btn btn-default low-height-btn">Add Lead</button> 
                </div>
            </>;
        }
        handleParentData = (e) => {
            console.log(e);
        }

        render(){
            return <>
                {this.renderHtml()}
            </>
        }
    }

    return AdminLayout;
}

export default adminLayout;