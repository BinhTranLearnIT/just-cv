import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { loadState, saveState } from "../utils/localStorage";
import { debounce } from "lodash";
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: loadState(),
});
// Debounce the save to avoid frequent writes
const debouncedSaveState = debounce(() => {
  saveState({ user: store.getState().user });
}, 500); // 500ms after the last change
store.subscribe(() => {
  debouncedSaveState();
});

export default store;
