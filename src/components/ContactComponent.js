import React,{Component} from 'react';
import {Breadcrumb,BreadcrumbItem, Button,Label,Col,Row} from 'reactstrap';
import {Link} from 'react-router-dom';
import{ Control,Form, Errors} from 'react-redux-form';
import "./contact.css";

const required =(val) => val && val.length;
const maxLength=(len) =>(val) => !(val) ||(val.length <= len);
const minLength =(len) =>(val) =>(val) &&(val.length >= len);
const isNumber =(val) => !isNaN(Number(val));
const validEmail =(val) =>/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function successmsg (values) {

    if(values){
        <div> 
            <p> successful</p>
        </div>
    
    }
    else {
        <div> failed</div>
    }
}






class Contact extends Component {
    constructor(props){
        super(props);
       
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.sucessMsg =this.sucessMsg.bind(this);
    }

    sucessMsg () {
       <div>
           <p> Successful</p>
       </div>

    }
     



    handleSubmit(values){
        // console.log('current state is : '+ JSON.stringify(values));
        // alert('current state is :' +JSON.stringify(values));
        alert("thank you for submission");
        <div className="row">
            <p> thanks</p>
        </div>
    
        this.props.resetFeedbackForm();
        this.props.postFeedback(
            values.name,
            values.email,
            values.subject,
            values.message
        );
  
    }

   

    render() {
    
        
   
        return(

        <div className="contact">        
            <div className="container mb-3">
                <div className="section-title">
                     <p> Contact Us</p>

                </div>
                <div className="col-12 text-center">
                <iframe 
                       src="https://www.bing.com/maps/embed?h=350&w=800&cp=42.314578608773466~-83.05123804924315&lvl=16&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                        style={{border:0}}
                        width= "100%"
                        height="350"
                        frameBorder="0"
                        allowFullScreen=""
                         />
                </div>

                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-4 info">
                            <div className="address">
                                <i class="fa fa-map-marker"></i>
                                <h4>Location</h4>
                                <p> 121, Main Street,Windsor, Ontario </p>
                            </div>

                            <div className="open-hours">
                                <i className="fa fa-clock-o"></i>
                                <h4> Open Hours</h4>
                                <p> Monday-Saturday :<br /> 
                                    11:00 AM - 23:00 PM</p>
                            </div>

                            <div className="email">
                                <i className="fa fa-envelope"></i>
                                <h4> Email:</h4>
                                <p>nilam2407@gmail.com</p>
                            </div>

                            <div className="phone">
                                <i className="fa fa-phone"></i>
                                <h4>Call:</h4>
                                <p> +1 519 123 4567</p>
                            </div>

                </div>
             
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <div className="email-form">
        
                    <Form  model= "feedback" onSubmit ={(values)=> this.handleSubmit(values)}>

                        <Row className ="form-group">
                            <Col  md={6}>
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
                            <Col md={6}>
                                <Control.text model=".email" id="email" name="email"
                                    placeholder="your Email"
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
                         </Row>
                         <Row className ="form-group">
                            <Col md={12}>
                                <Control.text model=".subject" id="subject" name="subject"
                                placeholder="subject"
                                    row="1"
                                    className="form-control" />
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
                                <Button type="submit" >
                                Send Message
                                </Button>
                            </Col>

                            </Row>
                           
                        
                            </Form>




                            
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            );
            }
            }
export default Contact;


