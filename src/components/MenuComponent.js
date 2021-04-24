import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,  CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

function RenderMenuItem ({dish, onClick}){
    return(
        <Card>
            {/*  onClick ={()=> onClick(dish.id)} */}
            <Link to= {`/menu/${dish.id}`}> 
            {/* link only accepet url so to turn js in url u need to use special backdirection qutoation */}
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

//function component can also create as below

const Menu = (props) =>{
    const menu= props.dishes.dishes.map((dish)=>{
        return(
            
            <div className="col-12 col-md-5 m-1" key ={dish.id}>
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
            <div className ="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/Home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className= "col-12">
                    <h3> Menu </h3>
                    <hr/>
                </div>
                </div>
                <div className="row">
                        {menu}
                    </div>
                    </div>
            

        );
}

export default Menu;