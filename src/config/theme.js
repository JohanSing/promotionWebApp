const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
  desktopL: `(min-width: ${sizes.desktop})`
}

const colors = {
  beige: '#F6F6E9',
  orange: '#FFA630',
  red: '#E63946',
  lightBlue: '#005792',
  darkBlue: '#081621'
}

const lightTheme = {
  colors: {
    backgroundMain: colors.beige,
    btnBackgroundMain: colors.beige,
    btnBackgroundPrimaryHover: colors.orange,
    btnBackgroundSecondaryHover: colors.lightBlue,
    btnBorderPrimary: colors.orange,
    btnBorderSecondary: colors.lightBlue,
    btnFontPrimary: colors.orange,
    btnFontSecondary: colors.lightBlue,
    btnFontHover: colors.beige,
    fontMain: colors.darkBlue
  },
  sizes: devices
}

const darkTheme = {
  colors: {
    backgroundMain: colors.darkBlue,
    btnBackgroundMain: colors.darkBlue,
    btnBackgroundPrimaryHover: colors.orange,
    btnBackgroundSecondaryHover: colors.lightBlue,
    btnBorderPrimary: colors.orange,
    btnBorderSecondary: colors.lightBlue,
    btnFontPrimary: colors.beige,
    btnFontSecondary: colors.beige,
    btnFontHover: colors.beige,
    fontMain: colors.beige
  },
  sizes: devices
}

export { lightTheme, darkTheme }
