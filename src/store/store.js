import { configureStore } from "@reduxjs/toolkit";
import { getApiCall } from '../../src/services/GetApiCall'
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{
        [getApiCall.reducerPath]:getApiCall.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(getApiCall.middleware)
})
setupListeners(store.dispatch);
