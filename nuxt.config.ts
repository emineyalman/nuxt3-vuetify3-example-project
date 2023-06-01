export default {
  css: ['vuetify/styles/main.sass'],
  build: {
    transpile: ['vuetify']
  },
  modules: ['@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Roboto: true,
      'Open+Sans': true
    }
  }
}
