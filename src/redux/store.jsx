import { configureStore } from "@reduxjs/toolkit";
import { contactsApi, mySlice } from "./slice";
export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: mySlice.reducer
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
