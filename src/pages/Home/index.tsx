import React from 'react';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {phonecall} from 'react-native-communications';

import {PageHeader} from '../../components/Page/PageHeader';
import {PageList} from '../../components/Page/PageList';
import {ViewShadow} from '../../components/Shadow/View';

const HomePageC = (props: any) => {
  return (
    <Layout style={{height: '100%'}}>
      <PageHeader title="Home" theme={props.theme} />
      <Layout style={{marginHorizontal: 20}}>
        <ViewShadow theme={props.theme} style={{marginTop: -20}}>
          <Layout style={{overflow: 'hidden', borderRadius: 20}}>
            <Text>Home</Text>
          </Layout>
        </ViewShadow>
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
  return {};
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);
