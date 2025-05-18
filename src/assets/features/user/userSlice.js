import { createSlice } from "@reduxjs/toolkit";
import user from "../../data/user.json";
const initialState = user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    setTemplate(state, action) {
      state.userTemplate = action.payload;
    },
    updateName(state, action) {
      state.userData.name = { ...state.userData.name, ...action.payload };
    },
    setAvatar(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateContact(state, action) {
      state.userData.contact = { ...state.userData.contact, ...action.payload };
    },
    setObjective(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const {
  updateUser,
  setTemplate,
  updateName,
  setAvatar,
  updateContact,
  setObjective,
} = userSlice.actions;
export default userSlice.reducer;
