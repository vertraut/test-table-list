import { createUsersTable } from "./utilites/createTable.js";
import { getUsers } from "./API/API.js";
import {
  saveUsers,
  getUsersFromLocalStorage,
} from "./utilites/localstorage.js";
import { onOpenModal, onCloseModal } from "./modal/modal.js";
import { createUser } from "./utilites/createUser.js";
import {
  createUserDetailInfoMarkup,
  addUserFormMarkup,
} from "./markup/user.js";

import "./utilites/createUser.js";

const tableContainerEl = document.querySelector(".table-container");

let users = [];

function updateUserList(updatedList = users) {
  users = updatedList;
  saveUsers(users);
  showUsers();
}

if (!getUsersFromLocalStorage()) {
  getUsers()
    .then((data) => {
      if (data.length === 0) {
        return noData();
      }
      return data;
    })
    .then((data) => {
      users = data;
      updateUserList();
    })
    .catch((err) => console.log(err));
} else {
  users = getUsersFromLocalStorage();
  showUsers();
}

function showUsers() {
  if (users.length > 0) {
    tableContainerEl.innerHTML = createUsersTable(users);
    tableContainerEl.addEventListener("click", onTrClick);
    tableContainerEl.addEventListener("click", onHeadClick);
    return;
  }

  tableContainerEl.innerHTML = "You have not users";
}

function sortByField(field) {
  return (a, b) => {
    return a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1;
  };
}

function onHeadClick(e) {
  if (e.target.id === "delete-field") return;
  if (e.target.closest("thead")) {
    users = users.sort(sortByField(e.target.id));
    showUsers();
  }
}

function onTrClick(e) {
  if (e.target.closest("tbody") && e.target.closest("tr")) {
    const userId = e.target.closest("tr").id.toString();

    if (e.target.closest("td") && e.target.closest("td").id === "deleteUser") {
      updateUserList(users.filter((item) => item.id.toString() !== userId));
      return;
    }
    const user = users.find(({ id }) => id.toString() === userId);

    const userDetailInfo = createUserDetailInfoMarkup(user);
    onOpenModal(userDetailInfo);
  }
}

function noData() {
  tableContainerEl.innerHTML = "<p>no data found</p>";
}

const addUserBtnEl = document.querySelector(".add-user");
addUserBtnEl.addEventListener("click", showForm);

function showForm() {
  onOpenModal(addUserFormMarkup);
  const formEl = document.querySelector(".form-add-user");
  formEl.addEventListener("submit", onFormSubmit);
}

function onFormSubmit(e) {
  const newUserData = {};
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  formData.forEach((value, name) => {
    newUserData[name] = value;
  });

  users.push(createUser(newUserData));
  onCloseModal();
  updateUserList();
}
