import React, { Component } from 'react';
import {Card, CardBody,CardSubtitle,CardTitle,CardImg,CardText, Media, Carousel,Col,Row,Button} from 'reactstrap';
import {Loading} from './LoadingComponent';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import{ Control,Form, Errors} from 'react-redux-form';
import {FadeTransform} from 'react-animation-components';

import "./Home.css";
import menu from "./MenuComponent";
import {Link} from 'react-router-dom';

const required =(val) => val && val.length;
const minLength =(len) =>(val) =>(val) &&(val.length >= len);
const isNumber =(val) => !isNaN(Number(val));
const validEmail =(val) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const maxLength=(len) =>(val) => !(val) ||(val.length <= len);
const fixLength =(len) =>(val) => !(val) || (val.length == len);




// function ReserveTable () {
//     return(
            
//     );
// }



function RenderCard ({item, isLoading, errMess}){
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
    else
         return(
             
             <div className="container">
                 <FadeTransform in transformProps ={{
                            exitTransform: 'scale(0.5) translateY(-50%)'  
             }}>
               
                     <div className="row event-item">
                         <div className="col-lg-6">
                             <img src = {item.image} alt ={item.name} className="img-fluid">
                             </img>
                         </div>
                         <div className="col-lg-6 pt-4 pt-lg-0 content">
                             <h3>{item.name}</h3>
                             <div className ="price">
                                 <p>{item.designation ? <span>{item.designation}</span> : null }</p>
                             </div>
                             <p className="font-italic">
                                 {item.description}
                             </p>
                         </div>
                         </div>
                 
                    
                         </FadeTransform>
            </div>
             
            // {/* <Card>
            //     <CardImg src ={item.image} alt = {item.name}/>
            //     <CardBody>
            //         <CardTitle>{item.name}</CardTitle>
            //         {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
            //         <CardText>{item.description}</CardText>
            //     </CardBody>
            // </Card> */}


    
                
        
            
    );
}


class Home extends Component{
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
   
   
    }

    
handleSubmit(values){
    console.log('current state is : '+ JSON.stringify(values));
    alert('current state is :' +JSON.stringify(values));
    // this.props.resetFeedbackForm();
    // this.props.postFeedback(
    //     values.firstname,
    //     values.lastname,
    //     values.telnum,
    //     values.email,
    //     values.agree,
    //     values.contactType,
    //     values.message
    // );

}

    
    render(){


    return(
        <div>
     
    
        <div className="Hero d-flex align-items-center">
            <div className="container position-relative text-center text-lg-left">
                <Row>
                    <Col lg={8}>
                        <h1>The <span>Calorie</span> Kitchen</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Oue lipsmacking creations will tickle your culinery senses</p>
                        <div className="btns">
                            <Link to="/menu" className="btn-menu animated fadeInUp scrollto">Our Menu</Link>
                            <a href="#reserve" className="btn-book animated fadeInUp scrollto">Book a Table</a>
                        </div>
                    </Col>
                </Row>
            </div>

        </div>
        
        <div className ="events">
        <div className ="container">
        <div className="section-title">
                     <h2>Special Features </h2>
                 </div>
         <OwlCarousel className="events-carousel"  loop  items={1} autoplay={true} >
                
                    <RenderCard item={this.props.dish}
                        isLoading= {this.props.dishesLoading}
                        errMess ={this.props.dishesErrMess}
                        />
               
                
                    <RenderCard item={this.props.promotion}
                    isLoading= {this.props.promoLoading}
                    errMess ={this.props.promoErrMess}
                    />
                
                
                    <RenderCard item={this.props.leaders}
                     isLoading ={this.props.leadersLoading}
                     errMess ={this.props.leadersErrMess}
                    />
                    
                </OwlCarousel>
                </div>
            </div>
            <div className="bookTable" id="reserve">
                <div className="container">
                    <div className="section-title">
                        <h2>Reservation</h2>
                        <p>Book a Table</p>
                    </div>
                    <Form model="reservation" onSubmit = {(values) => this.handleSubmit(values)} className="php-email-form">
                        <Row className ="form-group">
                            <Col lg={4} md={6}>
                                <Control.text model= ".name" id ="name" name="name"
                                placeholder="Your Name"
                                className= "form-control"
                                validators= {{
                                    required, minLength: minLength(3)}}
                                    />
                                <Errors
                                    className="text-danger"
                                    model =".name"
                                    show= "touched"
                                    messages = {{
                                        required:'Required, ',
                                        minLength: 'Name must be greater than 2 characters',
                                    }}
                                    />
                                </Col>
                                <Col md={6} lg={4}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder=" your Email"
                                    className="form-control"
                                    
                                    validators={{
                                        required, validEmail
                                    }}/>
                                    
                                    {/* <FormFeedback>{errors.email}</FormFeedback> */}
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
                            </Col>
                            <Col md={6} lg={4}>
                                <Control.text model=".telnum" id="telnum" name="telnum"
                                    placeholder="Your Phone"
                                    className ="form-control"
                                    validators={{
                                        required, fixLength: fixLength(11), isNumber
                                    }}
                                    />
                                    {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            fixLength: 'Phone number must be 10 digits' ,
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">
                        <Col md={6} lg={4}>
                                <Control type ="date" model=".date" name="date"
                                placeholder="Date"
                                className="form-control">

                                </Control>
                            </Col>
                            <Col md={6} lg={4}>
                                <Control.text model=".time" id="time" name="time"
                                    placeholder="Time"
                                    className="form-control"
                                />
                                </Col>
                        
                        <Col md={6} lg={4}>
                               <Control.select model=".numPerson" name="numPerson"
                                className="form-control">
                                   <option>1</option>
                                   <option>2</option>
                                   <option>3</option>
                                   <option>4</option>
                                   <option>5</option>
                                   <option>5 & up</option>
                                   </Control.select> 
                            </Col>
                        
                        </Row>
                        <Row className ="form-group">
                            <Col md={12}>
                                <Control.textarea model=".message" id="message" name="message"
                                placeholder="Message"
                                    row="12"
                                    className="form-control" />
                            </Col>
                            </Row>
                            <Row className ="form-group">
                            <Col className="text-center btn-book">
                                <Button type="submit">
                                Book a Table
                                </Button>
                            </Col>
                            </Row>
                    </Form>
                </div>
                
            </div>
            
       </div>
    );
}
}
export default Home;