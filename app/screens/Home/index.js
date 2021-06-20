import React, {useState, useEffect} from 'react';
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
import {BaseStyle, Images, useTheme, BaseColor} from '@config';

import * as Utils from '@utils';
import Modal from 'react-native-modal';


import styles from './styles';
import {PromotionData, TourData, HotelData} from '@data';
import {HomeActions} from '@actions';

import {useTranslation} from 'react-i18next';

export default function Home({navigation}) {
  const cart = useSelector(state => state.home.cart);
  const state = useSelector(state => state);

  const cartCount = state.home.cartCount
  const cartTotal = state.home.cartTotal
  const [cs, setCs] = useState([]);


  // const fetchCart = () => dispatch(HomeActions.getCart());


  useEffect(() => {
    setCs(cart)
    console.log("cart", cart);
  }, []);
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

  const [modalVisible, setModalVisible] = useState(false)


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

   const openModal = (modal) => {
    setModalVisible(modal);
  };

  const renderModal = () => {
    return (
      <View>
        <Modal
          isVisible={modalVisible}
          onSwipeComplete={() => openModal(false)}
          swipeDirection={['down']}
          style={styles.bottomModal}>
          <View
            style={[
              styles.contentFilterBottom,
              { backgroundColor: colors.card },
            ]}>
            <View style={styles.contentSwipeDown}>
              <View style={styles.lineSwipeDown} />
            </View>
            <View
              style={[
                styles.contentActionModalBottom,
                { borderBottomColor: colors.border },
              ]}>
              <TouchableOpacity onPress={() => openModal(false)}>
                <Text body1>{t('cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openModal(false)}>
                <Text body1 primaryColor>
                  {/* {t('save')} */}
                  Add to cart
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lineRow}>
              <View>
                <Text body1>Recharge type</Text>
                {/* <Text caption1 grayColor>
                  items {cartCount}
                </Text> */}
              </View>
              <View style={styles.iconRight}>
               
  
                <Text title1>R{cartTotal}</Text>
               
              </View>
            </View>
            <View style={styles.lineRow}>
              <View>
                <Text body1>Total</Text>
                <Text caption1 grayColor>
                  items {cartCount}
                </Text>
              </View>
              <View style={styles.iconRight}>
               
  
                <Text title1>R{cartTotal}</Text>
               
              </View>
            </View>
            <View style={styles.lineRow}>
              {/* <View>
                <Text body1>{t('children')}</Text>
                <Text caption1 grayColor>
                  2-11 {t('years')}
                </Text>
              </View> */}
              {/* <View style={styles.iconRight}>
                <TouchableOpacity onPress={() => setValue('down', 'children')}>
                  <Icon
                    name="minus-circle"
                    size={24}
                    color={BaseColor.grayColor}
                  />
                </TouchableOpacity>
                <Text title1>children</Text>
                <TouchableOpacity onPress={() => setValue('up', 'children')}>
                  <Icon name="plus-circle" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View> */}
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modalVisible === 'duration'}
          onSwipeComplete={() => openModal(false)}
          swipeDirection={['down']}
          style={styles.bottomModal}>
          <View
            style={[
              styles.contentFilterBottom,
              { backgroundColor: colors.card },
            ]}>
            <View style={styles.contentSwipeDown}>
              <View style={styles.lineSwipeDown} />
            </View>
            <View
              style={[
                styles.contentActionModalBottom,
                { borderBottomColor: colors.border },
              ]}>
              <TouchableOpacity onPress={() => openModal(false)}>
                <Text body1>{t('cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openModal(false)}>
                <Text body1 primaryColor>
                  {/* {t('save')} */}
                  Checkout
                </Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.lineRow, { marginBottom: 40 }]}>
              <View>
                <Text body1>{t('duration')}</Text>
                <Text caption1 grayColor>
                  {t('night')}
                </Text>
              </View>
              <View style={styles.iconRight}>
                <TouchableOpacity onPress={() => setValue('down', 'night')}>
                  <Icon
                    name="minus-circle"
                    size={24}
                    color={BaseColor.grayColor}
                  />
                </TouchableOpacity>
                <Text title1>night</Text>
                <TouchableOpacity onPress={() => setValue('up', 'night')}>
                  <Icon name="plus-circle" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
        </Modal>
      </View>
    );
  };



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
                        setModalVisible(true)
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
                            //check functionality again
                            // let cartIterm = []
                            // cartIterm.push(item)
                            // cartIterm[0].qty = 1
                            // cartIterm[0].cartkey = 1
                            
                            //dispatch(HomeActions.buyNow(cartIterm[0]));
                            //navigation.navigate('Booking');
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
        {renderModal()}
      </SafeAreaView>
    </View>
  );
}
