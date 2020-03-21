import React from 'react';
import {ViewStyle, View, Text, Platform, ListRenderItem} from 'react-native';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';
import {ViewShadow} from '../../Shadow/View';
import {List, ListItem} from '@ui-kitten/components';

export const ListCard = (props: {
  theme: string;
  data: ReadonlyArray<any> | null | undefined;
  style?: ViewStyle;
  firstInPage?: boolean;
}) => {
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.title}`}
        onPress={item.onPress}
        style={{height: 50}}
        titleStyle={{...themeFont.subhead, color: themeColor.primaryText}}
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
          ios: {

          },
          android: {
            overflow: 'hidden',
          }
        })
      }}>
      <List
        data={props.data}
        renderItem={renderItem}
        scrollEnabled={false}
        style={{overflow: 'hidden', borderRadius: 20}}
      />
    </ViewShadow>
  );
};
