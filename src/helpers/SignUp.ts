import { Auth } from 'aws-amplify';

import { 
    changeEmail, 
    changePassword,
    changeRecoveringPassword } from '../store/modules/auth/reducer';

import { 
    changeMsgError, 
    changeStatusError,
    changeProcessingAction } from '../store/modules/info/reducer';

interface ISignUp {
    name: string;
    email: string;
    password: string;
    dispatch: any;
    nav: any;
}

export async function signUp({ name, email, password, dispatch, nav }: ISignUp) {

    const showMsgError = (text: string) => {

        dispatch(changeMsgError(text));

        setTimeout(() => { 
            dispatch(changeProcessingAction(false));
            dispatch(changeStatusError(true)) 
        }, 20);
    }

    try {

        dispatch(changeProcessingAction(true));

        const { user } = await Auth.signUp({
            username: email,
            password,
            attributes: {
                email,   
                name
            }
        });

        if(user) {

            dispatch(changeEmail(email));
            dispatch(changePassword(password));
            dispatch(changeRecoveringPassword(false));

            nav.navigate("Verificação de Conta");
        }

    } catch (error: any) {

        let textError = "Ocorreu um erro na tentativa de criarmos sua conta. Por favor, tente novamente";

        if(error.name === "UsernameExistsException")
            textError = "Já há uma conta cadastrada com esse e-mail" ;

        showMsgError(textError);
    }
}