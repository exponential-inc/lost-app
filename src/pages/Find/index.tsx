import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';

import { LoginButton } from '../../components/Button/Login';
import { PageHeader } from '../../components/Page/PageHeader';
import { K } from '../../store/constants';

const FindPageC = (props: any) => {
  const themeColor = props.theme === 'dark' ? K.colors.dark : K.colors.light;

  return (
    <Layout style={{height: '100%'}}>
      <PageHeader theme={props.theme} title="Find" type='small' bottomBar={false} navigation={props.navigation}/>
      <LoginButton title='Login With Apple' theme={props.theme} icon='apple' style={{backgroundColor: themeColor.black}} color={themeColor.lightText} />
      <LoginButton title='Login With Google' theme={props.theme} icon='google' />
      <LoginButton title='Set Up Later' theme={props.theme} color={themeColor.black}/>

    </Layout>
  )
}

const mapStateToProps = (state: any) => {
  return {
    theme: state.theme,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {

  }
}

export const FindPage = connect(mapStateToProps, mapDispatchToProps)(FindPageC);