import React from 'react';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';

import {PageHeader} from '../../components/Page/PageHeader';
import {TouchableShadow} from '../../components/Shadow/Touchable';

const HomePageC = (props: any) => {
  return (
    <Layout style={{height: '100%'}}>
      <PageHeader theme={props.theme} title="Home" />
      <TouchableShadow theme={props.theme}>
        <Layout style={{marginHorizontal: 15}}>
          <Text>Hello</Text>
        </Layout>
      </TouchableShadow>
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
