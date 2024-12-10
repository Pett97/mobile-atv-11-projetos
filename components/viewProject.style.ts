import { StyleSheet } from "react-native";
import MYTHEME from "../styles/myTheme";

const myStyle = StyleSheet.create({
  container: {
    backgroundColor:MYTHEME.secondary,
    borderTopColor: MYTHEME.primary,
    borderWidth: 3,
    borderRadius:6,
    marginTop: 12,
  },
  text: {
    margin: 4,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  containerAction: {
    marginTop: 10,
    marginBottom: 5,
    justifyContent: "space-between",
  },
});

export default myStyle;
