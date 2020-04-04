import {
    FETCH_PRODUCTS_PENDING,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_ERROR
} from '../actions/action'

const initState = {
    products: [],
    pending: false,
    error: null
};

export const rootReducer = (state = initState, action) => {
    switch(action.type) {
    case FETCH_PRODUCTS_PENDING:
        return {
            ...state,
            pending: true
        }
    case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            pending: false,
            products: action.products
        } 
    case FETCH_PRODUCTS_ERROR:
        return {
            ...state,
            pending: false,
            error: action.error
        }   
    default:
        return state
    }
};

export const products = state => state.products;
export const pending = state => state.pending;
export const error = state => state.error;