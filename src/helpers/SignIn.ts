import { Auth } from "aws-amplify";

import {
  changeIsLoggedIn,
  changeLoginMethod,
  changeRecoveringPassword,
} from "../store/modules/auth/reducer";

import { 
  changeIdUser, 
  changeName,
  setToken 
} from "../store/modules/userProfile/reducer";

import {
  changeMsgError,
  changeStatusError,
  changeProcessingAction,
} from "../store/modules/info/reducer";

interface ISignIn {
  email: string;
  password: string;
  dispatch: any;
  nav: any;
}

export async function signIn({ email, password, dispatch, nav }: ISignIn) {
  try {
    dispatch(changeProcessingAction(true));

    const user = await Auth.signIn(email, password);

    if (user) {

      const { signInUserSession, username, attributes } = user;

      const { idToken } = signInUserSession;

      dispatch(changeIdUser(username));
      dispatch(changeName(attributes.name));

      dispatch(changeLoginMethod("email"));
      dispatch(setToken(idToken.jwtToken));

      setTimeout(() => {
        dispatch(changeIsLoggedIn(true));
      }, 50);
    }
  } catch (error: any) {
    if (error.name === "UserNotConfirmedException") {
      dispatch(changeRecoveringPassword(false));
      nav.navigate("Verificação de Conta");
    } else {
      let textError =
        "Erro no acesso! Por favor, verifique os dados informados e tente novamente";

      if (error.name === "LimitExceededException")
        textError =
          "Limite de tentativas excedido! Por favor, tente novamente mais tarde";

      dispatch(changeMsgError(textError));

      setTimeout(() => {
        dispatch(changeProcessingAction(false));
        dispatch(changeStatusError(true));
      }, 20);
    }
  }
}
