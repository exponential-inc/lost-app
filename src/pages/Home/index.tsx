import React from 'react';
import {ScrollView, Text, Platform} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';

const HomePageC = (props: any) => {
  console.log(props.theme);
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
          <ViewShadow
            theme={props.theme}
            style={{marginTop: -20, borderRadius: 20, overflow: 'hidden'}}>
              {/* //FIXME: SHADOW NOT SHOWING */}
            <Layout
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                padding: 20,
                backgroundColor: '#E41C1C',
              }}>
              <Text
                style={{
                  ...themeFont.smallTitleE,
                  color: themeColor.lightText,
                  marginBottom: 10,
                }}>
                Add a user to track
              </Text>
              <Text
                style={{
                  ...themeFont.body,
                  color: themeColor.lightText,
                  width: 250,
                  marginBottom: 20,
                }}>
                Add a user with dementia to keep track of them so that they
                would never get lost again!
              </Text>
              <TextButton
                theme={props.theme}
                onPress={() =>
                  props.navigation.navigate('Settings', {screen: 'People'})
                }>
                Add Now
              </TextButton>
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
