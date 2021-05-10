import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,  CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Loading } from './LoadingComponent';
import "./menu.css";

function RenderMenuItem ({dish, onClick}){
    return(

            <div className="menu-item">
                <div className="menu-img">
                <img src= {dish.image} alt={dish.name}/>
                </div>
                <div className="menu-content">
                    <a href="#">{dish.name}</a><span>{dish.price}</span>
                </div>
                <div className="menu-ingredients">
                    {dish.description}
                </div>
            </div>





        // <Card>
        //     {/*  onClick ={()=> onClick(dish.id)} */}
        //     <Link to= {`/menu/${dish.id}`}> 
        //     {/* link only accepet url so to turn js in url u need to use special backdirection qutoation */}
        //     <CardImg width="100%" src = {dish.image} alt={dish.name}/>
        //         <CardImgOverlay>
        //         <CardTitle>{dish.name}</CardTitle>
        //         </CardImgOverlay>
        //     </Link>
        // </Card>
    );
}

//function component can also create as below

const Menu = (props) =>{
    const menu= props.dishes.dishes.map((dish)=>{
        return(
            
            <div className="col-12" key ={dish.id}>
               <RenderMenuItem dish = {dish} />
            </div>
        );
    });

    if(props.dishes.isLoading){
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if(props.dishes.errMess){
        return(
            <div className="container">
                <div className="row">
                    <h4>{props.dishes.errMess}</h4>
                </div>
            </div>
        );

    }

    else
        return(
            <div className="menu section-bg">
            <div className ="container">
                <div className="row mt-3">
                    {/* <Breadcrumb>
                        <BreadcrumbItem><Link to ='/Home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb> */}
                    <div className= "section-title">
                    <p>Check Our Tasty Menu</p>
                    <hr/>
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                        <li data-filter="*" className="filter-active">All</li>
                        <li data-filter=".filter-starters">Starters</li>
                        <li data-filter=".filter-salads">Salads</li>
                        <li data-filter=".filter-specialty">Specialty</li>
                        </ul>
                    </div>
                    </div>
                <div className="row menu-container mb-5">
                        {menu}
                    </div>
                    </div>
                </div>
            

        );
}

export default Menu;