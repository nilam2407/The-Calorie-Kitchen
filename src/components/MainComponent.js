import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent';
import {DISHES} from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch,Route,Redirect } from 'react-router';


class Main extends Component {
  constructor(props){
  super(props);
  this.state={
    dishes : DISHES,
  };

  }

  render(){

    const HomePage =() => {
      return(
        <Home/>
      );
    }
  return (
    <div>
      <Header/>
      <Switch>
        <Route path= '/home' component={HomePage}/>
        {/* inline arraw function like menu dishes can also define as const homepage. both are same */}
        <Route exact path="/menu" component={()=> <Menu dishes= {this.state.dishes}/>} />
         {/* redirect element mean if exact path will not match then application will reidrect to home page */}
        <Redirect to ="/home"/> 
      </Switch>
   
  
      <Footer/>
    </div>
  );
}
}

export default Main;