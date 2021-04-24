import * as ActionTypes from './ActionTypes';
import {DISHES} from "../shared/dishes";
import {baseUrl} from "../shared/baseUrl";


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

//dummy for communicating with server action
    // setTimeout(()=>{
    //      dispatch(addDishes(DISHES));
    // },2000);

// actual commination with server using baseurl

 return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
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

export const fetchComments =() => (dispatch) => {
    return fetch(baseUrl +'comments')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));

}

export const commentsFailed =(errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload :errmess
});

export const addComments =(comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response;
        }
        else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});