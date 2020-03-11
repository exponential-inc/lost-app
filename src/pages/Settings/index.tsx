import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const SettingsPageC = () => {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}

const mapStateToProps = (state: Object) => {
  return {

  }
}

const mapDispatchToProps = (dispatch: Object) => {
  return {

  }
}

export const SettingsPage = connect(mapStateToProps, mapDispatchToProps)(SettingsPageC);