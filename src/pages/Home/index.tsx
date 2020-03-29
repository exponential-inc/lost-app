import React from 'react';
import {ScrollView, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';
import {ContentCard} from '../../components/Card/Content';

const HomePageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;

  return (
    <Layout style={{height: '100%'}}>
      <ScrollView>
        <PageHeader
          title="Home"
          theme={props.theme}
          type="large"
          navigation={props.navigation}
        />
        <Layout style={{marginHorizontal: 20}}>
          <ContentCard theme={props.theme} data={['hello']} backgroundColor={themeColor.red} firstInPage/>
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
