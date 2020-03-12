import React from 'react';
import {Layout, Text, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {SafeAreaView} from 'react-native';

import {PageHeader} from '../../components/Page/PageHeader';

const SettingsPageC = (props: any) => {
  const data = [
    {
      title: 'Toggle theme',
      onPress: () => {
        props.toggleTheme();
      },
    },
  ];

  const renderItem = ({item, index}) => (
    <ListItem title={`${item.title}`} onPress={item.onPress} />
  );
  return (
    <Layout style={{height: '100%'}}>
      <PageHeader title="Settings" theme={props.theme} />
      <List data={data} renderItem={renderItem}>
        <Text>Hello</Text>
      </List>
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
