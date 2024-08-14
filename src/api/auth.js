import axios from "axios";

export const userLogin = async (email, password) => {
  const url = "https://api.escuelajs.co/api/v1/auth/login";
  try {
    const response = await axios.post(url, {
      email: email,
      password: password,
    });
    return response.data;
  } catch (err) {
    console.error(
      "Login error: ",
      err.response ? err.response.data : err.message
    );
    throw err;
  }
};
