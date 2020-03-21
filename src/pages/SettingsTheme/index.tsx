import React from 'react';
import {View, Platform} from 'react-native';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {ListCard} from '../../components/Card/List';

const SettingsThemePageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;

  const list = [
    {
      title: 'Automatic',
      onPress: () => {
        props.setThemeMode('auto');
      },
      selected: props.themeMode === 'auto',
    },
    {
      title: 'Dark',
      onPress: () => {
        props.setThemeMode('dark');
      },
      selected: props.themeMode === 'dark',
    },
    {
      title: 'Light',
      onPress: () => {
        props.setThemeMode('light');
      },
      selected: props.themeMode === 'light',
    },
  ];

  const renderItem = ({item, index}) => {
    let selectedStyle;
    if (item.selected) {
      selectedStyle = {backgroundColor: themeColor.secondaryBG};
    }
    return (
      <ListItem
        title={`${item.title}`}
        onPress={item.onPress}
        style={{height: 50, ...selectedStyle}}
        titleStyle={{...themeFont.subhead, color: themeColor.primaryText, marginLeft: 10}}
        icon={() =>
          item.selected ? (
            <Icon
              name={'check'}
              size={20}
              color={themeColor.contrast}
              style={{position: 'absolute', right: 10, top: 15}}
            />
          ) : (
            <View
              style={{width: 0, marginHorizontal: 0, paddingHorizontal: 0}}
            />
          )
        }
      />
    );
  };

  return (
    <Layout style={{height: '100%', flex: 1}}>
      <PageHeader
        title="Theme"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Settings')}
      />
      <Layout style={{marginHorizontal: 20}}>
        <ListCard theme={props.theme} data={list} firstInPage renderItem={renderItem} />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    themeMode: state.themeMode,
    themeNative: state.themeNative,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
    setThemeMode: setTo => dispatch({type: 'SET_THEME_MODE', setTo: setTo}),
  };
};

export const SettingsThemePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsThemePageC);
