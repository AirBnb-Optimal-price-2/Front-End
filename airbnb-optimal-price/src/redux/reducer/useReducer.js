import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
   
} from "../action"

const initialState = {
    currentUser: {},
    loading: false,
    error: null,
   message:""

}

export const useReducer = (state = initialState, action) => {
    switch(action.type){
       
        case LOGIN_START:
            return {
                ...state, 
                loading: true,
                error: null,
                currentUser: {}
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                err: action.payload,
                load: false
            }
        case REGISTER_START:
            return {
                ...state,
                loading: true,
                error: null,
                currentUser: {}
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message:action.payload
            }
        case REGISTER_FAILURE:
            var mssg=""
            if(action.payload.includes('already')){
                 mssg="User already Exits"
            }
            else mssg="Server not Responidng"
            return {
                ...state,
                error: action.payload,
                loading: false,
                message:mssg
            }
        
        default:
            return state;

    }
}