import { config, library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import { fas } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;

library.add(fas);

Vue.component('font-awesome-icon', FontAwesomeIcon);
