import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Icon,Image} from '@components';
import PropTypes from 'prop-types';
import styles from './styles';
import { useTheme, BaseColor } from '@config';
import { useTranslation } from 'react-i18next';
import Modal from 'react-native-modal';

export default function BookingHistory(props) {
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { style, name, checkIn, checkOut, price, total, onPress, image, qty } = props;

  const [modalVisible, setModalVisible] = useState(false)
  const [itemValue, setitemValue] = useState(
    
  )

  const openModal = (modal) => {
    setModalVisible(modal);
  };
  
  const renderModal = () => {
    return (
      <View>
        <Modal
          isVisible={modalVisible === 'quest'}
          onSwipeComplete={() => setModalVisible(false)}
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
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text body1>{t('cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
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
                <Text title1>{adult}</Text>
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
                <Text title1>{children}</Text>
                <TouchableOpacity onPress={() => setValue('up', 'children')}>
                  <Icon name="plus-circle" size={24} color={colors.primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          isVisible={modalVisible === 'duration'}
          onSwipeComplete={() => setModalVisible(false)}
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
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <Text body1>{t('cancel')}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
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
                <Text title1>{night}</Text>
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


  return (
    <TouchableOpacity
      style={[styles.contain, { shadowColor: colors.border }, style]}
      onPress={onPress}
      activeOpacity={0.9}>
      <View
        style={[
          styles.nameContent,
          {
            borderBottomColor: colors.card,
            backgroundColor: colors.primaryLight,
          },
        ]}>
        <Text body2 whiteColor semibold>
          {name}
        </Text>
      </View>
      <View
        style={[styles.mainContent, { backgroundColor: colors.primaryLight }]}>
        <View style={{ flex: 1, alignItems: 'flex-start' }}>
        <Image source={image} style={styles.blockImage} />
        <TouchableOpacity onPress={onPress} activeOpacity={0.9}>

        </TouchableOpacity>
      
        </View>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text caption2 whiteColor>
            {/* {t('check_in')} */}
            {qty}
          </Text>
          <Text body1 whiteColor semibold>
            {checkIn}
          </Text>
        </View>
      </View>
      <View style={[styles.validContent, { backgroundColor: colors.card }]}>
      <TouchableOpacity /*onPress={() => setValue('up', 'adult')}*/>
          <Icon name="plus-circle" size={24} color={colors.primary} />
        </TouchableOpacity>

        <TouchableOpacity /*onPress={() => setValue('down', 'adult')}*/ >
          <Icon
            name="minus-circle"
            size={24}
            color={BaseColor.grayColor}
          />
        </TouchableOpacity>

        <Text  semibold>
          {total}
        </Text>
        <Text overline semibold>
          {price}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

BookingHistory.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  name: PropTypes.string,
  checkIn: PropTypes.string,
  checkOut: PropTypes.string,
  total: PropTypes.string,
  price: PropTypes.string,
  onPress: PropTypes.func,
};

BookingHistory.defaultProps = {
  style: {},
  name: '',
  checkIn: '',
  checkOut: '',
  total: '',
  price: '',
  onPress: () => { },
};
