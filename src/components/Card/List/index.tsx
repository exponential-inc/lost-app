import React from 'react';
import {ViewStyle, View, Text, Platform, ListRenderItem} from 'react-native';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';
import {ViewShadow} from '../../Shadow/View';
import {List, ListItem} from '@ui-kitten/components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Size } from '@ui-kitten/components/ui/measure/type';

export const ListCard = (props: {
  theme: string;
  data: ReadonlyArray<any> | null | undefined;
  style?: ViewStyle;
  firstInPage?: boolean;
  renderItem?({item, index}): JSX.Element;
}) => {
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.title}`}
        onPress={item.onPress}
        style={{height: 50}}
        titleStyle={{
          ...themeFont.subhead,
          color: themeColor.primaryText,
          marginLeft: 10,
        }}
        icon={
          item.icon !== undefined
            ? () => (
                <View
                  style={{
                    height: 35,
                    width: 35,
                    backgroundColor: item.iconColor,
                    borderRadius: 5,
                  }}>
                  <View
                    style={{alignItems: 'center'}}>
                    <Icon
                      name={item.icon}
                      size={25}
                      style={{color: themeColor.white, marginTop: 4}}
                    />
                  </View>
                </View>
              )
            : null
        }
      />
    );
  };

  return (
    <ViewShadow
      theme={props.theme}
      style={{
        height: props.data.length * 50,
        marginTop: props.firstInPage ? -20 : 0,
        marginBottom: 20,
        borderRadius: 20,
        ...Platform.select({
          ios: {},
          android: {
            overflow: 'hidden',
          },
        }),
      }}>
      <List
        data={props.data}
        renderItem={props.renderItem ?? renderItem}
        scrollEnabled={false}
        style={{overflow: 'hidden', borderRadius: 20}}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 0.5,
              borderBottomColor: 'transparent',
              backgroundColor: `${themeColor.contrast}33`,
              marginLeft: 50,
            }}
          />
        )}
      />
    </ViewShadow>
  );
};
