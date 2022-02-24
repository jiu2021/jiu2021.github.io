var app = new Vue({
  el: '#app',
  data: {
    query: "",
    musicList: [],
    artistList: [],
    musicUrl: "",
    musicCover: "./images/image3.png",
    hotComments: "",
    nameScroll: false,
    MVid: 0,
    MVurl: "",
    isMV: false,
  },
  methods: {
    searchMusic: function() {
      var that = this;
      axios.get("https://autumnfish.cn/search?keywords=" + this.query)
        .then(function(response) {
          //console.log(response);
          that.musicList = response.data.result.songs;
          for (var i = 0; i < that.musicList.length; i++) {
            that.artistList[i] = that.musicList[i].artists;
          }
        }, function(err) {})
    },

    MVclose: function() {
      var that = this;
      that.isMV = false;
      that.MVurl = "";
    },

    playMusic: function(musicId, index) {
      var that = this;
      axios.get("https://autumnfish.cn/song/url?id=" + musicId)
        .then(function(response) {
          //console.log(response);
          that.musicUrl = response.data.data[0].url;
          that.MVid = that.musicList[index].mvid;
        }, function(err) {})

      axios.get("https://autumnfish.cn/song/detail?ids=" + musicId)
        .then(function(response) {
          that.musicCover = response.data.songs[0].al.picUrl;
        }, function(err) {})

      axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId)
        .then(function(response) {
          //console.log(response.data.hotComments);
          that.hotComments = response.data.hotComments;
        }, function(err) {})
    },

    MVplay: function(MVid) {
      var that = this;
      axios.get("https://autumnfish.cn/mv/url?id=" + MVid)
        .then(function(response) {
          that.MVurl = response.data.data.url;
          that.isMV = true;
        })
    },
  }
})