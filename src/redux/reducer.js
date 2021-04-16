import {DISHES} from "../shared/dishes";
import {COMMENTS} from "../shared/comments";
import {LEADERS} from "../shared/leaders";
import {PROMOTIONS} from '../shared/promotions';

export const initialState ={
    dishes : DISHES,
    comments: COMMENTS,
    leaders: LEADERS,
    promotions: PROMOTIONS
};
//reducer can not update new state. at first this function do not have
//any state so we intialize using in parameter providing initial state.
export const Reducer = (state = initialState,action) =>{
    return state;
};