import React from 'react';
import {ScrollView} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';

import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';

const HomePageC = (props: any) => {
  return (
    <Layout style={{height: '100%'}}>
      <ScrollView>
        <PageHeader title="Home" theme={props.theme} type='large' />
        <Layout style={{marginHorizontal: 20}}>
          <ViewShadow theme={props.theme} style={{marginTop: -20}}>
            <Layout style={{overflow: 'hidden', borderRadius: 20}}>
              <Text>Home</Text>
            </Layout>
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
  return {};
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);
