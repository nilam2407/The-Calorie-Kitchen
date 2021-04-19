import * as ActionTypes from './ActionTypes';
import {DISHES} from "../shared/dishes";

//function that creat action for addcomment include all data field in params
export const addComment = (dishId1, rating1, author1, comment1) => ({
    //return plain js object
    //every action function must have type and import strint type here
        type: ActionTypes.ADD_COMMENT,
        payload:{
            //add whatever data you need to send to action object, paramas are assigned to properties.
            dishId : dishId1,
            rating: rating1,
            author: author1,
            comment: comment1
        }

});

//fetchdishes is thunk
export const fetchDishes = () =>(dispatch) => {
    dispatch(dishesLoading(true));


    setTimeout(()=>{
         dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading =() =>({
    //this function return action 

    type:ActionTypes.DISHES_LOADING

});

export const dishesFailed =(errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload :errmess
});

export const addDishes =(dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload:dishes
});