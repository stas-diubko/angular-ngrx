import { CAR_ACTION, Union } from './cars.action';



const initialState = {
    cars: [
        
    ]
}

export function carsReducer (state = initialState, action: Union) {
    
    switch (action.type) {
        case CAR_ACTION.ADD_CAR:
            return { 
                ...state,
                cars: [...state.cars, action.payload]
            }
        case CAR_ACTION.DELETE_CAR:
            const index = state.cars.findIndex(p => p.id === action.payload.id);
            state.cars.splice(index, 1);
            return {
                ...state,
            } 

        default:
            return state
    }
}