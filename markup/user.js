export function createUserDetailInfoMarkup({
  name,
  username,
  email,
  website,
  address,
  phone,
  company,
}) {
  return `<div class = "user-details">
  <h2 class="name">${name} <span>(${username})</span></h2>
  <p class="company">${company.name}</p>
  <p class="email">Email: ${email}</p>
  <p>Website: ${website}</p>
  <p>Phone: ${phone}</p>
  <div>
  <h3>Address</h3>
  <p>Street: ${address.street}</p>
  <p>City: ${address.city}</p>
  <p>Zipcode: ${address.zipcode}</p>
  </div>
  </div>`;
}

export const addUserFormMarkup = `
<form name="add_user" autocomplete="on" class="form-add-user">
<div class="form-group">
  <label for="add_user-name"> Name </label>
  <input type="text" name="name" id="add_user-name" required/>
  <label for="add_user-username"> Username </label>
  <input type="text" name="username" id="add_user-username" required/>
  <label for="add_user-company"> Company </label>
  <input type="text" name="company" id="add_user-company" required/>
  <label for="add_user-email"> Email </label>
  <input type="email" name="email" id="add_user-email" required/>
  <label for="add_user-website"> Website </label>
  <input type="text" name="website" id="add_user-website" required/>
  <label for="add_user-phone"> Phone </label>
  <input type="tel" name="phone" id="add_user-phone" required/>
  <label for="add_user-street"> Street </label>
  <input type="text" name="street" id="add_user-street" required/>
  <label for="add_user-city"> City </label>
  <input type="text" name="city" id="add_user-city" required/>
  <label for="add_user-zipcode"> Zipcode </label>
  <input type="text" name="zipcode" id="add_user-zipcode" required/>
</div>
  <button type="submit">Submit</button>
  
</form>
`;
