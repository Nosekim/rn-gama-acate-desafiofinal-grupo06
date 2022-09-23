import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  changeIsLoggedIn,
  changeLoginMethod,
  changeEmail,
} from "../store/modules/auth/reducer";
import {
  changeIdUser,
  changeName,
  setToken,
} from "../store/modules/userProfile/reducer";

import { IAppState } from "../types";

import AppStack from "./app.stack";
import LoginStack from "./login.stack";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#272629",
  },
};

function RootRoutes() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state: IAppState) => state.auth);

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
          dispatch(changeEmail(user.attributes.email));

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
function changeUserEmail(email: any): any {
  throw new Error("Function not implemented.");
}
