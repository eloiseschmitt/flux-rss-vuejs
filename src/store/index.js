import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
let parseString = require('xml2js').parseString;

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        // C'est bon, range tes urls dans un autre fichier, sale sale !
        urlsList: ['https://www.google.com/alerts/feeds/02845282839133512907/6194519089290500446', 'https://www.google.com/alerts/feeds/02845282839133512907/6194519089290500732',
            'https://www.google.com/alerts/feeds/02845282839133512907/15869804725181167392', 'https://www.google.com/alerts/feeds/02845282839133512907/6194519089290499193',
            'https://www.google.com/alerts/feeds/02845282839133512907/10919938935469249528'],
        categories: [],
        feedCategory: 'https://www.google.com/alerts/feeds/02845282839133512907/6194519089290500446'

    },
    getters: {
        getCategories: state => {
            return state.categories;
        },
        getCategoryByUrl: state => {
            return state.categories.filter(cat => cat.urlApi == state.feedCategory)
        } 
    },
    mutations: {
        setArticles(state, payload) {
            let category = {
                name: payload.feed.title,
                numberOfArticles: payload.feed.entry.length,
                urlApi: payload.feed.link[0].$.href,
                details: payload.feed.entry
            }
            state.categories.push(category);
        },
        changeCat(state, urlCat) {
            state.feedCategory = urlCat;
        }
    },
    actions: {
        getArticles: context => {
            context.state.urlsList.forEach(url => {
                axios
                    .get(url)
                    .then(response => {
                        parseString(response.data, function (err, result) {
                            context.commit('setArticles', result)
                        })

                    })
                    .catch(e => {
                        console.log(e)
                        context.commit('setArticles', null)
                    })
            })

        }
    }
})

export default store