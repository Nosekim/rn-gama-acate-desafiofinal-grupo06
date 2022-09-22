import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Auth } from "aws-amplify";

import { IAppState } from "../types";

import AppStack from "./app.stack";
import LoginStack from "./login.stack";

import {
  changeIsLoggedIn,
  changeLoginMethod,
} from "../store/modules/auth/reducer";
import {
  changeIdUser,
  changeName,
  changeUserEmail,
  setToken,
} from "../store/modules/userProfile/reducer";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#272629",
  },
};

function RootRoutes() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IAppState) => {
    return state.auth;
  });

  useEffect(() => {
    Auth.currentAuthenticatedUser({
      bypassCache: false,
    })
      .then(async (user) => {
        if (user) {
          const { signInUserSession } = user;
          const { idToken } = signInUserSession;

          dispatch(changeIdUser(user.username));
          dispatch(changeName(user.attributes.name));
          dispatch(changeUserEmail(user.attributes.email));

          dispatch(changeLoginMethod("email"));
          dispatch(setToken(idToken.jwtToken));

          setTimeout(() => {
            dispatch(changeIsLoggedIn(true));
          }, 50);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <NavigationContainer theme={theme}>
      {isLoggedIn ? <AppStack /> : <LoginStack />}
    </NavigationContainer>
  );
}

export default RootRoutes;
