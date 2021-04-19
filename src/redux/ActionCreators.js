import * as ActionTypes from './ActionTypes';


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