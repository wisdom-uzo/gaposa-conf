const users = [
    {
      email: "gaposastconf@gmail.com",
      password: "ICONST'2024"
    },
  
  ]
  
  export const getUserByEmail = (email) => {
    const found = users.find(user => user.email === email);
    return found;
  }