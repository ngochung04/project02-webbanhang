import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import promoCodeReducer from "./PromoCodeSlice";
export function makeStore() {
  return configureStore({
    reducer: {
      promoCode: promoCodeReducer,
    },
  });
}

const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
