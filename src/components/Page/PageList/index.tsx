import React from 'react';
import {Layout} from '@ui-kitten/components';

import {ViewStyle} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import { PageHeader } from '../PageHeader';

export const PageList = (props: {
  theme: string;
  children?: React.ReactNode;
  style?: ViewStyle;
  color?: string;
  title: string;
}) => {
  return (
    <ScrollView>
      <PageHeader title={props.title} theme={props.theme} />
      <Layout
        style={{
          marginHorizontal: 20,
          height: '100%',
          position: 'relative',
          ...props.style,
        }}>
        <Layout
          style={{
            position: 'absolute',
            height: '100%',
            left: 0,
            right: 0,
            top: -20,
            borderRadius: 20,
          }}>
          {props.children}
        </Layout>
      </Layout>
    </ScrollView>
  );
};
