export function createUsersTable(users) {
  const tableHead =
    "<tr><th id='name'>Name</th><th id='username'>Username</th><th id='email'>Email</th><th id='website'>Website</th><th id='delete-field'></th></tr>";
  const tableRows = users
    .map((user) => {
      return `<tr id="${user.id}">
      <td aria-label="Name">${user.name}</td>
      <td aria-label="Username">${user.username}</td>
      <td aria-label="Email">${user.email}</td>
      <td aria-label="Website">${user.website}</td>
      <td id="deleteUser">Remove</td>
      </tr>`;
    })
    .join("");

  const table = `<table class="table"><thead class="thead">${tableHead}</thead><tbody class="tbody">${tableRows}</tbody></table>`;
  return table;
}
