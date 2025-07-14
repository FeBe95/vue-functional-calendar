// Import vue component
import FunctionalCalendar from './src/components/FunctionalCalendar.vue'

// Creating a module value for app.use()
const FunctionalCalendarPlugin = {
  install(app, options = []) {
    // Vue 3 uses app.config.globalProperties instead of Vue.prototype
    app.config.globalProperties.$getOptions = function() {
      return options
    }

    // Register the component globally
    app.component('FunctionalCalendar', FunctionalCalendar)
  },
  FunctionalCalendar
}

// Export component for use as a module (npm / webpack / etc.)
export default FunctionalCalendarPlugin
export { FunctionalCalendar }
