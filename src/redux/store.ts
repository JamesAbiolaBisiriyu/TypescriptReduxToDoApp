import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";

/**
 * Redux store configuration
 * Combines all reducers (currently only todo) and exports store, RootState, and AppDispatch types.
 */
export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

// RootState type for useSelector
export type RootState = ReturnType<typeof store.getState>;
// AppDispatch type for useDispatch
export type AppDispatch = typeof store.dispatch;