export const loadState = () => {
  try {
    const serialized = localStorage.getItem("user");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem("user", serialized);
  } catch (err) {
    console.error("Save error", err);
  }
};
