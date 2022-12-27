import {Text, StyleSheet} from "react-native";
import Colors from "../../constants/Color";


function Title({children}) {
    return(
        <Text style={styles.title}>{children}</Text> 
    )
}


const styles = StyleSheet.create({
    title: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12
    }
})

export default Title;