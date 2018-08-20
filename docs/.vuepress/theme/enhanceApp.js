// import Vuetify from 'vuetify'

import Vuetify from 'vuetify/es5/components/Vuetify'
import VApp from 'vuetify/es5/components/VApp'
import VNavigationDrawer from 'vuetify/es5/components/VNavigationDrawer'
import VToolbar from 'vuetify/es5/components/VToolbar'
import VGrid from 'vuetify/es5/components/VGrid'
import VList from 'vuetify/es5/components/VList'
import VBtn from 'vuetify/es5/components/VBtn'
import VIcon from 'vuetify/es5/components/VIcon'
import VMenu from 'vuetify/es5/components/VMenu'
import transitions from 'vuetify/es5/components/transitions'
import directives from 'vuetify/es5/directives'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
}) => {
  // Vue.use(Vuetify)
  Vue.use(Vuetify, {
    components: {
      VApp,
      VToolbar,
      VNavigationDrawer,
      VGrid,
      VMenu,
      VList,
      VBtn,
      VIcon,
      transitions,
    },
    directives,
  })
}
