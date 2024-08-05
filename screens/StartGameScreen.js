import { View, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}

export default StartGameScreen;

styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100, // push the view screen away from the top of the device
    marginHorizontal: 24, //give space on the left & right
    padding: 16,
    backgroundColor: "#72063c",
    borderRadius: 8,
    elevation: 4, //background shadow on android
    shadowColor: "black", //shadow collor for ios
    shadowOffSet: { width: 0, height: 2 }, //ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, // ios how transparent
  },
});
