import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import callbackReducer from '../features/callback/callbackSlice';
import authenticationReducer from '../features/authentication/authenticationSlice';
import administratorReducer from '../features/administrator/administratorSlice';

export const store = configureStore({
  reducer: {
    callback: callbackReducer,
    authentication: authenticationReducer,
    administrator: administratorReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
