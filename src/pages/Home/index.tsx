import React from 'react';
import {ScrollView, Text} from 'react-native';
import {connect} from 'react-redux';
import {Layout} from '@ui-kitten/components';
import {iOSUIKit} from 'react-native-typography';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {TextButton} from '../../components/Button/Text';

const HomePageC = (props: any) => {
  console.log(props.theme)
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;
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
          <ViewShadow theme={props.theme} style={{marginTop: -20}}>
            <Layout
              style={{
                overflow: 'hidden',
                borderRadius: 20,
                padding: 20,
                backgroundColor: '#E41C1C',
              }}>
              <Text
                style={{
                  ...iOSUIKit.title3EmphasizedObject,
                  color: themeColor.lightText,
                  marginBottom: 10,
                }}>
                Add a user to track
              </Text>
              <Text
                style={{
                  ...iOSUIKit.bodyObject,
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
