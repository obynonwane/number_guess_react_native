import { StyleSheet, View } from "react-native";

import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36, // push the view screen away from the top of the device
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
});
