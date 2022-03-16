// const device = {
//   mobile: 'screen and (max-width: 768px)',
//   tablet: 'screen and (max-width: 1140px)',
// };

// const colors = {
//   black: '#566270',
//   rgbaBlack: 'rgba(0, 0, 0, 0.5)',
//   rgbaGray: 'rgba(86, 98, 112, 0.5)',
//   ivory: '#FFFFF3',
//   lightGray: '#f0f2f5',
//   gray: '#dedede',
//   lightYellowGray: '#E0E3DA',
//   purple: '#A593E0',
//   mint: '#64c5ba',
//   yellow: '#ffbf2e',
//   green: '#26ca3f',
//   darkPink: '#ef5285',
//   pink: '#ED9282',
//   chatSimsimi: '#ffe34f',
//   chatUser: '#f18d8b',
// };

interface Theme {
  [property: string]: string;
}

const light: Theme = {
  name: 'light',
  primary: '#64c5ba',
  secondary: '#1d4b45',
  secondaryDark: '#082420',
  tertiary: '#e7e8fe',
  gray: '#f7f7f7',
  grayDark: '#e1dfdf',
  dangerBgColor: '#ffe4e4',
  dangerBgColorDark: '#ffc5c5',
  dangerBorderColor: '#ebccd1',
  dangerColor: '#c92522',
  default: '#333',
  reverse: 'white',
};

const dark: Theme = {
  name: 'dark',
  primary: '#4e5c78',
  secondary: '#222c41',
  secondaryDark: '#161d2c',
  tertiary: '#b8b8bf',
  gray: '##f7f7f7',
  grayDark: '#e1dfdf',
  dangerBgColor: '#ffe4e4',
  dangerBgColorDark: '#ffc5c5',
  dangerBorderColor: '#ebccd1',
  dangerColor: '#c92522',
  default: 'white',
  reverse: '#333',
};

const theme = {
  light,
  dark,
};

// const theme: ITheme = {
//   light: {
//     name: 'light',
//     primary: '#64c5ba',
//     secondary: '#1d4b45',
//     secondaryDark: '#082420',
//     tertiary: '#e7e8fe',
//     gray: '##f7f7f7',
//     grayDark: '#e1dfdf',
//     dangerBgColor: '#ffe4e4',
//     dangerBgColorDark: '#ffc5c5',
//     dangerBorderColor: '#ebccd1',
//     dangerColor: '#c92522',
//     default: '#333',
//     reverse: 'white',
//     device,
//   },
// dark: {
//   name: 'dark',
//   primary: '#4e5c78',
//   secondary: '#222c41',
//   secondaryDark: '#161d2c',
//   tertiary: '#b8b8bf',
//   gray: '##f7f7f7',
//   grayDark: '#e1dfdf',
//   dangerBgColor: '#ffe4e4',
//   dangerBgColorDark: '#ffc5c5',
//   dangerBorderColor: '#ebccd1',
//   dangerColor: '#c92522',
//   default: 'white',
//   reverse: '#333',
//   device,
// },
// };

export default theme;
