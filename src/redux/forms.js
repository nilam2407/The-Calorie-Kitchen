
import * as ActionTypes from './ActionTypes';

export const InitialFeedback = {
    name :'',
    email: '',
    subject:'',
    message: '',
    

};


export const feedback = (state= InitialFeedback, action) => {
    switch(action.type){
        case ActionTypes.FEEDBACK:
            return{
                ...state,
                success:"Here you are"
            };
        default:
            return state;
    }
}