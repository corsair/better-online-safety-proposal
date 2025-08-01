import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faSun, 
  faMoon, 
  faGlobe, 
  faShare,
  faCopy,
  faCheck
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import './style.css'

// Add Font Awesome icons to the library
library.add(faSun, faMoon, faGlobe, faShare, faCopy, faCheck)

const app = createApp(App)

// Register FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app') 