(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[235],{

/***/ 997:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/drawer.md?vue&type=template&id=077e0fae

var drawervue_type_template_id_077e0fae_hoisted_1 = {
  class: "content element-doc"
};

var drawervue_type_template_id_077e0fae_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawer ");

var drawervue_type_template_id_077e0fae_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("例えば、巨大なフォームを持っていたり、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "terms & conditions"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のようなものを表示するためのスペースが必要な場合、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" とほぼ同じ API を持っていますが、ユーザーエクスペリエンスが異なります。")], -1);

var drawervue_type_template_id_077e0fae_hoisted_4 = {
  class: "tip"
};

var drawervue_type_template_id_077e0fae_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Translation needed ");

var drawervue_type_template_id_077e0fae_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Since v-model is natively supported for all components, "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "visible.sync"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" has been deprecated, use "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "v-model=\"visibilityBinding\""), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" to control the visibility of the current drawer.")], -1);

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基本的な使い方 ");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "一時的にDrawerを多方向から呼び出す", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" には "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のように "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "model-value"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を設定して "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 自体の表示を制御する必要があります。"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" は名前付きスロットで、タイトルは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" という属性を使って設定することもできます。デフォルトでは、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("はブラウザウィンドウの"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("30%"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "の大きさの"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("右隅から")]), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("左隅に向かって展開します。このデフォルトの動作を変更するには、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "direction"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" と "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "size"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を設定します。このショーケースでは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" API の使い方も紹介しました。さらに詳しく知りたい場合は Attributesセクションもご覧ください。")])], -1);

var _hoisted_10 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-radio-group v-model=\"direction\">\n  <el-radio label=\"ltr\">left to right</el-radio>\n  <el-radio label=\"rtl\">right to left</el-radio>\n  <el-radio label=\"ttb\">top to bottom</el-radio>\n  <el-radio label=\"btt\">bottom to top</el-radio>\n</el-radio-group>\n\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :direction=\"direction\"\n  :before-close=\"handleClose\">\n  <span>Hi, there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        direction: 'rtl',\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('Are you sure you want to close this?')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const direction = ref('rtl');\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('Are you sure you want to close this?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        direction,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_11 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("タイトルなし ");

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "タイトルが不要になったら、引き出しからタイトルを外すことができます。", -1);

