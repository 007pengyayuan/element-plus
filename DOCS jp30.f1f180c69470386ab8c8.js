(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[242],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.esm-browser.prod.js
var vue_esm_browser_prod = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist/templateLoader.js??ref--6!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/image.md?vue&type=template&id=5ae2ff1b

var imagevue_type_template_id_5ae2ff1b_hoisted_1 = {
  class: "content element-doc"
};

var imagevue_type_template_id_5ae2ff1b_hoisted_2 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("イメージ ");

var imagevue_type_template_id_5ae2ff1b_hoisted_3 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, "imgのネイティブ機能の他に、遅延ロード、カスタムプレースホルダ、ロード失敗などをサポートしています。", -1);

var imagevue_type_template_id_5ae2ff1b_hoisted_4 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("基本的な使い方 ");

var imagevue_type_template_id_5ae2ff1b_hoisted_5 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ネイティブの ");

var imagevue_type_template_id_5ae2ff1b_hoisted_6 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("object-fit");

var _hoisted_7 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("と同じように、");

var _hoisted_8 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "fit", -1);

var _hoisted_9 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("で画像のサイズをコンテナに合わせてリサイズする方法を指定します。");

var _hoisted_10 = {
  class: "example-code"
};
var _hoisted_11 = {
  class: "hljs language-html"
};

var _hoisted_12 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;demo-image&quot;</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">div</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;block&quot;</span> <span class=\"hljs-attr\">v-for</span>=<span class=\"hljs-string\">&quot;fit in fits&quot;</span> <span class=\"hljs-attr\">:key</span>=<span class=\"hljs-string\">&quot;fit&quot;</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">span</span> <span class=\"hljs-attr\">class</span>=<span class=\"hljs-string\">&quot;demonstration&quot;</span>&gt;</span>", 5);

var _hoisted_17 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">span</span>&gt;</span>\n    <span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">el-image</span>\n      <span class=\"hljs-attr\">style</span>=<span class=\"hljs-string\">&quot;width: 100px; height: 100px&quot;</span>\n      <span class=\"hljs-attr\">:src</span>=<span class=\"hljs-string\">&quot;url&quot;</span>\n      <span class=\"hljs-attr\">:fit</span>=<span class=\"hljs-string\">&quot;fit&quot;</span>&gt;</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">el-image</span>&gt;</span>\n  <span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n<span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">div</span>&gt;</span>\n\n<span class=\"hljs-tag\">&lt;<span class=\"hljs-name\">script</span>&gt;</span><span class=\"javascript\">\n  <span class=\"hljs-keyword\">export</span> <span class=\"hljs-keyword\">default</span> {\n    <span class=\"hljs-function\"><span class=\"hljs-title\">data</span>(<span class=\"hljs-params\"></span>)</span> {\n      <span class=\"hljs-keyword\">return</span> {\n        <span class=\"hljs-attr\">fits</span>: [<span class=\"hljs-string\">&#39;fill&#39;</span>, <span class=\"hljs-string\">&#39;contain&#39;</span>, <span class=\"hljs-string\">&#39;cover&#39;</span>, <span class=\"hljs-string\">&#39;none&#39;</span>, <span class=\"hljs-string\">&#39;scale-down&#39;</span>],\n        <span class=\"hljs-attr\">url</span>: <span class=\"hljs-string\">&#39;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&#39;</span>\n      }\n    }\n  }\n</span><span class=\"hljs-tag\">&lt;/<span class=\"hljs-name\">script</span>&gt;</span>\n<span class=\"hljs-comment\">&lt;!--\n&lt;setup&gt;\n\n  import { defineComponent, reactive, toRefs } from &#39;vue&#39;;\n\n  export default defineComponent({\n    setup() {\n      const state = reactive({\n        fits: [&#39;fill&#39;, &#39;contain&#39;, &#39;cover&#39;, &#39;none&#39;, &#39;scale-down&#39;],\n        url: &#39;https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg&#39;\n      });\n\n      return {\n        ...toRefs(state),\n      };\n    },\n  });\n&lt;/setup&gt;\n--&gt;</span>\n", 15);

