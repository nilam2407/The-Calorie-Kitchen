import React from 'react';
import {Link} from 'react-router-dom';
import "./footer.css";

function Footer(props){
    return(
       
        <div className="footer">
        <div className ="footer-top">
        <div className="container">
        
            <div className="row mt-0 justify-content-center">             
                <div className="col-3 offset-1 footer-links">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><Link to='./home'>Home</Link></li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><Link to='./aboutus'>About Us</Link></li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><Link to='./menu'>Menu</Link></li>
                        <li><i class="fa fa-angle-right" aria-hidden="true"></i><Link to="./contactus">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-4  footer-info">
                    <h5>ADDRESS</h5>
                    <p>
		              121, Main Street<br />
		              Windsor, Ontario <br />
		              CANADA<br /><br/>
		              <strong>Phone </strong>: +519 1234 5678<br />
		              <strong>Email</strong>: <a href="mailto:nilam2407@gmail.com"> nilam2407@gmail.com</a>
                    </p>
                </div>
                <div className="col-3  align-self-center social-links">
                    <div className="text-center">
                        <p> Connect with Us</p>
                        
                        <a href="https://www.facebook.com/login.php"><i className="fa fa-facebook"></i></a>
                        <a href="http://instagram.com/"><i className="fa fa-instagram"></i></a>
                        <a href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                      
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2021 NeelRitz Inc</p>
                </div>
            </div>
        </div>
    </div>
    </div> 
    );
}

export default Footer; 