import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <View style={styles.rootScreen}>
      <LinearGradient
        colors={["#4e0329", "#ddb52f"]} // Specify your gradient colors here
        style={styles.gradient}>
        <StartGameScreen />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center",
  },
});
