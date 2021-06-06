const load = (key) => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error("Get state error: ", err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error("Set state error: ", err);
  }
};

export function getUsersFromLocalStorage() {
  return load("users");
}

export function saveUsers(users) {
  save("users", users);
}
