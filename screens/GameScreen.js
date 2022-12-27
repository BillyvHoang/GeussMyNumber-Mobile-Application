import {View, Text, StyleSheet} from "react-native";
import Title from "../Components/Title";
function GameScreen() {
    return (
        <View style={styles.screen}>
           <Title>Oponents Geuss</Title>
            {/* Geuss */}
            <View>
                <Title>Higher or lower?</Title>
            </View>
            <View>
                {/* Log Rounds */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },

})

export default GameScreen;