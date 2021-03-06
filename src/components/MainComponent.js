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
import { postComment,fetchDishes,fetchComments,fetchPromos,fetchleaders, postFeedback} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';


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

  const mapDispatchToProps = (dispatch) => ({
      postComment: (dishId,rating,author,comment) => dispatch(postComment(dishId,rating,author,comment)),
      fetchDishes:() =>{dispatch(fetchDishes())},
      resetFeedbackForm: () => {dispatch(actions.reset('feedback'))},
      fetchComments: () => {dispatch(fetchComments())},
      fetchPromos: () => {dispatch(fetchPromos())},
      fetchleaders: () => {dispatch(fetchleaders())},
      postFeedback : (name,email,subject,message,success) => dispatch(postFeedback(name,email,subject,message,success))
    });

  //dispatch (addcommnet()) recive a updated action object to sent to store.which will update state. this dispatch function will be used
  //as props in below main component

class Main extends Component {
 

//when component mounted than component didmount will called and fetchdishes function
//called and it will direct to mapdispatchtoprops function and then
//it will go to redux store loading and then its get ready to view in main component
  componentDidMount(){
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
    this.props.fetchleaders();

  }


  render(){

    const HomePage =() => {
      return(
        <Home
          dish ={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
          dishesLoading ={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion ={this.props.promotions.promotions.filter((promo)=> promo.featured)[0]}
          promoLoading={this.props.promotions.isLoading}
          promoErrMess={this.props.promotions.errMess}
          leaders = {this.props.leaders.leaders.filter((leader)=> leader.featured)[0]}
          leadersLoading ={this.props.leaders.isLoading}
          leadersErrMess = {this.props.leaders.errMess}
          />
      );
    }

    const  DishWithId =({match}) =>{
      return(
        // match with params with disid which is string will convert into int using part int and usign base 10 format and filter will recive array so we nned to extract first element of array using [0]
        <Dishdetail dish={this.props.dishes.dishes.filter((dish)=>dish.id === parseInt(match.params.dishId,10))[0]}
          isLoading= {this.props.dishes.isLoading}
          errMess = {this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment)=>comment.dishId === parseInt(match.params.dishId,10))}
          commentsErrMess={this.props.comments.errMess}
          // addComment ={this.props.addComment}
          postComment={this.props.postComment}
          />

        );
      
    };


  return (
    <div>
      <Header/>
      <div>
        <TransitionGroup>
          <CSSTransition key= {this.props.location.key} classNames = "page" timeout ={300}>
              <Switch>
                <Route path= '/home' component={HomePage}/>
                {/* inline arraw function like menu dishes can also define as const homepage. both are same */}
                <Route exact path="/menu" component={()=> <Menu dishes= {this.props.dishes}/>} />
                <Route path="/menu/:dishId" component={DishWithId}/>
                {/* redirect element mean if exact path will not match then application will reidrect to home page */}
                  <Route exact path="/contactus" component={() => <Contact resetFeedbackForm = {this.props.resetFeedbackForm} postFeedback = {this.props.postFeedback}/>}/>
                  <Route path="/aboutus" component ={()=> < Aboutus leaders ={this.props.leaders}/>}/>
                <Redirect to ="/home"/> 
              </Switch>
              </CSSTransition>
      </TransitionGroup>
      </div>
  
      <Footer/>
    </div>
  );
}
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

// this export line(73) will help to connect main component with redux