import { TOKEN_KEY } from "@constants/localstorage";
import { jwtDecode } from "jwt-decode";
import { createContext, useReducer } from "react";

const initialState = {
  user: null,
};

const jwtToken = localStorage.getItem(TOKEN_KEY);
if (jwtToken) {
  const decodedToken = jwtDecode(jwtToken);

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem(TOKEN_KEY);
  } else {
    initialState.user = decodedToken;
  }
}

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
});

const AuthProvider = (props) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const login = (userData) => {
    localStorage.setItem(TOKEN_KEY, userData.token);
    dispatch({
      type: "LOGIN",
      payload: userData,
    });
  };

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user: state.user, login, logout }}
      {...props}
    />
  );
};

export { AuthContext, AuthProvider };
