const colors = {
  white: "rgba(255,255,255,1)",
  // light: "rgba(247, 249, 254,1)",
  light: "rgba(251, 251, 255,1)",
  lightPurple: "rgba(231, 233, 245,1)",
  dark: "rgba(49, 49, 49,1)",
  darkest: "rgba(29, 29, 29,1)",
  lightBlue: "rgba(79, 162, 185,1)",
  blue: "rgba(59, 142, 165,1)",
  darkBlue: "rgba(39, 122, 145,1)",
  dust: "rgba(244, 158, 76,1)",
};

export const ThemeColor = {
  // primary: {
  //   light: colors.lightGreen,
  //   main: colors.green,
  //   dark: colors.darkGreen,
  // },
  // secondary: {
  //   light: colors.lightPink,
  //   main: colors.pink,
  //   dark: colors.darkPink,
  // },
  text: {
    primary: colors.dark,
    secondary: colors.blue,
    gray: colors.light,
    contrast: colors.white,
  },
  background: {
    white: colors.white,
    light: colors.light,
    gray: colors.lightPurple,
    blue: {
      light: colors.lightBlue,
      main: colors.blue,
      dark: colors.darkBlue,
    },
    dark: colors.dark,
    darkest: colors.darkest,
  },
  other: {
    // star: colors.gold,
  },
};
