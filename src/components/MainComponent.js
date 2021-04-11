import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent';
import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from '../shared/promotions';
import Header from "./HeaderComponent";
import Aboutus from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch,Route,Redirect } from 'react-router';



class Main extends Component {
  constructor(props){
  super(props);
  this.state={
    dishes : DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
  };

  }

  render(){

    const HomePage =() => {
      return(
        <Home
          dish ={this.state.dishes.filter((dish)=> dish.featured)[0]}
          promotion ={this.state.promotions.filter((promo)=> promo.featured)[0]}
          leader = {this.state.leaders.filter((leader)=> leader.featured)[0]}
          />
      );
    }

    const  DishWithId =({match}) =>{
      return(
        // match with params with disid which is string will convert into int using part int and usign base 10 format and filter will recive array so we nned to extract first element of array using [0]
        <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.state.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}/>

        );
      
    }
  return (
    <div>
      <Header/>
      <Switch>
        <Route path= '/home' component={HomePage}/>
        {/* inline arraw function like menu dishes can also define as const homepage. both are same */}
        <Route exact path="/menu" component={()=> <Menu dishes= {this.state.dishes}/>} />
         <Route path="/menu/:dishId" component={DishWithId}/>
         {/* redirect element mean if exact path will not match then application will reidrect to home page */}
          <Route exact path="/contactus" component={Contact}/>
          <Route path="/aboutus" component ={()=> < Aboutus leaders ={this.state.leaders}/>}/>
        <Redirect to ="/home"/> 
      </Switch>
   
  
      <Footer/>
    </div>
  );
}
}

export default Main;