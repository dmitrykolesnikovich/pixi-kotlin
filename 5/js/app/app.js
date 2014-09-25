(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    net: Kotlin.definePackage(null, /** @lends _.net */ {
      abesto: Kotlin.definePackage(null, /** @lends _.net.abesto */ {
        kotlin: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin */ {
          js: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js */ {
            pixi: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi */ {
              examples: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples */ {
                example_4: Kotlin.definePackage(null, /** @lends _.net.abesto.kotlin.js.pixi.examples.example_4 */ {
                  main$makeObject: function (n, points1, points2, points3) {
                    return function (t) {
                      var xd = -90 + Math.round(Math.random() * 180);
                      var td = t;
                      var tmp$0, tmp$1, tmp$2, tmp$3, tmp$4, tmp$5, tmp$6, tmp$7, tmp$8, tmp$9, tmp$10, tmp$11, tmp$12, tmp$13, tmp$14, tmp$15, tmp$16, tmp$17;
                      if (t === 0) {
                        tmp$0 = n.v - 1;
                        for (var i = 0; i <= tmp$0; i++) {
                          points1.v[i] = -50 + Math.round(Math.random() * 100);
                          points2.v[i] = 0.0;
                          points3.v[i] = 0.0;
                        }
                      }
                       else if (t === 1) {
                        tmp$1 = n.v - 1;
                        for (var i_0 = 0; i_0 <= tmp$1; i_0++) {
                          points1.v[i_0] = Math.cos(xd) * 10 * (Math.cos(td * 360 / n.v) * 10);
                          points2.v[i_0] = Math.cos(xd) * 10 * (Math.sin(td * 360 / n.v) * 10);
                          points3.v[i_0] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 2) {
                        tmp$2 = n.v - 1;
                        for (var i_1 = 0; i_1 <= tmp$2; i_1++) {
                          points1.v[i_1] = Math.cos(xd) * 10 * (Math.cos(td * 360 / n.v) * 10);
                          points2.v[i_1] = Math.cos(xd) * 10 * (Math.sin(td * 360 / n.v) * 10);
                          points3.v[i_1] = Math.sin(i_1 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 3) {
                        tmp$3 = n.v - 1;
                        for (var i_2 = 0; i_2 <= tmp$3; i_2++) {
                          points1.v[i_2] = Math.cos(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_2] = Math.cos(xd) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_2] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 4) {
                        tmp$4 = n.v - 1;
                        for (var i_3 = 0; i_3 <= tmp$4; i_3++) {
                          points1.v[i_3] = Math.cos(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_3] = Math.cos(xd) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_3] = Math.sin(i_3 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 5) {
                        tmp$5 = n.v - 1;
                        for (var i_4 = 0; i_4 <= tmp$5; i_4++) {
                          points1.v[i_4] = Math.cos(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_4] = Math.cos(i_4 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_4] = Math.sin(i_4 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 6) {
                        tmp$6 = n.v - 1;
                        for (var i_5 = 0; i_5 <= tmp$6; i_5++) {
                          points1.v[i_5] = Math.cos(i_5 * 360 / n.v) * 10 * (Math.cos(i_5 * 360 / n.v) * 10);
                          points2.v[i_5] = Math.cos(i_5 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_5] = Math.sin(i_5 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 7) {
                        tmp$7 = n.v - 1;
                        for (var i_6 = 0; i_6 <= tmp$7; i_6++) {
                          points1.v[i_6] = Math.cos(i_6 * 360 / n.v) * 10 * (Math.cos(i_6 * 360 / n.v) * 10);
                          points2.v[i_6] = Math.cos(i_6 * 360 / n.v) * 10 * (Math.sin(i_6 * 360 / n.v) * 10);
                          points3.v[i_6] = Math.sin(i_6 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 8) {
                        tmp$8 = n.v - 1;
                        for (var i_7 = 0; i_7 <= tmp$8; i_7++) {
                          points1.v[i_7] = Math.cos(xd) * 10 * (Math.cos(i_7 * 360 / n.v) * 10);
                          points2.v[i_7] = Math.cos(i_7 * 360 / n.v) * 10 * (Math.sin(i_7 * 360 / n.v) * 10);
                          points3.v[i_7] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 9) {
                        tmp$9 = n.v - 1;
                        for (var i_8 = 0; i_8 <= tmp$9; i_8++) {
                          points1.v[i_8] = Math.cos(xd) * 10 * (Math.cos(i_8 * 360 / n.v) * 10);
                          points2.v[i_8] = Math.cos(i_8 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_8] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 10) {
                        tmp$10 = n.v - 1;
                        for (var i_9 = 0; i_9 <= tmp$10; i_9++) {
                          points1.v[i_9] = Math.cos(i_9 * 360 / n.v) * 10 * (Math.cos(i_9 * 360 / n.v) * 10);
                          points2.v[i_9] = Math.cos(xd) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_9] = Math.sin(i_9 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 11) {
                        tmp$11 = n.v - 1;
                        for (var i_10 = 0; i_10 <= tmp$11; i_10++) {
                          points1.v[i_10] = Math.cos(xd) * 10 * (Math.cos(i_10 * 360 / n.v) * 10);
                          points2.v[i_10] = Math.sin(xd) * 10 * (Math.sin(i_10 * 360 / n.v) * 10);
                          points3.v[i_10] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 12) {
                        tmp$12 = n.v - 1;
                        for (var i_11 = 0; i_11 <= tmp$12; i_11++) {
                          points1.v[i_11] = Math.cos(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_11] = Math.sin(xd) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_11] = Math.sin(i_11 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 13) {
                        tmp$13 = n.v - 1;
                        for (var i_12 = 0; i_12 <= tmp$13; i_12++) {
                          points1.v[i_12] = Math.cos(xd) * 10 * (Math.cos(i_12 * 360 / n.v) * 10);
                          points2.v[i_12] = Math.sin(i_12 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_12] = Math.sin(i_12 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 14) {
                        tmp$14 = n.v - 1;
                        for (var i_13 = 0; i_13 <= tmp$14; i_13++) {
                          points1.v[i_13] = Math.sin(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_13] = Math.sin(xd) * 10 * (Math.sin(i_13 * 360 / n.v) * 10);
                          points3.v[i_13] = Math.sin(i_13 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 15) {
                        tmp$15 = n.v - 1;
                        for (var i_14 = 0; i_14 <= tmp$15; i_14++) {
                          points1.v[i_14] = Math.cos(i_14 * 360 / n.v) * 10 * (Math.cos(i_14 * 360 / n.v) * 10);
                          points2.v[i_14] = Math.sin(i_14 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_14] = Math.sin(i_14 * 360 / n.v) * 100;
                        }
                      }
                       else if (t === 16) {
                        tmp$16 = n.v - 1;
                        for (var i_15 = 0; i_15 <= tmp$16; i_15++) {
                          points1.v[i_15] = Math.cos(xd) * 10 * (Math.cos(i_15 * 360 / n.v) * 10);
                          points2.v[i_15] = Math.sin(i_15 * 360 / n.v) * 10 * (Math.sin(xd) * 10);
                          points3.v[i_15] = Math.sin(xd) * 100;
                        }
                      }
                       else if (t === 17) {
                        tmp$17 = n.v - 1;
                        for (var i_16 = 0; i_16 <= tmp$17; i_16++) {
                          points1.v[i_16] = Math.cos(xd) * 10 * (Math.cos(xd) * 10);
                          points2.v[i_16] = Math.cos(i_16 * 360 / n.v) * 10 * (Math.sin(i_16 * 360 / n.v) * 10);
                          points3.v[i_16] = Math.sin(i_16 * 360 / n.v) * 100;
                        }
                      }
                    };
                  },
                  main$resize: function (w, h, renderer) {
                    return function () {
                      var tmp$0, tmp$1;
                      w.v = (tmp$0 = $(window).width()) - tmp$0 % 1 - 16;
                      h.v = (tmp$1 = $(window).height()) - tmp$1 % 1 - 16;
                      renderer.v.resize(w.v, h.v);
                    };
                  },
                  update$f: function (update) {
                    return function () {
                      update();
                    };
                  },
                  main$update: function (d, vx, vy, vz, n, points1, tpoint1, points2, tpoint2, points3, tpoint3, w, balls, h, renderer, stage) {
                    return function update() {
                      var x3d;
                      var y3d;
                      var z3d;
                      var tx;
                      var ty;
                      var tz;
                      var ox;
                      if (d.v < 250) {
                        d.v++;
                      }
                      vx.v += 0.0075;
                      vy.v += 0.0075;
                      vz.v += 0.0075;
                      var tmp$0;
                      tmp$0 = n.v - 1;
                      for (var i = 0; i <= tmp$0; i++) {
                        if (points1.v[i] > tpoint1.v[i]) {
                          tpoint1.v[i] = tpoint1.v[i] + 1;
                        }
                        if (points1.v[i] < tpoint1.v[i]) {
                          tpoint1.v[i] = tpoint1.v[i] - 1;
                        }
                        if (points2.v[i] > tpoint2.v[i]) {
                          tpoint2.v[i] = tpoint2.v[i] + 1;
                        }
                        if (points2.v[i] < tpoint2.v[i]) {
                          tpoint2.v[i] = tpoint2.v[i] - 1;
                        }
                        if (points3.v[i] > tpoint3.v[i]) {
                          tpoint3.v[i] = tpoint3.v[i] + 1;
                        }
                        if (points3.v[i] < tpoint3.v[i]) {
                          tpoint3.v[i] = tpoint3.v[i] - 1;
                        }
                        x3d = tpoint1.v[i];
                        y3d = tpoint2.v[i];
                        z3d = tpoint3.v[i];
                        ty = y3d * Math.cos(vx.v) - z3d * Math.sin(vx.v);
                        tz = y3d * Math.sin(vx.v) + z3d * Math.cos(vx.v);
                        tx = x3d * Math.cos(vy.v) - tz * Math.sin(vy.v);
                        tz = x3d * Math.sin(vy.v) + tz * Math.cos(vy.v);
                        ox = tx;
                        tx = tx * Math.cos(vz.v) - ty * Math.sin(vz.v);
                        ty = ox * Math.sin(vz.v) + ty * Math.cos(vz.v);
                        balls.v[i].position.x = 512 * tx / (d.v - tz) + (w.v / 2 | 0);
                        balls.v[i].position.y = (h.v / 2 | 0) - 512 * ty / (d.v - tz);
                      }
                      renderer.v.render(stage.v);
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_4.update$f(update));
                    };
                  },
                  nextObject$f: function (nextObject) {
                    return function () {
                      nextObject();
                    };
                  },
                  main$nextObject: function (current, objs, makeObject) {
                    return function nextObject() {
                      current.v++;
                      if (current.v > objs.v) {
                        current.v = 0;
                      }
                      makeObject(current.v);
                      window.setTimeout(_.net.abesto.kotlin.js.pixi.examples.example_4.nextObject$f(nextObject), 8000);
                    };
                  },
                  start$f: function (nextObject) {
                    return function () {
                      nextObject();
                    };
                  },
                  start$f_0: function (update) {
                    return function () {
                      update();
                    };
                  },
                  main$start: function (renderer, makeObject, n, points1, tpoint1, points2, tpoint2, points3, tpoint3, balls, stage, resize, nextObject, update) {
                    return function () {
                      var ballTexture = PIXI.Texture.fromImage('assets/pixel.png');
                      document.body.appendChild(renderer.v.view);
                      makeObject(0);
                      var tmp$0;
                      tmp$0 = n.v - 1;
                      for (var i = 0; i <= tmp$0; i++) {
                        tpoint1.v[i] = points1.v[i];
                        tpoint2.v[i] = points2.v[i];
                        tpoint3.v[i] = points3.v[i];
                        var tempBall = new PIXI.Sprite(ballTexture);
                        tempBall.anchor.x = 0.5;
                        tempBall.anchor.y = 0.5;
                        tempBall.alpha = 0.5;
                        balls.v[i] = tempBall;
                        stage.v.addChild(tempBall);
                      }
                      resize();
                      window.setTimeout(_.net.abesto.kotlin.js.pixi.examples.example_4.start$f(nextObject), 5000);
                      requestAnimFrame(_.net.abesto.kotlin.js.pixi.examples.example_4.start$f_0(update));
                    };
                  },
                  main$f: function (resize) {
                    return function () {
                      resize();
                    };
                  },
                  main$f_0: function (resize) {
                    return function () {
                      resize();
                    };
                  },
                  main$f_1: function (start) {
                    return function () {
                      start();
                    };
                  },
                  main: function (args) {
                    var w = {v: 1024};
                    var h = {v: 768};
                    var n = {v: 2000};
                    var d = {v: 1};
                    var current = {v: 1};
                    var objs = {v: 17};
                    var vx = {v: 0.0};
                    var vy = {v: 0.0};
                    var vz = {v: 0.0};
                    var points1 = {v: []};
                    var points2 = {v: []};
                    var points3 = {v: []};
                    var tpoint1 = {v: []};
                    var tpoint2 = {v: []};
                    var tpoint3 = {v: []};
                    var balls = {v: []};
                    var renderer = {v: PIXI.autoDetectRenderer(w.v, h.v)};
                    var stage = {v: new PIXI.Stage(0)};
                    var makeObject = _.net.abesto.kotlin.js.pixi.examples.example_4.main$makeObject(n, points1, points2, points3);
                    var resize = _.net.abesto.kotlin.js.pixi.examples.example_4.main$resize(w, h, renderer);
                    var update = _.net.abesto.kotlin.js.pixi.examples.example_4.main$update(d, vx, vy, vz, n, points1, tpoint1, points2, tpoint2, points3, tpoint3, w, balls, h, renderer, stage);
                    var nextObject = _.net.abesto.kotlin.js.pixi.examples.example_4.main$nextObject(current, objs, makeObject);
                    var start = _.net.abesto.kotlin.js.pixi.examples.example_4.main$start(renderer, makeObject, n, points1, tpoint1, points2, tpoint2, points3, tpoint3, balls, stage, resize, nextObject, update);
                    $(window).resize(_.net.abesto.kotlin.js.pixi.examples.example_4.main$f(resize));
                    window.onorientationchange = _.net.abesto.kotlin.js.pixi.examples.example_4.main$f_0(resize);
                    $(_.net.abesto.kotlin.js.pixi.examples.example_4.main$f_1(start));
                  }
                })
              })
            })
          })
        })
      })
    })
  });
  Kotlin.defineModule('app', _);
  _.net.abesto.kotlin.js.pixi.examples.example_4.main([]);
}(Kotlin));
