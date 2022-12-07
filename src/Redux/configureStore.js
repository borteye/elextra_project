import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './incCounter';


export default configureStore({

    reducer: {
        counter: counterReducer,
    }
});