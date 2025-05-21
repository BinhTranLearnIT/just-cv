import { createSlice } from "@reduxjs/toolkit";
import user from "../../data/user.json";
const initialState = user;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      state.userData.name = { ...state.userData.name, ...action.payload };
    },
    updateContact(state, action) {
      state.userData.contact = { ...state.userData.contact, ...action.payload };
    },
    updateObjective(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateSkills(state, action) {
      state.userData = { ...state.userData, ...action.payload };
      // action.payload = {skills:[{},{},{}]}
    },
    updateLanguages(state, action) {
      state.userData = { ...state.userData, ...action.payload };
      // action.payload = {languages:[{},{},{}]}
    },
    updateExperience(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateEducation(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateProjects(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateCertification(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    updateUserTemplate(state, action) {
      state.userTemplate = action.payload;
    },
    updateAvatar(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
    // Optionally a full state reset or full update
    setUserData(state, action) {
      state.userData = { ...state.userData, ...action.payload };
    },
  },
});

export const {
  updateName,
  updateContact,
  updateObjective,
  updateSkills,
  updateLanguages,
  updateExperience,
  updateEducation,
  updateProjects,
  updateCertification,
  updateUserTemplate,
  updateAvatar,
  setUserData,
} = userSlice.actions;

export default userSlice.reducer;
