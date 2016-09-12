/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
  port: 8080,

  language: 'en',
  timeFormat: 24,
  units: 'metric',

  modules: [{
    module: 'alert'
  }, {
    module: 'clock',
    position: 'top_left'
  }, {
    module: 'calendar',
    header: 'Irish Holidays',
    position: 'top_left',
    config: {
      calendars: [{
        symbol: 'calendar-check-o ',
        url: 'webcal://www.calendarlabs.com/templates/ical/Ireland-Holidays.ics'
      }]
    }
  },     {
                module: 'random_quotes',
                position: 'lower_third'
            }, {
    module: 'currentweather',
    position: 'top_right',
    config: {
      location: 'Dublin',
      locationID: '2964574',
      appid: '35ed60294c2abfe2f334d3b64b4ccb42'
    }
  }, {
    module: 'weatherforecast',
    position: 'top_right',
    header: 'Weather Forecast',
    config: {
      location: 'Dublin',
      locationID: '2964574', //ID from http://www.openweathermap.org
      appid: '35ed60294c2abfe2f334d3b64b4ccb42'
    }
  }, {
    module: 'MMM-Traffic',
    position: 'top_right',
    classes: 'dimmed medium', //optional, default is 'bright medium', only applies to commute info not route_name
    config: {
      api_key: 'AIzaSyC4rkSe9M61AwjNtjigfEYswqbnqQubOYo',
      mode: 'driving',
      origin: 'Clondalkin Rugby Football Club, Gordon Park, Kingswood Cross, Dublin',
      destination: 'Tesco Express, Fairview, Dublin',
      arrival_time: '0800', //optional, but needs to be in 24 hour time if used.
      route_name: 'Home to Work',
      changeColor: true,
      showGreen: false,
      limitYellow: 5, //Greater than 5% of journey time due to traffic
      limitRed: 20, //Greater than 20% of journey time due to traffic
      traffic_model: 'pessimistic',
      interval: 120000 //2 minutes
    }
  }]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {
  module.exports = config;
}
