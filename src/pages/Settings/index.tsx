import React from 'react';
import {ScrollView} from 'react-native';
import {Layout, Text, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';

const SettingsPageC = (props: any) => {
  const list1 = [
    {
      title: 'Toggle theme',
      onPress: () => {
        props.toggleTheme();
      },
    },
    {
      title: 'Privacy',
      onPress: () => {},
    },
  ];

  const list2 = [
    {
      title: 'About',
      onPress: () => {},
    },
    {
      title: 'Tell A Friend',
      onPress: () => {},
    },
    {
      title: 'Report A Bug',
      onPress: () => {},
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.title}`}
        onPress={item.onPress}
        style={{height: 50}}
      />
    );
  };

  return (
    <Layout style={{height: '100%', flex: 1}}>
      <ScrollView>
        <PageHeader title="Settings" theme={props.theme} />
        <Layout style={{marginHorizontal: 20}}>
          <ViewShadow theme={props.theme} style={{height: 100, marginTop: -20}}>
            <List
              data={list1}
              renderItem={renderItem}
              scrollEnabled={false}
              style={{borderRadius: 20, overflow: 'hidden'}}
            />
          </ViewShadow>
          <ViewShadow theme={props.theme} style={{height: 150, marginTop: 20, marginBottom: 20}}>
            <List
              data={list2}
              renderItem={renderItem}
              scrollEnabled={false}
              style={{overflow: 'hidden', borderRadius: 20}}
            />
          </ViewShadow>
        </Layout>
      </ScrollView>
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
  };
};

export const SettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPageC);
