import React, {Component} from 'react';
import Menu from "./MenuComponent";
import Dishdetail from './DishdetailComponent';

import Header from "./HeaderComponent";
import Aboutus from "./AboutComponent";
import Contact from "./ContactComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Switch,Route,Redirect, withRouter } from 'react-router-dom';
import {connect } from 'react-redux';

  //before connecting to store you need to define 
  // we derive all state from redux store
  const mapStateToProps = state =>{
    return{
      dishes:state.dishes,
      comments: state.comments,
      promotions:state.promotions,
      leaders : state.leaders
    }
  }

class Main extends Component {
  constructor(props){
  super(props);
  }



  render(){

    const HomePage =() => {
      return(
        <Home
          dish ={this.props.dishes.filter((dish)=> dish.featured)[0]}
          promotion ={this.props.promotions.filter((promo)=> promo.featured)[0]}
          leader = {this.props.leaders.filter((leader)=> leader.featured)[0]}
          />
      );
    }

    const  DishWithId =({match}) =>{
      return(
        // match with params with disid which is string will convert into int using part int and usign base 10 format and filter will recive array so we nned to extract first element of array using [0]
        <Dishdetail dish={this.props.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
          comments={this.props.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}/>

        );
      
    };
  return (
    <div>
      <Header/>
      <div>
      <Switch>
        <Route path= '/home' component={HomePage}/>
        {/* inline arraw function like menu dishes can also define as const homepage. both are same */}
        <Route exact path="/menu" component={()=> <Menu dishes= {this.props.dishes}/>} />
         <Route path="/menu/:dishId" component={DishWithId}/>
         {/* redirect element mean if exact path will not match then application will reidrect to home page */}
          <Route exact path="/contactus" component={Contact}/>
          <Route path="/aboutus" component ={()=> < Aboutus leaders ={this.props.leaders}/>}/>
        <Redirect to ="/home"/> 
      </Switch>
      </div>
  
      <Footer/>
    </div>
  );
}
}

export default  withRouter(connect(mapStateToProps)(Main));

// this export line(73) will help to connect main component with redux