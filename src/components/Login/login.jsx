import React from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../context/login-context";
import { userLogin } from "../../api/auth";

function Login() {
  const { state, dispatch } = useLogin();
  const { email, password } = state;
  const navigate = useNavigate();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const data = await userLogin(email, password);
    console.log(data);
    if (Object.keys(data)?.length > 0) {
      localStorage.setItem("token", data.access_token);
    }
    dispatch({
      type: "TOKEN",
      payload: {
        token: data,
      },
    });
    if (data.access_token) {
      navigate("/");
    }
  };
  const onEmailChange = (e) => {
    dispatch({
      type: "EMAIL",
      payload: {
        value: e.target.value,
      },
    });
  };
  const onPasswordChange = (e) => {
    dispatch({
      type: "PASSWORD",
      payload: {
        value: e.target.value,
      },
    });
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="bg-white shadow-md w-[400px] p-10"
    >
      <h2 className="flex justify-center text-3xl">Login</h2>
      <div className="flex flex-col gap-2 p-2">
        <span>Email</span>
        <input
          className="border-b-2 focus:outline-none"
          onChange={onEmailChange}
          type="email"
          required
          placeholder="abc@mail.com"
          value={email}
        />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <span>Password</span>
        <input
          className="border-b-2 focus:outline-none"
          onChange={onPasswordChange}
          type="password"
          required
          placeholder=""
          value={password}
        />
      </div>
      <div className=" justify-center justify-items-center p-6">
        <button className=" mx-auto button btn-primary btn-icon d-flex align-center justify-center gap cursor-pointer btn-margin">
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
