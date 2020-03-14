import React from 'react';
import {Layout, Text, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {PageList} from '../../components/Page/PageList';
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

  const renderItem = ({item, index}) => (
    <ListItem
      title={`${item.title}`}
      onPress={item.onPress}
      style={{height: 50}}
    />
  );
  return (
    <Layout style={{height: '100%'}}>
      <PageList title={"Settings"} theme={props.theme}>
        <ViewShadow theme={props.theme} style={{height: 100}}>
          <List
            data={list1}
            renderItem={renderItem}
            scrollEnabled={false}
            style={{borderRadius: 20}}
          />
        </ViewShadow>
        <ViewShadow theme={props.theme} style={{height: 150, marginTop: 20}}>
          <List
            data={list2}
            renderItem={renderItem}
            scrollEnabled={false}
            style={{borderRadius: 20}}
          />
        </ViewShadow>
      </PageList>
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
