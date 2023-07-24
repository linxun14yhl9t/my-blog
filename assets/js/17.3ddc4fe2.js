(window.webpackJsonp = window.webpackJsonp || []).push([
  [17],
  {
    627: function (s, e, a) {
      "use strict";
      a.r(e);
      var n = a(5),
        t = Object(n.a)(
          {},
          function () {
            var s = this,
              e = s.$createElement,
              a = s._self._c || e;
            return a(
              "ContentSlotsDistributor",
              { attrs: { "slot-key": s.$parent.slotKey } },
              [
                a("p", [
                  a("img", {
                    attrs: {
                      src: "https://linxun14yhl9t.github.io/my-blog/blogsImg/15.jpg",
                      alt: "",
                    },
                  }),
                ]),
                s._v(" "),
                a(
                  "h2",
                  {
                    attrs: {
                      id: "_1-vue-无法检测实例被创建时不存在于-data-中的-property",
                    },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_1-vue-无法检测实例被创建时不存在于-data-中的-property",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 1. Vue 无法检测实例被创建时不存在于 "),
                    a("code", [s._v("data")]),
                    s._v(" 中的 property"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：由于 Vue 会在初始化实例时对 property 执行 "),
                    a("code", [s._v("getter/setter")]),
                    s._v(" 转化，所以 property 必须在 "),
                    a("code", [s._v("data")]),
                    s._v(" 对象上存在才能让 Vue 将它转换为响应式的。"),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language-js line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("var")]
                      ),
                      s._v(" vm "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v("=")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("new")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [s._v("Vue")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [s._v("data")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v(":")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(",")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// 页面不会变化")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [s._v("template")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v(":")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'<div>{{message}}</div>'"),
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(")")]
                      ),
                      s._v("\nvm"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(".")]
                      ),
                      s._v("message "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v("=")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'Hello!'"),
                      ]),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// `vm.message` 不是响应式的")]
                      ),
                      s._v("\n"),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                  ]),
                ]),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("div", { staticClass: "language-js line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-js" } }, [
                    a("code", [
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("var")]
                      ),
                      s._v(" vm "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v("=")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token keyword" } },
                        [s._v("new")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token class-name" } },
                        [s._v("Vue")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("(")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [s._v("data")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v(":")]
                      ),
                      s._v(" "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("{")]
                      ),
                      s._v("\n    "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token comment" } },
                        [s._v("// 声明 a、b 为一个空值字符串")]
                      ),
                      s._v("\n    "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [s._v("message")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v(":")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("''"),
                      ]),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(",")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(",")]
                      ),
                      s._v("\n  "),
                      a(
                        "span",
                        {
                          pre: !0,
                          attrs: { class: "token literal-property property" },
                        },
                        [s._v("template")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v(":")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'<div>{{ message }}</div>'"),
                      ]),
                      s._v("\n"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v("}")]
                      ),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(")")]
                      ),
                      s._v("\nvm"),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token punctuation" } },
                        [s._v(".")]
                      ),
                      s._v("message "),
                      a(
                        "span",
                        { pre: !0, attrs: { class: "token operator" } },
                        [s._v("=")]
                      ),
                      s._v(" "),
                      a("span", { pre: !0, attrs: { class: "token string" } }, [
                        s._v("'Hello!'"),
                      ]),
                      s._v("\n"),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  {
                    attrs: { id: "_2-vue-无法检测对象-property-的添加或移除" },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_2-vue-无法检测对象-property-的添加或移除",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 2. Vue 无法检测对象 property 的添加或移除"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：官方 - 由于 JavaScript（ES5） 的限制，Vue.js "),
                    a("strong", [s._v("不能检测到对象属性的添加或删除")]),
                    s._v(
                      "。因为 Vue.js 在初始化实例时将属性转为 getter/setter，所以属性必须在 "
                    ),
                    a("code", [s._v("data")]),
                    s._v(" 对象上才能让 Vue.js 转换它，才能让它是响应的。"),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "var vm = new Vue({\n  data:{\n    obj: {\n      id: 001\n    }\n  },\n  // 页面不会变化\n  template: '<div>{{ obj.message }}</div>'\n})\n\nvm.obj.message = 'hello' // 不是响应式的\ndelete vm.obj.id       // 不是非响应式的\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                  ]),
                ]),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "// 动态添加 - Vue.set\nVue.set(vm.obj, propertyName, newValue)\n\n// 动态添加 - vm.$set\nvm.$set(vm.obj, propertyName, newValue)\n\n// 动态添加多个 \n// 代替 `Object.assign(this.obj, { a: 1, b: 2 })`\nthis.obj = Object.assign({}, this.obj, { a: 1, b: 2 })\n\n// 动态移除 - Vue.delete\nVue.delete(vm.obj, propertyName)\n\n// 动态移除 - vm.$delete\nvm.$delete(vm.obj, propertyName)\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("13")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("14")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("15")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  {
                    attrs: {
                      id: "_3-vue-不能检测利用数组索引直接修改一个数组项",
                    },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_3-vue-不能检测利用数组索引直接修改一个数组项",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 3. Vue 不能检测利用数组索引直接修改一个数组项"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：官方 - 由于 JavaScript 的限制，Vue "),
                    a("strong", [s._v("不能检测")]),
                    s._v(
                      "数组和对象的变化；尤雨溪 - 性能代价和获得用户体验不成正比。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "var vm = new Vue({\n  data: {\n    items: ['a', 'b', 'c']\n  }\n})\nvm.items[1] = 'x' // 不是响应性的\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                  ]),
                ]),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "// Vue.set\nVue.set(vm.items, indexOfItem, newValue)\n\n// vm.$set\nvm.$set(vm.items, indexOfItem, newValue)\n\n// Array.prototype.splice\nvm.items.splice(indexOfItem, 1, newValue)\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  {
                    attrs: {
                      id: "拓展-object-defineproperty-可以监测数组的变化",
                    },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#拓展-object-defineproperty-可以监测数组的变化",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 拓展：Object.defineProperty() 可以监测数组的变化"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v(
                      "但对数组新增一个属性（index）不会监测到数据变化，因为无法监测到新增数组的下标（index），删除一个属性（index）也是。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "var arr = [1, 2, 3, 4]\narr.forEach(function(item, index) {\n Object.defineProperty(arr, index, {\n    set: function(value) {\n      console.log('触发 setter')\n      item = value\n    },\n    get: function() {\n      console.log('触发 getter')\n      return item\n    }\n  })\n})\narr[1] = '123'  // 触发 setter\narr[1]          // 触发 getter 返回值为 \"123\"\narr[5] = 5      // 不会触发 setter 和 getter\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("13")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("14")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("15")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("16")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  { attrs: { id: "_4-vue-不能监测直接修改数组长度的变化" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_4-vue-不能监测直接修改数组长度的变化",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 4. Vue 不能监测直接修改数组长度的变化"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：官方 - 由于 JavaScript 的限制，Vue "),
                    a("strong", [s._v("不能检测")]),
                    s._v(
                      "数组和对象的变化；尤雨溪 - 性能代价和获得用户体验不成正比。(Object.defineProperty() 可以监测数据的变化)"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "var vm = new Vue({\n  data: {\n    items: ['a', 'b', 'c']\n  }\n})\nvm.items.length = 2 // 不是响应性的\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                  ]),
                ]),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [s._v("vm.items.splice(newLength)\n")]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  {
                    attrs: { id: "_5-在异步更新执行之前操作-dom-数据不会变化" },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_5-在异步更新执行之前操作-dom-数据不会变化",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 5. 在异步更新执行之前操作 DOM 数据不会变化"),
                  ]
                ),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：Vue 在更新 DOM 时是"),
                    a("strong", [s._v("异步")]),
                    s._v(
                      "执行的。只要侦听到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。Vue 在内部对异步队列尝试使用原生的 "
                    ),
                    a("code", [s._v("Promise.then")]),
                    s._v("、"),
                    a("code", [s._v("MutationObserver")]),
                    s._v(" 和 "),
                    a("code", [s._v("setImmediate")]),
                    s._v("，如果执行环境不支持，则会采用 "),
                    a("code", [s._v("setTimeout(fn, 0)")]),
                    s._v(" 代替。"),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "<div id=\"example\">{{message}}</div>\nvar vm = new Vue({\n  el: '#example',\n  data: {\n    message: '123'\n  }\n})\nvm.message = 'new message' // 更改数据\nvm.$el.textContent === 'new message' // false\nvm.$el.style.color = 'red' // 页面没有变化\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                  ]),
                ]),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "var vm = new Vue({\n  el: '#example',\n  data: {\n    message: '123'\n  }\n})\nvm.message = 'new message' // 更改数据\n//使用 Vue.nextTick(callback) callback 将在 DOM 更新完成后被调用\nVue.nextTick(function () {\n  vm.$el.textContent === 'new message' // true\n  vm.$el.style.color = 'red' // 文字颜色变成红色\n})\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  { attrs: { id: "拓展-异步更新带来的数据响应的误解" } },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: { href: "#拓展-异步更新带来的数据响应的误解" },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 拓展：异步更新带来的数据响应的误解"),
                  ]
                ),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "\x3c!-- 页面显示：我更新啦！ --\x3e\n<div id=\"example\">{{message.text}}</div>\nvar vm = new Vue({\n  el: '#example',\n  data: {\n    message: {},\n  }\n})\nvm.$nextTick(function () {\n  this.message = {}\n  this.message.text = '我更新啦！'\n})\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                  ]),
                ]),
                a("p", [
                  s._v("上段代码中，我们在 "),
                  a("code", [s._v("data")]),
                  s._v(" 对象中声明了一个 "),
                  a("code", [s._v("message")]),
                  s._v(
                    " 空对象，然后在下次 DOM 更新循环结束之后触发的异步回调中，执行了如下两段代码："
                  ),
                ]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "this.message = {};\nthis.message.text = '我更新啦！'\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                  ]),
                ]),
                a("p", [
                  s._v("到这里，模版更新了，页面最后会显示 "),
                  a("code", [s._v("我更新啦！")]),
                  s._v("。"),
                ]),
                s._v(" "),
                a("p", [
                  a("strong", [
                    s._v(
                      "模板更新了，应该具有响应式特性，如果这么想那么你就已经走入了误区。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [
                  s._v("一开始我们在 "),
                  a("code", [s._v("data")]),
                  s._v(" 对象中只是声明了一个 "),
                  a("code", [s._v("message")]),
                  s._v(" 空对象，并不具有 "),
                  a("code", [s._v("text")]),
                  s._v(" 属性，所以该 "),
                  a("code", [s._v("text")]),
                  s._v(" 属性是不具有响应式特性的。"),
                ]),
                s._v(" "),
                a("p", [
                  a("strong", [
                    s._v("但模板切切实实已经更新了，这又是怎么回事呢？"),
                  ]),
                ]),
                s._v(" "),
                a("p", [
                  s._v("那是因为 Vue.js 的 DOM 更新是异步的，即当 "),
                  a("code", [s._v("setter")]),
                  s._v(
                    " 操作发生后，指令并不会立马更新，指令的更新操作会有一个延迟，当指令更新真正执行的时候，此时 "
                  ),
                  a("code", [s._v("text")]),
                  s._v(" 属性已经赋值，所以指令更新模板时得到的是新值。"),
                ]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("模板中每个指令/数据绑定都有一个对应的 "),
                    a("strong", [s._v("watcher")]),
                    s._v(
                      " 对象，在计算过程中它把属性记录为依赖。之后当依赖的 setter 被调用时，会触发 watcher 重新计算 ，也就会导致它的关联指令更新 DOM。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("具体流程如下所示：")]),
                s._v(" "),
                a("ul", [
                  a("li", [
                    s._v("执行 "),
                    a("code", [s._v("this.dataObj = {};")]),
                    s._v(" 时， "),
                    a("code", [s._v("setter")]),
                    s._v(" 被调用。"),
                  ]),
                  s._v(" "),
                  a("li", [
                    s._v("Vue.js 追踪到 "),
                    a("code", [s._v("message")]),
                    s._v(" 依赖的 "),
                    a("code", [s._v("setter")]),
                    s._v(" 被调用后，会触发 "),
                    a("code", [s._v("watcher")]),
                    s._v(" 重新计算。"),
                  ]),
                  s._v(" "),
                  a("li", [
                    a("code", [s._v("this.message.text = 'new text';")]),
                    s._v(" 对 "),
                    a("code", [s._v("text")]),
                    s._v(" 属性进行赋值。"),
                  ]),
                  s._v(" "),
                  a("li", [
                    s._v(
                      "异步回调逻辑执行结束之后，就会导致它的关联指令更新 DOM，指令更新开始执行。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [
                  s._v("所以真正的触发模版更新的操作是 "),
                  a("code", [s._v("this.message = {};")]),
                  s._v("这一句引起的，因为触发了 "),
                  a("code", [s._v("setter")]),
                  s._v("，所以单看上述例子，具有响应式特性的数据只有 "),
                  a("code", [s._v("message")]),
                  s._v(" 这一层，它的动态添加的属性是不具备的。"),
                ]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v(
                      "对应上述第二点 - Vue 无法检测对象 property 的添加或移除"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("h2", { attrs: { id: "_6-循环嵌套层级太深-视图不更新" } }, [
                  a(
                    "a",
                    {
                      staticClass: "header-anchor",
                      attrs: { href: "#_6-循环嵌套层级太深-视图不更新" },
                    },
                    [s._v("#")]
                  ),
                  s._v(" 6. 循环嵌套层级太深，视图不更新？"),
                ]),
                s._v(" "),
                a("p", [
                  s._v(
                    "看到网上有些人说数据更新的层级太深，导致数据不更新或者更新缓慢从而导致试图不更新？"
                  ),
                ]),
                s._v(" "),
                a("p", [
                  s._v(
                    "由于我没有遇到过这种情况，在我试图重现这种场景的情况下，发现并没有上述情况的发生，所以对于这一点不进行过多描述（如果有人在真实场景下遇到这种情况留个言吧）。"
                  ),
                ]),
                s._v(" "),
                a("p", [
                  s._v("针对上述情况有人给出的解决方案是使用强制更新："),
                ]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v(
                      "如果你发现你自己需要在 Vue 中做一次强制更新，99.9% 的情况，是你在某个地方做错了事。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [s._v("vm.$forceUpdate()\n")]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                  ]),
                ]),
                a(
                  "h2",
                  {
                    attrs: {
                      id: "_7-拓展-路由参数变化时-页面不更新-数据不更新",
                    },
                  },
                  [
                    a(
                      "a",
                      {
                        staticClass: "header-anchor",
                        attrs: {
                          href: "#_7-拓展-路由参数变化时-页面不更新-数据不更新",
                        },
                      },
                      [s._v("#")]
                    ),
                    s._v(" 7. 拓展：路由参数变化时，页面不更新（数据不更新）"),
                  ]
                ),
                s._v(" "),
                a("p", [
                  s._v(
                    "拓展一个因为路由参数变化，而导致页面不更新的问题，页面不更新本质上就是数据没有更新。"
                  ),
                ]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("原因：路由视图组件"),
                    a("strong", [s._v("引用了相同组件")]),
                    s._v(
                      "时，当路由参会变化时，会导致该组件无法更新，也就是我们常说中的页面无法更新的问题。"
                    ),
                  ]),
                ]),
                s._v(" "),
                a("p", [s._v("场景：")]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "<div id=\"app\">\n  <ul>\n    <li><router-link to=\"/home/foo\">To Foo</router-link></li> \n    <li><router-link to=\"/home/baz\">To Baz</router-link></li> \n    <li><router-link to=\"/home/bar\">To Bar</router-link></li> \n  </ul> \n  <router-view></router-view>\n</div>\nconst Home = {\n  template: `<div>{{message}}</div>`,\n  data() {\n    return {\n      message: this.$route.params.name\n    }\n  }\n}\n\nconst router = new VueRouter({\n  mode:'history',\n routes: [\n    {path: '/home', component: Home },\n    {path: '/home/:name', component: Home }\n  ]\n})\n\nnew Vue({\n  el: '#app',\n  router\n})\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("13")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("14")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("15")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("16")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("17")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("18")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("19")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("20")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("21")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("22")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("23")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("24")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("25")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("26")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("27")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("28")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("29")]),
                    a("br"),
                  ]),
                ]),
                a("p", [
                  s._v("上段代码中，我们在路由构建选项 "),
                  a("code", [s._v("routes")]),
                  s._v(" 中配置了一个动态路由 "),
                  a("code", [s._v("'/home/:name'")]),
                  s._v("，它们共用一个路由组件 "),
                  a("code", [s._v("Home")]),
                  s._v("，这代表他们复用 "),
                  a("code", [s._v("RouterView")]),
                  s._v(" 。"),
                ]),
                s._v(" "),
                a("p", [
                  s._v(
                    "当进行路由切换时，页面只会渲染第一次路由匹配到的参数，之后再进行路由切换时，"
                  ),
                  a("code", [s._v("message")]),
                  s._v(" 是没有变化的。"),
                ]),
                s._v(" "),
                a("p", [s._v("解决办法：")]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("解决的办法有很多种，这里只列举我常用到一种方法。"),
                  ]),
                ]),
                s._v(" "),
                a("ol", [
                  a("li", [
                    s._v("通过 "),
                    a("code", [s._v("watch")]),
                    s._v(" 监听 "),
                    a("code", [s._v("$route")]),
                    s._v(" 的变化。"),
                  ]),
                ]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        "const Home = {\n  template: `<div>{{message}}</div>`,\n  data() {\n    return {\n      message: this.$route.params.name\n    }\n  },\n  watch: {\n   '$route': function() {\n      this.message = this.$route.params.name\n    }\n }\n}\n...\nnew Vue({\n  el: '#app',\n  router\n})\n"
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("5")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("6")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("7")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("8")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("9")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("10")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("11")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("12")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("13")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("14")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("15")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("16")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("17")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("18")]),
                    a("br"),
                  ]),
                ]),
                a("ol", [
                  a("li", [
                    s._v("给 "),
                    a("code", [s._v("<router-view></router-view>")]),
                    s._v(" 绑定 "),
                    a("code", [s._v("key")]),
                    s._v(" 属性，这样 Vue 就会认为这是不同的 "),
                    a("code", [s._v("<router-view>")]),
                    s._v("。"),
                  ]),
                ]),
                s._v(" "),
                a("blockquote", [
                  a("p", [
                    s._v("弊端：如果从 "),
                    a("code", [s._v("/home")]),
                    s._v(" 跳转到 "),
                    a("code", [s._v("/user")]),
                    s._v(
                      " 等其他路由下，我们是不用担心组件更新问题的，所以这个时候 "
                    ),
                    a("code", [s._v("key")]),
                    s._v(" 属性是多余的。"),
                  ]),
                ]),
                s._v(" "),
                a("div", { staticClass: "language- line-numbers-mode" }, [
                  a("pre", { pre: !0, attrs: { class: "language-text" } }, [
                    a("code", [
                      s._v(
                        '<div id="app">\n  ...\n  <router-view :key="key"></router-view>\n</div>\n'
                      ),
                    ]),
                  ]),
                  s._v(" "),
                  a("div", { staticClass: "line-numbers-wrapper" }, [
                    a("span", { staticClass: "line-number" }, [s._v("1")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("2")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("3")]),
                    a("br"),
                    a("span", { staticClass: "line-number" }, [s._v("4")]),
                    a("br"),
                  ]),
                ]),
              ]
            );
          },
          [],
          !1,
          null,
          null,
          null
        );
      e.default = t.exports;
    },
  },
]);
