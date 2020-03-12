import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';

import {HeaderText} from '../../Text/Header';
export const PageHeader = (props: {theme: any, title: string}) => {
    return (
      <Layout
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 5
      }}>
        <StatusBar barStyle={props.theme === 'dark' ? 'light-content' : 'dark-content'}/>
      <Layout style={{paddingLeft: 20, paddingTop: 30, paddingBottom: 10}}>
        <HeaderText>
          {props.title}
        </HeaderText>
      </Layout>
    </Layout>
    )
}