import React, {ReactNode} from 'react';
import {Text, View, ScrollView} from 'react-native';
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

const SettingsPageC = (props: any, {navigation}) => {
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light;

  const list1 = [
    {
      title: 'Change Theme',
      onPress: () => {props.navigation.navigate('Theme')},
    },
    {
      title: 'Privacy',
      onPress: () => {
        props.toggleSettingsModal(true, ['Privacy', <Text>Hi</Text>]);
      },
    },
  ];

  const list2 = [
    {
      title: 'About',
      onPress: () => {
        props.toggleSettingsModal(true, [
          'About',
          <View>
            <Text style={{color: themeColor.primaryText}}>
              We are a team of developers based in Singapore aiming to help the
              community through what we do best.
            </Text>
          </View>,
        ]);
      },
    },
    {
      title: 'Tell A Friend',
      onPress: () => {
        props.toggleSettingsModal(true, ['Share', <Text>Hi</Text>]);
      },
    },
    {
      title: 'Report A Bug',
      onPress: () => {
        props.toggleSettingsModal(true, ['Bug Report', <Text>Hi</Text>]);
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
        <PageHeader title="Settings" theme={props.theme} />
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
            style={{height: 150, marginTop: 20, marginBottom: 20}}>
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
            title={props.settingsModalContent?.[0] ?? 'Blank'}
            style={{backgroundColor: themeColor.secondaryBG, borderBottomColor: themeColor.primaryBG}}
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
          <View style={{height: '100%', backgroundColor: themeColor.primaryBG, paddingHorizontal: 20, paddingTop: 15}}>
            {props.settingsModalContent?.[1] ?? (
              <Text style={{color: themeColor.primaryText}}>
                If you expected content here, an error might have occured.
                Please submit a bug report. Thanks!
              </Text>
            )}
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
