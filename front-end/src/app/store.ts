import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import callbackReducer from '../features/callback/callbackSlice';

export const store = configureStore({
  reducer: {
    callback: callbackReducer
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
