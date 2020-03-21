import React from 'react';
import {View} from 'react-native';
import {Layout, List, ListItem, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {ListCard} from '../../components/Card/List';

const SettingsPeoplePageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  const list = [
    {
      title: 'No People :(',
      onPress: () => {},
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
        title="People"
        theme={props.theme}
        type="small"
        navigation={props.navigation}
        leadingButton="arrow-left"
        onLeadingButtonPress={() => props.navigation.navigate('Settings')}
        actionButton="plus"
        onActionButtonPress={null}
      />
      {/* //TODO: ACTION BUTTON PRESS^^ */}
      <Layout style={{marginHorizontal: 20}}>
        <ListCard theme={props.theme} data={list} firstInPage />
      </Layout>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
    setThemeMode: setTo => dispatch({type: 'SET_THEME_MODE', setTo: setTo}),
  };
};

export const SettingsPeoplePage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPeoplePageC);
