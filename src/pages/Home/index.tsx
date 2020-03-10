import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

const HomePageC = () => {
  return (
    <View></View>
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

export const HomePage = connect(mapStateToProps, mapDispatchToProps)(HomePageC);