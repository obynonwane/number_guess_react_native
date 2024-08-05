import { View, Text, Pressable, StyleSheet } from "react-native";
function PrimaryButton({ children }) {
  function pressHandler() {
    console.log("Pressed");
  }
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#644204" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden", //makes sure if any styling of this container goes outside of it, it is clipped/not visible
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75, // i.e making is 25% (0.25)vtransparent
  },
});
