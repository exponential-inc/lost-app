import React from 'react';
import {ViewStyle, View, Text, Platform, ListRenderItem} from 'react-native';

import {TouchableShadow} from '../../Shadow/Touchable';
import {K} from '../../../store/constants';
import {ViewShadow} from '../../Shadow/View';
import {List, ListItem, Layout} from '@ui-kitten/components';

export const ContentCard = (props: {
  theme: string;
  data: ReadonlyArray<any> | null | undefined;
  style?: ViewStyle;
  firstInPage?: boolean;
  renderItem?({item, index}): JSX.Element;
  backgroundColor?: string;
  gradient: boolean;
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
      <Layout style={{overflow: 'hidden', borderRadius: 20, height: 100, padding: 8, backgroundColor: props.backgroundColor}}>
        <Text>{props.data}</Text>
      </Layout>
    </ViewShadow>
  );
};
