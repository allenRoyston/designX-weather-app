# Forecast Weatherapp + Darksky's API

### What the funk?!
Full disclosure, this is built off a very similar project I completed as a [proof of concept a few months ago](https://github.com/allenRoyston/weather-forecast-demo).  It uses a lot of the same technologies.  However, this build is signifigantly different in terms of features and complexity and as such, much improved over its predecessor.  

### Technologies used
- VueJS
- Vuex
- Vuetify
- Webpack
- ExpressJS/Node
- Pug
- SASS
- Gulp
- DarkSky (just the API, not a library)
- ES6/Babel Transpiler via Webpack

### About
This proof of concept is a SPA (single page app) built with the modern web component framework, Vue.  It also utilizes the "single source of truth" via Vuex to handle it's view/model bindings.  Pug is used as my HTML templating system because it's clean and concise (and much less a headache to look at than standard HTML) while SASS is used in much the same way to deal with CSS.  Webpack is used to bundle all the required resources into a single /dist/main.js file.  

The only tricky part was getting the DarkSky API to retrieve weather data with only a city name.  This can not be accomplished on its own since the API requiers a lat/long for it's services to work; therefore, Google's Geocode API is called first to get the lat/long before passing that data onto Darksky's API.  After those two steps are successful the weather data payload is returned.  All this is done in a single GET, which is can be found in the server.js file and called in the src/components/element/CtyInput.vue component.

Lastly, it deserves to be mentioned that because this proof of concept requires API keys to reach both DarkSky and Google, for security reasons they won't be provided.  You'll have to supply your own.  See Prerequisites below for more information.

### Preview
[Live preview can be found here](https://darkski-weather-api.herokuapp.com/#/)
<br>
*Could take a minute - the server sleeps when not in use*
 
### Prerequisites
- npm
- Darkski's API key
- Google API key
Don't forget, two secret keys are required for this to work:  one from Google and one form Darksky.  Both are free.  
You'll need to place them in the file apiKeys.json in the root folder.
```
{
  "darkSkiesKey": "<yourSecretKey>",
  "googleApiKey": "<yourSecretKey>"
}
```

### How to run locally, the difference
There are essentially two ways to work on the app.  One is without the server running and using only Webpack.  The benefits to this are is that it's faster, but you don't have access to any of the Express server APIs.  For any interaction you'll need to simulate it.  This is fine when just working on front-end components.  

The other way is to start the server and have Webpack rebundle everytime an edit is made.  This is substancially more intrustive and slower, so it's recommended you only use this method when you need to test out some server calls.  


### Full local install (server + webpack):
Install, start server with live reload when editing.
```sh
$ git clone https://github.com/allenRoyston/designX-weather-app.git
$ cd designX-weather-app
$ npm install
// MAKE SURE YOU HAVE THOSE KEYS PLACED IN THE APIKEYS.JSON!
$ npm run build
$ gulp
```

### Webpack and HotReload (webpack only):
This is faster then the Gulp build, but the server is unavailable.  To get this working with webpack, you'll have to simulate a response.  Do this by making one simple edit in the src/components/elements/CityInput.vue and uncomment the following line:
```sh
let jsn = await this.$http.get(`/src/assets/testdata.json`); let res = {body: {success: true, payload: jsn.body}}
```

Then start Webpack with the following.
```sh
$ npm run dev
```

### Deploy to Live Environment (Heroku Example):
```sh
// run npm install, gulp, and make your changes
$ npm run build
$ git push heroku master
```

