import { StyleSheet } from "react-native";
import MYTHEME from "./myTheme";

const theme = {
  primaryColor: "#00330C",
  defaultRadius: 4,
};

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    width:"100%"
  },
  title: {
    textAlign:"center",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 4,
    color:"white",
    backgroundColor:MYTHEME.primary,
    width:'100%'
  },
  input: {
    height: 32,
    borderWidth: 1,
    padding: 4,
    borderColor: "darkblue",
    borderRadius: theme.defaultRadius,
    width: "100%",
    marginTop: 12,
  },
  button: {
    height: 32,
    padding: 4,
    backgroundColor: theme.primaryColor,
    borderRadius: theme.defaultRadius,
    width: "100%",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default globalStyles;
