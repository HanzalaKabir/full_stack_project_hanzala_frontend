import axios from "axios";
export const signupHandler = async (username, number, email, password) => {
  try {
    const user = await axios.post(
      "https://full-stack-project-hanzala-backend.onrender.com/api/auth/register",
      {
        username: username,
        number: number,
        email: email,
        password: password,
      }
    );
    console.log(user, "SignUp Successful");
  } catch (err) {
    console.log(err, "error adding user to database");
  }
};
