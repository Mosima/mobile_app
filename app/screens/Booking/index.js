import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { FlatList, RefreshControl, View, TouchableOpacity } from 'react-native';
import { BaseStyle, useTheme, BaseColor } from '@config';
import { Header, SafeAreaView, BookingHistory } from '@components';
import { BookingHistoryData } from '@data';
import { useTranslation } from 'react-i18next';
import { Text, Icon,} from '@components';
import {HomeActions} from '@actions';
import styles from './styles';

export default function Booking({ navigation }) {
  const cart = useSelector(state => state.home.cart);
  const dispatch = useDispatch()
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [refreshing] = useState(false);
  const [bookingHistory] = useState(BookingHistoryData);

  // const fetchCart = () => dispatch(HomeActions.getCart());


  // useEffect(() => {
  //   fetchCart();
  // }, []);

  const renderItem = item => {

    return (
      
      <BookingHistory
        key={item.product_id}
        name={`${item.supplier_name} ${item.product_type}`}
        checkIn={item.price}
        checkOut={item.price}
        total={item.newPrice? item.newPrice: item.price}
        price={item.price}
        style={{ paddingVertical: 10, marginHorizontal: 20 }}
        qty={item.qty}
        image={item.image}
        product_id={item.product_id}
      // onPress={() => {
      //   navigation.navigate('BookingDetail');
      // }}
      />
    );
  };

  /**
   * @description Loading booking item history one by one
   * @author Passion UI <passionui.com>
   * @date 2019-08-03
   * @returns
   */
  return (
    <SafeAreaView style={BaseStyle.safeAreaView} forceInset={{ top: 'always' }}>
      <Header title={t('booking_history')} />
      <FlatList
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={() => { }}
          />
        }
        data={cart?cart.filter(x => x.product_discription !== ""):[]}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />
      <View style={styles.iconRight}>
        <TouchableOpacity onPress={() => setValue('up', 'adult')}>
          <Icon name="plus-circle" size={70} color={colors.altPrimaryL} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
