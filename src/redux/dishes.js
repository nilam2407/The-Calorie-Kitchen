import {DISHES} from "../shared/dishes";


//below is default implementation of dishes reducer function and return default initial state
export const Dishes =(state = DISHES, action) => {
    switch(action.type){
        default:
            return state;
    }
}