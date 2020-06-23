import React from 'react';
import {Text, View, ScrollView, Image, Linking, Platform} from 'react-native';
import {Layout, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';
import Modal, {
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';
import {ListCard} from '../../components/Card/List';

const SettingsPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;
  const themeFont = Platform.OS === 'ios' ? K.fonts.ios : K.fonts.android;

  const list1 = [
    {
      title: 'People',
      onPress: () => {
        props.navigation.navigate('People');
      },
      icon: 'account-multiple',
      iconColor: themeColor.blue
    },
    {
      title: 'Theme',
      onPress: () => {
        props.navigation.navigate('Theme');
      },
      icon: 'invert-colors',
      iconColor: themeColor.green
    },
    {
      title: 'Privacy',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Privacy Notice',
          <View>
            <Text style={{color: themeColor.primaryText, marginBottom: 20}}>
              We do not keep any information about you or your location.
              However, as we are using a free service by Google, it may be
              collecting data about you if you have location sharing turned on.
            </Text>
            <Text
              style={{color: themeColor.secondaryText}}
              onPress={() => {
                Linking.openURL(
                  'https://firebase.google.com/terms/data-processing-terms',
                );
              }}>
              Learn More
            </Text>
          </View>,
        ]);
      },
      icon: 'lock',
      iconColor: themeColor.indigo
    },
  ];
  const list2 = [
    {
      title: 'About',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'About',
          <View style={{height: '100%', justifyContent: 'space-between'}}>
            <View>
              <Text
                style={{
                  ...themeFont.subheadE,
                  color: themeColor.secondaryText,
                  letterSpacing: 2,
                  marginTop: 10,
                  marginBottom: 5,
                }}>
                US
              </Text>
              <Text style={{color: themeColor.primaryText}}>
                We are a team of developers based in Singapore, aiming to help
                the community through what we do best, and Elliot.
              </Text>
              <Text
                style={{
                  ...themeFont.subheadE,
                  color: themeColor.secondaryText,
                  letterSpacing: 2,
                  marginTop: 15,
                  marginBottom: 5,
                }}>
                APP
              </Text>
              <Text style={{color: themeColor.primaryText}}>
                This application was made for our school project, Project SF,
                for people who have dementia.
              </Text>
            </View>
            <View style={{marginBottom: 50}}>
              <Text
                style={{
                  ...themeFont.subhead,
                  color: themeColor.primaryText,
                  marginBottom: -5,
                  marginTop: 20,
                  textAlign: 'center',
                  width: '100%',
                }}>
                Made with ♡, {`\n`}
                Exponential Inc.
              </Text>
              <View
                onTouchStart={() => Linking.openURL('https://www.ryanthe.com')}>
                <Image
                  style={{
                    width: 40,
                    height: 40,
                    marginVertical: 20,
                    alignSelf: 'center',
                  }}
                  source={
                    props.theme === 'dark'
                      ? require('../../../assets/images/company-icon-dark.png')
                      : require('../../../assets/images/company-icon-light.png')
                  }
                />
              </View>
            </View>
          </View>,
        ]);
      },
      icon: 'information',
      iconColor: themeColor.yellow
    },
    {
      title: 'Tell A Friend',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Share',
          <Text style={{color: themeColor.primaryText}}>Share</Text>,
        ]);
      },
      icon: 'share',
      iconColor: themeColor.teal
    },
    {
      title: 'Report A Bug',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Bug Report',
          <Text style={{color: themeColor.primaryText}}>Report</Text>,
        ]);
      },
      icon: 'bug',
      iconColor: themeColor.red
    },
    {
      title: 'Leave A Review',
      onPress: () => Linking.openURL('https://www.ryanthe.com'),
    },
    {
    title: 'Login',
    onPress: () => {props.navigation.navigate('ManageAccount')},
    }
  ];

  return (
    <Layout style={{height: '100%', flex: 1}}>
      <ScrollView>
        <PageHeader
          title="Settings"
          theme={props.theme}
          type="large"
          navigation={props.navigation}
        />
        <Layout style={{marginHorizontal: 20}}>
          <ListCard theme={props.theme} data={list1} firstInPage/>
          <ListCard theme={props.theme} data={list2} />
        </Layout>
      </ScrollView>

      <Modal
        modalAnimation={
          new SlideAnimation({
            slideFrom: 'bottom',
          })
        }
        modalTitle={
          <ModalTitle
            title={props.settingsModalContent?.[0] ?? ''}
            style={{
              backgroundColor: themeColor.secondaryBG,
              borderBottomColor: themeColor.primaryBG,
            }}
            textStyle={{color: themeColor.primaryText}}
          />
        }
        width={0.9}
        height={0.6}
        visible={props.settingsModalIsOpen}
        swipeDirection={'down'}
        swipeThreshold={200}
        onSwipeOut={() => {
          props.toggleSettingsModal(false);
        }}
        onTouchOutside={() => {
          props.toggleSettingsModal(false);
        }}
        onHardwareBackPress={() => {
          props.toggleSettingsModal(false);
        }}>
        <ModalContent style={{paddingHorizontal: 0}}>
          <View
            style={{
              height: '100%',
              backgroundColor: themeColor.primaryBG,
              paddingHorizontal: 20,
              paddingTop: 15,
            }}>
            {props.settingsModalContent?.[1] ?? null}
          </View>
        </ModalContent>
      </Modal>
    </Layout>
  );
};

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
    settingsModalIsOpen: state.settingsModalIsOpen,
    settingsModalContent: state.settingsModalContent,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    toggleTheme: () => dispatch({type: 'TOGGLE_THEME'}),
    toggleSettingsModal: (
      setTo: boolean,
      content?: [string, React.ReactNode],
    ) =>
      dispatch({type: 'TOGGLE_SETTINGS_MODAL', setTo: setTo, content: content}),
  };
};

export const SettingsPage = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsPageC);
