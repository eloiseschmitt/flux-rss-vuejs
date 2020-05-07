import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cat: 'Galaxie',
        url: 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446',
    },
    mutations: {
        changeCat(state, newCat) {
            state.cat = newCat;
            switch (newCat) {
                case 'Galaxie':
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446';
                    break;
                case 'Hubble':
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500732';
                    break;
                case 'Jupiter':
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/15869804725181167392';
                    break;
                case 'Saturne':
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290499193';
                    break;
                case 'Univers':
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/10919938935469249528';
                    break;
                default:
                    state.url = 'https://www.google.fr/alerts/feeds/02845282839133512907/6194519089290500446';
            }
        }
    }
})

export default store