var _hoisted_13 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("withHeader"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "属性を**false**に設定すると、タイトルを削除することができます。アクセスしやすいようにしたい場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("title`属性を設定してください。")])], -1);

var _hoisted_14 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I am the title\"\n  v-model=\"drawer\"\n  :with-header=\"false\">\n  <span>Hi there!</span>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n      };\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      return {\n        drawer: ref(false),\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_15 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("カスタマイズコンテンツ ");

var _hoisted_16 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ダイアログと同様に、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("はあなたが望むように多くの多様なインタラクションを行うことができる。")], -1);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<el-button type=\"text\" @click=\"table = true\">Open Drawer with nested table</el-button>\n<el-button type=\"text\" @click=\"dialog = true\">Open Drawer with nested form</el-button>\n<el-drawer\n  title=\"I have a nested table inside!\"\n  v-model=\"table\"\n  direction=\"rtl\"\n  size=\"50%\">\n   <el-table :data=\"gridData\">\n      <el-table-column property=\"date\" label=\"Date\" width=\"150\"></el-table-column>\n      <el-table-column property=\"name\" label=\"Name\" width=\"200\"></el-table-column>\n      <el-table-column property=\"address\" label=\"Address\"></el-table-column>\n    </el-table>\n</el-drawer>\n\n<el-drawer\n  title=\"I have a nested form inside!\"\n  :before-close=\"handleClose\"\n  v-model=\"dialog\"\n  direction=\"ltr\"\n  custom-class=\"demo-drawer\"\n  ref=\"drawer\"\n  >\n  <div class=\"demo-drawer__content\">\n    <el-form :model=\"form\">\n      <el-form-item label=\"Name\" :label-width=\"formLabelWidth\">\n        <el-input v-model=\"form.name\" autocomplete=\"off\"></el-input>\n      </el-form-item>\n      <el-form-item label=\"Area\" :label-width=\"formLabelWidth\">\n        <el-select v-model=\"form.region\" placeholder=\"Please select activity area\">\n          <el-option label=\"Area1\" value=\"shanghai\"></el-option>\n          <el-option label=\"Area2\" value=\"beijing\"></el-option>\n        </el-select>\n      </el-form-item>\n    </el-form>\n    <div class=\"demo-drawer__footer\">\n      <el-button @click=\"cancelForm\">Cancel</el-button>\n      <el-button type=\"primary\" @click=\"$refs.drawer.closeDrawer()\" :loading=\"loading\">{{ loading ? 'Submitting ...' : 'Submit' }}</el-button>\n    </div>\n  </div>\n</el-drawer>\n\n<script>\nexport default {\n  data() {\n    return {\n      table: false,\n      dialog: false,\n      loading: false,\n      gridData: [{\n        date: '2016-05-02',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-04',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-01',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }, {\n        date: '2016-05-03',\n        name: 'Peter Parker',\n        address: 'Queens, New York City'\n      }],\n      form: {\n        name: '',\n        region: '',\n        date1: '',\n        date2: '',\n        delivery: false,\n        type: [],\n        resource: '',\n        desc: ''\n      },\n      formLabelWidth: '80px',\n      timer: null,\n    };\n  },\n  methods: {\n    handleClose(done) {\n      if (this.loading) {\n        return;\n      }\n      this.$confirm('Do you want to submit?')\n        .then(_ => {\n          this.loading = true;\n          this.timer = setTimeout(() => {\n            done();\n            // animation takes time\n            setTimeout(() => {\n              this.loading = false;\n            }, 400);\n          }, 2000);\n        })\n        .catch(_ => {});\n    },\n    cancelForm() {\n      this.loading = false;\n      this.dialog = false;\n      clearTimeout(this.timer);\n    }\n  }\n}\n</script>\n<!--\n<setup>\n\nimport {defineComponent, reactive, toRefs } from 'vue';\nimport { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const state = reactive({\n        table: false,\n        dialog: false,\n        loading: false,\n        gridData: [\n          {\n            date: '2016-05-02',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-04',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-01',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n          {\n            date: '2016-05-03',\n            name: 'Peter Parker',\n            address: 'Queens, New York City',\n          },\n        ],\n        form: {\n          name: '',\n          region: '',\n          date1: '',\n          date2: '',\n          delivery: false,\n          type: [],\n          resource: '',\n          desc: '',\n        },\n        formLabelWidth: '80px',\n        timer: null,\n      });\n\n      const handleClose = (done) => {\n        if (state.loading) {\n          return;\n        }\n        ElMessageBox\n          .confirm('Do you want to submit?')\n          .then((_) => {\n            state.loading = true;\n            state.timer = setTimeout(() => {\n              done();\n              // 动画关闭需要一定的时间\n              setTimeout(() => {\n                state.loading = false;\n              }, 400);\n            }, 2000);\n          })\n          .catch((_) => {});\n      };\n\n      const cancelForm = () => {\n        state.loading = false;\n        state.dialog = false;\n        clearTimeout(state.timer);\n      };\n\n      return {\n        ...toRefs(state),\n        handleClose,\n        cancelForm,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_18 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("入れ子にしたDrawer ");

var _hoisted_19 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Dialog"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" のように "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "Drawer"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を複数のレイヤーで構成することもできる。")], -1);

var _hoisted_20 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("異なるレイヤーに複数のDrawerが必要な場合は、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" 属性を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("strong", null, "true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" に設定しなければなりません。")])], -1);

var _hoisted_21 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "\n<el-button @click=\"drawer = true\" type=\"primary\" style=\"margin-left: 16px;\">\n  open\n</el-button>\n\n<el-drawer\n  title=\"I'm outer Drawer\"\n  v-model=\"drawer\"\n  size=\"50%\">\n  <div>\n   <el-button @click=\"innerDrawer = true\">Click me!</el-button>\n   <el-drawer\n     title=\"I'm inner Drawer\"\n     :append-to-body=\"true\"\n     :before-close=\"handleClose\"\n     v-model=\"innerDrawer\">\n     <p>_(:зゝ∠)_</p>\n   </el-drawer>\n  </div>\n</el-drawer>\n\n<script>\n  export default {\n    data() {\n      return {\n        drawer: false,\n        innerDrawer: false,\n      };\n    },\n    methods: {\n      handleClose(done) {\n        this.$confirm('You still have unsaved data, proceed?')\n          .then(_ => {\n            done();\n          })\n          .catch(_ => {});\n      }\n    }\n  };\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n  import { ElMessageBox } from 'element-plus';\n\n  export default defineComponent({\n    setup() {\n\n      const drawer = ref(false);\n      const innerDrawer = ref(false);\n      const handleClose = (done) => {\n        ElMessageBox\n          .confirm('You still have unsaved data, proceed?')\n          .then((_) => {\n            done();\n          })\n          .catch((_) => {});\n      };\n      return {\n        drawer,\n        innerDrawer,\n        handleClose,\n      };\n    },\n  });\n\n</setup>\n-->\n\n")], -1);

var _hoisted_22 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawer内のコンテンツは遅延レンダリングされるべきであり、これはDrawer内のコンテンツが初期レンダリングのパフォーマンスに影響を与えないことを意味します。したがって、DOM の操作は "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "ref"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を介して行うか、"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "open"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" イベントが発生した後に行うべきである。")])], -1);

var _hoisted_23 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", {
  class: "tip"
}, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawerは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "destroyOnClose"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" というAPIを提供しています。これはフラグ変数であり、Drawerが閉じられた後にDrawer内の子コンテンツを破棄することを示します。Drawerが開くたびに "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "mounted"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" ライフサイクルを呼び出す必要がある場合にこのAPIを利用することができます。")])], -1);

var _hoisted_24 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawer属性 ");

var _hoisted_25 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Parameter</th><th>Description</th><th>Type</th><th>Acceptable Values</th><th>Defaults</th></tr></thead><tbody><tr><td>model-value / v-model</td><td>Drawerを表示する場合は、</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>append-to-body</td><td>DrawerがDocumentBody要素に挿入されている場合のコントロールは、ネストされたDrawerはこのパラメータを<strong>true</strong>に割り当てなければなりません。</td><td>boolean</td><td>—</td><td>false</td></tr><tr><td>lock-scroll</td><td>Drawer 表示中にボディのスクロールを無効にするかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>before-close</td><td>設定されている場合は、終了処理を停止します。</td><td>function(done), done is function type that accepts a boolean as parameter, calling done with true or without parameter will abort the close procedure</td><td>—</td><td>—</td></tr><tr><td>close-on-click-modal</td><td>Drawer を閉じることができるかどうか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>close-on-press-escape</td><td>ESC を押してDrawerを閉じることができるかどうかを示す。</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>open-delay</td><td>Time(milliseconds) before open</td><td>number</td><td>—</td><td>0</td></tr><tr><td>close-delay</td><td>Time(milliseconds) before close</td><td>number</td><td>—</td><td>0</td></tr><tr><td>custom-class</td><td>Drawerの追加クラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>destroy-on-close</td><td>Drawerが閉じた後にChildrenが破壊されるべきかどうかを示す</td><td>boolean</td><td>-</td><td>false</td></tr><tr><td>modal</td><td>シャドウイングレイヤーを表示するか</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>direction</td><td>Drawerの開き方向</td><td>Direction</td><td>rtl / ltr / ttb / btt</td><td>rtl</td></tr><tr><td>show-close</td><td>Drawerの右上に閉じるボタンを表示するようにした</td><td>boolean</td><td>—</td><td>true</td></tr><tr><td>size</td><td>Drawerのサイズ, ドローワが水平モードの場合は幅プロパティ, そうでない場合は高さプロパティ, サイズが <code>number</code> 型の場合はピクセル単位でサイズを記述します; サイズが <code>string</code> 型の場合は <code>x%</code> 記法を用います, それ以外の場合はピクセル単位で解釈されます</td><td>number / string</td><td>-</td><td>&#39;30%&#39;</td></tr><tr><td>title</td><td>Drawerのタイトルは、スロットの名前を指定して設定することもできます。</td><td>string</td><td>—</td><td>—</td></tr><tr><td>withHeader</td><td>デフォルトは true で、withHeader が false に設定されている場合は <code>title attribute</code> と <code>title slot</code> の両方が動作しません。</td><td>boolean</td><td>-</td><td>true</td></tr><tr><td>modal-class</td><td>シャドウレイヤーの追加クラス名</td><td>string</td><td>—</td><td>—</td></tr><tr><td>z-index</td><td>set z-index</td><td>number</td><td>-</td><td>-</td></tr></tbody></table>", 1);

var _hoisted_26 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawerスロット ");

var _hoisted_27 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Drawerの内容")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "title"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Drawerタイトルセクション")])])], -1);

var _hoisted_28 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawerメソッド ");

var _hoisted_29 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "handleClose"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawerを閉じるには、このメソッドは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "before-close"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" を呼び出す。")])])])], -1);

var _hoisted_30 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Drawerイベント ");

var _hoisted_31 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameter</th></tr></thead><tbody><tr><td>open</td><td>Drawerのオープニングアニメーションが始まる前にトリガーされます。</td><td>—</td></tr><tr><td>opened</td><td>Drawerのオープニングアニメーションが終わった後にトリガーされます。</td><td>—</td></tr><tr><td>close</td><td>Drawerのクロージングアニメーションが始まる前にトリガーされます。</td><td>—</td></tr><tr><td>closed</td><td>Drawerのクロージングアニメーションが終わった後にトリガーされます。</td><td>—</td></tr></tbody></table>", 1);

function drawervue_type_template_id_077e0fae_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", drawervue_type_template_id_077e0fae_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "drawer",
    content: "Drawer",
    href: "#drawer",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [drawervue_type_template_id_077e0fae_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#drawer"
      })];
    }),
    _: 1
  }), drawervue_type_template_id_077e0fae_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])("div", drawervue_type_template_id_077e0fae_hoisted_4, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "translation-needed",
    content: "Translation needed",
    href: "#translation-needed",
    level: "4"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [drawervue_type_template_id_077e0fae_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#translation-needed"
      })];
    }),
    _: 1
  }), drawervue_type_template_id_077e0fae_hoisted_6]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-ben-dena-shii-fang",
    content: "基本的な使い方",
    href: "#ji-ben-dena-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_7, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-ben-dena-shii-fang"
      })];
    }),
    _: 1
  }), _hoisted_8, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_10];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_9];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "taitorunasi",
    content: "タイトルなし",
    href: "#taitorunasi",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_11, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#taitorunasi"
      })];
    }),
    _: 1
  }), _hoisted_12, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_14];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_13];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "kasutamaizukontentu",
    content: "カスタマイズコンテンツ",
    href: "#kasutamaizukontentu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_15, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#kasutamaizukontentu"
      })];
    }),
    _: 1
  }), _hoisted_16, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_17];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rure-zinisitadrawer",
    content: "入れ子にしたDrawer",
    href: "#rure-zinisitadrawer",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_18, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rure-zinisitadrawer"
      })];
    }),
    _: 1
  }), _hoisted_19, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_21];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_20];
    }),
    _: 1
  }), _hoisted_22, _hoisted_23, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "drawer-shu-xing",
    content: "Drawer属性",
    href: "#drawer-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_24, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#drawer-shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_25, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "drawersurotuto",
    content: "Drawerスロット",
    href: "#drawersurotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_26, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#drawersurotuto"
      })];
    }),
    _: 1
  }), _hoisted_27, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "drawermesotudo",
    content: "Drawerメソッド",
    href: "#drawermesotudo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_28, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#drawermesotudo"
      })];
    }),
    _: 1
  }), _hoisted_29, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "draweribento",
    content: "Drawerイベント",
    href: "#draweribento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_30, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#draweribento"
      })];
    }),
    _: 1
  }), _hoisted_31, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/drawer.md?vue&type=template&id=077e0fae

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/drawer.md?vue&type=script&lang=ts


/* harmony default export */ var drawervue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("left to right");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("right to left");

      var _hoisted_3 = /*#__PURE__*/_createTextVNode("top to bottom");

      var _hoisted_4 = /*#__PURE__*/_createTextVNode("bottom to top");

      var _hoisted_5 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_6 = /*#__PURE__*/_createVNode("span", null, "Hi, there!", -1);

      function render(_ctx, _cache) {
        var _component_el_radio = _resolveComponent("el-radio");

        var _component_el_radio_group = _resolveComponent("el-radio-group");

        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_radio_group, {
          modelValue: _ctx.direction,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
            return _ctx.direction = $event;
          })
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_radio, {
              label: "ltr"
            }, {
              default: _withCtx(function () {
                return [_hoisted_1];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "rtl"
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "ttb"
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }), _createVNode(_component_el_radio, {
              label: "btt"
            }, {
              default: _withCtx(function () {
                return [_hoisted_4];
              }),
              _: 1
            })];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_button, {
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_5];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.drawer = $event;
          }),
          direction: _ctx.direction,
          "before-close": _ctx.handleClose
        }, {
          default: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["modelValue", "direction", "before-close"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false,
            direction: 'rtl'
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('Are you sure you want to close this?').then(function (_) {
              done();
            }).catch(function (_) {});
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_2 = /*#__PURE__*/_createVNode("span", null, "Hi there!", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I am the title",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
            return _ctx.drawer = $event;
          }),
          "with-header": false
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _toDisplayString = vue_esm_browser_prod["U" /* toDisplayString */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode("Open Drawer with nested table");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Open Drawer with nested form");

      var _hoisted_3 = {
        class: "demo-drawer__content"
      };
      var _hoisted_4 = {
        class: "demo-drawer__footer"
      };

      var _hoisted_5 = /*#__PURE__*/_createTextVNode("Cancel");

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_table_column = _resolveComponent("el-table-column");

        var _component_el_table = _resolveComponent("el-table");

        var _component_el_drawer = _resolveComponent("el-drawer");

        var _component_el_input = _resolveComponent("el-input");

        var _component_el_form_item = _resolveComponent("el-form-item");

        var _component_el_option = _resolveComponent("el-option");

        var _component_el_select = _resolveComponent("el-select");

        var _component_el_form = _resolveComponent("el-form");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.table = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_button, {
          type: "text",
          onClick: _cache[2] || (_cache[2] = function ($event) {
            return _ctx.dialog = true;
          })
        }, {
          default: _withCtx(function () {
            return [_hoisted_2];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I have a nested table inside!",
          modelValue: _ctx.table,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
            return _ctx.table = $event;
          }),
          direction: "rtl",
          size: "50%"
        }, {
          default: _withCtx(function () {
            return [_createVNode(_component_el_table, {
              data: _ctx.gridData
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_table_column, {
                  property: "date",
                  label: "Date",
                  width: "150"
                }), _createVNode(_component_el_table_column, {
                  property: "name",
                  label: "Name",
                  width: "200"
                }), _createVNode(_component_el_table_column, {
                  property: "address",
                  label: "Address"
                })];
              }),
              _: 1
            }, 8, ["data"])];
          }),
          _: 1
        }, 8, ["modelValue"]), _createVNode(_component_el_drawer, {
          title: "I have a nested form inside!",
          "before-close": _ctx.handleClose,
          modelValue: _ctx.dialog,
          "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
            return _ctx.dialog = $event;
          }),
          direction: "ltr",
          "custom-class": "demo-drawer",
          ref: "drawer"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", _hoisted_3, [_createVNode(_component_el_form, {
              model: _ctx.form
            }, {
              default: _withCtx(function () {
                return [_createVNode(_component_el_form_item, {
                  label: "Name",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_input, {
                      modelValue: _ctx.form.name,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
                        return _ctx.form.name = $event;
                      }),
                      autocomplete: "off"
                    }, null, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"]), _createVNode(_component_el_form_item, {
                  label: "Area",
                  "label-width": _ctx.formLabelWidth
                }, {
                  default: _withCtx(function () {
                    return [_createVNode(_component_el_select, {
                      modelValue: _ctx.form.region,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
                        return _ctx.form.region = $event;
                      }),
                      placeholder: "Please select activity area"
                    }, {
                      default: _withCtx(function () {
                        return [_createVNode(_component_el_option, {
                          label: "Area1",
                          value: "shanghai"
                        }), _createVNode(_component_el_option, {
                          label: "Area2",
                          value: "beijing"
                        })];
                      }),
                      _: 1
                    }, 8, ["modelValue"])];
                  }),
                  _: 1
                }, 8, ["label-width"])];
              }),
              _: 1
            }, 8, ["model"]), _createVNode("div", _hoisted_4, [_createVNode(_component_el_button, {
              onClick: _ctx.cancelForm
            }, {
              default: _withCtx(function () {
                return [_hoisted_5];
              }),
              _: 1
            }, 8, ["onClick"]), _createVNode(_component_el_button, {
              type: "primary",
              onClick: _cache[6] || (_cache[6] = function ($event) {
                return _ctx.$refs.drawer.closeDrawer();
              }),
              loading: _ctx.loading
            }, {
              default: _withCtx(function () {
                return [_createTextVNode(_toDisplayString(_ctx.loading ? 'Submitting ...' : 'Submit'), 1)];
              }),
              _: 1
            }, 8, ["loading"])])])];
          }),
          _: 1
        }, 8, ["before-close", "modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            table: false,
            dialog: false,
            loading: false,
            gridData: [{
              date: '2016-05-02',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-04',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-01',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }, {
              date: '2016-05-03',
              name: 'Peter Parker',
              address: 'Queens, New York City'
            }],
            form: {
              name: '',
              region: '',
              date1: '',
              date2: '',
              delivery: false,
              type: [],
              resource: '',
              desc: ''
            },
            formLabelWidth: '80px',
            timer: null
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            var _this = this;

            if (this.loading) {
              return;
            }

            this.$confirm('Do you want to submit?').then(function (_) {
              _this.loading = true;
              _this.timer = setTimeout(function () {
                done(); // animation takes time

                setTimeout(function () {
                  _this.loading = false;
                }, 400);
              }, 2000);
            }).catch(function (_) {});
          },
          cancelForm: function cancelForm() {
            this.loading = false;
            this.dialog = false;
            clearTimeout(this.timer);
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];

      var _hoisted_1 = /*#__PURE__*/_createTextVNode(" open ");

      var _hoisted_2 = /*#__PURE__*/_createTextVNode("Click me!");

      var _hoisted_3 = /*#__PURE__*/_createVNode("p", null, "_(:зゝ∠)_", -1);

      function render(_ctx, _cache) {
        var _component_el_button = _resolveComponent("el-button");

        var _component_el_drawer = _resolveComponent("el-drawer");

        return _openBlock(), _createBlock("div", null, [_createVNode(_component_el_button, {
          onClick: _cache[1] || (_cache[1] = function ($event) {
            return _ctx.drawer = true;
          }),
          type: "primary",
          style: {
            "margin-left": "16px"
          }
        }, {
          default: _withCtx(function () {
            return [_hoisted_1];
          }),
          _: 1
        }), _createVNode(_component_el_drawer, {
          title: "I'm outer Drawer",
          modelValue: _ctx.drawer,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
            return _ctx.drawer = $event;
          }),
          size: "50%"
        }, {
          default: _withCtx(function () {
            return [_createVNode("div", null, [_createVNode(_component_el_button, {
              onClick: _cache[2] || (_cache[2] = function ($event) {
                return _ctx.innerDrawer = true;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_2];
              }),
              _: 1
            }), _createVNode(_component_el_drawer, {
              title: "I'm inner Drawer",
              "append-to-body": true,
              "before-close": _ctx.handleClose,
              modelValue: _ctx.innerDrawer,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
                return _ctx.innerDrawer = $event;
              })
            }, {
              default: _withCtx(function () {
                return [_hoisted_3];
              }),
              _: 1
            }, 8, ["before-close", "modelValue"])])];
          }),
          _: 1
        }, 8, ["modelValue"])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            drawer: false,
            innerDrawer: false
          };
        },
        methods: {
          handleClose: function handleClose(done) {
            this.$confirm('You still have unsaved data, proceed?').then(function (_) {
              done();
            }).catch(function (_) {});
          }
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/drawer.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/drawer.md



drawervue_type_script_lang_ts.render = drawervue_type_template_id_077e0fae_render

/* harmony default export */ var drawer = __webpack_exports__["default"] = (drawervue_type_script_lang_ts);

/***/ })

}]);