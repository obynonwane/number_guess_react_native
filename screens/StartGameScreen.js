import { useState } from "react";
import { View, TextInput, StyleSheet, Button, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/colors";
function StartGameScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputNumber() {
    const choosenNumber = parseInt(enteredNumber);
    if (isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99) {
      Alert.alert("Invalid number", "Number has to a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }

    onPickNumber(choosenNumber);
  }
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputNumber}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100, // push the view screen away from the top of the device
    marginHorizontal: 24, //give space on the left & right
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, //background shadow on android
    shadowColor: "black", //shadow color for ios
    shadowOffSet: { width: 0, height: 2 }, //ios
    shadowRadius: 6, // ios
    shadowOpacity: 0.25, // ios how transparent
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});
