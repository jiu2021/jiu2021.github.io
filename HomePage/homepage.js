var app = new Vue({
  el: "#app",
  data: {
    showPage: "blogPage",
    isShowMenu: false,
    isMobile: false,
    showTag: "全部",
  },

  mounted: function() {
    alert("中秋节快乐！")
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

    },
    Tip: function() {
      alert(' Thank you for your support!This page will be online soon!');
    },

    showBlog: function(blogName) {
      var xmlhttp;
      if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
      } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHttp");
      }
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          document.getElementById("blogRead").innerHTML = marked(
            xmlhttp.responseText
          );
        }
      };
      // 向服务器发送请求
      if (blogName == "Git-notes") {
        xmlhttp.open("GET", "markdowns/Git-notes.md", true);
        xmlhttp.send();
      } else if (blogName == "First-blog") {
        xmlhttp.open("GET", "markdowns/First-blog.md", true);
        xmlhttp.send();
      }
      this.showPage = "readMorePage";
    }

  }
})