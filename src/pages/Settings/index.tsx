import React, {ReactNode} from 'react';
import {Text, View, ScrollView, Image, Linking} from 'react-native';
import {Layout, List, ListItem} from '@ui-kitten/components';
import {connect} from 'react-redux';
import Modal, {
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from 'react-native-modals';
import {iOSUIKit} from 'react-native-typography';

import {K} from '../../store/constants';
import {PageHeader} from '../../components/Page/PageHeader';
import {ViewShadow} from '../../components/Shadow/View';

const SettingsPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;

  const list1 = [
    {
      title: 'Change Theme',
      onPress: () => {
        props.navigation.navigate('Theme');
      },
    },
    {
      title: 'Privacy',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Privacy Notice',
          <Text style={{color: themeColor.primaryText}}>Privacy</Text>,
        ]);
      },
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
                  ...iOSUIKit.subheadEmphasizedObject,
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
                  ...iOSUIKit.subheadEmphasizedObject,
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
                  ...iOSUIKit.subheadObject,
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
              onTouchStart={() => {
                  Linking.canOpenURL('https://www.ryanthe.com').then(
                    supported => {
                      if (supported) {
                        Linking.openURL('https://www.ryanthe.com');
                      } else {
                        console.log("Error: Can't open URL");
                      }
                    },
                  );
                }}>
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
    },
    {
      title: 'Tell A Friend',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Share',
          <Text style={{color: themeColor.primaryText}}>Share</Text>,
        ]);
      },
    },
    {
      title: 'Report A Bug',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'Bug Report',
          <Text style={{color: themeColor.primaryText}}>Report</Text>,
        ]);
      },
    },
    {
      title: 'Leave A Review',
      onPress: () => {
        Linking.canOpenURL('https://www.ryanthe.com').then(supported => {
          if (supported) {
            Linking.openURL('https://www.ryanthe.com');
          } else {
            console.log("Error: Can't open URL");
          }
        });
      },
    },
  ];

  const renderItem = ({item, index}) => {
    return (
      <ListItem
        title={`${item.title}`}
        onPress={item.onPress}
        style={{height: 50}}
      />
    );
  };

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
          <ViewShadow theme={props.theme} style={{height: 100, marginTop: -20}}>
            <List
              data={list1}
              renderItem={renderItem}
              scrollEnabled={false}
              style={{borderRadius: 20, overflow: 'hidden'}}
            />
          </ViewShadow>
          <ViewShadow
            theme={props.theme}
            style={{height: 200, marginTop: 20, marginBottom: 20}}>
            <List
              data={list2}
              renderItem={renderItem}
              scrollEnabled={false}
              style={{overflow: 'hidden', borderRadius: 20}}
            />
          </ViewShadow>
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
