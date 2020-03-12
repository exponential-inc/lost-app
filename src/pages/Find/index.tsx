import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

const FindPageC = () => {
  return (
    <View>
      <Text style={{width: '100%', textAlign: 'center', paddingTop: 100}}>Find</Text>
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

export const FindPage = connect(mapStateToProps, mapDispatchToProps)(FindPageC);