var _hoisted_32 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("span", {
  class: "lang-mark"
}, "html", -1);

var _hoisted_33 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, ":::", -1);

var _hoisted_34 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("プレースホルダ ");

var _hoisted_35 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("画像がまだ読み込まれていない場合のカスタムプレースホルダの内容を "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot = placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で指定します。")])], -1);

var _hoisted_36 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__placeholder\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-image :src=\"src\"></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Custom</span>\n    <el-image :src=\"src\">\n      <template #placeholder>\n        <div class=\"image-slot\">\n          Loading<span class=\"dot\">...</span>\n        </div>\n      </template>\n    </el-image>\n  </div>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const src = ref('https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg');\n\n      return {\n        src,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_37 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ロード失敗 ");

var _hoisted_38 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "slot = error"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で画像読み込みにエラーが発生した場合のカスタム失敗コンテンツ")])], -1);

var _hoisted_39 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__error\">\n  <div class=\"block\">\n    <span class=\"demonstration\">Default</span>\n    <el-image></el-image>\n  </div>\n  <div class=\"block\">\n    <span class=\"demonstration\">Custom</span>\n    <el-image>\n      <template #error>\n        <div class=\"image-slot\">\n          <i class=\"el-icon-picture-outline\"></i>\n        </div>\n      </template>\n    </el-image>\n  </div>\n</div>\n")], -1);

var _hoisted_40 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("レイジーロード(遅延ロード) ");

var _hoisted_41 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "lazy = true"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で遅延ロードを利用します。設定すると、画像はビューにスクロールするまで読み込まれます。スクロールリスナーを追加するスクロールコンテナは "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" で指定できます。未定義の場合は、オーバーフロープロパティが auto または scroll である最も近い親コンテナを指定します。")])], -1);

var _hoisted_42 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__lazy\">\n  <el-image v-for=\"url in urls\" :key=\"url\" :src=\"url\" lazy></el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        urls: [\n          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\n          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\n          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\n          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'\n        ]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const urls = ref([\n        'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',\n        'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',\n        'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',\n        'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',\n        'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',\n        'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',\n        'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg',\n      ]);\n\n      return {\n        urls,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_43 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("イメージプレビュー ");

var _hoisted_44 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("div", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "previewSrcList"), /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])(" prop を設定することで大きなイメージのプレビューを許可します。")])], -1);

var _hoisted_45 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("pre", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", {
  class: "html"
}, "<div class=\"demo-image__preview\">\n  <el-image\n    style=\"width: 100px; height: 100px\"\n    :src=\"url\"\n    :preview-src-list=\"srcList\">\n  </el-image>\n</div>\n\n<script>\n  export default {\n    data() {\n      return {\n        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',\n        srcList: [\n          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',\n          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'\n        ]\n      }\n    }\n  }\n</script>\n<!--\n<setup>\n\n  import { defineComponent, ref } from 'vue';\n\n  export default defineComponent({\n    setup() {\n      const url = ref('https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg');\n      const srcList = ref([\n        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',\n        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg',\n      ]);\n\n      return {\n        url,\n        srcList,\n      };\n    },\n  });\n\n</setup>\n-->\n")], -1);

var _hoisted_46 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Image 属性 ");

var _hoisted_47 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Attribute"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Type"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Accepted values"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Default")])], -1);

var _hoisted_48 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "alt"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ネイティブalt"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_49 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fit", -1);

var _hoisted_50 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("画像のサイズをコンテナに合わせてどのように変更するかを指定します。");

var _hoisted_51 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("object-fit");

var _hoisted_52 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("と同じ");

var _hoisted_53 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string", -1);

var _hoisted_54 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "fill / contain / cover / none / scale-down", -1);

var _hoisted_55 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-", -1);

