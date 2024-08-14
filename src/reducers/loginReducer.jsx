export const loginReducer = (state, action) => {
  switch (action.type) {
    case "EMAIL":
      return {
        ...state,
        email: action.payload.value,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload.value,
      };
    case "TOKEN":
      return {
        ...state,
        token: action.payload.token,
      };
    case "LOGOUT":
      return {
        ...state,
        email: "",
        password: "",
        token: "",
      };
    default:
      return state;
  }
};
