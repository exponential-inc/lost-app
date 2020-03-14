import React from 'react';
import {Layout, Text, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';

import {ViewShadow} from '../../components/Shadow/View';
import {PageHeader} from '../../components/Page/PageHeader';

const SettingsPageC = (props: any) => {
  const data = [
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

  const renderItem = ({item, index}) => (
    <ListItem title={`${item.title}`} onPress={item.onPress} style={{height: 50}} />
  );
  return (
    <Layout style={{height: '100%'}}>
      <PageHeader title="Settings" theme={props.theme} />
      <Layout
        style={{marginHorizontal: 20, height: '100%', position: 'relative'}}>
        <Layout
          style={{
            position: 'absolute',
            height: '100%',
            left: 0,
            right: 0,
            top: -10,
            borderRadius: 20
          }}>
            
          <ViewShadow
            theme={props.theme}
            style={{height: 100}}>
            <List data={data} renderItem={renderItem} scrollEnabled={false} style={{borderRadius: 20}}/>
          </ViewShadow>
        </Layout>
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
  };
};

export const SettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPageC);
