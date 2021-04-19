import {COMMENTS} from '../shared/comments';
import * as ActionTypes from './ActionTypes';



//it recieve action type here and suppose to act
export const Comments =(state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            //state.length is js array and assign id
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}