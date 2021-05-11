import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList, RefreshControl, View, TouchableOpacity } from 'react-native';
import { BaseStyle, useTheme, BaseColor } from '@config';
import { Header, SafeAreaView, BookingHistory } from '@components';
import { BookingHistoryData } from '@data';
import { useTranslation } from 'react-i18next';
import { Text, Icon, } from '@components';
import styles from './styles';
import Modal from 'react-native-modal';

export default function Booking({ navigation }) {
  const state = useSelector(state => state);
  const cart = state.home.cart
  const { t } = useTranslation();
  const { colors } = useTheme();

  const [refreshing] = useState(false);
  const [bookingHistory] = useState(BookingHistoryData);
  const [modalVisible, setModalVisible] = useState(false)

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
                  {t('save')}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lineRow}>
              <View>
                <Text body1>{t('adults')}</Text>
                <Text caption1 grayColor>
                  16+ {t('years')}
                </Text>
              </View>
              <View style={styles.iconRight}>
                <TouchableOpacity onPress={() => setValue('down', 'adult')}>
                  <Icon
                    name="minus-circle"
                    size={24}
                    color={BaseColor.grayColor}
                  />
                </TouchableOpacity>
                <Text title1>adult</Text>
                <TouchableOpacity onPress={() => setValue('up', 'adult')}>
                  <Icon name="plus-circle" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.lineRow}>
              <View>
                <Text body1>{t('children')}</Text>
                <Text caption1 grayColor>
                  2-11 {t('years')}
                </Text>
              </View>
              <View style={styles.iconRight}>
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
              </View>
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
                  {t('save')}
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


  const renderItem = item => {

    return (
      <View>
        <BookingHistory
          key={item.product_id}
          name={`${item.supplier_name} ${item.product_type}`}
          checkIn={item.price}
          checkOut={item.price}
          total={item.newPrice ? item.newPrice : item.price}
          price={item.price}
          style={{ paddingVertical: 10, marginHorizontal: 20 }}
          qty={item.qty}
          image={item.image}
          product_id={item.product_id}
        // onPress={() => {
        //   navigation.navigate('BookingDetail');
        // }}
        />
        <View style={styles.iconRight}>
          <TouchableOpacity onPress={() => openModal(true)}>
            <Icon name="plus-circle" size={40} color={colors.altPrimaryL} />
          </TouchableOpacity>
        </View>
        {renderModal()}
      </View>
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
        data={cart ? cart.filter(x => x.product_discription !== "") : []}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => renderItem(item)}
      />

      <View style={styles.checkout}>
        <TouchableOpacity style={{color: '#fff'}} onPress={() => setModalVisible(true)}>
          {/* <Icon name="plus-circle" title="add" size={40} color={colors.altPrimaryL} /> */}
          <Text style={{color: '#fff'}}>Checkout R180</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
