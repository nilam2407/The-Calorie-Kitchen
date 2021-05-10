import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {Loading} from './LoadingComponent';
import {Fade, Stagger} from 'react-animation-components';
import Header from "./HeaderComponent";
import "./about.css";


function RenderLeader ({leader, isLoading, errMess}) {
    if(isLoading){
        return(
            <Loading/>
        );
    }
    else if (errMess){
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
            return (
                // <Fade in>
                //   <Media tag="li">
                //     <Media left middle>
                //         <Media object src={leader.image} alt={leader.name}  className ="media-img"/>
                //     </Media>
                //     <Media body className="ml-5">
                //       <Media heading>{leader.name}</Media>
                //       <Media subheading> {leader.designation} </Media>
                //       <p className ="mt-2">{leader.description}</p>
                //     </Media>
                //   </Media>
                //   </Fade>
                
                <Fade in>
                       
                        <div className="member" data-aos="zoom-in" data-aos-delay="300">
                        <img src= {leader.image} className="img-fluid" alt=""/>
                        <div className="member-info">
                            <div className="member-info-content">
                            <h4>{leader.name}</h4>
                            <span>{leader.designation}</span>
                            </div>
                            <div className="social">
                            <a href=""><i className="fa fa-twitter"></i></a>
                            <a href=""><i className="fa fa-facebook"></i></a>
                            <a href=""><i className="fa fa-instagram"></i></a>
                            <a href=""><i className="fa fa-linkedin"></i></a>
                            </div>
                        </div>
                        </div>
                    
                </Fade>


              );
        }
    }

    //     return(
    //         <div className="col-12  m-1">
    //         <Stagger in>
    //         {head}   
    //         </Stagger>
    //         </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div></div>
    //         )
    //     }

    // }
    


const About = (props) => {
    const head = props.leaders.leaders.map((leader)=>{
        return (
            <div className ="col-12 col-md-4"   key= {leader.id}>
                <RenderLeader leader= {leader} isLoading ={props.leadersLoading} errMess= {props.leadersErrMess}/>
            </div>
        );
    });
  
                return(
     
                <div className="about">
                    <div className="container">
                   
                    <div className="row">
                        {/* <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>About Us</BreadcrumbItem>
                        </Breadcrumb> */}
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="about-img">
                                <img src= "https://4.bp.blogspot.com/-3FxR5HiioAU/Uk-xkmwlCXI/AAAAAAAAAgs/HRKybYRgzdE/s1600/Bar-and-Restaurant-Interior-Designs.jpg"
                                    alt="Resturant Image">
                                </img>
                            </div>
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">

                            <h2>About Us</h2>
                            <hr />
                            <h4>Our History</h4>
                            <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
                            <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
                        </div> 
                        </div>
                        
                    <div className="row">
                    <div className="col-12">
                    <div className="section-title">
                            <h2>chefs</h2>
                            <p> Our professional Chefs</p>
                        </div>

                      </div>

                            {head}
                            
                        </div>
                       
                    
                    </div>
                   
                </div>
                
              
                
    );
}

export default About;    