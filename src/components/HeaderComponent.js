import React, {Component} from 'react';
import {Navbar, NavbarBrand,Nav, NavbarToggler, Collapse,Jumbotron, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
        this.state= {
            isNavOpen:false
        }
        //if we bind this we can use  in jsx as this.toggleNav method instead of using arrow function inside jsx.
        this.toggleNav = this.toggleNav.bind(this);
    }


    toggleNav(){
        this.setState({isNavOpen :!this.state.isNavOpen})
    }

    render(){
        return(
            //react fragment will allow bunch of react element together its also alternate of div element
            <React.Fragment>
                {/* navabar will expand for md or larger screen */}
            <Navbar dark expand="md">
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav}/>
                    <NavbarBrand className = "mr-auto" href='/'>
                        <img src="assets/images/logo.png" height="30" width="41" 
                        alt="Ristorate Con Fusion"/>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/aboutus">
                                <span className="fa fa-info fa-lg"></span> About Us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/menu">
                                <span className="fa fa-list fa-lg"></span> Menu
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/Contactus">
                                <span className="fa fa-address-card fa-lg"></span> Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </div>
            </Navbar>
            <Jumbotron>
                <div className="container">
                    <div className="row row-header">
                        <div className= "col-12 col-sm-6">
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Oue lipsmacking creations will tickle your culinery senses</p>
                        </div>
                    </div>
                </div>
            </Jumbotron>
            </React.Fragment>
        );
    }
}

export default Header;