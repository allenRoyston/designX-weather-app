import Vue from 'vue'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'
import Forecast from '../components/Forecast.vue'
import Dailycast from '../components/Dailycast.vue'
import Home from '../components/Home.vue'
import Router from 'vue-router'

Vue.use(Router)
Vue.use(Vuetify)
Vue.use(VueResource);
Vue.component('PageHeader', require('../components/elements/Header.vue'))
Vue.component('PageFooter', require('../components/elements/Footer.vue'))
Vue.component('CityInput', require('../components/elements/CityInput.vue'))
Vue.component('ForecastHourly', require('../components/elements/ForecastHourly.vue'))
Vue.component('ForecastWarnings', require('../components/elements/ForecastWarnings.vue'))
Vue.component('ForecastWeekly', require('../components/elements/ForecastWeekly.vue'))

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/forecast/:city',
      name: 'Forecast',
      component: Forecast
    },
    {
      path: '/daily/:city/:day',
      name: 'Dailycast',
      component: Dailycast
    }
  ]
})
