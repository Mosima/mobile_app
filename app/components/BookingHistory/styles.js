import {StyleSheet} from 'react-native';
import * as Utils from "@utils";

export default StyleSheet.create({
  contain: {
    shadowOffset: {height: 1},
    shadowOpacity: 1.0,
    elevation: 5,
  },
  blockImage: {
    height: Utils.scaleWithPixel(20),
    width: "100%",
    opacity:1,
    zIndex:1,
    backgroundColor:0
  },
  nameContent: {
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  validContent: {
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 7,
    justifyContent: 'space-between',
    borderBottomRightRadius: 8,
    borderBottomLeftRadius: 8,
  },
  mainContent: {
    paddingHorizontal: 12,
    paddingVertical: 20,
    flexDirection: 'row',
  },
  iconRight: {
    width: 100,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
