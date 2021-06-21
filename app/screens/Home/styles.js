import {StyleSheet} from 'react-native';
import * as Utils from '@utils';
import { BaseColor } from "@config";

export default StyleSheet.create({
  imageBackground: {
    height: 140,
    width: '100%',
    position: 'absolute',
  },
  searchForm: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    width: '100%',
    shadowColor: 'black',
    shadowOffset: {width: 1.5, height: 1.5},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 1,
  },
  contentServiceIcon: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentCartPromotion: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnPromotion: {
    height: 25,
    borderRadius: 3,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  contentHiking: {
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },
  promotionBanner: {
    height: Utils.scaleWithPixel(100),
    width: '100%',
    marginTop: 10,
  },
  line: {
    height: 1,
    marginTop: 10,
    marginBottom: 15,
  },
  iconContent: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
    borderRadius: 18,
  },
  itemService: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 10,
  },
  promotionItem: {
    width: Utils.scaleWithPixel(150),
    height: Utils.scaleWithPixel(200),
  },
  tourItem: {
    width: Utils.scaleWithPixel(135),
    height: Utils.scaleWithPixel(160),
  },
  titleView: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  checkout:{
    alignItems: "center",
    //padding:40,
    height:40,
    color: '#fff',
    backgroundColor: '#6f397d',
    bottom:0,

  },
  contentPickDate: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    borderRadius: 8,
    backgroundColor: BaseColor.fieldColor,
    padding: 10
  },
  itemPick: {
    flex: 1,
    justifyContent: "center"
  },
  total: {
    flex: 6,
    borderRadius: 8,
    padding: 10,
    marginRight: 15
  },
  duration: {
    flex: 4,
    borderRadius: 8,
    padding: 10
  },
  contentQuest: {
    marginTop: 15,
    flexDirection: "row",
    marginBottom: 15
  },
  contentModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  contentCalendar: {
    borderRadius: 8,
    width: "100%",
    backgroundColor: "white"
  },
  contentActionCalendar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15
  },
  bottomModal: {
    justifyContent: "flex-end",
    margin: 0
  },
  lineRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20
  },
  iconRight: {
    width: 140,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  contentFilterBottom: {
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingHorizontal: 20
  },
  contentSwipeDown: {
    paddingTop: 10,
    alignItems: "center"
  },
  lineSwipeDown: {
    width: 30,
    height: 2.5,
    backgroundColor: BaseColor.dividerColor
  },
  contentActionModalBottom: {
    flexDirection: "row",
    paddingVertical: 10,
    marginBottom: 10,
    justifyContent: "space-between",
    borderBottomWidth: 1
  },
  container: {
    //flex: 1,
    //paddingTop: 40,
    //alignItems: "center"
  }
});
