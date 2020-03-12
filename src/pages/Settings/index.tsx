import React from 'react';
import { Layout, Text, List, ListItem } from '@ui-kitten/components';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-native';

const data = ['Theme', 'Password']
const SettingsPageC = () => {
  const renderItem = ({ item, index }) => (
    <ListItem title={`${item} ${index + 1}`}/>
  );
  return (
    <Layout style={{height: '100%'}}>
      <List data={data} renderItem={renderItem}>
        <Text>Hello</Text>
      </List>
    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  console.log(state.theme);
  return {
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export const SettingsPage = connect(mapStateToProps, mapDispatchToProps)(SettingsPageC);