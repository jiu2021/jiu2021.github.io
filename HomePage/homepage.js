var app = new Vue({
  el: "#app",
  data: {
    showPage: "blogPage",
    isShowMenu: false,
    isMobile: false,
  },

  mounted: function() {
    if (document.body.offsetWidth <= 500)
      this.isMobile = !this.isMobile;
  },
  methods: {
    showMenu: function() {
      const menuBar = document.getElementById('menu');
      const page = document.getElementById('page');
      const main = document.getElementById('main');
      this.isShowMenu = !this.isShowMenu;
      if (this.isShowMenu) {
        if (document.body.offsetWidth >= 500) {
          menuBar.style.left = 0;
          page.style.width = '80%'
        } else {
          menuBar.style.left = 0;
        }
      } else {
        if (document.body.offsetWidth >= 500) {
          menuBar.style.left = '-20%';
          page.style.width = '100%'
        } else {
          menuBar.style.left = '-50%';
        }
      }

    },

    getBack: function() {
      const menuBar = document.getElementById('menu');
      const page = document.getElementById('page');
      this.isShowMenu = !this.isShowMenu;
      if (document.body.offsetWidth >= 500) {
        menuBar.style.left = '-20%';
        page.style.width = '100%';
      } else {
        menuBar.style.left = '-50%';
      }

    }
  }
})