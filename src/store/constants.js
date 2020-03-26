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
      black: '#000000'
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
      black: '#000000'
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