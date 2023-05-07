

const colorKeys = {
    morningBlue: "#6db7c6",
    shadowBlue: "#a8d5de",
    celadonGreen: "#396068",
    eggPlant: "#352d33",
    mellowApricot: "#ffc482",
    charcoal: "#1e232a",
    gunmetal: "#29323d",
    mistyRose: "#d6b8b8",
    antiqueWhite: "#d6b09b",
    purpleGrey: "#646482",
    lightMorningBlue: "#a8d5de",
    lightCeladonGreen: "#9bb3aa",
    darkShadowBlue: "#0e1a1d",
    darkEggPlant: "#352d33",
    darkCharcoal: "#1e232a",
    darkMistyRose: "#d6b8b8",
    darkAntiqueWhite: "#d6b09b",
    darkPurpleGrey: "#646482"
  }
  
  
  export default {
    config: {
      locales: [
        // "fr",
        "en"
      ],
      theme: {
        dark: {
          colors: {
            primary100: colorKeys.morningBlue,
            neutral0: colorKeys.charcoal,
            neutral100: colorKeys.antiqueWhite,
            secondary500: colorKeys.charcoal,
            buttonNeutral0: colorKeys.antiqueWhite,
            buttonPrimary500: colorKeys.celadonGreen, // Button Hover
            buttonPrimary600: colorKeys.charcoal,
            primary500: colorKeys.antiqueWhite,
            primary600: colorKeys.purpleGrey,
  
            // Selected Font
            primary700: colorKeys.charcoal,
            // Main Background
            neutral100: colorKeys.gunmetal,
  
            neutral200: colorKeys.eggPlant,
            neutral300: "#6db7c6",
            neutral400: "#6db7c6",
            neutral500: "#6db7c6",
            neutral700: "#6db7c6",
            neutral800: "#6db7c6",
            neutral900: "#6db7c6",
            neutral1000: "#6db7c6",
            // danger700: "#ff33d3",
            // studio100: "#59747b",
            // studio200: "#3d4051",
            // studio300: "#1f1f2d",
            // studio400: "#333f4c",
            // studio500: "#5d5e76"
          }
        },
      },
      translations: {
        // fr: {
        //   "app.components.LeftMenu.navbrand.title": "Super dashboard",
        //   "app.components.LeftMenu.navbrand.workplace": "Administration",
        // },
        en: {
          // Menu Branding
          "app.components.LeftMenu.navbrand.title": "Studio Development",
          "app.components.LeftMenu.navbrand.workplace": "Workspace",
          // Welcome Message
          "app.components.HomePage.welcome.again": "Hey Niles!",
          // Login Form
          "app.components.HomePage.welcomeBlock.content.again": "You got this.",
          "Auth.form.username.placeholder": "e.g. nilesjoel",
          "Auth.form.welcome.subtitle": "Log in to your Studio account",
          "Auth.form.welcome.title": "Studio Dev",
          "Auth.link.forgot-password": "Forgot your password?",
        },
      },
      tutorials: false,
      notifications: { release: false },
    },
    async bootstrap(app) {
    }
  };