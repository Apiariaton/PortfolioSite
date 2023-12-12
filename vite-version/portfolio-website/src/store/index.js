import {configureStore} from '@reduxjs/toolkit';
import cardSliceReducer from './card-slice';





const store = configureStore({reducer: {cardSliceReducer}});



export default store;