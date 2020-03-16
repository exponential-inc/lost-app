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
      <PageList title="Home" theme={props.theme}>
        <ViewShadow theme={props.theme} style={{height: 100, backgroundColor: "#E41C1C", borderRadius: 20 }}>
          <Layout style={{backgroundColor: 'transparent'}}>
            <Text onPress={() => {
              console.log('call')
              return phonecall('+6590022610', true)
            }}>Hello</Text>
          </Layout>
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
  return {};
};

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);
