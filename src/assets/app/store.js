import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { loadState, saveState } from "../utils/localStorage";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState(),
});

store.subscribe(() => {
  saveState({ user: store.getState().user });
});

export default store;