var _hoisted_56 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "hide-on-click-modal (needs translation)"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "When enabling preview, use this flag to control whether clicking on backdrop can exit preview mode"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "true / false"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_57 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "lazy"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "遅延ロードを使用するかどうか"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_58 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "preview-src-list"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "大きな画像のプレビューを許可する"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Array"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_59 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "referrer-policy"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "ネイティブreferrerPolicy"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_60 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "src"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "image source、ネイティブと同じ"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "-")], -1);

var _hoisted_61 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "scroll-container"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "遅延ロード時にスクロールリスナーを追加するコンテナ"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "string / HTMLElement"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "The nearest parent container whose overflow property is auto or scroll")], -1);

var _hoisted_62 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "z-index"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "セットイメージプレビュー z-index"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "Number"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "2000")], -1);

var _hoisted_63 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "append-to-body"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [/*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("whether to append image itself to body. A nested parent element attribute transform should have this attribute set to "), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("code", null, "true")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "boolean"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "—"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "false")], -1);

var _hoisted_64 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Image イベント ");

var _hoisted_65 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event Name</th><th>Description</th><th>Parameters</th></tr></thead><tbody><tr><td>load</td><td>ネイティブロードと同じ</td><td>(e: Event)</td></tr><tr><td>error</td><td>ネイティブエラーと同じ</td><td>(e: Error)</td></tr></tbody></table>", 1);

var _hoisted_66 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("Image スロット ");

var _hoisted_67 = /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("thead", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Slot Name"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("th", null, "Description")])]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "placeholder"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "画像の読み込み時にトリガ")]), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [/*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "error"), /*#__PURE__*/Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, "画像の読み込み失敗した場合のトリガー")])])], -1);

var _hoisted_68 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ImageViewer 属性 ");

var _hoisted_69 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Acceptable Value</th><th>Default</th></tr></thead><tbody><tr><td>url-list</td><td>Preview link list</td><td>Array&lt;string&gt;</td><td>-</td><td>[]</td></tr><tr><td>z-index</td><td>Preview backdrop z-index</td><td>number / string</td><td>int / string&lt;int&gt;</td><td>2000</td></tr><tr><td>initial-index</td><td>The initial preview image index, less than or equal to the length of <code>url-list</code></td><td>number</td><td>int</td><td>0</td></tr><tr><td>infinite</td><td>Whether preview is infinite</td><td>boolean</td><td>true / false</td><td>true</td></tr><tr><td>hide-on-click-modal</td><td>Whether user can emit close event when clicking backdrop</td><td>boolean</td><td>true / false</td><td>false</td></tr></tbody></table>", 1);

var _hoisted_70 = /*#__PURE__*/Object(vue_esm_browser_prod["o" /* createTextVNode */])("ImageViewer イベント ");

var _hoisted_71 = /*#__PURE__*/Object(vue_esm_browser_prod["n" /* createStaticVNode */])("<table><thead><tr><th>Event name</th><th>Description</th><th>Callback parameter</th></tr></thead><tbody><tr><td>close</td><td>Emitted when clicking on <code>X</code> button or when <code>hide-on-click-modal</code> enabled clicking on backdrop</td><td>None</td></tr><tr><td>switch</td><td>When switching images</td><td><code>(val: number)</code> switching target index</td></tr></tbody></table>", 1);

