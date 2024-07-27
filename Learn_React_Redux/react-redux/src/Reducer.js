import React from 'react';
import { INCREMENT } from './Action';


const intialstate={
    count:0
}

const Reducer = (state=intialstate, action) => {
    switch(action.type)
    {
        case INCREMENT:
            return {...state, count:state.count + 1};
        default:
            return state;
    }
}

export default Reducer;
