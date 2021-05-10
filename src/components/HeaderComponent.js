import React, {Component} from 'react';
import {Navbar, NavbarBrand,Nav, NavbarToggler, Collapse, NavItem,Modal,ModalBody,Button,ModalHeader,Form,FormGroup,Label,Input} from 'reactstrap';
import {NavLink} from 'react-router-dom';
import "./header.css";
class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            isNavOpen:false,
            isModalOpen:false
        }
        //if we bind this we can use  in jsx as this.toggleNav method instead of using arrow function inside jsx.
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal= this.toggleModal.bind(this);
        this.handleLogin= this.handleLogin.bind(this);
    }


    toggleModal(){
        this.setState({isModalOpen:!this.state.isModalOpen})

    }

    handleLogin(event){
        this.toggleModal();
        alert("Username:" + this.username.value + "password: " + this.password.value +"Remember: "+ this.remember.checked);
        event.preventDefault();
    }

    toggleNav(){
        this.setState({isNavOpen :!this.state.isNavOpen})
    }

    render(){
        return(
            //react fragment will allow bunch of react element together its also alternate of div element
            <React.Fragment>
                {/* navabar will expand for md or larger screen */}

            <Navbar  dark expand="md fixed-top">
                <div className= "container">
                    <NavbarToggler  className= "ml-auto" onClick={this.toggleNav}/>
                    <NavbarBrand className = "mr-auto logo" href='/'> The Calorie Kitchen
                        {/* <img src= "assets/images/logo.png"   height="70" width="81" 
                        alt="Ristorate Con Fusion"/> */}
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className= "ml-auto" navbar>
                        <NavItem className="ulelement">
                            <NavLink className="link" to="/home"> Home </NavLink>
                        </NavItem>
                        <NavItem className="ulelement">
                            <NavLink className="link" to="/aboutus"> About Us </NavLink>
                        </NavItem>
                        <NavItem className="ulelement">
                            <NavLink className="link" to="/menu"> Menu </NavLink>
                        </NavItem>
                        <NavItem className="ulelement">
                            <NavLink className="link" to="/Contactus"> Contact Us </NavLink>
                        </NavItem>
                     
                        <NavItem className="ulelement">
                            <NavLink className="link last" to="/Order"> Order </NavLink>
                        </NavItem>
                        <NavItem className="book-a-table">
                            <a className="btnhover" href="/home/#reserve"> BOOK A TABLE </a>
                            {/* <Button type="submit" className="btnhover"> BOOK A TABLE </Button> */}
                        </NavItem>
                    </Nav>
                    {/* <Nav className="ml-auto" navbar
                        <NavItem>
                            <Button outline onClick={this.toggleModal}>
                                <span className="fa fa-sign-in fa-lg">Login</span>
                            </Button>
                        </NavItem>
                        
                    </Nav> */}
                    </Collapse>
                </div>
            </Navbar>
        
            
            {/* <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className= "col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Oue lipsmacking creations will tickle your culinery senses</p>
                        </div>
                    </div>
                </div>
            </Jumbotron> */}
            <Modal isOpen ={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader toggle ={ this.toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username"> Username</Label>
                            <Input type="text" id="username" name="username"
                             innerRef={(input) => this.username =input}/>
                           
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password"> Password</Label>
                            <Input type="password" id="password" name="password"
                             innerRef={(input) => this.password =input}/>
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember"
                                 innerRef={(input) => this.remember =input}/> Remember me
                            </Label>
                        </FormGroup>
                        <Button type ="submit" value="submit" className="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
            
            </React.Fragment>
        );
    }
}

export default Header;