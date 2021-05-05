import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  Image,
  Text,
  Icon,
  HotelItem,
  Card,
  Button,
  SafeAreaView,
  EventCard,
} from '@components';
import {BaseStyle, Images, useTheme} from '@config';
import * as Utils from '@utils';
import styles from './styles';
import {PromotionData, TourData, HotelData} from '@data';
import {HomeActions} from '@actions';

import {useTranslation} from 'react-i18next';

export default function Home({navigation}) {
  const cart = useSelector(state => state.home.cart);

  // console.log("CART", cart);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {colors} = useTheme();
  const [icons] = useState([
    {
      icon: 'bolt',
      name: 'Electricity',
      route: 'Hotel',
    },
    {
      icon: 'hand-holding-water',
      name: 'Water',
      route: 'Tour',
    },
    {
      icon: 'money-bill-alt',
      name: 'Lotto',
      route: 'OverViewCar',
    },
    {
      icon: 'wifi',
      name: 'Data',
      route: 'FlightSearch',
    },
    {
      icon: 'volleyball-ball',
      name: 'Betting',
      route: 'CruiseSearch',
    },
    {
      icon: 'tv',
      name: 'DSTV',
      route: 'BusSearch',
    },
    {
      icon: 'star',
      name: 'Powerball',
      route: 'DashboardEvent',
    },
    {
      icon: 'ellipsis-h',
      name: 'more',
      route: 'More',
    },
  ]);
  const [relate] = useState([
    {
      id: '0',
      image: Images.event4,
      title: 'BBC Music Introducing',
      time: 'Thu, Oct 31, 9:00am',
      location: 'Tobacco Dock, London',
    },
    {
      id: '1',
      image: Images.event5,
      title: 'Bearded Theory Spring Gathering',
      time: 'Thu, Oct 31, 9:00am',
      location: 'Tobacco Dock, London',
    },
  ]);


  const [promotion] = useState(PromotionData);
  const [tours] = useState(TourData);
  const [hotels] = useState(HotelData);
  const [heightHeader, setHeightHeader] = useState(Utils.heightHeader());
  const deltaY = new Animated.Value(0);

  /**
   * @description Show icon services on form searching
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @returns
   */

  


  const renderIconService = () => {
    return (
      <FlatList
        data={icons}
        numColumns={4}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              style={styles.itemService}
              activeOpacity={0.9}
              // onPress={() => {
              //   navigation.navigate(item.route);
              // }}
              >
              <View
                style={[styles.iconContent, {backgroundColor: colors.card}]}>
                <Icon name={item.icon} size={18} color={colors.altPrimaryL} solid />
              </View>
              <Text footnote grayColor numberOfLines={1}>
             {t(item.name)}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    );
  };

  const heightImageBanner = Utils.scaleWithPixel(140);
  const marginTopBanner = heightImageBanner - heightHeader;
  
  return (
    <View style={{flex: 1}}>
      <Animated.Image
        source={Images.gridlines}
        style={[
          styles.imageBackground,
          {
            height: deltaY.interpolate({
              inputRange: [
                0,
                Utils.scaleWithPixel(100),
                Utils.scaleWithPixel(100),
              ],
              outputRange: [heightImageBanner, heightHeader, 0],
            }),
          },
        ]}
      />
      <SafeAreaView style={{flex: 1}} forceInset={{top: 'always'}}>
        <ScrollView
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {y: deltaY},
              },
            },
          ])}
          onContentSizeChange={() => setHeightHeader(Utils.heightHeader())}
          scrollEventThrottle={8}>
          <View style={{paddingHorizontal: 20}}>
            <View
              style={[
                styles.searchForm,
                {
                  marginTop: marginTopBanner,
                  backgroundColor: colors.background,
                  borderColor: colors.border,
                  shadowColor: colors.border,
                },
              ]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Search')}
                activeOpacity={0.9}>
                <View
                  style={[BaseStyle.textInput, {backgroundColor: colors.card}]}>
                  <Text body1 grayColor>
                    {t('what_are_you_looking_for')}
                  </Text>
                </View>
              </TouchableOpacity>
              {renderIconService()}
            </View>
          </View>
          <View>
            <Text title3 semibold style={styles.titleView}>
              {t('recharge_now')}
            </Text>
            <FlatList
              contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={promotion}
              keyExtractor={(item, index) => item.product_id}
              renderItem={({ item, index }) => (
                  item.product_type === "Airtime" ?
                    <Card
                      style={[styles.promotionItem, { marginLeft: 15 }]}
                      image={item.image}
                      onPress={() => {
                        //navigation.navigate('Booking');
                        // let cartIterm = []
                        //     cartIterm.push(item)
                        //     cartIterm[0].qty = 1
                        //     cartIterm[0].cartkey = 1
                        //     console.log('cartIterm', cartIterm);
                          //dispatch(HomeActions.buyNow(item));
                      }}
                      
                    >
                      <Text subhead whiteColor>
                        {item.supplier_name}
                      </Text>
                      <Text title2 whiteColor semibold>
                        {item.title2}
                      </Text>
                      <View style={styles.contentCartPromotion}>
                        <Button
                          style={styles.btnPromotion}
                          onPress={() => {
                            let cartIterm = []
                            cartIterm.push(item)
                            cartIterm[0].qty = 1
                            cartIterm[0].cartkey = 1
                            dispatch(HomeActions.buyNow(cartIterm[0]));
                            navigation.navigate('Booking');
                          }}>
                          <Text body2 semibold whiteColor>
                            {t('book_now')}
                          </Text>
                        </Button>
                      </View>
                    </Card>
                    : null
              )}
            />
          </View>
          {/* Hiking */}
          <View style={styles.titleView}>
            <Text title3 semibold>
              {t('tours')}
            </Text>
            <Text body2 grayColor>
              {t('let_find_tour')}
            </Text>
          </View>
          <FlatList
            contentContainerStyle={{paddingLeft: 5, paddingRight: 20}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={tours}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => (
              <Card
                style={[styles.tourItem, {marginLeft: 15}]}
                image={item.image}
                //onPress={() => navigation.navigate('TourDetail')}
                >
                <Text headline whiteColor semibold>
                  {item.name}
                </Text>
              </Card>
            )}
          />
          {/* Event*/}
          {/* <View style={styles.titleView}>
            <Text title3 semibold>
              {t('comming_event')}
            </Text>
            <Text body2 grayColor>
              {t('let_find_event')}
            </Text>
          </View> */}
          {/* <View>
            <FlatList
              contentContainerStyle={{
                paddingRight: 20,
                paddingLeft: 5,
              }}
              horizontal={true}
              data={relate}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => item.id}
              renderItem={({item, index}) => (
                <EventCard
                  image={item.image}
                  title={item.title}
                  time={item.time}
                  location={item.location}
                  //onPress={() => navigation.navigate('EventDetail')}
                  style={{marginLeft: 15}}
                />
              )}
            />
          </View> */}
          {/* Promotion */}
          <View style={styles.titleView}>
            <Text title3 semibold>
              {t('promotion')}
            </Text>
            <Text body2 grayColor>
              {t('let_find_promotion')}
            </Text>
            <Image source={Images.talk360} style={styles.promotionBanner} />
            <View style={[styles.line, {backgroundColor: colors.border}]} />
          </View>
          <FlatList
            columnWrapperStyle={{paddingLeft: 5, paddingRight: 20}}
            numColumns={2}
            data={hotels}
            keyExtractor={(item, index) => item.id}
            renderItem={({item, index}) => (
              <HotelItem
                grid
                image={item.image}
                name={item.name}
                // location={item.location}
                price={item.price}
                available={item.available}
                // rate={item.rate}
                // rateStatus={item.rateStatus}
                // numReviews={item.numReviews}
                services={item.services}
                style={{marginLeft: 15, marginBottom: 15}}
                //onPress={() => navigation.navigate('HotelDetail')}
              />
            )}
          />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}
