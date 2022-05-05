import { configureStore } from '@reduxjs/toolkit'
import { toolApi } from '../service/ToolApi'
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [toolApi.reducerPath]: toolApi.reducer,
    },
});

setupListeners(store.dispatch);