function imagevue_type_template_id_5ae2ff1b_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_app_link = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-link");

  var _component_app_heading = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("app-heading");

  var _component_element_demo0 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo0");

  var _component_demo_block = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("demo-block");

  var _component_element_demo1 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo1");

  var _component_element_demo2 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo2");

  var _component_element_demo3 = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("element-demo3");

  var _component_right_nav = Object(vue_esm_browser_prod["Q" /* resolveComponent */])("right-nav");

  return Object(vue_esm_browser_prod["H" /* openBlock */])(), Object(vue_esm_browser_prod["k" /* createBlock */])("section", imagevue_type_template_id_5ae2ff1b_hoisted_1, [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "imezi",
    content: "イメージ",
    href: "#imezi",
    level: "2"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [imagevue_type_template_id_5ae2ff1b_hoisted_2, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#imezi"
      })];
    }),
    _: 1
  }), imagevue_type_template_id_5ae2ff1b_hoisted_3, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "ji-ben-dena-shii-fang",
    content: "基本的な使い方",
    href: "#ji-ben-dena-shii-fang",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [imagevue_type_template_id_5ae2ff1b_hoisted_4, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#ji-ben-dena-shii-fang"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("p", null, [imagevue_type_template_id_5ae2ff1b_hoisted_5, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [imagevue_type_template_id_5ae2ff1b_hoisted_6];
    }),
    _: 1
  }), _hoisted_7, _hoisted_8, _hoisted_9]), Object(vue_esm_browser_prod["p" /* createVNode */])("pre", _hoisted_10, [Object(vue_esm_browser_prod["p" /* createVNode */])("code", _hoisted_11, [_hoisted_12, Object(vue_esm_browser_prod["o" /* createTextVNode */])(Object(vue_esm_browser_prod["U" /* toDisplayString */])(_ctx.fit), 1), _hoisted_17]), _hoisted_32]), _hoisted_33, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "puresuhoruda",
    content: "プレースホルダ",
    href: "#puresuhoruda",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_34, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#puresuhoruda"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo0)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_36];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_35];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "rodo-shi-bai",
    content: "ロード失敗",
    href: "#rodo-shi-bai",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_37, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#rodo-shi-bai"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo1)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_39];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_38];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "reizirodo-chi-yanrodo",
    content: "レイジーロード(遅延ロード)",
    href: "#reizirodo-chi-yanrodo",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_40, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#reizirodo-chi-yanrodo"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo2)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_42];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_41];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "imezipurebiyu",
    content: "イメージプレビュー",
    href: "#imezipurebiyu",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_43, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#imezipurebiyu"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_demo_block, null, {
    source: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [Object(vue_esm_browser_prod["p" /* createVNode */])(_component_element_demo3)];
    }),
    highlight: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_45];
    }),
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_44];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "image-shu-xing",
    content: "Image 属性",
    href: "#image-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_46, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#image-shu-xing"
      })];
    }),
    _: 1
  }), Object(vue_esm_browser_prod["p" /* createVNode */])("table", null, [_hoisted_47, Object(vue_esm_browser_prod["p" /* createVNode */])("tbody", null, [_hoisted_48, Object(vue_esm_browser_prod["p" /* createVNode */])("tr", null, [_hoisted_49, Object(vue_esm_browser_prod["p" /* createVNode */])("td", null, [_hoisted_50, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_51];
    }),
    _: 1
  }), _hoisted_52]), _hoisted_53, _hoisted_54, _hoisted_55]), _hoisted_56, _hoisted_57, _hoisted_58, _hoisted_59, _hoisted_60, _hoisted_61, _hoisted_62, _hoisted_63])]), Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "image-ibento",
    content: "Image イベント",
    href: "#image-ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_64, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#image-ibento"
      })];
    }),
    _: 1
  }), _hoisted_65, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "image-surotuto",
    content: "Image スロット",
    href: "#image-surotuto",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_66, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#image-surotuto"
      })];
    }),
    _: 1
  }), _hoisted_67, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "imageviewer-shu-xing",
    content: "ImageViewer 属性",
    href: "#imageviewer-shu-xing",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_68, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#imageviewer-shu-xing"
      })];
    }),
    _: 1
  }), _hoisted_69, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_heading, {
    id: "imageviewer-ibento",
    content: "ImageViewer イベント",
    href: "#imageviewer-ibento",
    level: "3"
  }, {
    default: Object(vue_esm_browser_prod["fb" /* withCtx */])(function () {
      return [_hoisted_70, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_app_link, {
        class: "header-anchor",
        href: "#imageviewer-ibento"
      })];
    }),
    _: 1
  }), _hoisted_71, Object(vue_esm_browser_prod["p" /* createVNode */])(_component_right_nav)]);
}
// CONCATENATED MODULE: ./website/docs/jp/image.md?vue&type=template&id=5ae2ff1b

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(4);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/dist??ref--2-0!./website/md-loader!./website/docs/jp/image.md?vue&type=script&lang=ts


