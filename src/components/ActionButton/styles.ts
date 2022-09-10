import { StyleSheet } from "react-native";
import { widthScreen } from "../../global/GlobalStyles";

export const stylesButton = StyleSheet.create({
    container: { 
        width: widthScreen - 30, 
        height: 48, 
        borderRadius: 10, 
        shadowColor: "#2382B8",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    content: { 
        flex: 1, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    text: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        color: '#fff' 
    }
})

