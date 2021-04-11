import React from 'react';
import {Link} from 'react-router-dom';
import { Card, CardImg, CardImgOverlay,  CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

function RenderMenuItem ({dish, onClick}){
    return(
        <Card>
            {/*  onClick ={()=> onClick(dish.id)} */}
            <Link to= {`/menu/${dish.id}`}> 
            {/* link only accepet url so to turn js in url u need to use special backdirection qutoation */}
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

//function component can also create as below

const Menu = (props) =>{
    const menu= props.dishes.map((dish)=>{
        return(
            
            <div className="col-12 col-md-5 m-1" key ={dish.id}>
               <RenderMenuItem dish = {dish} />
            </div>
        );
    });
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