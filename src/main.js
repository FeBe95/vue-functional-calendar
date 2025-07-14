import { createApp } from 'vue'
import FunctionalCalendar from '../index'

import 'highlight.js/styles/default.css'
import hljs from 'highlight.js/lib/core';
import xml from 'highlight.js/lib/languages/xml';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import Demo from './Demo.vue'

const app = createApp({
  template: '<Demo/>',
  components: { Demo }
});

app.use(FunctionalCalendar, {
  showWeekNumbers: false,
  dayNames: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']
})

hljs.registerLanguage('html', xml);
app.component('highlight-code', hljsVuePlugin.component);

app.mount('#app');
