export function createUser({
  name,
  username,
  email,
  street,
  city,
  zipcode,
  phone,
  website,
  company,
}) {
  return {
    id: Date.now() + Math.random(),
    name,
    username,
    email,
    address: {
      street,
      city,
      zipcode,
    },
    phone,
    website,
    company: {
      name: company,
    },
  };
}
