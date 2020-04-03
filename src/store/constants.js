import {iOSUIKit, human, robotoWeights} from 'react-native-typography';

export const K = {
  colors: {
    light: {
      primaryBG: '#FFFFFF',
      secondaryBG: '#F8F8F8',
      linkBG: '#6197FF',
      primaryText: '#000F31',
      secondaryText: '#535A6C',
      darkText: '#000F31',
      lightText: '#FFFFFF',
      greyText: '#E9E9E9',
      contrast: '#000F31',
      black: '#000000',
      white: '#FFFFFF',
      red: 'rgb(255, 59, 48)',
      orange: 'rgb(255, 149, 0)',
      yellow: 'rgb(255, 204, 0)',
      green: 'rgb(52, 199, 89)',
      teal: 'rgb(90, 200, 250)',
      blue: 'rgb(0, 122, 255)',
      indigo: 'rgb(88, 86, 214)',
      purple: 'rgb(175, 82, 222)',
      pink: 'rgb(255, 45, 85)'
    },
    dark: {
      primaryBG: '#232B43',
      secondaryBG: '#161E37',
      linkBG: '#051135',
      primaryText: '#FFFFFF',
      secondaryText: '#E5E5E5',
      darkText: '#000F31',
      lightText: '#FFFFFF',
      greyText: '#E9E9E9',
      contrast: '#FFFFFF',
      black: '#000000',
      white: '#FFFFFF',
      red: 'rgb(255, 69, 58)',
      orange: 'rgb(255, 159, 10)',
      yellow: 'rgb(255, 214, 10)',
      green: 'rgb(48, 209, 88)',
      teal: 'rgb(100, 210, 255)',
      blue: 'rgb(10, 132, 255)',
      indigo: 'rgb(94, 92, 230)',
      purple: 'rgb(191, 90, 242)',
      pink: 'rgb(255, 55, 95)'
    },
  },
  fonts: {
    ios: {
      largeTitleE: iOSUIKit.largeTitleEmphasizedObject,
      largeTitle: iOSUIKit.largeTitleObject,

      smallTitleE: iOSUIKit.title3EmphasizedObject,
      smallTitle: iOSUIKit.title3Object,

      subheadE: iOSUIKit.subheadEmphasizedObject,
      subhead: iOSUIKit.subheadObject,

      bodyE: iOSUIKit.bodyEmphasizedObject,
      body: iOSUIKit.bodyObject,
    },
    android: {
      largeTitleE: {...human.largeTitleObject, ...robotoWeights.medium},
      largeTitle: human.largeTitleObject,

      smallTitleE: {...human.title3Object, ...robotoWeights.medium},
      smallTitle: human.title3Object,

      subheadE: {...human.subheadObject, ...robotoWeights.medium},
      subhead: human.subheadObject,

      bodyE: {...human.bodyObject, ...robotoWeights.medium},
      body: human.bodyObject,
    }
  }
}