/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
          darkred: '#CC0000',
          red: '#FF0000',
          blue: '#3B4CCA',
          darkblue: '#1B3B7C',
          yellow: '#FFDE00',
          white: '#FFFFFF'
        },
      },
    },
  },
})