/* harmony default export */ var imagevue_type_script_lang_ts = ({
  name: 'component-doc',
  components: {
    "element-demo0": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createTextVNode = vue_esm_browser_prod["o" /* createTextVNode */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__placeholder"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Default", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Custom", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createTextVNode(" Loading"), /*#__PURE__*/_createVNode("span", {
        class: "dot"
      }, "...")], -1);

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image, {
          src: _ctx.src
        }, null, 8, ["src"])]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, {
          src: _ctx.src
        }, {
          placeholder: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        }, 8, ["src"])])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo1": function () {
      var _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _withCtx = vue_esm_browser_prod["fb" /* withCtx */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__error"
      };
      var _hoisted_2 = {
        class: "block"
      };

      var _hoisted_3 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Default", -1);

      var _hoisted_4 = {
        class: "block"
      };

      var _hoisted_5 = /*#__PURE__*/_createVNode("span", {
        class: "demonstration"
      }, "Custom", -1);

      var _hoisted_6 = /*#__PURE__*/_createVNode("div", {
        class: "image-slot"
      }, [/*#__PURE__*/_createVNode("i", {
        class: "el-icon-picture-outline"
      })], -1);

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode("div", _hoisted_2, [_hoisted_3, _createVNode(_component_el_image)]), _createVNode("div", _hoisted_4, [_hoisted_5, _createVNode(_component_el_image, null, {
          error: _withCtx(function () {
            return [_hoisted_6];
          }),
          _: 1
        })])])]);
      }

      var democomponentExport = {};
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo2": function () {
      var _renderList = vue_esm_browser_prod["O" /* renderList */],
          _Fragment = vue_esm_browser_prod["b" /* Fragment */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */],
          _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */];
      var _hoisted_1 = {
        class: "demo-image__lazy"
      };

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [(_openBlock(true), _createBlock(_Fragment, null, _renderList(_ctx.urls, function (url) {
          return _openBlock(), _createBlock(_component_el_image, {
            key: url,
            src: url,
            lazy: ""
          }, null, 8, ["src"]);
        }), 128))])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            urls: ['https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg', 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg', 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg', 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg', 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg', 'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg', 'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }(),
    "element-demo3": function () {
      var _resolveComponent = vue_esm_browser_prod["Q" /* resolveComponent */],
          _createVNode = vue_esm_browser_prod["p" /* createVNode */],
          _openBlock = vue_esm_browser_prod["H" /* openBlock */],
          _createBlock = vue_esm_browser_prod["k" /* createBlock */];
      var _hoisted_1 = {
        class: "demo-image__preview"
      };

      function render(_ctx, _cache) {
        var _component_el_image = _resolveComponent("el-image");

        return _openBlock(), _createBlock("div", null, [_createVNode("div", _hoisted_1, [_createVNode(_component_el_image, {
          style: {
            "width": "100px",
            "height": "100px"
          },
          src: _ctx.url,
          "preview-src-list": _ctx.srcList
        }, null, 8, ["src", "preview-src-list"])])]);
      }

      var democomponentExport = {
        data: function data() {
          return {
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            srcList: ['https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg', 'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg']
          };
        }
      };
      return extends_default()({
        render: render
      }, democomponentExport);
    }()
  }
});
// CONCATENATED MODULE: ./website/docs/jp/image.md?vue&type=script&lang=ts
 
// CONCATENATED MODULE: ./website/docs/jp/image.md



imagevue_type_script_lang_ts.render = imagevue_type_template_id_5ae2ff1b_render

/* harmony default export */ var jp_image = __webpack_exports__["default"] = (imagevue_type_script_lang_ts);

/***/ })

}]);