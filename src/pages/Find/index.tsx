import React from 'react';
import { Layout, Text } from '@ui-kitten/components';
import { connect } from 'react-redux';

import { TouchableShadow } from '../../components/Shadow/Touchable';
import { PageHeader } from '../../components/Page/PageHeader';

const FindPageC = (props: any) => {
  return (
    <Layout style={{height: '100%'}}>
      <PageHeader theme={props.theme} title="Find" type='small' />
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