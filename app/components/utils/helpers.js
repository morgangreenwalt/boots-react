// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var helpers = {

  getAllData: function() {
        return axios.get("/data");
    },

    watchingData: function() {
      return axios.get("/watching", { watch: "true" });
  },

  resetData: function() {
        return axios.post("/reset");
    },

// // This function posts new searches to our database.
//   postData: function(query) {
//     return axios.post("/api", { query: query });
//   },

//   saveData: function(id) {
//     return axios.post("/save", {id: id})
//   },
//   clearData: function() {
//     return axios.post("/clear");
//   },
//   unsaveData: function(id) {
//     return axios.post("/unsave", {id: id})
//   },
//   postNote: function(id, note) {
//     return axios.post("/notes", {id: id, note: note})
//   },
//   deleteNote: function(id) {
//     return axios.post("/delete/note", {id: id})
//   }
};

module.exports = helpers;