import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
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
>>>>>>> 8a93f1034547601aaa356875d5fd2a8bfba0d543

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
<<<<<<< HEAD

  const { isLoggedIn } = useSelector((state: IAppState) => state.auth);
=======
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
>>>>>>> 8a93f1034547601aaa356875d5fd2a8bfba0d543

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
