import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { Text, Layout } from '@ui-kitten/components';

import {HeaderText} from '../../Text/Header';
import { K } from '../../../store/constants';
export const PageHeader = (props: {theme: any, title: string}) => {
  const themeColor = props.theme === 'dark' ? K.color.dark : K.color.light
  return (
      <Layout
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 536,
        marginBottom: 5,
        marginTop: -500,
        backgroundColor: themeColor.linkBG
      }}>
        <StatusBar barStyle={props.theme === 'dark' ? 'light-content' : 'dark-content'}/>
      <Layout style={{paddingLeft: 30, paddingBottom: 30, backgroundColor: 'transparent'}}>
        <HeaderText color={themeColor.lightText}>
          {props.title}
        </HeaderText>
      </Layout>
    </Layout>
    )
}