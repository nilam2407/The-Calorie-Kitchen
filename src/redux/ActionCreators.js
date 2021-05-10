import * as ActionTypes from './ActionTypes';
import {baseUrl} from "../shared/baseUrl";


//function that creat action for addcomment include all data field in params
export const addComment = (comment) => ({
    //return plain js object
    //every action function must have type and import strint type here
        type: ActionTypes.ADD_COMMENT,
        payload:comment
        // {
        //     //add whatever data you need to send to action object, paramas are assigned to properties.
        //     // dishId : dishId1,
        //     // rating: rating1,
        //     // author: author1,
        //     // comment: comment1
        // }

});

export const postComment = (dishId, rating, author, comment) =>(dispatch)=> {
    const newComment = {
        dishId : dishId,
        rating: rating,
        author:author,
        comment: comment

    };
    newComment.date = new Date().toISOString ();
    return fetch(baseUrl + 'comments',{
        method: 'POST',
        body: JSON.stringify(newComment),
        headers:{
            'content-Type' : 'application/json'
        },
        credentials:'same-origin'
    })
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
       throw error;
    }
    )
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error => { console.log('Post Comments',error.message);
        alert('your comment could not be posted/nError:' + error.message);
    });
    
};



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

export const fetchleaders = () => (dispatch) => {

    dispatch(leadersLoading(true));

   return fetch(baseUrl + 'leaders')
    .then(response =>{
        if(response.ok){
            return response;
        }
        else{
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
        }
    },
    error => {
        var errmess = new Error(error.message);
        throw errmess;
    }
    )
    .then(response =>response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
    }

    export const leadersFailed = (errmess) => ({
        type: ActionTypes.LEADERS_FAILED,
        payload: errmess
    });

    export const leadersLoading = () => ({
        type : ActionTypes.LEADERS_LOADING
    });

    export const addLeaders = (leaders) => ({
        type: ActionTypes.ADD_LEADERS,
        payload: leaders
    });


export const postFeedback = (name, email, subject, message) => (dispatch) => {
        const newFeedback ={
            name : name,
            email : email,
            subject :subject,
            message : message
        };
        newFeedback.date = new Date().toISOString ();
        return fetch(baseUrl + 'feedback', {
            method: 'POST',
            body: JSON.stringify(newFeedback),
            headers : {
                'content-Type' : 'application/json'
            },
            credentials :'same-origin'
        }) 
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
            throw error;
        })
        .then(response => response.json())
        .then(response => dispatch(feedback(response)))
        .catch(error => {console.log('Post Feedback', error.message);
            alert('your Feedback could not be posted on server' + error.message);
    });
    
};

export const feedback =(feedback) => ({
    type: ActionTypes.FEEDBACK,
    payload:feedback
})
