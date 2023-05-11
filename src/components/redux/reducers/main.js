import { getProductsReducer } from "./productsReducer";
import {combineReducers} from 'redux'

const rootreducer = combineReducers({
    getProductsData:getProductsReducer
})

export default rootreducer;