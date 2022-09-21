import { TouchableOpacity, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from '@expo/vector-icons';

import { IAppState } from "../../types";

import { changeShowPassword } from "../../store/modules/auth/reducer";

interface IIcon {
    top: number;
}

export default function ShowPassword({ top }: IIcon) {

    const dispatch = useDispatch();

    const { showPassword } = useSelector((state: IAppState) => state.auth);

    useEffect(() => {
        dispatch(changeShowPassword(false));
    }, [])

    return(
        <TouchableOpacity
            style={[styles.icon, { top }]}
            onPress={() => dispatch(changeShowPassword(!showPassword))}
            activeOpacity={.5}
        >

            <Feather 
                name={showPassword ? "eye-off" : "eye"} 
                size={20} 
                color='rgba(255,255,255,.5)'
            />

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon: {
        position: 'absolute',
        right: 12
    }
})