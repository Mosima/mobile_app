import { StyleSheet } from "react-native";
import { BaseColor } from "@config";

export default StyleSheet.create({
  contain: {
    flex: 1
  },
  iconRight: {
    //width: 100,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 30,
    paddingLeft:50,
    marginLeft:200,
    position: 'absolute',
      bottom:0
  },
});
