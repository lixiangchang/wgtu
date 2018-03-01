document.addEventListener('DOMContentLoaded', function () {
  function audioAutoPlay() {
    var audio = document.getElementById('audio')
    audio.play()
    document.addEventListener(
      'WeixinJSBridgeReady',
      function () {
        audio.play()
      },
      false
    )
  }
  audioAutoPlay()
})
var home = Vue.extend({
  template: '#home',
  methods: {
    addClass: function () {
      setTimeout(function () {
        if (is_weixin()) {
          $('.home .logo').css('margin-top', '1rem')
        }
      }, 0)
      this.$nextTick(function () {
        setTimeout(function () {
          $('.home-title')
            .removeClass('bounceInDown')
            .addClass('home-scale')
          $('.home-btn').addClass('tada')
        }, 1000)
      })
    }
  },
  created() {
    this.addClass()
  }
})
var renyang = Vue.extend({
  template: '#renyang',
  methods: {
    click: function (index) {
      if (index == 1) {
        $('.tree').val('pear-fruit')
        $('.renyang-download p')
          .eq(0)
          .addClass('renyang-transform')
          .html('199.99元/棵')
          .addClass('renyang-transform1')
      } else if (index == 2) {
        $('.tree').val('grape_Fruit')
        $('.renyang-download p')
          .eq(1)
          .addClass('renyang-transform')
          .html('399.99元/棵')
          .addClass('renyang-transform1')
      } else if (index == 3) {
        $('.tree').val('pitaya-fruit')
        $('.renyang-download p')
          .eq(2)
          .addClass('renyang-transform')
          .html('259.99元/棵')
          .addClass('renyang-transform1')
      }
      let _self = this
      setTimeout(function () {
        _self.$router.push('/renyang1')
      }, 1000)
    }
  }
})
var renyang1 = Vue.extend({
  template: '#renyang1',
  methods: {
    addClass: function () {
      setTimeout(function () {
        $.fn.autotype1 = function (str, speed) {
          var self = this,
            defaultStr =
            '<p>可以开始你的惊喜之旅了</p><p>过程中我会很辛苦的</p><p>你确定要开始吗？</p>',
            defaultSpeed = 50,
            str = str || defaultStr,
            speed = speed || defaultSpeed,
            index = 0,
            timer = setInterval(function () {
              var current = str.substr(index, 1)
              if (current == '<') {
                index = str.indexOf('>', index) + 1
              } else {
                index++
              }
              self.html(
                str.substring(0, index) +
                (index & 1 && index != str.length ? '_' : '')
              )
              if (index >= str.length) {
                clearInterval(timer)
              }
            }, speed)
        }
        $('.renyang1-font').autotype1()
        setTimeout(function () {
          $('.renyang1-download').addClass('renyang1-dsbk')
        }, 1500)
      }, 0)
    },
    click: function () {
      $.fn.autotype = function (str, speed) {
        var self = this,
          defaultStr = 'ok<span>!</span>';
        (defaultSpeed = 50),
        (str = str || defaultStr),
        (speed = speed || defaultSpeed),
        (index = 0),
        (timer = setInterval(function () {
          var current = str.substr(index, 1)
          if (current == '<') {
            index = str.indexOf('>', index) + 1
          } else {
            index++
          }
          self.html(
            str.substring(0, index) +
            (index & 1 && index != str.length ? '_' : '')
          )
          if (index >= str.length) {
            clearInterval(timer)
          }
        }, speed))
      }
      $('.renyang1-top p').autotype()
      $('.renyang1-top img').css('visibility', 'visible')
      var _self = this
      setTimeout(function () {
        _self.$router.push('/logistics1')
      }, 1000)
    }
  },
  created() {
    this.addClass()
  }
})
var logistics1 = Vue.extend({
  template: '#logistics1',
  methods: {
    add: function () {
      setTimeout(function () {
        if (is_weixin() == true) {
          $('.logistics1-main div')
            .eq(3)
            .find('img')
            .prop('src', 'img/logistics-4-1.png')
        }
        $('.logistics1-main>div')
          .eq(0)
          .css('display', 'block')
          .addClass('bounceInLeft')
      }, 0)
      setTimeout(function () {
        $('.logistics1-main>div')
          .eq(1)
          .css('display', 'block')
          .addClass('bounceInDown')
      }, 600)
      setTimeout(function () {
        $('.logistics1-main>div')
          .eq(2)
          .css('display', 'block')
          .addClass('bounceInRight')
      }, 1200)
      setTimeout(function () {
        $('.logistics1-main>div')
          .eq(3)
          .css('display', 'block')
          .addClass('bounceInUp')
      }, 1800)
      var _self = this
      setTimeout(function () {
        _self.$router.push('/logistics2')
      }, 4000)
    }
  },
  created() {
    this.add()
  }
})
var logistics2 = Vue.extend({
  template: '#logistics2',
  methods: {
    add: function () {
      let _self = this
      setTimeout(function () {
        if (is_weixin() == true) {
          $('.logistics2-main div')
            .eq(0)
            .find('img')
            .prop('src', 'img/logistics-5-1.png')
          $('.logistics2-main div')
            .eq(1)
            .css('top', '7.3rem')
          $('.logistics2-main div')
            .eq(2)
            .css('top', '16rem')
          $('.logistics2-main div')
            .eq(3)
            .css('top', '14.77rem')
          $('.logistics2-main div')
            .eq(4)
            .css('top', '25.09rem')
          $('.logistics2-main div')
            .eq(4)
            .find('img')
            .prop('src', 'img/logistics-9-1.png')
          $('.logistics2-main div')
            .eq(4)
            .find('.pagination')
            .css('top', '3.5rem')
        }
        $('.logistics2-main>div')
          .eq(0)
          .css('display', 'block')
          .addClass('bounceInDown')
      }, 600)
      setTimeout(function () {
        $('.logistics2-main>div')
          .eq(1)
          .css('display', 'block')
          .addClass('bounceInLeft')
      }, 1200)
      setTimeout(function () {
        $('.logistics2-main>div')
          .eq(2)
          .css('display', 'block')
          .addClass('slideInLeft')
      }, 1800)
      setTimeout(function () {
        $('.logistics2-main>div')
          .eq(3)
          .css('display', 'block')
          .addClass('slideInRight')
      }, 2400)
      setTimeout(function () {
        $('.logistics2-main>div')
          .eq(4)
          .css('display', 'block')
          .addClass('bounceInUp')
        let n = -1
        let timer = null
        setTimeout(function () {
          timer = setInterval(function () {
            n++
            if (n >= $('.logistics2-pagination>li').length) {
              clearInterval(timer)
              _self.$router.push('durian')
            }
            $('.logistics2-pagination>li')
              .eq(n)
              .css('display', 'block')
          }, 500)
        }, 500)
      }, 3000)
    }
  },
  created() {
    this.add()
  }
})
var durian = Vue.extend({
  template: '#durian',
  data() {
    return {
      tree: ''
    }
  },
  created() {
    let tree = $('.tree').val()
    this.tree = 'img/' + tree + '.png'
    setTimeout(function () {
      if (is_weixin()) {
        $('.titleBig').css('padding-top', '2rem')
      }
    }, 0)
  }
})
var flashing = Vue.extend({
  template: '#flashing',
  methods: {
    add: function () {
      setTimeout(function () {
        let tree = $('.tree').val()
        if (tree == 'durian') {
          $('.p3 span').html('199.99')
          $('.p5 div span').html('1000')
          $('.p6 div span').html('巾帼梨')
        } else if (tree == 'kirinFruit') {
          $('.p3 span').html('399.99')
          $('.p5 div span').html('2000')
          $('.p6 div span').html('金甲丹心柚')
        } else if (tree == 'grape_Fruit') {
          $('.p3 span').html('259.99')
          $('.p5 div span').html('1500')
          $('.p6 div span').html('仙蜜红火龙果')
        }
        let p1Left = $('.p1').offset().left
        let p2Left = $('.p2').offset().left
        let p3Left = $('.p3').offset().left
        let timer = null
        timer = setInterval(function () {
          p1Left -= 1
          p2Left -= 1
          p3Left -= 1
          $('.p1').css('left', p1Left + 'px')
          $('.p2').css('left', p2Left + 'px')
          $('.p3').css('left', p3Left + 'px')
          if (
            $('.p1').offset().left <= -$('.p1').width() &&
            $('.p2').offset().left <= -$('.p2').width() &&
            $('.p3').offset().left <= -$('.p3').width()
          ) {
            clearInterval(timer)
            $('.p1').css('display', 'none')
            $('.p2').css('display', 'none')
            $('.p3').css('display', 'none')
            $('.p5').css('display', 'block')
            $('.p6').css('display', 'block')
            localStorage.removeItem('tree')
            setTimeout(function () {
              $('.p5').addClass('black')
              $('.p6').addClass('white')
              setTimeout(function () {
                $('.p5')
                  .removeClass('black')
                  .css('display', 'none')
                $('.p6')
                  .removeClass('white')
                  .css('display', 'none')
                if (is_weixin() == true) {
                  $('.p7').css('display', 'block')
                  $('.p7 p')
                    .eq(0)
                    .css({
                      'line-height': '32rem',
                      height: '32rem'
                    })
                }
                $('.p7').css('display', 'block')
                setTimeout(function () {
                  $('.p7').css('display', 'none')
                  $('.p8').css('display', 'block')
                  setTimeout(function () {
                    $('.p8').css('display', 'none')
                    $('.p9')
                      .eq(0)
                      .css('display', 'block')
                    let n = 0
                    let timer1 = null
                    timer1 = setInterval(function () {
                      $('.p9')
                        .eq(n)
                        .css('display', 'none')
                      n++
                      if (n >= $('.p9').length) {
                        clearInterval(timer1)
                        $('.content').css('display', 'block')
                      }
                      $('.p9')
                        .eq(n)
                        .css('display', 'block')
                    }, 200)
                  }, 1200)
                }, 1200)
              }, 2500)
            }, 500)
          }
        }, 1)
      }, 0)
    }
  },
  created() {
    this.add()
  }
})
var download = Vue.extend({
  template: '#download',
  methods: {
    add: function () {
      setTimeout(function () {
        var u = navigator.userAgent
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
        if (isAndroid == true && is_weixin() == true) {
          $('.explain').css('display', 'block')
        } else {
          $('.download img').tap(function () {})
        }
      }, 0)
    }
  }
})
var router = new VueRouter({
  routes: [{
      path: '/home',
      component: home
    },
    {
      path: '/renyang',
      component: renyang
    },
    {
      path: '/renyang1',
      component: renyang1
    },
    {
      path: '/logistics1',
      component: logistics1
    },
    {
      path: '/logistics2',
      component: logistics2
    },
    {
      path: '/durian',
      component: durian
    },
    {
      path: '/flashing',
      component: flashing
    },
    {
      path: '/download',
      component: download
    },
    {
      path: '/',
      redirect: 'home'
    }
  ]
})
var vue = new Vue({
  el: '#app',
  router: router
})
