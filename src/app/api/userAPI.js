import config from './config.json'
import request from 'superagent';
import API from './API.js'

let anonUser = {
  "id": -1,
  "first_name": "Anonymous",
  "last_name": "Dolphin",
  "username": "anonymous",
  "token": "000"
}

if(!window) {
  module.exports = {
    getUser: function() {
      console.log("Should redirect")
      window.location = '#/login'
      return anonUser },
    setUser: function() {}
  }
} else {
  module.exports = {
    postLoginAPIUrl: function() {
          return API.getBaseAPIUrl() + 'api-token-auth/';
    },

    getUserInfoUrl: function(username) {
      return API.getBaseAPIUrl() + 'users/' + username + '/';
    },
    getUser: function() {
      try {
        return JSON.parse(window.localStorage["user"])
      } catch (e) {
        return anonUser
      }
    },

    setUser: function(user) {
      return window.localStorage["user"] = JSON.stringify(user)
    },

    authenticate: function (user, pass, callback) {
      var self = this; // TODO Check if this is still needed
      API.post(this.postLoginAPIUrl(), {
        "username": user,
        "password": pass
      }, (err, data) => {
        let text = JSON.parse(data.text)
        let token = text.token
        API.get(this.getUserInfoUrl(user), (err, data) => {
          let user = JSON.parse(data.text)
          user.token = token

          self.setUser(user)
        })
    })
    }
  }
}
