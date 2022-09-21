import { Auth } from 'aws-amplify';

import { 
    changeIsLoggedIn,
    changeLoginMethod, 
    changeName 
} from '../store/modules/auth/reducer';

import { changeMsgError, changeStatusError } from '../store/modules/info/reducer';

interface ISignIn {
    email: string;
    password: string;
    dispatch: any;
    nav: any;
}

export async function signIn({ email, password, dispatch, nav }: ISignIn) {
    try {

        const user = await Auth.signIn(email, password);

        if(user) {

            console.log("user", user);

            dispatch(changeIsLoggedIn(true));
            dispatch(changeLoginMethod("email"));
        }

    } catch (error) {
        console.log('error signing in', error);

        dispatch(changeMsgError("Ocorreu um erro na tentativa de acessar sua conta. Por favor, tente novamente"));

        setTimeout(() => { dispatch(changeStatusError(true)) }, 20);
    }
}