// Redux store
import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

// import reducer
import rootReducer from './reducers/index';

//TODO load data from API
const API = 'localhost:3000/api/items';


const defaultState = {
  items: [
    {
      "id": 1,
      "url": "https://gulpjs.com/",
      "img": "https://pbs.twimg.com/profile_images/417078109075034112/iruTC031_400x400.png",
      "name": "gulp",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 2,
      "url": "https://gruntjs.com/",
      "img": "http://gruntjs.com/img/grunt-logo-no-wordmark.svg",
      "name": "grunt",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 3,
      "url": "https://webpack.github.io/",
      "img": "https://webpack.js.org/assets/icon-square-big.svg",
      "name": "webpack",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 4,
      "url": "http://browserify.org/",
      "img": "http://substack.net/images/browserify_logo.png",
      "name": "browserify",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 5,
      "url": "https://jspm.io/",
      "img": "https://avatars1.githubusercontent.com/u/3802108?v=4&s=200",
      "name": "jspm",
      "type": "tooling",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 6,
      "url": "https://facebook.github.io/react/",
      "img": "https://facebook.github.io/react/img/logo.svg",
      "name": "reactJS",
      "type": "frameworks",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 7,
      "url": "https://vuejs.org/",
      "img": "https://vuejs.org/images/logo.png",
      "name": "vue.js",
      "type": "frameworks",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 8,
      "url": "https://angular.io/",
      "img": "https://cdn-images-1.medium.com/max/184/1*nbJ41jD1-r2Oe6FsLjKaOg@2x.png",
      "name": "angular-2",
      "type": "frameworks",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 9,
      "url": "https://www.emberjs.com/",
      "img": "https://raw.githubusercontent.com/emberjs/website/master/source/images/brand/ember_Ember-Light.png",
      "name": "ember.js",
      "type": "frameworks",
      "likes": 5,
      "dislikes": 3
    },
    {
      "id": 10,
      "url": "https://www.meteor.io/",
      "img": "https://user-images.githubusercontent.com/841294/26841702-0902bbee-4af3-11e7-9805-0618da66a246.png",
      "name": "meteor.js",
      "type": "frameworks",
      "likes": 5,
      "dislikes": 3
    }
  ]
}
const enhancers = compose(window.devToolsExtension ? window.devToolsExtension() : f => f);
const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);


export default store;
