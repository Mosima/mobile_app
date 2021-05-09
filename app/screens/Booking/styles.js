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
    paddingBottom: 70,
    paddingLeft:50,
    marginLeft:200,
    //position: 'absolute',
    bottom:0
  },
  checkout:{
    alignItems: "center",
    //padding:40,
    height:40,
    color: '#fff',
    backgroundColor: '#6f397d',
    bottom:0,

  }
});
