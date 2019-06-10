import type from './actionType';

const counterReducer = (state = 0, action) => {

    console.log(state, action);

    switch(action.type) {
        case type.INCREMENT:
            console.log("Click INCREMENT BUTTON");
            return state + action.payload;
        case type.DECREMENT:
            console.log("Click DECREMENT BUTTON");
            return state - action.payload;
        default:
            return state;
    }
}

export default counterReducer;