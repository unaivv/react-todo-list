import { createStore } from "redux";
import rootReducer from "./reducers/index";

const getDataLocal = () => {
	const data = JSON.parse(localStorage.getItem('todos'))
    if(data){
        return data
    }else{
        return []
    }
}


const initialState = {
	todos: getDataLocal(),
}

const store = createStore(rootReducer, initialState);

export default store;